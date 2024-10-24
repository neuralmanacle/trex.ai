// src/components/QueryForm.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../../lib/features/querySlice'; // Adjust path as necessary
import { RootState } from '../../lib/store'; // Adjust path as necessary

export const QueryForm: React.FC = () => {
    const dispatch = useDispatch();
    const query = useSelector((state: RootState) => state.query.query); // Accessing the query from the Redux store
    const [inputValue, setInputValue] = useState<string>(query); // Local state for input value

    // Update local state when query changes in Redux store
    useEffect(() => {
        setInputValue(query);
    }, [query]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue.trim()) { // Check if input is not empty or just spaces
            dispatch(setQuery(inputValue)); // Dispatch action to update query in Redux store
            setInputValue(''); // Optionally clear the input after submission
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} // Update local state on input change
                placeholder="Enter your query"
                required // Make the input required for better UX
            />
            <button type="submit">Submit</button>
        </form>
    );
};