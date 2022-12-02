<script lang="ts">
	import { fade } from "svelte/transition"

	export let name: string
	export let code: string
	export let showModal: boolean
</script>

<sectio
	transition:fade={{ duration: 150 }}
	class="fixed top-0 left-0 grid w-screen h-screen px-5 backdrop-blur-sm bg-slate-900/20 place-items-center"
>
	<div
		class="flex flex-col items-center justify-center w-full gap-5 px-5 py-4 border bg-greyBlue border-blueStroke rounded-xl"
	>
		<span class="text-gray-400 ">{name}</span>
		<div class="w-full overflow-hidden rounded-xl">
			<img class="w-full" src={`qr-${code}.png`} alt="${code}" />
		</div>

		<button
			on:click={() => {
				showModal = !showModal
			}}
			class="flex items-center justify-center w-full gap-2 p-3 mt-3 font-semibold border bg-ctaGreen border-greenStroke rounded-xl tex-xl"
		>
			Stäng
		</button>
	</div>
</sectio>
