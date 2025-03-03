import type { FC } from 'react';
import {
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  Rating,
} from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mr & Mrs Ajani",
    role: "Ibadan, Nigeria",
    text: "Thank you for making our wedding a grand success and adding colors to the day with your superb service. It was a well organised experience with no hassle",
    rating: 5,
  },
  {
    name: "Bukky Abike Oluderu",
    role: "Corporate Client",
    text: "The team's professionalism and innovative ideas for our product launch were truly impressive. They delivered an unforgettable experience.",
    rating: 5,
  },
  {
    name: "Hon. Rotimi",
    role: "Olasogba (Canada)",
    text: "My father's funeral celebration was a huge success because of the timely event Coordination you provided. We couldn't have had it better without you. God bless you GrandStyle Events.",
    rating: 5,
  },
];

const Testimonials: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box id="testimonials" py={12} bgcolor="background.default">
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" textAlign="center" mb={8} color="primary">
            Client Testimonials
          </Typography>
        </motion.div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card
                  elevation={3}
                  sx={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    mx: 2,
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" gutterBottom fontWeight="bold">
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      color="text.secondary"
                    >
                      {testimonial.role}
                    </Typography>
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      sx={{ mb: 2 }}
                    />
                    <Typography
                      variant="body1"
                      textAlign="center"
                      color="text.secondary"
                    >
                      "{testimonial.text}"
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Testimonials;
