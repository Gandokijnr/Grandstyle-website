import React from "react";
import { Typography, Button, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Cloudinary setup
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

const cld = new Cloudinary({
  cloud: {
    cloudName: "wintan1418",
  },
});

const slides = [
  {
    publicId: "landing page/d9xqwbakv6xpze5wwgke",
    title: "Memorable Birthday Bashes",
    subtitle:
      "Turn your special day into an unforgettable African-inspired celebration",
  },
  {
    publicId: "landing page/Corporate_Events_with_African_Flair_romg8s",
    title: "Vibrant African Weddings",
    subtitle: "Celebrate love with the colors and traditions of Africa",
  },
  {
    publicId: "landing page/Owambe_Extravaganza_w8zchx",
    title: "Owambe Extravaganza",
    subtitle: "Experience the joy and energy of true Nigerian celebrations",
  },
  {
    publicId: "landing page/Vibrant_African_Weddings_vuvolr",
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
    autoplaySpeed: 4000,
  };

  return (
    <Box className="relative h-screen">
      <Slider {...settings}>
        {slides.map((slide, index) => {
          const cloudinaryImage = cld
            .image(slide.publicId)
            .resize(fill().width(1920).height(1080).gravity(autoGravity()))
            .quality("auto")
            .format("auto");

          return (
            <div key={index}>
              <div className="relative h-screen">
                <div className="w-full h-screen">
                  <AdvancedImage
                    cldImg={cloudinaryImage}
                    className="w-full h-screen object-cover"
                    alt={slide.title}
                  />
                </div>
                <Box
                  className="absolute inset-0 flex items-center justify-center"
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
          );
        })}
      </Slider>
    </Box>
  );
};

export default Hero;
