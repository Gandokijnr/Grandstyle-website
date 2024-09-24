import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const aboutContent = [
  {
    title: "Our Story",
    content: "GrandStyle Events Management Company is a leading events management firm that has been delivering exceptional and bespoke events since 2012. With a proven track record of success, our team of experts has been consistently raising the bar in event planning, execution, and management.",
    image: "https://img.freepik.com/free-photo/prepared-wedding-hall_8353-9873.jpg?t=st=1726570434~exp=1726574034~hmac=9895a7b5cea0636f671689746997842c89764dd2103c1be37d7dae2cd34ffa8e&w=1380"
  },
  {
    title: "Our Mission",
    content: "At GrandStyle Events Management Company, our mission is to create unforgettable experiences that exceed our clients' expectations. We strive to provide personalized and innovative solutions that bring our clients' visions to life.",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
];

const About: React.FC = () => {
  return (
    <Box id="about" py={10} bgcolor="background.default">
      <Container maxWidth="lg">
        <Typography variant="h2" textAlign="center" mb={6} color="primary">
          About GrandStyle Events
        </Typography>
        <Grid container spacing={6}>
          {aboutContent.map((item, index) => (
            <Grid item xs={12} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Grid container spacing={4} alignItems="center" direction={index % 2 === 0 ? 'row' : 'row-reverse'}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h4" mb={2} color="secondary">
                      {item.title}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                      {item.content}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                    />
                  </Grid>
                </Grid>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;