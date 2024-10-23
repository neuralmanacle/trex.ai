// pages/api/query.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import puter from 'puter';

interface RequestBody {
    query: string;
    inputType: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { query, inputType }: RequestBody = req.body;

        try {
            let response;

            switch (inputType) {
                case '001': // Regular text queries
                    response = await puter.ai.chat(query);
                    break;

                case '002': // Placeholder for another function
                    response = await puter.ai.anotherFunction(query);
                    break;

                case '003': // Handle image analysis
                    response = await puter.ai.chat("What do you see in this image?", query);
                    break;

                case '004': // Handle text-to-image generation
                    const imageElement = await puter.ai.txt2img(query);
                    // Since we can't return HTML elements directly, return a URL or base64 string instead
                    res.setHeader('Content-Type', 'application/json');
                    res.status(200).json({ imageUrl: imageElement.src }); // Assuming imageElement has a src property
                    return; // Exit early since we are sending a different response

                case '005': // Handle streaming responses (if applicable)
                    const streamResponse = await puter.ai.chat(query, { stream: true });
                    let fullResponse = '';

                    for await (const part of streamResponse) {
                        fullResponse += part?.text; // Accumulate the full response
                        puter.print(part?.text); // Print each part as it comes in
                    }
                    
                    response = fullResponse;
                    break;

                default:
                    return res.status(400).json({ error: 'Invalid input type' });
            }

            res.status(200).json({ output: response });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch AI response' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}