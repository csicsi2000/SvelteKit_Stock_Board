import type { Currencies } from "./data/Currencies";
import axios from "axios";

export function get_currencies_list(): Currencies | null{
    // create a promise for the axios request
    axios.get<Currencies>('https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange')
        .then(function (response) {
            console.log(response.data);
            return response.data;
        });
    return null;
}