<script lang="ts">
	import NavLink from './NavLink.svelte';
	import Icon from '$lib/common/Icon.svelte';
</script>

<div class="h-full min-w-[12rem] flex flex-col p-4 gap-2 border-r border-bg2">
	<NavLink href="/">
		<div>
			<Icon name="board" height="1.5rem" width="1.5rem" />
		</div>
		<p class="pt-[4px]">Board</p>
	</NavLink>
	<NavLink href="/profile">
		<div>
			<Icon name="settings" height="1.4rem" width="1.4rem" />
		</div>
		<p class="pt-[4px]">Settings</p>
	</NavLink>
</div>
