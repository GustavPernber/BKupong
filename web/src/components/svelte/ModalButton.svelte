<script lang="ts">
	import CodeModal from "./CodeModal.svelte"
	import Icon from "./Icon.svelte"

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
	<Icon name="qrCode" className=" w-7 text-white" />
	<p>Visa QR</p>
</button>
