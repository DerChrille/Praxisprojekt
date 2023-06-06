import { writable } from 'svelte/store';

export const generatorProgress = writable(0);
export const scenario = writable(0);
export const roomAmount = writable(0);
export const prompt1 = writable();
export const prompt2 = writable();
export const prompt3 = writable();
