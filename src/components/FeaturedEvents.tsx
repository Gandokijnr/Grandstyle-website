import React from "react";
import {
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const featuredEvents = [
  {
    title: "Elegant Weddings",
    description:
      "Create unforgettable memories with our bespoke wedding planning services.",
    image: "src/assets/featured/Elegant Weddings.jpg",
  },
  {
    title: "Corporate Gatherings",
    description:
      "Impress your clients and team with our professional corporate event management.",
    image: "src/assets/featured/Corporate Gatherings.jpg",
  },
  {
    title: "Milestone Celebrations",
    description:
      "Mark life's special moments with our expertly crafted celebration experiences.",
    image: "src/assets/featured/Milestone Celebrations.jpg",
  },
];

const FeaturedEvents: React.FC = () => {
  return (
    <Box
      id="featured-events"
      className="py-12"
      sx={{ backgroundColor: "background.paper" }}
    >
      <Container maxWidth="lg">
        <Box mb={6}>
          <Typography
            variant="h3"
            className="text-center font-bold"
            color="primary"
          >
            Featured Events
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {featuredEvents.map((event, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                elevation={3}
                sx={{
                  height: "400px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={event.image}
                  alt={event.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {event.title}
                  </Typography>
                  <Typography variant="body2">{event.description}</Typography>
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
