<script lang="ts">
	import icons from '$lib/util/icons';
	import Icon from './Icon.svelte';

	export let icon: string;
	export let text: string;
</script>

<button class="flex gap-4 p-4 bg-bg4 rounded-lg hover:bg-fg4 text-bg_h">
	{#if icon}
		<Icon name={icon} height="1.2rem" width="1.2rem" />
	{/if}
	{text}
</button>
