<script lang="ts">
	import { hexMap, octMap } from '$lib/utils/value.maps';

	export let step: string;
	export let base: number;

	export let result: string;

	$: baseMap = base == 8 ? octMap : hexMap;
</script>

<section class="flex justify-evenly w-96">
	<div class="binary-arr">
		{#if base === 8}
			[ 4 , 2 , 1 ]
		{:else if base === 16}
			[ 8 , 4 , 2 , 1 ]
		{/if}
		<p class="pb-2 mt-0">
			[
			{#each step as s, index}
				<span class={s === '1' ? 'text-blue-500 font-extrabold pl-1' : 'text-gray-400 pl-1'}
					>{s}
					{#if index !== step.length - 1}
						,
					{/if}
				</span>
			{/each}
			]
		</p>
	</div>
	<div class="steps flex flex-col">
		{#each step as binary, index}
			{#each baseMap.entries() as [exponent, value]}
				{#if index === exponent}
					<div class="flex gap-2">
						{value} x
						<p>
							<span class={binary === '1' ? 'text-blue-500 font-extrabold' : 'text-gray-400'}>
								{binary}
							</span>
							{#if index !== octMap.size}
								+
							{/if}
						</p>
					</div>
				{/if}
			{/each}
		{/each}
		<p class="text-red-500 font-bold"><span class="text-gray-500">=</span> {result}</p>
	</div>
</section>
