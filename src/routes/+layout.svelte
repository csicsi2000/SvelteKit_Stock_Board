<script>
	import PageTransition from '$lib/components/transition/PageTransition.svelte';
	import NavBar from '$lib/nav/NavBar.svelte';
</script>

<div class="layout bg-dark bg-gradient">
	<NavBar/>

	<PageTransition>
		<slot />
	</PageTransition>
</div>