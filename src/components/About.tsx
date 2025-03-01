import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const aboutContent = [
    {
      title: "Our Story",
      content:
        "GrandStyle Events Management Company is a leading events management firm that has been delivering exceptional and bespoke events since 2012. With a proven track record of success, our team of experts has been consistently raising the bar in event planning, execution, and management.",
      image: "../about/Our Mission.jpg",
      color: "#00008B",
      accentPoints: [
        "Established 2012",
        "Industry Leaders",
        "Award-winning Team",
      ],
    },
    {
      title: "Our Mission",
      content:
        "At GrandStyle Events Management Company, our mission is to create unforgettable experiences that exceed our clients' expectations. We strive to provide personalized and innovative solutions that bring our clients' visions to life.",
      image: "../about/Our Mission.jpg",
      color: "#00008B",
      accentPoints: [
        "Client-focused",
        "Innovative Solutions",
        "Exceptional Execution",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-3 text-gray-800">
              About GrandStyle Events
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Creating memorable event experiences with passion and expertise
              since 2012
            </p>
          </motion.div>
        </div>

        {/* About Sections */}
        <div className="space-y-24">
          {aboutContent.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                } gap-12`}
              >
                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                  <div className="relative">
                    {/* Section title with accent */}
                    <h3 className="text-3xl font-bold mb-6 inline-block relative">
                      {item.title}
                      <div
                        className="absolute bottom-0 left-0 h-1 w-16"
                        style={{ backgroundColor: item.color }}
                      ></div>
                    </h3>

                    {/* Main content */}
                    <p className="text-gray-700 leading-relaxed mb-8">
                      {item.content}
                    </p>

                    {/* Accent points */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      {item.accentPoints.map((point, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-2 rounded-full text-sm font-medium"
                          style={{
                            backgroundColor: `${item.color}20`, // 20% opacity
                            color: item.color,
                          }}
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image with styling */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-xl shadow-lg">
                    {/* Main image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Decorative elements */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `linear-gradient(45deg, ${item.color} 0%, transparent 70%)`,
                      }}
                    ></div>

                    {/* Border Corner gradient */}
                    <div
                      className="absolute top-0 left-0 w-16 h-16"
                      style={{
                        background: `linear-gradient(135deg, ${item.color} 0%, transparent 100%)`,
                      }}
                    ></div>

                    {/* Border line color */}
                    <div
                      className={`absolute ${
                        index % 2 === 0 ? "left-0" : "right-0"
                      } top-0 w-2 h-full`}
                      style={{ backgroundColor: item.color }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center bg-white p-10 rounded-xl shadow-md"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Ready to Create Something Memorable?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Partner with GrandStyle Events to bring your vision to life. Our
            team is passionate about creating exceptional experiences tailored
            to your needs.
          </p>
          <a
            href="https://wa.me/2348137635064"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-4 bg-blue-800 text-white rounded-lg font-medium shadow-md hover:bg-blue-700 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
