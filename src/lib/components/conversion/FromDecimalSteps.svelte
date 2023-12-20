<script lang="ts">
	export let step: any;
	export let base: number;
	export let result: number;
</script>

<p>{step.prev} / {base} = {step.whole} R <span class="text-red-400">{step.reminder}</span></p>
