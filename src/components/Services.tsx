import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "@mui/material";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import { AdvancedImage } from "@cloudinary/react";
import {
  ArrowRight,
  Plus,
  Calendar,
  MapPin,
  Users,
  Music,
  Shield,
  Megaphone,
  Palette,
  Utensils,
} from "lucide-react";

const cld = new Cloudinary({
  cloud: {
    cloudName: "wintan1418",
  },
});

const Services = () => {
  const [activeCategory] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  // Define services with added category property
  const services = [
    {
      title: "Event Conceptualization and Planning",
      description:
        "Transform your vision into reality with our expert planning services, creating events that perfectly reflect your style and needs.",
      longDescription:
        "Our comprehensive planning process begins with understanding your vision and objectives. We then craft a detailed roadmap covering every aspect of your event, from initial concept to final execution. Our team handles timeline development, budget management, vendor coordination, and all the small details that make your event exceptional.",
      publicId: "services/Wedding Planning",
      color: "#4F46E5",
      category: "planning",
      icon: <Calendar size={24} />,
      features: [
        "Personalized Planning",
        "Budget Management",
        "Timeline Creation",
        "Vendor Coordination",
      ],
    },
    {
      title: "Venue Selection and Management",
      description:
        "Find the ideal venue that sets the tone for your event and let us handle the details to ensure a seamless experience.",
      longDescription:
        "The perfect venue is the foundation of a successful event. Our team researches and scouts locations that align with your vision, budget, and practical needs. We negotiate contracts, manage site visits, and coordinate all venue-related logistics to ensure the space works perfectly for your event requirements.",
      publicId: "services/Corporate Events",
      color: "#0EA5E9",
      category: "planning",
      icon: <MapPin size={24} />,
      features: [
        "Venue Scouting",
        "Contract Negotiation",
        "Layout Planning",
        "On-site Coordination",
      ],
    },
    {
      title: "Birthday Celebrations",
      description:
        "Celebrate life's special moments with our custom birthday party planning, tailored to create lasting memories and pure joy.",
      longDescription:
        "From intimate gatherings to lavish celebrations, we design birthday experiences that reflect the personality and preferences of the guest of honor. Our services include theme development, activity planning, surprise coordination, and creating those special moments that will be remembered for years to come.",
      publicId: "services/Birthday Parties",
      color: "#EC4899",
      category: "planning",
      icon: <Users size={24} />,
      features: [
        "Themed Experiences",
        "Custom Activities",
        "Surprise Planning",
        "Milestone Celebrations",
      ],
    },
    {
      title: "Catering and Beverage Services",
      description:
        "Indulge your guests with exquisite cuisine and refreshing drinks, crafted to elevate any event with culinary delight.",
      longDescription:
        "Our culinary partnerships allow us to offer exceptional food and beverage experiences. We coordinate menu development, tasting sessions, dietary accommodation, and stylish presentation. Whether you're looking for formal dining, casual buffets, or innovative food stations, we ensure your guests enjoy a memorable culinary journey.",
      publicId: "services/Birthday Parties",
      color: "#F59E0B",
      category: "logistics",
      icon: <Utensils size={24} />,
      features: [
        "Menu Development",
        "Beverage Programming",
        "Dietary Accommodations",
        "Service Staff Coordination",
      ],
    },
    {
      title: "Decor and Design",
      description:
        "Make a bold statement with stunning decor that transforms any space, creating an unforgettable ambiance for your event.",
      longDescription:
        "Our design team creates immersive environments that bring your event vision to life. From concept development to installation, we handle every aspect of your event's visual identity. Services include theme development, floral arrangements, lighting design, furniture selection, and custom installations that create Instagram-worthy moments.",
      publicId: "services/Gala Dinners",
      color: "#10B981",
      category: "decor",
      icon: <Palette size={24} />,
      features: [
        "Theme Development",
        "Floral Design",
        "Lighting Installations",
        "Custom Fabrication",
      ],
    },
    {
      title: "Live Entertainment",
      description:
        "Elevate your celebration with captivating performances, from live bands to DJs, ensuring an unforgettable experience for all.",
      longDescription:
        "The right entertainment transforms a good event into an unforgettable experience. We source and coordinate with top talent including bands, DJs, solo artists, and specialty performers. Our team handles all technical requirements, scheduling, and day-of coordination to ensure flawless performances that engage your guests.",
      publicId: "services/live band",
      color: "#8B5CF6",
      category: "entertainment",
      icon: <Music size={24} />,
      features: [
        "Talent Booking",
        "Performance Scheduling",
        "Technical Coordination",
        "Custom Programming",
      ],
    },
    {
      title: "Security and Logistics",
      description:
        "Rest easy knowing that your event is in safe hands, with our expert team handling security, logistics, and flawless execution.",
      longDescription:
        "Behind every successful event is seamless logistical execution. Our team coordinates transportation, manages security, develops contingency plans, and ensures all operational aspects run smoothly. We handle everything from guest arrivals to equipment setup, allowing you to focus on enjoying your event.",
      publicId: "services/security",
      color: "#3B82F6",
      category: "logistics",
      icon: <Shield size={24} />,
      features: [
        "Transportation Coordination",
        "Security Planning",
        "Contingency Management",
        "On-site Operations",
      ],
    },
    {
      title: "Marketing and Promotion",
      description:
        "Amplify your event's reach with our strategic marketing services, ensuring it captures the attention of your ideal audience.",
      longDescription:
        "For public and corporate events, effective promotion is key to success. Our marketing services include strategy development, digital campaign management, social media promotion, and press outreach. We create compelling content that drives engagement and attendance, maximizing your event's impact and reach.",
      publicId: "services/marketing team",
      color: "#EF4444",
      category: "logistics",
      icon: <Megaphone size={24} />,
      features: [
        "Strategy Development",
        "Digital Campaigns",
        "Media Relations",
        "Content Creation",
      ],
    },
  ];

  // Filter services based on active category
  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  // Card hover effects
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { y: -10, transition: { duration: 0.2 } },
  };

  // Handle service selection for detailed view
  const handleServiceClick = (index: number) => {
    setSelectedService(index);
  };

  // Close detailed view
  const handleCloseDetails = () => {
    setSelectedService(null);
  };

  // Animation variants for detail modal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
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
            Our Services
          </Typography>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <Typography
            variant="subtitle1"
            className="text-gray-600 max-w-auto mx-auto"
            style={{ fontFamily: "Montserrat" }}
          >
            Comprehensive event planning solutions tailored to create memorable
            experiences for your special occasions
          </Typography>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => handleServiceClick(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="h-full cursor-pointer"
            >
              <div className="relative h-full overflow-hidden rounded-xl shadow-lg bg-white transition-shadow duration-300 hover:shadow-xl">
                {/* Image with gradient overlay */}
                <div className="relative h-48 overflow-hidden">
                  <AdvancedImage
                    cldImg={cld
                      .image(service.publicId)
                      .resize(
                        fill().width(600).height(400).gravity(autoGravity())
                      )
                      .quality("auto")
                      .format("auto")}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 opacity-40 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${service.color} 0%, transparent 70%)`,
                    }}
                  ></div>

                  {/* Icon with circle background */}
                  <div
                    className="absolute top-4 right-4 p-2 rounded-full"
                    style={{
                      backgroundColor: `${service.color}`,
                      color: "white",
                    }}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-3 transition-colors duration-300 flex items-center"
                    style={{
                      color: hoveredIndex === index ? service.color : "#1E293B",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>

                  {/* View Details Button */}
                  <motion.div
                    className="flex items-center text-sm font-medium mt-2"
                    initial={{ opacity: 0.8 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0.8,
                      x: hoveredIndex === index ? 5 : 0,
                    }}
                    style={{ color: service.color }}
                  >
                    View Details <ArrowRight size={16} className="ml-1" />
                  </motion.div>
                </div>

                {/* Side accent bar that grows on hover */}
                <motion.div
                  className="absolute left-0 top-0 h-full w-1"
                  animate={{
                    width: hoveredIndex === index ? "4px" : "2px",
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ backgroundColor: service.color }}
                ></motion.div>
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
              Ready to Elevate Your Next Event?
            </h3>
            <p className="text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              Discover how our comprehensive services can transform your event
              vision into reality. Let's create something extraordinary
              together.
            </p>
            <motion.a
              href="https://wa.me/2348137635064"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-white text-indigo-700 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Request a Free Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseDetails}
          >
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Header image */}
                <div className="h-56 relative">
                  <AdvancedImage
                    cldImg={cld
                      .image(services[selectedService].publicId)
                      .resize(
                        fill().width(1200).height(450).gravity(autoGravity())
                      )
                      .quality("auto")
                      .format("auto")}
                    alt={services[selectedService].title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to bottom, transparent 0%, ${services[selectedService].color}CC 100%)`,
                    }}
                  ></div>

                  {/* Close button */}
                  <button
                    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg"
                    onClick={handleCloseDetails}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-3 rounded-full"
                      style={{
                        backgroundColor: `${services[selectedService].color}20`,
                      }}
                    >
                      {services[selectedService].icon}
                    </div>
                    <h2
                      className="text-3xl font-bold"
                      style={{ color: services[selectedService].color }}
                    >
                      {services[selectedService].title}
                    </h2>
                  </div>

                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    {services[selectedService].longDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      What We Offer
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services[selectedService].features.map(
                        (feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center p-3 rounded-lg"
                            style={{
                              backgroundColor: `${services[selectedService].color}10`,
                            }}
                          >
                            <div
                              className="mr-3 p-1 rounded-full"
                              style={{
                                backgroundColor:
                                  services[selectedService].color,
                                color: "white",
                              }}
                            >
                              <Plus size={16} />
                            </div>
                            <span className="font-medium">{feature}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex justify-center md:justify-end">
                    <motion.a
                      href="https://wa.me/2348137635064"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium shadow-md text-white transition-all duration-300"
                      style={{
                        backgroundColor: services[selectedService].color,
                      }}
                    >
                      Inquire About This Service
                      <ArrowRight size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
