<script lang="ts">
	import icons from '$lib/util/icons';

	export let name: string;
	export let width = '1rem';
	export let height = '1rem';
	export let focusable = false;

	let icon = icons.find((e) => e.name === name);
</script>

<svg class={$$props.class} {focusable} {width} {height} viewBox="0 0 {icon.box} {icon.box}"
	>{@html icon.svg}</svg
>
