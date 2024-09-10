import React from 'react';
import { Typography, Box, Container, Card, CardContent, Avatar, Rating } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'John Doe', role: 'Happy Client', text: 'Grandstyle Events made our wedding day absolutely perfect! Their attention to detail and creativity exceeded our expectations.', avatar: 'https://i.pravatar.cc/150?img=1', rating: 5 },
  { name: 'Jane Smith', role: 'Corporate Client', text: 'The team\'s professionalism and innovative ideas for our product launch were truly impressive. They delivered an unforgettable experience.', avatar: 'https://i.pravatar.cc/150?img=2', rating: 5 },
  { name: 'Mike Johnson', role: 'Birthday Celebrant', text: 'My 50th birthday party was a dream come true thanks to Grandstyle Events. They captured my vision perfectly and executed it flawlessly.', avatar: 'https://i.pravatar.cc/150?img=3', rating: 5 },
];

const Testimonials: React.FC = () => {
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
          <Typography variant="h2" textAlign="center" mb={8} color="primary">
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
                <Card elevation={3} sx={{ borderRadius: '16px', overflow: 'hidden', mx: 2 }}>
                  <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar src={testimonial.avatar} sx={{ width: 100, height: 100, mb: 3 }} />
                    <Typography variant="h6" gutterBottom fontWeight="bold" color="secondary">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom color="text.secondary">
                      {testimonial.role}
                    </Typography>
                    <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                    <Typography variant="body1" textAlign="center" color="text.secondary">
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