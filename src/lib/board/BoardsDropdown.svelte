<script lang="ts">
	import { clickOutside } from '$lib/util/clickOutside';

	export let isDropdownOpen = false;
	export let currentBoard: string;
	export let boards: Array<String>;
</script>

<div
	class="z-9 w-[20rem] bg-bg rounded-b-md rounded-r-md shadow-b absolute"
	class:hidden={!isDropdownOpen}
	use:clickOutside
	on:click_outside
>
	<ul class="py-1 text-sm">
		<li>
			<a
				href="/"
				class="pl-6 px-4 py-3 hover:bg-bg flex gap-2 items-center rounded-tr-md z-10 bg-bg board-select-item"
				>Dashboard</a
			>
		</li>
		<li>
			<a
				href="/"
				class="pl-6 px-4 py-3 hover:bg-bg flex gap-2 items-center rounded-tr-md z-10 bg-bg board-select-item"
				>Dashboard</a
			>
		</li>
		<li>
			<a
				href="/"
				class="pl-6 px-4 py-3 hover:bg-bg flex gap-2 items-center rounded-tr-md z-10 bg-bg board-select-item"
				>Dashboard</a
			>
		</li>
		<li>
			<a
				href="/"
				class="pl-6 px-4 py-3 hover:bg-bg flex gap-2 items-center rounded-tr-md z-10 bg-bg board-select-item"
				>Dashboard</a
			>
		</li>
	</ul>
</div>
