// src/lib/store.ts

import { configureStore } from '@reduxjs/toolkit';
import queryReducer from './features/querySlice'; // Import your query slice

// Configure the Redux store
const store = configureStore({
    reducer: {
        query: queryReducer, // Ensure this matches how you're accessing it in useSelector
    },
    // Optional: You can add middleware or devTools configuration here if needed
});

// Export the store for use in the application
export default store;

// Optional: Export RootState and AppDispatch types for type safety in components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;