import axios from "axios";
import type { CoincapCryptoHistory, Interval } from "./data/CoincapCryptoHistroy";
import type { CoincapCryptoList } from "./data/CoincapCryptoList";

export async function get_crypto_list(): Promise<CoincapCryptoList> {
    // create a promise for the axios request
    let response = await axios.get<CoincapCryptoList>('https://api.coincap.io/v2/assets');
    return response.data;
}

export async function get_crypto_history(coin_name:string, interval:Interval): Promise<CoincapCryptoHistory> {
    let timeRange = interval.toString();
    console.log(timeRange);
    let url = "https://api.coincap.io/v2/assets/"+coin_name+"/history?interval=" + interval.toString();
    console.log(url);
    let response = await axios.get<CoincapCryptoHistory>(url);
    return response.data;
}