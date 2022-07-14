<script lang="ts">
	import '../fonts.css';
	import '../app.css';
	import ProjectBar from '$lib/projectbar/ProjectBar.svelte';
	import InnerBar from '$lib/innerbar/InnerBar.svelte';
	import UserBar from '$lib/userbar/UserBar.svelte';
	import SideBar from '$lib/sidebar/SideBar.svelte';

	import { user } from '$lib/stores';
	import { supabase } from '$lib/supabaseClient';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user);
	});
</script>

<div class="w-full h-screen flex bg-bg">
	<ProjectBar />
	<div class="flex flex-grow flex-col">
		<div class="flex">
			<InnerBar />
			<UserBar />
			<div />
		</div>
		<div class="flex flex-grow">
			<SideBar />
			<div class="w-full bg-bg1 p-8 shadow-inner">
				<slot />
			</div>
		</div>
	</div>
</div>
