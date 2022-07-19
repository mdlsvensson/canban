<script lang="ts">
	import Modal from '$lib/common/Modal.svelte';
	import Login from '$lib/auth/Login.svelte';

	let isOpen = false;
</script>

<button
	type="button"
	class="rounded-md flex gap-2 items-center bg-bg4 hover:bg-fg4 text-bg_h pt-4 py-3 px-4 border-b-4 border-fg4 hover:border-fg2 leading-3"
	class:active-sign-in={isOpen}
	on:click={() => {
		isOpen = !isOpen;
	}}
>
	Sign in
</button>

<Modal bind:isOpen>
	<Login />
</Modal>

<style>
	.active-sign-in {
		@apply bg-fg4;
		@apply border-fg2;
	}
</style>
