// Api: https://cryptingup.com/api/markets
// 
// Cat Api: https://http.cat/504

export interface CryptoCurrencies {
    markets: Market[];
    next:    string;
}

export interface Market {
    quote:             { [key: string]: Quote };
    exchange_id:       ExchangeID;
    symbol:            string;
    base_asset:        string;
    quote_asset:       QuoteAsset;
    price_unconverted: number;
    price:             number;
    change_24h:        number;
    spread:            number;
    volume_24h:        number;
    status:            Status;
    created_at:        Date;
    updated_at:        Date;
}

export enum ExchangeID {
    Binance = "BINANCE",
    Bitfinex = "BITFINEX",
    Coinbase = "COINBASE",
    Huobiglobal = "HUOBIGLOBAL",
    Kraken = "KRAKEN",
}

export interface Quote {
    price:      number;
    volume_24h: number;
}

export enum QuoteAsset {
    Btc = "BTC",
    Busd = "BUSD",
    Eur = "EUR",
    Gbp = "GBP",
    Try = "TRY",
    Usd = "USD",
    Usdt = "USDT",
}

export enum Status {
    Recent = "recent",
}
