import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const aboutContent = [
  {
    title: "Our Story",
    content: "GrandStyle Events Management Company is a leading events management firm that has been delivering exceptional and bespoke events since 2012. With a proven track record of success, our team of experts has been consistently raising the bar in event planning, execution, and management.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
  },
  {
    title: "Our Mission",
    content: "At GrandStyle Events Management Company, our mission is to create unforgettable experiences that exceed our clients' expectations. We strive to provide personalized and innovative solutions that bring our clients' visions to life.",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    title: "Our Expertise",
    content: "We specialize in event conceptualization and planning, venue selection, catering and drinks services, decor and design, entertainment, security, logistics, and marketing. Our commitment to excellence has earned us numerous referrals from highly impressed clients and recognition within the industry.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    title: "Our Reach",
    content: "Established in November 2012, GrandStyle Events Management Company operates from Ondo, Lagos States, and Abuja. However, our scope of operation is worldwide, bringing the vibrant spirit of African celebrations to events across the globe.",
    image: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
  }
];

const About: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <Box id="about" className="py-24 bg-gradient-to-r from-yellow-50 to-orange-50">
      <Container maxWidth="lg">
        <Typography variant="h3" className="mb-16 text-center font-bold text-orange-600">About GrandStyle Events</Typography>
        <Slider {...settings}>
          {aboutContent.map((item, index) => (
            <div key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                  <Typography variant="h4" className="mb-4 font-bold text-orange-500">{item.title}</Typography>
                  <Typography variant="body1" className="text-lg">{item.content}</Typography>
                </div>
                <div className="md:w-1/2">
                  <img src={item.image} alt={item.title} className="w-full h-auto rounded-lg shadow-xl" />
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default About;