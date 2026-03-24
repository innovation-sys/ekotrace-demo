import { NextApiRequest, NextApiResponse } from 'next';

// Sample data
let batches = [
    { id: 1, name: 'Batch 1', status: 'Completed' },
    { id: 2, name: 'Batch 2', status: 'In Progress' }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Handle GET request - return batch data
        res.status(200).json(batches);
    } else if (req.method === 'POST') {
        // Handle POST request - create a new batch
        const newBatch = req.body;
        batches.push(newBatch);
        res.status(201).json(newBatch);
    } else {
        // Handle other HTTP methods
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}