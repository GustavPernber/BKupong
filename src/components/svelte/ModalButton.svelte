<script lang="ts">
	import CodeModal from "./CodeModal.svelte"
	import Icon from "./Icon.svelte"

	export let name: string
	export let codeBlob: string

	let showModal = false
</script>

<svelte:head>
	<link rel="preload" as="image" href={codeBlob} />
</svelte:head>

{#if showModal}
	<CodeModal {name} {codeBlob} bind:showModal />
{/if}

<button
	on:click={() => {
		showModal = !showModal
	}}
	class="flex items-center justify-center w-full gap-2 p-2 mt-6 font-semibold border bg-ctaGreen border-greenStroke rounded-xl tex-[1rem]"
>
	<Icon name="qrCode" className=" w-7 text-white" />
	<p>Visa QR</p>
</button>
