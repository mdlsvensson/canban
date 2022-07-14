<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { user } from '$lib/stores';

	let loading = false;

	async function signOut() {
		try {
			loading = true;
			let { error } = await supabase.auth.signOut();
			if (error) throw error;
		} catch (error) {
			alert(error.message);
		} finally {
			loading = false;
		}
	}
</script>

<div class="z-50 rounded shadow bg-gray-700 hidden">
	<div class="px-4 py-3">
		<span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
		<span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400"
			>name@flowbite.com</span
		>
	</div>
	<ul class="py-1" aria-labelledby="dropdown">
		<li>
			<a
				href="#"
				class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
				>Dashboard</a
			>
		</li>
		<li>
			<a
				href="#"
				class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
				>Settings</a
			>
		</li>
		<li>
			<a
				href="#"
				class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
				>Earnings</a
			>
		</li>
		<li>
			<button on:click={signOut} disabled={loading}> Sign Out </button>
		</li>
	</ul>
</div>
