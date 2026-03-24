import React from 'react';

const SiteDetailPage = ({ site }) => {
    return (
        <div>
            <h1>Site Information</h1>
            <p>Name: {site.name}</p>
            <p>Location: {site.location}</p>
            <h2>Contact Details</h2>
            <p>Email: {site.contact.email}</p>
            <p>Phone: {site.contact.phone}</p>
            <h2>Associated Batches</h2>
            <table>
                <thead>
                    <tr>
                        <th>Batch ID</th>
                        <th>Batch Name</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {site.batches.map(batch => (
                        <tr key={batch.id}>
                            <td>{batch.id}</td>
                            <td>{batch.name}</td>
                            <td>{batch.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SiteDetailPage;