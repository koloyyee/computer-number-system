<script lang="ts">
	import FromBinarySteps from './FromBinarySteps.svelte';

	type Oct2Hex = {
		stepBase: number;
		element: string;
		binary: string[][];
	};

	export let step: Oct2Hex[];
	export let base: number;

	export let result: string;
</script>

{#each step as { stepBase, element, binary }}
	<FromBinarySteps step={binary} base={stepBase} result={element} />
{/each}
