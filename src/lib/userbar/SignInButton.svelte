<script lang="ts">
	import Modal from '$lib/common/Modal.svelte';
	import Login from '$lib/auth/Login.svelte';

	let isOpen = false;
</script>

<button
	type="button"
	class="px-4 py-3 hover:bg-bg1 rounded-md flex gap-2 items-center"
	class:active-nav={isOpen}
	on:click={() => {
		isOpen = !isOpen;
	}}
>
	Sign in
</button>

<Modal bind:isOpen>
	<Login />
</Modal>
