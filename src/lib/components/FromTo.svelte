<script lang="ts">
	export let from: string;
	export let to: string;
	export let answer: string;
</script>

{#if answer !== '' && !answer.toString().includes('Only')}
	<p class="flex gap-12">
		<span class="text-blue-500"> {from} </span> ➡
		<span class="text-red-400 font-extrabold">{to}</span>
	</p>
{/if}
