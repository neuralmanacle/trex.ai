// src/lib/features/querySlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QueryState {
    query: string;
}

const initialState: QueryState = {
    query: '',
};

const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        setQuery(state, action: PayloadAction<string>) {
            state.query = action.payload;
        },
        resetQuery(state) {
            state.query = '';
        },
    },
});

// Export actions for use in components
export const { setQuery, resetQuery } = querySlice.actions;

// Export the reducer to be used in the store
export default querySlice.reducer;