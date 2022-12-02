<script>
	import { fade } from "svelte/transition"
</script>

<div
	transition:fade
	class="absolute top-0 left-0 grid w-screen h-screen backdrop-blur-sm bg-slate-900/20 place-items-center"
>
	<div>content</div>
</div>
