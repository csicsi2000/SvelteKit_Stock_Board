<script lang="ts">
	import { Chart } from 'chart.js/auto';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let lineChartElement: HTMLCanvasElement | undefined;
	let chart: Chart;

    export let labels: string[] = [];
    export let dataset: number[] = [];
	
	onMount(() => {
		if (browser) {
			chart = new Chart(lineChartElement!!, {
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

	function UpdateChart(){
		console.log("Length: " +  dataset.length)
		if(dataset.length != 0){
			chart.data.labels = labels;
			chart.data.datasets[0].data = dataset;
			chart.update();
		}
	}

	$: dataset, console.log(dataset.length), UpdateChart();

</script>

<canvas bind:this={lineChartElement} class="m-5" style="max-height: 500px;" />
