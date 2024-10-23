// src/app/layout.tsx

import React from 'react';
import Header from './components/Header'; // Import your Header component
import Footer from './components/Footer'; // Import your Footer component

export const metadata = {
    title: "My AI Query App",
    description: "An application for querying AI services",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children} {/* This renders the specific page content */}
                <Footer />
            </body>
        </html>
    );
}