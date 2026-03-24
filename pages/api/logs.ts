import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { batch } = req.query;

  const logs = [
    { id: 1, message: 'Log entry 1', timestamp: '2026-03-24 01:00:00' },
    { id: 2, message: 'Log entry 2', timestamp: '2026-03-24 01:15:00' },
    { id: 3, message: 'Log entry 3', timestamp: '2026-03-24 01:30:00' },
    // Add more logs as necessary
  ];

  if (batch) {
    const filteredLogs = logs.filter(log => log.id === Number(batch));
    return res.status(200).json(filteredLogs);
  }

  return res.status(200).json(logs);
}