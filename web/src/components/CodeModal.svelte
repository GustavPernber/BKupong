<script lang="ts">
	import { fade } from "svelte/transition"

	export let name: string
	export let code: string
</script>

<sectio
	transition:fade
	class="absolute top-0 left-0 grid w-screen h-screen px-5 backdrop-blur-sm bg-slate-900/20 place-items-center"
>
	<div class="flex flex-col items-center justify-center w-full border bg-greyBlue border-blueStroke rounded-xl">
		<span>{name}</span>
		<div>
			<img src={`qr-${code}.png`} alt="${code}" />
		</div>

		<button
			class="flex items-center justify-center w-full gap-2 p-3 font-semibold border bg-ctaGreen border-greenStroke rounded-xl tex-xl"
		>
			Stäng
		</button>
	</div>
</sectio>
