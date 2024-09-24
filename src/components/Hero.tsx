import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    title: "Vibrant African Weddings",
    subtitle: "Celebrate love with the colors and traditions of Africa"
  },
  {
    image: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    title: "Owambe Extravaganza",
    subtitle: "Experience the joy and energy of true Nigerian celebrations"
  },
  {
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Corporate Events with African Flair",
    subtitle: "Impress your clients with our unique blend of professionalism and culture"
  },
  {
    image: "https://images.unsplash.com/photo-1574691250077-03a929faece5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "Memorable Birthday Bashes",
    subtitle: "Turn your special day into an unforgettable African-inspired celebration"
  }
];

const Hero: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Reduced from 5000 to 4000
  };

  return (
    <Box className="relative h-screen">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="relative h-screen">
              <img src={slide.image} alt={slide.title} className="w-full h-screen object-cover" />
              <Box className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center px-4">
                  <Typography 
                    variant="h2" 
                    className="mb-6 font-bold text-5xl md:text-6xl" 
                    style={{ color: '#00CED1' }} // Inline style for dark turquoise
                  >
                    {slide.title}
                  </Typography>
                  <Typography 
                    variant="h4" 
                    className="mb-12 text-xl md:text-2xl" 
                    style={{ color: 'white' }}
                  >
                    {slide.subtitle}
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    size="large" 
                    className="text-lg py-3 px-8 bg-yellow-500 hover:bg-yellow-600"
                  >
                    Plan Your Event
                  </Button>
                </div>
              </Box>
            </div>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Hero;