// src/app/page.tsx

import React from 'react';
import InputSelector from './components/InputSelector'; // Your input selector component

const Home: React.FC = () => {
    return (
        <div>
            <h1>Welcome to My AI Query App</h1>
            <InputSelector /> {/* Render the InputSelector component */}
        </div>
    );
};

export default Home; // Export the Home component as default