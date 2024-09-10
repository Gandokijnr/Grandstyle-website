import React from 'react';
import { Typography, Box, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const awards = [
  {
    title: "2023 Event Agency of the Year",
    description: "Honored with the prestigious 'Event Agency of the Year' award by Leads Award.",
    image: "https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Best Corporate Event 2022",
    description: "Recognized for outstanding corporate event planning and execution.",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    title: "Innovation in Event Technology 2021",
    description: "Awarded for pioneering use of technology in event management.",
    image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
  }
];

const Awards: React.FC = () => {
  return (
    <Box id="awards" py={12} bgcolor="background.paper">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" textAlign="center" mb={8} color="primary">
            Awards and Recognition
          </Typography>
        </motion.div>
        <Grid container spacing={4}>
          {awards.map((award, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Paper elevation={3} sx={{ borderRadius: '16px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <img src={award.image} alt={award.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <Box p={3}>
                    <Typography variant="h5" gutterBottom fontWeight="bold" color="secondary">
                      {award.title}
                    </Typography>
                    <Typography variant="body1">
                      {award.description}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Awards;