import { persisted } from 'svelte-persisted-store'

export const filter = persisted<'All' | 'Today'>('filter','All');