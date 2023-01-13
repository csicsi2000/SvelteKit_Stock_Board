<script>
	import { fly } from 'svelte/transition';
  import { page } from '$app/stores';

</script>

{#key $page.route}
	<div in:fly={{ x: -50, duration: 250, delay: 300 }} >
		<slot />
	</div>
{/key}
