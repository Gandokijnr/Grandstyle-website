import React from 'react';
import { Typography, Box, Container, Card, CardContent, Rating } from '@mui/material';
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
    <Box id="testimonials" className="py-32 bg-gradient-to-r from-purple-100 to-pink-100">
      <Container maxWidth="lg">
        <Typography variant="h3" className="mb-16 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          What Our Clients Say
        </Typography>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden shadow-xl rounded-xl">
                  <CardContent className="p-8 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-6 md:mb-0">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-purple-300" />
                    </div>
                    <div className="md:w-2/3 md:pl-8">
                      <Typography variant="body1" className="mb-4 text-xl italic text-gray-700">"{testimonial.text}"</Typography>
                      <Typography variant="h6" className="font-bold text-purple-600">{testimonial.name}</Typography>
                      <Typography variant="subtitle1" color="textSecondary" className="mb-2">{testimonial.role}</Typography>
                      <Rating value={testimonial.rating} readOnly className="text-yellow-400" />
                    </div>
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