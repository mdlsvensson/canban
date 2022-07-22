<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { clickOutside } from '$lib/util/clickOutside';

	export let isDropdownOpen = false;
	let loading = false;

	const signOut = async () => {
		try {
			loading = true;
			let { error } = await supabase.auth.signOut();
			if (error) throw error;
		} catch (error) {
			alert(error.message);
		} finally {
			loading = false;
		}
	};
</script>

<div
	class:hidden={!isDropdownOpen}
	class="absolute right-[.5rem] top-[4.5rem] z-50 rounded shadow bg-bg"
	use:clickOutside
	on:click_outside
>
	<div class="px-4 py-3">
		<span class="block text-sm">mdlsvensson</span>
		<span class="block text-sm font-medium text-gray truncate">wilmer.lindau@gmail.com</span>
	</div>
	<ul class="py-1" aria-labelledby="dropdown">
		<li>
			<button on:click={signOut} class="block px-4 py-2 text-sm hover:scale-105 transition"
				>Sign Out</button
			>
		</li>
	</ul>
</div>
