<script lang="ts">
	import { supabase } from '$lib/supabaseClient';

	let loading = false;
	let email: string;

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};
</script>

<div class="h-full flex p-4">
	<div class="w-full">
		<form class="space-y-2" on:submit|preventDefault={handleLogin}>
			<div class="rounded-md shadow-sm -space-y-px">
				<div>
					<label for="email-address" class="sr-only">Email address</label>
					<input
						id="email-address"
						name="email"
						type="email"
						autocomplete="email"
						required
						class="p-2 pl-4 w-full text-sm text-fg4 placeholder:text-fg4 bg-bg2 rounded-lg border border-bg3 focus:outline-none focus:border-fg4 shadow aling-middle pt-3"
						placeholder="Email address"
						bind:value={email}
					/>
				</div>
			</div>

			<div>
				<button
					type="submit"
					class="p-3 w-full text-sm bg-bg2 rounded-lg border border-bg3 focus:outline-none focus:border-fg4 shadow pt-4 hover:border-fg4"
					value={loading ? 'Loading' : 'Send magic link'}
					disabled={loading}
				>
					Sign in
				</button>
			</div>
		</form>
	</div>
</div>
