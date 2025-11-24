<script>
    import { goto } from '$app/navigation';

    let usernameOrEmail = '';
    let password = '';
    let message = '';

    async function login() {
        const res = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ usernameOrEmail, password }),
            credentials: 'include' // important for session cookies
        });

        const data = await res.json();

        if (res.ok) {
            message = `Logged in as ${data.user.username} (${data.user.role})`;
            goto('/protected'); // redirect to protected page
        } else {
            message = data.error || 'Login failed';
        }
    }
</script>

<h1>Login</h1>
<input placeholder="Username or Email" bind:value={usernameOrEmail} />
<input type="password" placeholder="Password" bind:value={password} />
<button on:click={login}>Login</button>

<p>{message}</p>
