// Api: https://api.coincap.io/v2/assets/bitcoin/history?interval=d1

export interface CoincapCryptoHistory {
    data:      Dates[];
    timestamp: number;
}

export interface Dates {
    priceUsd: string;
    time:     number;
    date:     Date;
}

export enum Interval{
    m1 = "m1", 
    m5 = "m5", 
    m15 ="m15", 
    m30 ="m30", 
    h1 ="h1", 
    h2 = "h2", 
    h6 = "h6", 
    h12 = "h12", 
    d1 = "d1"
}