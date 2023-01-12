import type { PageLoad } from './$types';

export const load: PageLoad = ({ params}) => {
    return {
        name: params.coin_name
    }
}


export interface CoinPage{
    name: string
}