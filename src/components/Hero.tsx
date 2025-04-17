import React, { useState } from "react";
import { Typography, Button, Box, Container, Grid } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

// Cloudinary setup
const cld = new Cloudinary({
  cloud: {
    cloudName: "wintan1418",
  },
});

const slides = [
  {
    publicId: "gallery/d1msrwdqadspahw5ca9l",
    title: "Memorable Birthday Bashes",
    subtitle:
      "Turn your special day into an unforgettable African-inspired celebration",
    description:
      "Our birthday packages blend traditional African elements with modern celebration styles, creating a unique experience for you and your guests.",
  },
  {
    publicId: "gallery/vq195u3uu0jrvdwdubwk",
    title: "Vibrant African Weddings",
    subtitle: "Celebrate love with the colors and traditions of Africa",
    description:
      "From traditional ceremonies to contemporary celebrations, we create wedding experiences that honor your heritage while creating lasting memories.",
  },
  {
    publicId: "gallery/Gala Dinner",
    title: "Owambe Extravaganza",
    subtitle: "Experience the joy and energy of true Nigerian celebrations",
    description:
      "Our Owambe events bring together music, food, fashion, and tradition in a vibrant celebration that captures the essence of Nigerian culture.",
  },
  {
    publicId: "landing page/Corporate_Events_with_African_Flair_romg8s",
    title: "Corporate Events with African Flair",
    subtitle:
      "Impress your clients with our unique blend of professionalism and culture",
    description:
      "Elevate your business events with authentic African touches that showcase cultural appreciation while maintaining professional standards.",
  },
];

// Custom arrow components for better interactivity
const NextArrow = (props: { onClick?: () => void }) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer rounded-full bg-white bg-opacity-50 p-2 hover:bg-opacity-80 transition-all duration-300"
      onClick={onClick}
    >
      <ArrowForwardIcon style={{ color: "#B71C1C" }} />
    </div>
  );
};

const PrevArrow = (props: { onClick?: () => void }) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer rounded-full bg-white bg-opacity-50 p-2 hover:bg-opacity-80 transition-all duration-300"
      onClick={onClick}
    >
      <ArrowBackIcon style={{ color: "#B71C1C" }} />
    </div>
  );
};

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (_current: number, next: number) => setActiveSlide(next),
    customPaging: (i: number) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: i === activeSlide ? "#B71C1C" : "#FFFFFF",
          opacity: i === activeSlide ? 1 : 0.5,
          transition: "all 0.3s ease",
          margin: "0 5px",
        }}
      />
    ),
  };

  return (
    <Box className="relative min-h-screen bg-gradient-to-r from-gray-900 to-black py-12 md:py-36">
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          {/* Left Column - Text Content */}
          <Grid item xs={12} md={5} className="order-1 md:order-1">
            <Box className="text-left px-4 py-8 md:py-0 animate-fade-in">
              <Typography
                variant="h2"
                style={{
                  color: "#B71C1C",
                  fontFamily: "Cormorant Garamond, serif",
                  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                  fontWeight: "bold",
                  marginBottom: "1.5rem",
                  fontSize: "2.5rem",
                  lineHeight: 1.2,
                  transition: "all 0.5s ease",
                }}
              >
                {slides[activeSlide].title}
              </Typography>

              <Typography
                variant="h5"
                style={{
                  color: "white",
                  fontFamily: "Montserrat, sans-serif",
                  marginBottom: "1.5rem",
                  fontWeight: 500,
                }}
              >
                {slides[activeSlide].subtitle}
              </Typography>

              <Typography
                variant="body1"
                style={{
                  color: "#e0e0e0",
                  fontFamily: "Montserrat, sans-serif",
                  marginBottom: "2.5rem",
                  lineHeight: 1.8,
                  maxWidth: "500px",
                }}
              >
                {slides[activeSlide].description}
              </Typography>

              <Box className="flex flex-col sm:flex-row gap-4">
                <Button
                  component="a"
                  href="#contact"
                  variant="contained"
                  size="large"
                  endIcon={<CalendarTodayIcon />}
                  style={{
                    backgroundColor: "#B71C1C",
                    color: "white",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: "bold",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontSize: "1rem",
                    boxShadow: "0 4px 14px rgba(183, 28, 28, 0.4)",
                  }}
                  sx={{
                    '&:hover': {
                      backgroundColor: "#991515",
                      transform: "translateY(1px)",
                    }
                  }}
                >
                  Plan Your Event
                </Button>

                <Button
                  variant="outlined"
                  component="a"
                  href="#gallery"
                  size="large"
                  style={{
                    borderColor: "white",
                    color: "white",
                    fontFamily: "Montserrat, sans-serif",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontSize: "1rem",
                    transition: "all 0.3s ease",
                  }}
                  className="hover:bg-white hover:bg-opacity-10"
                >
                  View Our Gallery
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Column - Image Slider */}
          <Grid item xs={12} md={7} className="order-2 md:order-2">
            <Box className="rounded-xl overflow-hidden shadow-2xl">
              <Slider {...settings}>
                {slides.map((slide, index) => {
                  const cloudinaryImage = cld
                    .image(slide.publicId)
                    .resize(
                      fill().width(1000).height(600).gravity(autoGravity())
                    )
                    .quality("auto")
                    .format("auto");

                  return (
                    <div key={index} className="relative h-full">
                      <div className="w-full h-full">
                        <AdvancedImage
                          cldImg={cloudinaryImage}
                          className="w-full h-full object-cover"
                          alt={slide.title}
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(to right, rgba(0,0,0,0.6), transparent)",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
