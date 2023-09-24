<script lang="ts">
	export let step : any;
	export let base: number;
	console.log({ step, base });
</script>

<p>{base}^{step.power} * {step.element} = {step.value}</p>
