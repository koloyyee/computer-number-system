<script lang="ts">
	import FromDecimalSteps from '$lib/components/conversion/FromDecimalSteps.svelte';
	import ToDecimalSteps from '$lib/components/conversion/ToDecimalSteps.svelte';
	import { fromDecimal, toDecimal } from './conversion';

	let selectedFrom: { name: string; base: number } = { name: '', base: 0 };
	let selectedTo: { name: string; base: number } = { name: '', base: 0 };

	let from: string = '';
	let to: number | string = '';

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
		} else if (selectedFrom.base === 10) {
			console.log(selectedFrom.base, 'base');
			result = fromDecimal(from, selectedTo.base);
			to = result.answer;
		}
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
		<label for="from"> From: </label>
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
		<label for="to"> to: </label>
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
			{/if}
		{/each}
	{/if}
</section>

<style lang="postcss">
</style>
