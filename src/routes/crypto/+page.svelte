<script lang="ts">
	import { get_crypto_list } from '$lib/api_controller/crypto_api';
	import type { Coin, CoincapCryptoList } from '$lib/api_controller/data/CoincapCryptoList';

	const endpoint = 'https://api.coincap.io/v2/assets';
	const itemName = 'get_crypto_list';
	let arrayOfCrypto: Coin[] = [];

	get_crypto_list().then((res) => {
		arrayOfCrypto = res.data;
		//localStorage.setItem(itemName, JSON.stringify(res.data));
	});
</script>

<div class="bg-dark bg-gradient">
	{#if arrayOfCrypto.length == 0}
		<div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
			<div class="spinner-border text-info" role="status">
				<span class="sr-only"></span>
			</div>
		</div>
	{:else}
		<div class="p-5 table-responsive container">
			<table class="table table-dark table-striped table-hover">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Name</th>
						<th class="text-center" scope="col">Symbol</th>
						<th class="text-center" scope="col">USD</th>
						<th class="text-center" scope="col">Change in 24h</th>
						<th class="text-center" scope="col">Website</th>
					</tr>
				</thead>
				<tbody>
					{#each arrayOfCrypto as coin, i}
						<tr>
							<th scope="row">{i}</th>
							<td><a href="/crypto/{coin.id}">{coin.id}</a></td>
							<td class="text-center">{coin.symbol}</td>
							<td class="text-center">{Math.round(+coin.priceUsd * 100) / 100}</td>
							<td class="text-center">{Math.round(+coin.changePercent24Hr * 100) / 100} %</td>
							<td class="text-center"><a href={coin.explorer} class="badge">{coin.explorer}</a></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/if}
</div>
