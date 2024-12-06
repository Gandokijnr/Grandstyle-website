import React from "react";
import { Typography, Button, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "src/assets/landing page/Memorable Birthday Bashes.jpg",
    title: "Memorable Birthday Bashes",
    subtitle:
      "Turn your special day into an unforgettable African-inspired celebration",
  },
  {
    image: "src/assets/landing page/Vibrant African Weddings.jpg",
    title: "Vibrant African Weddings",
    subtitle: "Celebrate love with the colors and traditions of Africa",
  },
  {
    image: "src/assets/landing page/Owambe Extravaganza.jpg",
    title: "Owambe Extravaganza",
    subtitle: "Experience the joy and energy of true Nigerian celebrations",
  },
  {
    image: "src/assets/landing page/Corporate Events with African Flair.jpg",
    title: "Corporate Events with African Flair",
    subtitle:
      "Impress your clients with our unique blend of professionalism and culture",
  },
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
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-screen object-cover"
              />
              <Box
                className="absolute inset-0 bg-black flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1))",
                }}
              >
                <div className="text-center px-4">
                  <Typography
                    variant="h2"
                    className="mb-6 font-bold text-5xl md:text-6xl"
                    style={{
                      color: "#00CED1",
                      fontFamily: "Cormorant Garamond",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                      fontWeight: "bold",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {slide.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    className="mb-12 text-xl md:text-2xl"
                    style={{ color: "white", fontFamily: "Montserrat" }}
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
