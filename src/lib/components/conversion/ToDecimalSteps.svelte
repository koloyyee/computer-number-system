<script lang="ts">
	export let step: any;
	export let base: number;
</script>

<p>
	<span class="font-extrabold">{base} </span> ^ {step.power} *
	<span class={step.element !== '0' ? 'text-blue-500 font-bold' : 'text-gray-500 font-bold'}
		>{step.element}</span
	>
	= <span class={step.value !== 0 ? 'text-red-500' : ''}>{step.value}</span>
</p>
