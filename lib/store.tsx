// lib/store.ts

import { createStore } from 'puter';

interface StoreState {
    inputType: string | null;
    query: string;
    response: string;
}

const initialState: StoreState = {
    inputType: null,
    query: '',
    response: '',
};

const store = createStore(initialState);

export default store;