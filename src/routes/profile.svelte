<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { user } from '$lib/stores';
	import Card from '$lib/common/Card.svelte';
	import Login from '$lib/auth/Login.svelte';

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

	const updateProfile = async () => {
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
	};
</script>

{#if $user}
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
							class="p-2 pl-4 w-full sm:text-sm text-fg4 bg-bg2 rounded-lg border border-bg3 focus:outline-none focus:border-fg4 shadow aling-middle pt-3"
						/>
					</div>

					<div class="flex flex-col">
						<label for="username" class="pl-1">Username</label>
						<input
							id="username"
							type="text"
							bind:value={username}
							class="p-2 pl-4 w-full sm:text-sm text-fg1 bg-bg2 rounded-lg border border-bg3 focus:outline-none focus:border-fg4 shadow aling-middle pt-3"
						/>
					</div>

					<div class="flex flex-col">
						<label for="website" class="pl-1">Website</label>
						<input
							id="website"
							type="website"
							bind:value={website}
							class="p-2 pl-4 w-full sm:text-sm text-fg1 bg-bg2 rounded-lg border border-bg3 focus:outline-none focus:border-fg4 shadow aling-middle pt-3"
						/>
					</div>
				</div>

				<button
					type="submit"
					disabled={loading}
					class:hover:bg-bg1={!loading}
					class="py-3 rounded-md flex gap-2 items-center border border-fg4 leading-[1.25rem] pt-4 justify-center w-1/2 self-center shadow-lg"
					>{loading ? 'Loading ...' : 'Update'}</button
				>
			</div>
		</Card>
	</form>
{:else}
	<Login />
{/if}
