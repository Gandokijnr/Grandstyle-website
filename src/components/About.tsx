import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { CheckCircle } from "lucide-react";

// Initialize Cloudinary
const cld = new Cloudinary({
  cloud: {
    cloudName: "wintan1418",
  },
});

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const aboutContent = [
    {
      title: "Our Story",
      content:
        "At GrandStyle Events, we transform your dreams into reality with seamless event planning and execution. From luxury weddings to corporate gatherings and milestone celebrations, we ensure every detail is handled with expertise, creativity, and precision.",
      publicId: "about/nbwgtwfgjvbalbvvdohy",
      color: "#4A5CF6",
      accentPoints: [
        "Established 2012",
        "Industry Leaders",
        "Award-winning Team",
      ],
    },
    {
      title: "Why Choose Us",
      content:
        "We create tailored experiences that truly reflect your style with flawless execution. Our dedicated team ensures every detail is perfect, providing stress-free planning from start to finish. With over a decade of experience, we've built a reputation for excellence that our clients trust.",
      publicId: "about/why_choose_us",
      color: "#F65C5C",
      accentPoints: [
        "Client-focused",
        "Innovative Solutions",
        "Exceptional Execution",
      ],
    },
    {
      title: "Our Process",
      content:
        "We follow a proven four-step process: Discovery, where we understand your vision; Design, where we create a tailored plan; Coordination, where we manage all logistics and vendors; and finally, Execution, where we bring your event to life exactly as envisioned.",
      publicId: "about/nbwgtwfgjvbalbvvdohy",
      color: "#F68B8B",
      accentPoints: ["Discover", "Design", "Coordinate", "Execute"],
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <Typography
            variant="h3"
            className="text-4xl font-bold mb-3"
            style={{ color: "#1E293B", fontFamily: "Cormorant Garamond" }}
          >
            About GrandStyle Events
          </Typography>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <Typography
            variant="subtitle1"
            className="text-gray-600 max-w-auto mx-auto"
            style={{ fontFamily: "Montserrat" }}
          >
            Crafting Unforgettable Moments, Just for You
          </Typography>
        </motion.div>

        {/* Tabbed Navigation */}
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 6 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="fullWidth"
            aria-label="about section tabs"
            sx={{
              "& .MuiTab-root": {
                fontSize: "1rem",
                fontWeight: 600,
                fontFamily: "Montserrat",
                textTransform: "none",
              },
              "& .Mui-selected": {
                color: aboutContent[activeTab].color,
              },
              "& .MuiTabs-indicator": {
                backgroundColor: aboutContent[activeTab].color,
              },
            }}
          >
            {aboutContent.map((item, index) => (
              <Tab key={index} label={item.title} />
            ))}
          </Tabs>
        </Box>

        {/* Content Area */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-16"
        >
          {aboutContent.map((item, index) => (
            <motion.div
              key={index}
              variants={childVariant}
              className={`${activeTab === index ? "block" : "hidden"}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div
                  className={`order-2 ${
                    index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-3xl font-bold mb-6 relative pb-3">
                      {item.title}
                      <span
                        className="absolute bottom-0 left-0 h-1 w-16"
                        style={{ backgroundColor: item.color }}
                      ></span>
                    </h3>

                    <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                      {item.content}
                    </p>

                    <h4 className="font-semibold mb-4 text-gray-800">
                      What Sets Us Apart:
                    </h4>

                    <div className="space-y-3 mb-8">
                      {item.accentPoints.map((point, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle
                            size={20}
                            style={{ color: item.color }}
                            className="mr-3 flex-shrink-0"
                          />
                          <span className="text-gray-700">{point}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Image with animation */}
                <div
                  className={`order-1 ${
                    index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-xl shadow-xl"
                  >
                    {/* Replace with Cloudinary image */}
                    <div className="relative group aspect-w-16 aspect-h-9">
                      <AdvancedImage
                        cldImg={cld
                          .image(item.publicId)
                          .resize(
                            fill().width(600).height(400).gravity(autoGravity())
                          )
                          .quality("auto")
                          .format("auto")}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-xl"
                      />

                      {/* Decorative elements */}
                      <div
                        className="absolute inset-0 opacity-30 rounded-xl"
                        style={{
                          background: `linear-gradient(45deg, ${item.color} 0%, transparent 70%)`,
                        }}
                      ></div>

                      {/* Corner effect */}
                      <div
                        className="absolute top-0 left-0 w-24 h-24 opacity-80"
                        style={{
                          background: `linear-gradient(135deg, ${item.color} 0%, transparent 100%)`,
                          borderTopLeftRadius: "0.75rem",
                        }}
                      ></div>

                      {/* Border accent */}
                      <div
                        className={`absolute ${
                          index % 2 === 0 ? "left-0" : "right-0"
                        } top-0 w-2 h-full`}
                        style={{ backgroundColor: item.color }}
                      ></div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-20 text-center p-12 rounded-2xl overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #F65C5C 0%, #4A5CF6 50%, #F65C5C 100%)",
          }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-0 bottom-0 w-64 h-64 rounded-full bg-white transform translate-x-1/4 translate-y-1/4"></div>
            <div className="absolute left-0 top-0 w-48 h-48 rounded-full bg-white transform -translate-x-1/4 -translate-y-1/4"></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ready to Create Something Memorable?
            </h3>
            <p className="text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              Partner with GrandStyle Events to bring your vision to life. Our
              team is passionate about creating exceptional experiences tailored
              to your unique needs.
            </p>
            <motion.a
              href="https://wa.me/2348137635064"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-white text-indigo-700 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
