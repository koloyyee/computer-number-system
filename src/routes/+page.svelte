<script lang="ts">
	import FromBinarySteps from '$lib/components/conversion/FromBinarySteps.svelte';
	import FromDecimalSteps from '$lib/components/conversion/FromDecimalSteps.svelte';
	import FromHexSteps from '$lib/components/conversion/FromHexSteps.svelte';
	import FromOctalSteps from '$lib/components/conversion/FromOctalSteps.svelte';
	import ToDecimalSteps from '$lib/components/conversion/ToDecimalSteps.svelte';
	import { fromBinary, fromDecimal, fromHex, toDecimal } from '$lib/utils/conversion';
	import { fromOctal } from '$lib/utils/conversion/octal';

	import '../app.css';

	let selectedFrom: { name: string; base: number } = { name: '', base: 0 };
	$: selectedTo = { name: '', base: 0 };

	let from = '';
	let to = '';

	let result;

	const options = [
		{ name: 'Binary', base: 2 },
		{ name: 'Octal', base: 8 },
		{ name: 'Decimal', base: 10 },
		{ name: 'Hexadecimal', base: 16 }
	];

	function convert() {
		if (selectedTo.base === 10) {
			result = toDecimal(from, selectedFrom.base);
			to = result.answer;
			return;
		} else if (selectedFrom.base === 10) {
			result = fromDecimal(from, selectedTo.base);
			to = result.answer;
			return;
		} else if (selectedFrom.base === 2) {
			result = fromBinary(from, selectedTo.base);
			to = result.answer;
			return;
		} else if (selectedFrom.base === 8) {
			result = fromOctal(from, selectedTo.base);
			to = result.answer;
			return;
		} else if (selectedFrom.base === 16) {
			result = fromHex(from, selectedTo.base);
			to = result.answer;
			return;
		}
	}

	$: if (selectedTo) {
		convert();
	}
</script>

<h1 class="text-4xl">
	{#if selectedFrom.name === '' || selectedTo.name === ''}
		Pick a base
	{:else}
		Convert from {selectedFrom.name} to {selectedTo.name}
	{/if}
</h1>
<form>
	<section>
		<p>From:</p>
		<select name="from" bind:value={selectedFrom} class="select select-bordered w-full max-w-xs">
			{#each options as option}
				<option value={option}> {option.name} </option>
			{/each}
		</select>
		<input
			type="text"
			bind:value={from}
			on:change={convert}
			class="input input-bordered w-full max-w-xs"
		/>
	</section>

	<section>
		<p>to:</p>
		<select name="to" bind:value={selectedTo} class="select select-bordered w-full max-w-xs">
			{#each options as option}
				<option value={option}> {option.name} </option>
			{/each}
		</select>
		<input disabled type="text" bind:value={to} class="input input-bordered w-full max-w-xs" />
	</section>
</form>
<section id="steps">
	{#if result}
		{#each result.steps as step, index}
			{#if selectedTo.base === 10}
				<ToDecimalSteps {step} base={selectedFrom.base} />
				{#if index !== result.steps.length - 1}
					<p>+</p>
				{:else}
					<p>= {result.answer}</p>
				{/if}
			{:else if selectedFrom.base === 10}
				<FromDecimalSteps {step} base={selectedTo.base} />
			{:else if selectedFrom.base === 2}
				<FromBinarySteps {step} result={result.answer[index]} base={selectedTo.base} />
			{:else if selectedFrom.base === 8}
				<FromOctalSteps {step} result={result.answer[index]} base={selectedTo.base} />
			{:else if selectedFrom.base === 16}
				<FromHexSteps {step} result={result.answer[index]} base={selectedTo.base} />
			{/if}
		{/each}
	{/if}
</section>

<style lang="postcss">
</style>
