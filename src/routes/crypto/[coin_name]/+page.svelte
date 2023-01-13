<script lang="ts">
	import { get_crypto_history } from '$lib/api_controller/crypto_api';
	import { Interval } from '$lib/api_controller/data/CoincapCryptoHistroy';
	import type { CoinPage } from './+page';
	import type { Dates } from '$lib/api_controller/data/CoincapCryptoHistroy';
	import HistoryChart from '$lib/components/Charts/HistoryChart.svelte';

	export let data: CoinPage;

	let history: Dates[] = [];

	let dates: string[] = [];
	let prices: number[] = [];

	let start_time:number = 0;

	get_crypto_history(data.name, Interval.d1).then((res) => {
		history = res.data;
		dates = history.map((x) => x.date.toString().split('T')[0]);
		prices = history.map((x) => parseFloat(x.priceUsd));
		console.log('updated');
	});
</script>

<div class="m-5">
	<h1 class="text-center">{data.name}</h1>
	<label for="time_line" class="form-label">{dates[start_time]}</label>
	<input type="range" class="form-range" min="0" max={prices.length-2} id="time_line" bind:value={start_time}/>
</div>
<HistoryChart labels={dates.slice(start_time)} dataset={prices.slice(start_time)} />
