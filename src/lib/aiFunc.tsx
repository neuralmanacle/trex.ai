// src/lib/aiFunctions.ts

import puter from 'puter';

export const aiFunc = {
    // Function for chat-based queries
    type1: async (query: string) => {
        try {
            const response = await puter.ai.chat(query);
            return response; // Return the response for further processing
        } catch (error) {
            console.error("Error in type1:", error);
            throw new Error("Failed to get chat response."); // Rethrow or handle as needed
        }
    },

    // Function for text-to-image conversion
    type2: async (query: string) => {
        try {
            const response = await puter.ai.txt2img(query); // Replace with actual function
            return response; // Return the generated image URL or object
        } catch (error) {
            console.error("Error in type2:", error);
            throw new Error("Failed to convert text to image."); // Rethrow or handle as needed
        }
    },

    // Function to analyze an image and provide a description
    type3: async (imageUrl: string) => {
        try {
            const response = await puter.ai.chat("What do you see in this image?", imageUrl);
            return response; // Return the response for further processing if needed
        } catch (error) {
            console.error("Error in type3:", error);
            throw new Error("Failed to analyze image."); // Rethrow or handle as needed
        }
    },

    // Function for streaming responses from a chat query
    type4: async (query: string) => {
        try {
            const response = await puter.ai.chat(query, { stream: true });
            let fullResponse = '';

            for await (const part of response) {
                fullResponse += part?.text || ''; // Accumulate the full response
                puter.print(part?.text); // Print each part as it comes in
            }

            return fullResponse; // Return the complete response if needed
        } catch (error) {
            console.error("Error in type4:", error);
            throw new Error("Failed to get streamed chat response."); // Rethrow or handle as needed
        }
    },
};