// pages/api/carbon.ts
import type { NextApiRequest, NextApiResponse } from 'next';

// Mock data for carbon impact metrics
const carbonData = {
    totalCarbon: 1000,
    metrics: {
        transportation: 300,
        energyConsumption: 500,
        wasteManagement: 200,
    },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json(carbonData);
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}