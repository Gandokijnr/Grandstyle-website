import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Event Conceptualization and Planning",
      description:
        "Transform your vision into reality with our expert planning services, creating events that perfectly reflect your style and needs.",
      image: "../services/Wedding Planning.jpg",
      color: "#4F46E5",
    },
    {
      title: "Venue Selection and Strategic Management",
      description:
        "Find the ideal venue that sets the tone for your event and let us handle the details to ensure a seamless experience.",
      image: "../services/Corporate Events.jpg",
      color: "#0EA5E9",
    },
    {
      title: "Birthday Parties",
      description:
        "Celebrate life's special moments with our custom birthday party planning, tailored to create lasting memories and pure joy",
      image: "../services/Birthday Parties.jpg",
      color: "#EC4899",
    },
    {
      title: "Catering and Drinks Services",
      description:
        "Indulge your guests with exquisite cuisine and refreshing drinks, crafted to elevate any event with culinary delight",
      image: "../services/Gala Dinners.jpg",
      color: "#F59E0B",
    },
    {
      title: "Decor and Design",
      description:
        "Make a bold statement with stunning decor that transforms any space, creating an unforgettable ambiance for your event.",
      image: "../services/Product Launches.jpg",
      color: "#10B981",
    },
    {
      title: "Live Band, Solo Artist & DJ Entertainment",
      description:
        "Elevate your celebration with captivating performances, from live bands to DJs, ensuring an unforgettable experience for all.",
      image: "../services/Live Band.jpg",
      color: "#8B5CF6",
    },
    {
      title: "Security, Logistics and Coordination",
      description:
        "Rest easy knowing that your event is in safe hands, with our expert team handling security, logistics, and flawless execution.",
      image: "../services/Security.jpg",
      color: "#3B82F6",
    },
    {
      title: "Marketing and Promotion",
      description:
        "Amplify your event's reach with our strategic marketing services, ensuring it captures the attention of your ideal audience.",
      image: "../services/Marketing.jpg",
      color: "#EF4444",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 bg-gradient-to-b from-gray-50 to-white"
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
              Our Services
            </Typography>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive event planning solutions tailored to create
              memorable experiences
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="h-full"
            >
              <div className="relative h-full overflow-hidden rounded-xl shadow-md bg-white group">
                {/* Image with gradient overlay */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 opacity-30 transition-opacity duration-300 group-hover:opacity-40"
                      style={{ backgroundColor: service.color }}
                    ></div>
                  </motion.div>

                  {/* Color accent strip */}
                  <div
                    className="absolute top-0 left-0 w-full h-1"
                    style={{ backgroundColor: service.color }}
                  ></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-lg font-bold mb-2 transition-colors duration-300"
                    style={{
                      color:
                        hoveredIndex === index
                          ? service.color
                          : "rgb(31, 41, 55)",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                {/* Side accent bar that grows on hover */}
                <motion.div
                  className="absolute right-0 top-0 h-full w-1"
                  animate={{
                    width: hoveredIndex === index ? "3px" : "1px",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ backgroundColor: service.color }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 mb-6">
            Discover how our comprehensive services can transform your event
            vision into reality
          </p>
          <a
            href="https://wa.me/2348137635064"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-indigo-700 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Request a free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
