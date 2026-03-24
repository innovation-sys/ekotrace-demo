import React from 'react';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material'; // assuming Material-UI is being used

const sitesData = [
    { id: 1, name: 'Site A', location: 'Location A', description: 'Details about Site A', link: '/sites/site-a' },
    { id: 2, name: 'Site B', location: 'Location B', description: 'Details about Site B', link: '/sites/site-b' },
    { id: 3, name: 'Site C', location: 'Location C', description: 'Details about Site C', link: '/sites/site-c' },
    // Add more sites as needed
];

const SitesDashboard = () => {
    return (
        <Grid container spacing={3}>
            {sitesData.map((site) => (
                <Grid item xs={12} sm={6} md={4} key={site.id}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="div">{site.name}</Typography>
                            <Typography color="text.secondary">{site.location}</Typography>
                            <Typography variant="body2">{site.description}</Typography>
                            <Button href={site.link} size="small">View Details</Button>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default SitesDashboard;
