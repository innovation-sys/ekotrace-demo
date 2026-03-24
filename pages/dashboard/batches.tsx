import React, { useEffect, useState } from 'react';

const BatchesDashboard = () => {
    const [batches, setBatches] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch batches data from an API
        const fetchBatches = async () => {
            const response = await fetch('/api/batches'); // Replace with the actual API endpoint
            const data = await response.json();
            setBatches(data);
        };
        fetchBatches();
    }, []);

    const filteredBatches = batches.filter(batch =>
        batch.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h1>Batch Management Dashboard</h1>
            <input
                type="text"
                placeholder="Search batches..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Batch Name</th>
                        <th>Status</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBatches.map(batch => (
                        <tr key={batch.id}>
                            <td>{batch.name}</td>
                            <td>
                                <span className={`badge ${batch.status}`}>{batch.status}</span>
                            </td>
                            <td>
                                <a href={`/batches/${batch.id}`}>View Details</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BatchesDashboard;