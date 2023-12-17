<script lang="ts">
	import { hexMap, octMap } from '$lib/utils/value.maps';
	import FromBinarySteps from './FromBinarySteps.svelte';

	export let step: string[][];
	export let base: number;

	export let result: string;

	$: baseMap = base == 8 ? octMap : hexMap;
</script>

{#each step as { stepBase, element, binary }}
	<!-- oct to bin -->
	<FromBinarySteps step={binary} base={stepBase} result={element} />
{/each}
