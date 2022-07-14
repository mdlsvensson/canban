<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { user } from '$lib/stores';
	import Card from '$lib/common/Card.svelte';

	let loading = true;
	let username = null;
	let website = null;
	let avatar_url = null;

	const getProfile = async () => {
		try {
			loading = true;
			const user = supabase.auth.user();

			let { data, error, status } = await supabase
				.from('profiles')
				.select(`username, website, avatar_url`)
				.eq('id', user.id)
				.single();

			if (error && status !== 406) throw error;

			if (data) {
				username = data.username;
				website = data.website;
				avatar_url = data.avatar_url;
			}
		} catch (error) {
			alert(error.message);
		} finally {
			loading = false;
		}
	};

	async function updateProfile() {
		try {
			loading = true;
			const user = supabase.auth.user();

			const updates = {
				id: user.id,
				username,
				website,
				avatar_url,
				updated_at: new Date()
			};

			let { error } = await supabase.from('profiles').upsert(updates, {
				returning: 'minimal' // Don't return the value after inserting
			});

			if (error) throw error;
		} catch (error) {
			alert(error.message);
		} finally {
			loading = false;
		}
	}
</script>

<form use:getProfile on:submit|preventDefault={updateProfile} class="p-4">
	<Card>
		<div class="flex flex-col max-w-[20rem] gap-8">
			<div class="flex flex-col gap-4">
				<div class="flex flex-col">
					<label for="email" class="pl-1">Email</label>
					<input
						type="text"
						value={$user.email}
						disabled
						class="appearance-none rounded-md px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm shadow"
					/>
				</div>

				<div class="flex flex-col">
					<label for="username" class="pl-1">Username</label>
					<input
						id="username"
						type="text"
						bind:value={username}
						class="appearance-none rounded-md px-3 py-2 border border-gray-400  placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm shadow"
					/>
				</div>

				<div class="flex flex-col">
					<label for="website" class="pl-1">Website</label>
					<input
						id="website"
						type="website"
						bind:value={website}
						class="appearance-none rounded-md px-3 py-2 border border-gray-400  placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm shadow"
					/>
				</div>
			</div>

			<input
				type="submit"
				value={loading ? 'Loading ...' : 'Update'}
				disabled={loading}
				class="relative bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-[6rem] self-center"
			/>
		</div>
	</Card>
</form>
