<script lang="ts">
	import '../app.css';
	import ProjectBar from '$lib/projectbar/ProjectBar.svelte';
	import InnerBar from '$lib/innerbar/InnerBar.svelte';
	import UserBar from '$lib/userbar/UserBar.svelte';

	let displayedProjects: object;
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
