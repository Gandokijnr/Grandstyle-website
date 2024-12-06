import React from "react";
import { Typography, Box, Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const itemData = [
  {
    img: "../gallery/Event Hall.jpg",
    title: "Event Hall",
  },
  {
    img: "../gallery/Nigerian Party.jpg",
    title: "Nigerian Party",
  },
  {
    img: "../gallery/Security.jpg",
    title: "Security",
  },
  {
    img: "../gallery/Waitress.jpg",
    title: "Waitress",
  },
  {
    img: "../gallery/Corporate Event.jpg",
    title: "Corporate Event",
  },
  {
    img: "../gallery/Wedding.jpg",
    title: "Wedding",
  },
  {
    img: "../gallery/Concert.jpg",
    title: "Concert",
  },
  {
    img: "../gallery/Gala Dinner.jpg",
    title: "Gala Dinner",
  },
  {
    img: "../gallery/Cultural Festival.jpg",
    title: "Cultural Festival",
  },
];

const Gallery: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box id="gallery" className="py-12 bg-gray-50">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          className="mb-8 text-center font-extrabold text-primary"
        >
          Event Gallery
        </Typography>
        <Typography
          variant="body1"
          className="text-center text-gray-600 text-lg"
        >
          Explore our diverse portfolio of events, from vibrant Nigerian parties
          to elegant corporate gatherings. Each image tells a story of joy,
          celebration, and impeccable planning.
        </Typography>

        <Slider {...settings}>
          {itemData.map((item) => (
            <div key={item.img} className="px-4 mt-8">
              <div className="relative group">
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <Typography
                  variant="h6"
                  className="mt-4 text-center font-semibold text-secondary group-hover:text-primary"
                >
                  {item.title}
                </Typography>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Gallery;
