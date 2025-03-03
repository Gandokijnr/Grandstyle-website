import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const Awards = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const awards = [
    {
      title: "2023 Event Agency of the Year",
      description:
        "Honored with the prestigious 'Event Agency of the Year' award by Leads Award.",
      image: "../award/2023 Event Agency of the Year.jpg",
      color: "#C0C0C0",
    },
    {
      title: "Best Corporate Event 2022",
      description:
        "Recognized for outstanding corporate event planning and execution.",
      image: "../award/Best Corporate Event 2022.jpg",
      color: "#C0C0C0",
    },
    {
      title: "Innovation in Event Technology 2021",
      description:
        "Awarded for pioneering use of technology in event management.",
      image: "../award/Innovation in Event Technology 2021.jpg",
      color: "#C0C0C0",
    },
  ];

  return (
    <section
      id="awards"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
    >
      <hr className="mt-5 border-2 mb-8" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              className="text-4xl font-bold mb-3 text-gray-800"
            >
              Our Achievements
            </Typography>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Recognition of our commitment to excellence and innovation in the
              event management industry.
            </p>
          </motion.div>
        </div>

        {/* Awards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg h-full bg-white">
                {/* Award Badge */}
                <div
                  className="absolute top-4 right-4 w-16 h-16 rounded-full z-10 flex items-center justify-center"
                  style={{ backgroundColor: award.color }}
                >
                  <span className="text-white font-bold text-sm">
                    {2023 - index}
                  </span>
                </div>

                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {award.title}
                  </h3>
                  <p className="text-gray-600">{award.description}</p>

                  {/* Decorative element */}
                  <div
                    className="w-12 h-1 mt-4 transition-all duration-300"
                    style={{ backgroundColor: award.color }}
                  ></div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1"
                  animate={{
                    height: hoveredIndex === index ? "100%" : "1px",
                    opacity: hoveredIndex === index ? 0.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ backgroundColor: award.color }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 mb-6">
            Our commitment to excellence has been recognized by industry
            leaders.
            <br />
            We continue to push boundaries in creating memorable events.
          </p>
          {/* <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-md hover:bg-indigo-700 transition-colors duration-300">
            View All Achievements
          </button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
