import React from "react";
import { Typography, Box, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const awards = [
  {
    title: "2023 Event Agency of the Year",
    description:
      "Honored with the prestigious 'Event Agency of the Year' award by Leads Award.",
    image: "src/assets/award/2023 Event Agency of the Year.jpg",
  },
  {
    title: "Best Corporate Event 2022",
    description:
      "Recognized for outstanding corporate event planning and execution.",
    image: "src/assets/award/Best Corporate Event 2022.jpg",
  },
  {
    title: "Innovation in Event Technology 2021",
    description:
      "Awarded for pioneering use of technology in event management.",
    image: "src/assets/award/Innovation in Event Technology 2021.jpg",
  },
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
          <Typography variant="h3" textAlign="center" mb={6} color="primary">
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
                <Paper
                  elevation={3}
                  sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    height: "400px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={award.image}
                    alt={award.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <Box p={3}>
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      {award.title}
                    </Typography>
                    <Typography variant="body2">{award.description}</Typography>
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
