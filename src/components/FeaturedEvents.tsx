import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";
import VideoShowcase from "@/components/VideoShowcase";

const cld = new Cloudinary({
  cloud: {
    cloudName: "wintan1418",
  },
});

const FeaturedEvents = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const featuredEvents = [
    {
      title: "Elegant Weddings",
      description:
        "Create unforgettable memories with our bespoke wedding planning services.",
      publicId: "gallery/qs7d7w6mvf1jk93ji0ao",
      color: "#000000",
    },
    {
      title: "Corporate Gatherings",
      description:
        "Impress your clients and team with our professional corporate event management.",
      publicId: "featured/Corporate Gatherings",
      color: "#1A237E",
    },
    {
      title: "Milestone Celebrations",
      description:
        "Mark life's special moments with our expertly crafted celebration experiences.",
      publicId: "featured/Milestone Celebrations",
      color: "#B71C1C",
    },
  ];

  return (
    <section
      id="featured-events"
      className="py-16 bg-gradient-to-b from-white to-gray-50"
    >
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
              Featured Events
            </Typography>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our signature event experiences crafted with attention to
              every detail
            </p>
          </motion.div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg h-full bg-white">
                <div
                  className="absolute top-4 left-4 px-4 py-1 z-10 rounded-full"
                  style={{ backgroundColor: event.color }}
                >
                  <span className="text-white font-medium text-sm">
                    Featured
                  </span>
                </div>

                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <AdvancedImage
                      cldImg={cld
                        .image(event.publicId)
                        .resize(
                          fill().width(600).height(400).gravity(autoGravity())
                        )
                        .quality("auto")
                        .format("auto")}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  </motion.div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600">{event.description}</p>

                  {/* Action link */}
                  <div className="mt-6 flex items-center">
                    <motion.div
                      className="inline-flex items-center font-medium"
                      animate={{
                        x: hoveredIndex === index ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>
                  </div>
                </div>

                {/* Hover accent bar */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1"
                  animate={{
                    height: hoveredIndex === index ? "4px" : "1px",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ backgroundColor: event.color }}
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
        ></motion.div>
      </div>
      {/* videosection component */}
      <VideoShowcase />
    </section>
  );
};

export default FeaturedEvents;
