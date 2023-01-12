<script lang="ts">
	import { Chart } from 'chart.js/auto';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let lineChartElement: HTMLCanvasElement | undefined;

    export let labels: string[] = [];
    export let dataset: number[] = [];

    console.log(labels[0]);
    console.log(dataset[0]);
	onMount(() => {
		if (browser) {
			var chart = new Chart(lineChartElement!!, {
				type: 'line',
				data: {
					labels: labels,
					datasets: [
						{
							label: 'USD',
							data: dataset,
							fill: false,
							borderColor: 'rgb(75, 192, 192)',
							tension: 0.1
						}
					]
				}
			});
		}
	});
</script>

<canvas bind:this={lineChartElement} class="m-5" />
