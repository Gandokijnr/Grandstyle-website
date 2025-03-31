import React from "react";
import { Typography, Box, Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";

const cld = new Cloudinary({
  cloud: {
    cloudName: "wintan1418",
  },
});

const itemData = [
  {
    publicId: "gallery/concert",
    title: "Event Hall",
  },
  {
    publicId: "gallery/Nigerian Party",
    title: "Nigerian Party",
  },
  {
    publicId: "gallery/security",
    title: "Security",
  },
  {
    publicId: "gallery/Waitress",
    title: "Waitress",
  },
  {
    publicId: "gallery/Corporate Event",
    title: "Corporate Event",
  },
  {
    publicId: "gallery/Wedding",
    title: "Wedding",
  },
  {
    publicId: "gallery/concert",
    title: "Concert",
  },
  {
    publicId: "gallery/Gala Dinner",
    title: "Gala Dinner",
  },
  {
    publicId: "gallery/Cultural Festival",
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
            <div key={item.publicId} className="px-4 mt-8">
              <div className="relative group">
                <AdvancedImage
                  cldImg={cld
                    .image(item.publicId)
                    .resize(
                      fill().width(600).height(400).gravity(autoGravity())
                    )
                    .quality("auto")
                    .format("auto")}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
