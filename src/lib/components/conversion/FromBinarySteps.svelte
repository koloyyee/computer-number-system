<script lang="ts">
	export let step: string[][];
	export let base;

	export let result: string;
</script>

<p class="py-8">{step}</p>
{#each step as binary, index}
	{#if index === 0}
		4 x <span class="text-blue-500 font-extrabold"> {binary}</span>
	{:else if index === 1}
		+ 2 x <span class="text-blue-500 font-extrabold"> {binary}</span>
	{:else}
		+ 1 x <span class="text-blue-500 font-extrabold"> {binary}</span>
	{/if}
{/each}
= <span class="text-red-500 font-extrabold">{result}</span>
