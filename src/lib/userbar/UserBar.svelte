<script lang="ts">
	import { user } from '$lib/stores';
	import SignInButton from './SignInButton.svelte';
	import UserDropdown from './UserDropdown.svelte';

	let isDropdownOpen = false;

	const handleDropdownClick = () => {
		isDropdownOpen = !isDropdownOpen;
	};

	const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
		if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return;

		isDropdownOpen = false;
	};
</script>

<div class="flex h-16 w-[8rem] justify-center items-center border-b border-bg2 border-solid">
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
</div>

<UserDropdown {isDropdownOpen} />
