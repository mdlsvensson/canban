<script lang="ts">
	import BoardSelect from '$lib/board/BoardSelect.svelte';
	import NewBoardButton from '$lib/board/NewBoardButton.svelte';
	import BoardsDropdown from '$lib/board/BoardsDropdown.svelte';
	import Button from '$lib/common/Button.svelte';

	let currentBoard = 'base_reality';
	let isDropdownOpen = false;

	const handleDropdownClick = () => {
		isDropdownOpen = !isDropdownOpen;
		console.log(isDropdownOpen);
	};

	const handleClickOutside = () => {
		if (isDropdownOpen) {
			isDropdownOpen = !isDropdownOpen;
		}
	};
</script>

{#if currentBoard}
	<div class="flex flex-col h-[calc(100vh_-_64px)] gap-6 overflow-auto">
		<div>
			<BoardSelect {currentBoard} on:click={handleDropdownClick} {isDropdownOpen} />
			<BoardsDropdown {isDropdownOpen} on:click_outside={handleClickOutside} {currentBoard} />
		</div>

		<div class="flex">
			<div class="bg-bg h-[2000px] min-w-[30rem] rounded-t-3xl p-6">
				<div class="w-full flex place-content-between items-center">
					<strong>
						<h4 class="text-xl">No Status</h4>
					</strong>
					<Button icon="add" text="New Item" />
				</div>
			</div>
		</div>
	</div>
{:else}
	<NewBoardButton />
{/if}
