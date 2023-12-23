<script lang="ts">
	import CardWrapper from '$lib/components/CardWrapper.svelte';
	import FromTo from '$lib/components/FromTo.svelte';
	import FromBinarySteps from '$lib/components/conversion/FromBinarySteps.svelte';
	import FromDecimalSteps from '$lib/components/conversion/FromDecimalSteps.svelte';
	import FromHexSteps from '$lib/components/conversion/FromHexSteps.svelte';
	import FromOctalSteps from '$lib/components/conversion/FromOctalSteps.svelte';
	import ToDecimalSteps from '$lib/components/conversion/ToDecimalSteps.svelte';
	import { fromBinary, fromDecimal, fromHex, toDecimal } from '$lib/utils/conversion';
	import { fromOctal } from '$lib/utils/conversion/octal';
	import { BASE } from '$lib/utils/value.maps';

	import '../app.css';

	let selectedFrom: { name: string; base: number } = { name: '', base: 0 };
	let selectedTo = { name: '', base: 0 };

	let from = '';
	let to = '';

	let result: any;

	const options = [
		{ name: 'Binary', base: 2 },
		{ name: 'Octal', base: 8 },
		{ name: 'Decimal', base: 10 },
		{ name: 'Hexadecimal', base: 16 }
	];

	function convert() {
		if (selectedTo.base === BASE.DECIMAL) {
			result = toDecimal(from, selectedFrom.base);
			to = result.answer;
			return;
		} else if (selectedFrom.base === BASE.DECIMAL) {
			result = fromDecimal(from, selectedTo.base);
			to = result.answer;
			return;
		} else if (selectedFrom.base === BASE.BINARY) {
			result = fromBinary(from, selectedTo.base);
			to = result.answer;
			return;
		} else if (selectedFrom.base === BASE.OCTAL) {
			result = fromOctal(from, selectedTo.base);
			to = result.answer;
			return;
		} else if (selectedFrom.base === BASE.HEXADECIMAL) {
			result = fromHex(from, selectedTo.base);
			to = result.answer;
			return;
		}
	}

	$: if (selectedFrom || selectedTo) {
		convert();
	}
</script>

<main class="flex flex-col justify-center items-center">
	<h1 class="text-4xl w-max text-center">
		{#if selectedFrom.name === '' || selectedTo.name === ''}
			Pick a base
		{:else}
			Convert from {selectedFrom.name} to {selectedTo.name}
		{/if}
	</h1>
	<section class="">
		<div class="flex gap-5">
			<div class="from flex flex-col w-36 lg:w-72">
				<p>From:</p>
				<select name="from" bind:value={selectedFrom} class="select select-primary w-full max-w-xs">
					{#each options as option}
						<option value={option}> {option.name} </option>
					{/each}
				</select>
			</div>
			<div class="to flex flex-col w-36 lg:w-72">
				<p>To:</p>
				<select name="to" bind:value={selectedTo} class="select select-secondary w-full max-w-xs">
					{#each options as option}
						<option value={option}> {option.name} </option>
					{/each}
				</select>
			</div>
		</div>
		<div class="inputs flex gap-5">
			<div class="target flex flex-col lg:w-72">
				<p>Input:</p>
				<input
					name="target"
					type="text"
					bind:value={from}
					on:change={convert}
					class="input input-bordered w-full max-w-xs"
				/>
			</div>
			<div class="answer flex flex-col lg:w-72">
				<p>Answer:</p>
				<input
					disabled
					name="answer"
					type="text"
					bind:value={to}
					class="input input-bordered w-full max-w-xs"
				/>
			</div>
		</div>
		<!-- <button class="button" on:click={convert}>Convert</button> -->
	</section>

	<section id="steps">
		{#if result}
			<CardWrapper fromBaseName={selectedFrom.name} toBaseName={selectedTo.name}>
				<FromTo {from} {to} answer={result.answer} />

				{#each result.steps as step, index}
					{#if selectedTo.base === BASE.DECIMAL}
						<ToDecimalSteps {step} base={selectedFrom.base} />
						{#if index !== result.steps.length - 1}
							<p>+</p>
						{/if}
					{:else if selectedFrom.base === BASE.DECIMAL}
						<FromDecimalSteps {step} {result} base={selectedTo.base} />
					{:else if selectedFrom.base === BASE.BINARY}
						<FromBinarySteps {step} result={result.answer[index]} base={selectedTo.base} />
					{:else if selectedFrom.base === BASE.OCTAL}
						<FromOctalSteps {step} result={result.answer[index]} base={selectedTo.base} />
					{:else if selectedFrom.base === BASE.HEXADECIMAL}
						<FromHexSteps {step} result={result.answer[index]} base={selectedTo.base} />
					{/if}
				{/each}
				<FromTo {from} {to} answer={result.answer} />
			</CardWrapper>
		{/if}
	</section>
</main>

<style lang="postcss">
</style>
