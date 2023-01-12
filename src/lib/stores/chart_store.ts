import { writable } from 'svelte/store';

export const history_prices = writable<number[]>([]) ;
export const history_time_line = writable<string[]>([]) ;
