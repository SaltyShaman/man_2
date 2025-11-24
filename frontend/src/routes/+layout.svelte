<script>
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- Show header on all pages -->
<Header showLogout={data.user !== null} />


<main class="page-container">
	<slot />
</main>

<Footer />

<style>
	.page-container {
		min-height: calc(100vh - 120px); /* adjust to header/footer height */
		padding: 2rem;
	}
</style>
