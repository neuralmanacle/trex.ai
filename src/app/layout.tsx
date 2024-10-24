// src/pages/_app.tsx or src/app/layout.tsx
"use client"; // This directive indicates that this component should be rendered on the client side

import React from 'react';
import { Provider } from 'react-redux';
import store from '../lib/store'; // Adjust path as necessary (use '../' if in src/app)
import { QueryForm } from './components/QueryForm'; // Adjust path as necessary

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <QueryForm /> {/* Render QueryForm here */}
            <Component {...pageProps} />
        </Provider>
    );
}