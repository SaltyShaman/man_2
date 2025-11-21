<script>

    import { goto } from '$app/navigation';

    let username = '';
    let password = '';
    let message = '';


  async function login() {
    const res = await fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
      credentials: 'include' // important for session cookies
    });

    const data = await res.json();

    if (res.ok) {
      message = `Logged in as ${data.user.username} (${data.user.role})`;
      // redirect to protected page
      goto('/protected');
    } else {
      message = data.error || 'Login failed';
    }
  }


</script>

  <h1>Login</h1>
<input placeholder="Username" bind:value={username} />
<input type="password" placeholder="Password" bind:value={password} />
<button on:click={login}>Login</button>

<p>{message}</p>



