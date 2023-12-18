<script lang="ts">
	import FromBinarySteps from './FromBinarySteps.svelte';

	type Hex2Oct = {
		stepBase: number;
		element: string;
		binary: string[][];
	};

	export let step: Hex2Oct[];
	export let base: number;

	export let result: string;
</script>

{#each step as { stepBase, element, binary }}
	<FromBinarySteps step={binary} base={stepBase} result={element} />
{/each}
