<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let user = null;
  let message = '';

  async function fetchProtected() {
    const res = await fetch('http://localhost:8080/protected', {
      credentials: 'include'
    });

    if (res.ok) {
      const data = await res.json();
      user = data.user;
    } else {
      message = 'You are not logged in. Redirecting to login...';
      setTimeout(() => goto('/login'), 1500);
    }
  }

  async function logout() {
    await fetch('http://localhost:8080/auth/logout', {
      method: 'POST',
      credentials: 'include'
    });
    goto('/login');
  }

  onMount(() => {
    fetchProtected();
  });
</script>

<h1>Protected Page</h1>

{#if user}
  <p>Welcome, {user.username}! Role: {user.role}</p>
  <button on:click={logout}>Logout</button>
{:else}
  <p>{message}</p>
{/if}
