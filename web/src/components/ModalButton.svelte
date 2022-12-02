<script>
	import CodeModal from "./CodeModal.svelte"

	let showModal = true
</script>

{#if showModal}
	<CodeModal />
{/if}

<button
	on:click={() => {
		showModal = !showModal
	}}
	class="flex items-center justify-center w-full p-3 mt-6 font-semibold border bg-ctaGreen border-greenStroke rounded-xl tex-xl gap-2"
>
	<iconify-icon icon="material-symbols:qr-code-rounded" class="text-2xl" />
	<p>Visa QR</p>
</button>
