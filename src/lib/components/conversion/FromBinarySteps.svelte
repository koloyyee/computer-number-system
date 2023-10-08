<script lang="ts">
	export let step: string[][];
	export let base;

	console.log(step);
</script>

<p class="py-8">{step}</p>
{#each step as binary, index}
	{#if index === 0}
		4 x {binary}
	{:else if index === 1}
		+ 2 x {binary}
	{:else}
		+ 1 x {binary}
	{/if}
{/each}
