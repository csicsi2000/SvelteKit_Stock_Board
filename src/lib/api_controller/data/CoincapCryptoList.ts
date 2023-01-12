// Api: https://docs.coincap.io/#61e708a8-8876-4fb2-a418-86f12f308978

export interface CoincapCryptoList {
    data: Coin[];
}

export interface Coin {
    id:                string;
    rank:              string;
    symbol:            string;
    name:              string;
    supply:            string;
    maxSupply:         string;
    marketCapUsd:      string;
    volumeUsd24Hr:     string;
    priceUsd:          string;
    changePercent24Hr: string;
    vwap24Hr:          string;
    explorer:          string;
}
