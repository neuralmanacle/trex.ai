"use client";

import { useState } from "react";
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import QueryForm from './QueryForm';
 // Adjust path and import your action

interface InputType {
    id: string;
    label: string;
}

const inputTypes: InputType[] = [
    { id: '01', label: 'GPT-4o' },
    { id: '02', label: 'DALL-E' },
    { id: '03', label: 'GPT-4o Image' },
    { id: '04', label: 'GPT Long' },
];

export default function InputSelector() {
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const dispatch = useDispatch(); // Get the dispatch function

    const handleSelect = (type: string) => {
        setSelectedType(type);
        dispatch(setInputType(type)); // Dispatch action to update input type in Redux store
    };

    return (
        <div>
            <h2>Select Input Type</h2>
            <div>
                {inputTypes.map((input) => (
                    <button key={input.id} onClick={() => handleSelect(input.id)}>
                        {input.label}
                    </button>
                ))}
            </div>
            {selectedType && <QueryForm />}
        </div>
    );
}