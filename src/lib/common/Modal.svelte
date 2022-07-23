<script lang="ts">
	import { clickOutside } from '$lib/util/clickOutside';

	export let isOpen = false;

	const onKeyDown = (event: KeyboardEvent) => {
		if (event.key == 'Escape' && isOpen) {
			isOpen = !isOpen;
		}
	};

	export const openModal = () => {
		if (isOpen) return;
		isOpen = !isOpen;
	};

	const handleClickOutside = () => {
		if (isOpen) {
			isOpen = !isOpen;
		}
	};
</script>

<div
	class="z-50 absolute w-[20rem] bg-bg top-[5rem] right-[1rem] rounded-md content-none shadow after:absolute after:top-0 after:right-6 after:w-14 after:h-14 after:rotate-45 after:bg-bg animate-fade after:z-[-1]"
	class:invisible={!isOpen}
	on:click|stopPropagation={() => {}}
	use:clickOutside
	on:click_outside={handleClickOutside}
>
	<slot />
</div>

<svelte:window on:keydown={onKeyDown} />
