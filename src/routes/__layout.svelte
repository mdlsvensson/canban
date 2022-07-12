<script lang="ts">
	import '../app.css';
	import ProjectBar from '$lib/projectbar/ProjectBar.svelte';
</script>

<div class="w-full h-screen flex">
	<ProjectBar />
	<div class="flex-grow">
		<div class="w-full h-16 bg-gray-200" />
		<slot />
	</div>
</div>
