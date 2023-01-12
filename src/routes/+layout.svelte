<script>
	import PageTransition from '$lib/components/transition/PageTransition.svelte';
	import NavBar from '$lib/nav/NavBar.svelte';
</script>

<div class="layout">
	<NavBar/>

	<PageTransition>
		<slot />
	</PageTransition>
</div>