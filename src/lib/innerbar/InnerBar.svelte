<script lang="ts">
	import Search from './Search.svelte';
</script>

<div
	class="grow h-16 flex justify-center items-center justify-between border-r border-b border-black border-solid p-6"
>
	<div class="flex gap-2">
		<strong><h1>Project Name</h1></strong>
		<h3>Board</h3>
	</div>
	<div class="flex gap-2">
		<Search />
	</div>
</div>
