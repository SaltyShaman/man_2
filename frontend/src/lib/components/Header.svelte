<script>
	import { goto } from '$app/navigation';

	export let showLogout = false;

	async function logout() {
		await fetch('http://localhost:8080/auth/logout', {
			method: 'POST',
			credentials: 'include'
		});
		goto('/login');
	}
</script>

<header class="header">
	<h2 class="logo">My App</h2>

	{#if showLogout}
		<button class="logout" on:click={logout}>Logout</button>
	{/if}
</header>

<style>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		background: #222;
		color: white;
	}
	.logout {
		background: crimson;
		border: none;
		padding: 0.5rem 1rem;
		color: white;
		cursor: pointer;
		border-radius: 6px;
	}
	.logout:hover {
		background: #d11;
	}
</style>
