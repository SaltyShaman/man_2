// src/routes/+layout.server.js
export async function load({ fetch, cookies }) {
    // Try to get the user from a protected backend route
    const res = await fetch('http://localhost:8080/protected', {
        credentials: 'include'
    });

    if (res.ok) {
        const data = await res.json();
        return { user: data.user };
    }

    return { user: null };
}
