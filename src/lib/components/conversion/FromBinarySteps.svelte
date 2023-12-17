<script lang="ts">
	import { hexMap, octMap } from '$lib/utils/value.maps';

	export let step: string[][];
	export let base: number;

	export let result: string;

	$: baseMap = base == 8 ? octMap : hexMap;
</script>

<p class="py-8">{step}</p>
{#each step as binary, index}
	{#each baseMap.entries() as [exponent, value]}
		{#if index === exponent}
			{value} x <span class="text-blue-500 font-extrabold"> {binary}</span>
			{#if index !== octMap.size}
				+
			{/if}
			<br />
		{/if}
	{/each}
{/each}
= <span class="text-red-500 font-extrabold">{result}</span>
