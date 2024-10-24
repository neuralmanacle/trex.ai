// src/app/page.tsx

import React from 'react';
import InputSelector from './components/InputSelector'; // Correct import for InputSelector

const Home: React.FC = () => {
    return (
        <div>
            <h1>----trex.ai----</h1>
            <InputSelector /> {/* Render the InputSelector component */}
        </div>
    );
};

export default Home; // Export the Home component as default