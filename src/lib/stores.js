import { writable } from 'svelte/store';

export const generatorProgress = writable(0);
export const scenario = writable(0);
export const roomAmount = writable(0);

export const prompts = writable({});
