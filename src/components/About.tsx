import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const aboutContent = [
  {
    title: "Our Story",
    content:
      "GrandStyle Events Management Company is a leading events management firm that has been delivering exceptional and bespoke events since 2012. With a proven track record of success, our team of experts has been consistently raising the bar in event planning, execution, and management.",
    image: "../about/Our Mission.jpg",
  },
  {
    title: "Our Mission",
    content:
      "At GrandStyle Events Management Company, our mission is to create unforgettable experiences that exceed our clients' expectations. We strive to provide personalized and innovative solutions that bring our clients' visions to life.",
    image: "../about/Our Mission.jpg",
  },
];

const About: React.FC = () => {
  return (
    <div id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Typography
          variant="h3"
          mb={8}
          className="text-3xl font-bold text-center text-primary"
        >
          About GrandStyle Events
        </Typography>
        <div className="space-y-32">
          {aboutContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className={`flex flex-col-reverse md:flex-row items-center ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                } gap-8`}
              >
                <div className="w-full md:w-1/2">
                  <Typography
                    variant="h5"
                    mb={4}
                    className="text-2xl font-semibold text-secondary mb-8"
                  >
                    {item.title}
                  </Typography>
                  <p className="text-gray-700 leading-relaxed">
                    {item.content}
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
