import React from 'react';
import { Typography, Box, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

const featuredEvents = [
  {
    title: "Elegant Weddings",
    description: "Create unforgettable memories with our bespoke wedding planning services.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Corporate Gatherings",
    description: "Impress your clients and team with our professional corporate event management.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
  },
  {
    title: "Milestone Celebrations",
    description: "Mark life's special moments with our expertly crafted celebration experiences.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
];

const FeaturedEvents: React.FC = () => {
  return (
    <Box id="featured-events" className="py-32" sx={{ backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Box mb={8}>
          <Typography variant="h2" className="text-center font-bold" color="primary">
            Featured Events
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {featuredEvents.map((event, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={event.image}
                  alt={event.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div" color="secondary">
                    {event.title}
                  </Typography>
                  <Typography variant="body1">
                    {event.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedEvents;