<script lang="ts">
	import CodeModal from "./CodeModal.svelte"

	export let name: string
	export let code: string

	let showModal = false
</script>

{#if showModal}
	<CodeModal {name} {code} bind:showModal />
{/if}

<button
	on:click={() => {
		showModal = !showModal
	}}
	class="flex items-center justify-center w-full gap-2 p-3 mt-6 font-semibold border bg-ctaGreen border-greenStroke rounded-xl tex-xl"
>
	<iconify-icon icon="material-symbols:qr-code-rounded" class="text-2xl" />
	<p>Visa QR</p>
</button>
