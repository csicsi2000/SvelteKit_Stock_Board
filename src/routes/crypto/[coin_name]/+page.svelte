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

	get_crypto_history(data.name, Interval.m30).then((res) => {
		history = res.data;
		dates = history.map((x) => x.date.toString().split("T")[0]);
		prices = history.map((x) => parseFloat(x.priceUsd));
		console.log('updated');
        console.log(prices);
	});
</script>

<h1 class="text-center">{data.name}</h1>
{#key dates}
	<HistoryChart labels={dates} dataset={prices} />
{/key}
