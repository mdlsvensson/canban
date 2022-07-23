<script lang="ts">
	export let currentBoard: string;
	export let isDropdownOpen = false;
</script>

<button
	class="pl-6 px-4 py-3 hover:bg-bg flex gap-2 items-center rounded-tr-md z-10"
	on:click
	class:bg-bg={isDropdownOpen}
	class:rounded-r={!isDropdownOpen}
	class:rounded-b={!isDropdownOpen}
	><h2 class="pt-[2px]">{currentBoard}</h2>
	<svg
		class="w-6 h-6"
		clip-rule="evenodd"
		fill-rule="evenodd"
		stroke-linejoin="round"
		stroke-miterlimit="2"
		viewBox="0 0 24 24"
		><path
			d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"
		/></svg
	>
</button>
