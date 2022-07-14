<script lang="ts">
	import Search from './Search.svelte';
</script>

<div
	class="grow h-16 flex items-center justify-between border-r border-b border-bg2 border-solid p-6"
>
	<div class="flex gap-4 items-baseline">
		<strong><h1 class="text-xl">Project Name</h1></strong>
		<h3 class="text-lg">Board</h3>
	</div>
	<div class="flex gap-2 ">
		<Search />
	</div>
</div>
