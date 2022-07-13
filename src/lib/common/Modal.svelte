<script lang="ts">
	export let isOpen = false;

	const onKeyDown = (event: KeyboardEvent) => {
		if (event.key == 'Escape' && isOpen) {
			isOpen = !isOpen;
		}
	};

	export const openModal = () => {
		console.log('test');
		if (isOpen) return;
		isOpen = !isOpen;
	};
</script>

<div
	class="z-50 absolute w-[20rem] bg-gray-300 top-[5rem] right-[1rem] rounded-lg content-none after:absolute after:top-0 after:right-6 after:w-14 after:h-14 after:rotate-45 after:bg-gray-300 animate-fade after:z-[-1]"
	class:invisible={!isOpen}
	on:click|stopPropagation={() => {}}
>
	<slot />
</div>

<svelte:window on:keydown={onKeyDown} />
