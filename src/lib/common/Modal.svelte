<script lang="ts">
	export let isOpen = false;

	const keyPress = (event) => {
		if (event.key == 'Escape') close();
	};

	export const openModal = () => {
		console.log('test');
		if (isOpen) return;
		isOpen = !isOpen;
	};

	const closeModal = () => {
		return;
	};

	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') isOpen = false;
	};
</script>

<div
	class="z-50 absolute h-[10rem] w-[20rem] bg-gray-300 top-[5rem] right-[1rem] rounded-lg content-none after:absolute after:top-0 after:right-6 after:w-14 after:h-14 after:rotate-45 after:bg-gray-300 animate-fade"
	class:invisible={!isOpen}
>
	<div on:click|stopPropagation={() => {}}>
		<!-- <svg on:click={close} viewBox="0 0 12 12">
			<circle cx="6" cy="6" r="6" />
			<line x1="3" y1="3" x2="9" y2="9" />
			<line x1="9" y1="3" x2="3" y2="9" />
		</svg> -->
		<div>
			<slot />
		</div>
	</div>
</div>
