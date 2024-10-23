import {useState} from "react";
import QueryForm from './QueryForm';
import store from '../lib/store';

interface InputType{
    id: string;
    label: string;
}

const inputTypes: InputType[] = [
    { id: '01', label: 'GPT-4o'},
    { id: '02', label: 'DALL-E'},
    { id: '03', label: 'GPT-4o Image'},
    { id: '04', label: 'GPT Long'},
];

export default function InputSelector() {
    const [selectedType, setSelectedType] = useState<string | null>(null);

    const handleSelect = (type: string) => {
        setSelectedType(type);
        store.set({ inputType: type }); // Update the store with selected input type
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