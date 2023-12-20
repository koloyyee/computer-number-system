<script lang="ts">
	export let fromBaseName: string;
	export let toBaseName: string;
</script>

<div class="card lg:card-side bg-base-100 shadow-xl mt-5">
	<div class="card-body min-w-[18rem] lg:min-w-[36rem]">
		<h2 class="card-title">Steps</h2>
		<section class="flex justify-evenly">
			<div class="badge badge-neutral">{fromBaseName}</div>
			<div>➡</div>
			<div class="badge badge-primary">{toBaseName}</div>
		</section>
		<div class="card-actions justify-end items-center flex flex-col">
			<slot />
		</div>
	</div>
</div>
