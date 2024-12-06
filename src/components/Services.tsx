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
import { motion } from "framer-motion";

const services = [
  {
    title: "Event Conceptualization and Planning",
    description:
      "Transform your vision into reality with our expert planning services, creating events that perfectly reflect your style and needs.",
    image: "src/assets/services/Wedding Planning.jpg",
  },
  {
    title: "Venue Selection and Strategic Management",
    description:
      "Find the ideal venue that sets the tone for your event and let us handle the details to ensure a seamless experience.",
    image: "src/assets/services/Corporate Events.jpg",
  },
  {
    title: "Birthday Parties",
    description:
      "Celebrate life’s special moments with our custom birthday party planning, tailored to create lasting memories and pure joy",
    image: "src/assets/services/Birthday Parties.jpg",
  },
  {
    title: "Catering and Drinks Services",
    description:
      "Indulge your guests with exquisite cuisine and refreshing drinks, crafted to elevate any event with culinary delight",
    image: "src/assets/services/Gala Dinners.jpg",
  },
  {
    title: "Decor and Design",
    description:
      "Make a bold statement with stunning decor that transforms any space, creating an unforgettable ambiance for your event.",
    image: "src/assets/services/Product Launches.jpg",
  },
  {
    title: "Live Band, Solo Artist & DJ Entertainment",
    description:
      "Elevate your celebration with captivating performances, from live bands to DJs, ensuring an unforgettable experience for all.",
    image: "src/assets/services/Live Band.jpg",
  },
  {
    title: "Security, Logistics and Coordination",
    description:
      "Rest easy knowing that your event is in safe hands, with our expert team handling security, logistics, and flawless execution.",
    image: "src/assets/services/Security.jpg",
  },
  {
    title: "Marketing and Promotion",
    description:
      "Amplify your event's reach with our strategic marketing services, ensuring it captures the attention of your ideal audience.",
    image: "src/assets/services/Marketing.jpg",
  },
];

const Services: React.FC = () => {
  return (
    <Box id="services" py={12} bgcolor="background.paper">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" textAlign="center" mb={8} color="primary">
            Our Services
          </Typography>
        </motion.div>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: 3,
                    transition: "transform 0.3s ease-in-out, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                    sx={{
                      objectFit: "cover",
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      fontWeight="bold"
                      sx={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
