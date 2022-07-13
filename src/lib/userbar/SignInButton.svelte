<script lang="ts">
	import Modal from '$lib/common/Modal.svelte';
	import Login from '$lib/auth/Login.svelte';

	let isOpen = false;
</script>

<button
	type="button"
	class="relative bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
	on:click={() => {
		isOpen = !isOpen;
	}}
>
	Sign in
</button>

<Modal bind:isOpen>
	<Login />
</Modal>
