<script lang="ts">
	import { user } from '$lib/stores.js';
	import SignInButton from '$lib/userbar/SignInButton.svelte';

	let isDropdownOpen = false;

	const handleDropdownClick = () => {
		isDropdownOpen = !isDropdownOpen;
		console.log(isDropdownOpen);
	};

	const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
		if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return;

		isDropdownOpen = false;
	};
</script>

<div class="flex h-16 w-[8rem] justify-center items-center border-b border-black border-solid">
	{#if $user}
		<!-- User Image Button -->
		<button
			type="button"
			class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
			aria-expanded="false"
			on:click={handleDropdownClick}
			on:focusout={handleDropdownFocusLoss}
		>
			<span class="sr-only">Open user menu</span>

			<img class="w-8 h-8 rounded-full" src="profile-picture-3.jpg" alt="Profile" />
		</button>
	{:else}
		<SignInButton />
	{/if}

	<!-- User Dropdown -->
	<div class="z-50 rounded shadow bg-gray-700" style:display={isDropdownOpen ? 'block' : 'none'}>
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
				<a
					href="#"
					class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
					>Sign out</a
				>
			</li>
		</ul>
	</div>
</div>
