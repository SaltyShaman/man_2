<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let user = {};
  let message = '';

  async function fetchProtected() {
    try {
      const res = await fetch('http://localhost:8080/protected', {
        credentials: 'include'
      });

      if (res.ok) {
        const data = await res.json();
        user = data.user || {};
      } else {
        message = 'You are not logged in. Redirecting to login...';
        setTimeout(() => goto('/login'), 1500);
      }
    } catch (err) {
      message = 'Error fetching protected data';
      console.error(err);
    }
  }



  onMount(() => fetchProtected());
</script>

<h1>Protected Page</h1>

{#if Object.keys(user).length > 0}
  <p>Welcome, {user.username}! Role: {user.role}</p>
{:else}
  <p>{message}</p>
{/if}
