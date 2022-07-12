<script lang="ts">
	import { page } from '$app/stores';

	export let project: string = 'test';

	function setUrl() {
		$page.url.pathname = project;
	}
</script>

<button
	class="w-8 h-8 bg-white rounded-xl focus:outline-none hover:scale-105"
	class:active={$page.url.pathname === project}
	on:click={setUrl}
/>

<style>
	.active {
		@apply ring-2;
		@apply ring-offset-2;
		@apply ring-offset-gray-600;
		@apply ring-white;
	}
</style>
