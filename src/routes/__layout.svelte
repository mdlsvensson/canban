<script lang="ts">
	import '../app.css';
	import ProjectBar from '$lib/projectbar/ProjectBar.svelte';
	import InnerBar from '$lib/innerbar/InnerBar.svelte';
	import UserBar from '$lib/userbar/UserBar.svelte';

	import { user } from '$lib/stores';
	import { supabase } from '$lib/supabaseClient';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user);
	});
</script>

<div class="w-full h-screen flex">
	<ProjectBar />
	<div class="flex-grow">
		<div class="flex bg-gray-200">
			<InnerBar />
			<UserBar />
			<div />
		</div>
		<slot />
	</div>
</div>
