// lib/aiFunctions.ts

import puter from 'puter';

export const aiFunc = {
    type1: (query: string) => puter.ai.chat(query), // Example for chat
    type2: (query: string) => puter.ai.txt2img(query), // Replace with actual function
    type3: async (imageUrl: string) => {
        const response = await puter.ai.chat("What do you see in this image?", imageUrl);
        return response; // Return the response for further processing if needed
    },
    type4: async (query: string) => {
        const response = await puter.ai.chat(query, { stream: true });
        let fullResponse = '';

        for await (const part of response) {
            fullResponse += part?.text; // Accumulate the full response
            puter.print(part?.text); // Print each part as it comes in
        }

        return fullResponse; // Return the complete response if needed
    },
}; // Replace with actual function
