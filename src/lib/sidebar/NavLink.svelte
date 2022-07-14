<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
</script>

<a
	sveltekit:prefetch
	{href}
	class="px-4 py-3 hover:bg-bg1 rounded-md flex gap-2 items-center"
	class:active-nav={$page.url.pathname === href}
	class:font-bold={$page.url.pathname === href}
>
	<slot />
</a>
