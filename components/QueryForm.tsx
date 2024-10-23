// components/QueryForm.tsx

import { useEffect } from 'react';
import puter from 'puter';
import store from '../lib/store';
import { aiFunc } from '../lib/aiFunc';

export default function QueryForm() {
    const state = store.useState();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            let response;
            if (state.inputType === '003') {
                // For image queries, use the query as an image URL
                response = await aiFunctions[state.inputType](state.query);
            } else {
                // For other types, use standard text queries
                response = await aiFunctions[state.inputType!](state.query);
            }
            store.set({ response }); // Update the response in the store if needed
        } catch (error) {
            console.error(error);
            store.set({ response: 'Error fetching response' });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={state.query}
                    onChange={(e) => store.set({ query: e.target.value })}
                    placeholder={`Enter your ${state.inputType === '003' ? 'Image URL' : state.inputType}`}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            {state.response && <div><strong>AI Response:</strong> {state.response}</div>}
        </div>
    );
}