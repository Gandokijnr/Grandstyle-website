import React, { useState, useEffect } from "react";
import {
  Typography,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mr & Mrs Ajani",
    role: "Ibadan, Nigeria",
    text: "Thank you for making our wedding a grand success and adding colors to the day with your superb service. It was a well organised experience with no hassle",
    rating: 5,
  },
  {
    name: "Bukky Abike Oluderu",
    role: "Corporate Client",
    text: "The team's professionalism and innovative ideas for our product launch were truly impressive. They delivered an unforgettable experience.",
    rating: 5,
  },
  {
    name: "Hon. Rotimi",
    role: "Olasogba (Canada)",
    text: "My father's funeral celebration was a huge success because of the timely event Coordination you provided. We couldn't have had it better without you. God bless you GrandStyle Events.",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const QuoteIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.667 18.667H6.66699C6.66699 14.667 7.66699 13.333 9.66699 12.333C10.067 12.133 10.267 11.6 10.067 11.133C9.86699 10.667 9.33366 10.467 8.86699 10.667C6.00033 12 4.00033 14.267 4.00033 18.667V24C4.00033 25.467 5.20033 26.667 6.66699 26.667H10.667C12.1337 26.667 13.3337 25.467 13.3337 24V21.333C13.3337 19.867 12.1337 18.667 10.667 18.667Z"
      fill="currentColor"
      fillOpacity="0.5"
    />
    <path
      d="M25.3337 18.667H21.3337C21.3337 14.667 22.3337 13.333 24.3337 12.333C24.7337 12.133 24.9337 11.6 24.7337 11.133C24.5337 10.667 24.0003 10.467 23.5337 10.667C20.667 12 18.667 14.267 18.667 18.667V24C18.667 25.467 19.867 26.667 21.3337 26.667H25.3337C26.8003 26.667 28.0003 25.467 28.0003 24V21.333C28.0003 19.867 26.8003 18.667 25.3337 18.667Z"
      fill="currentColor"
      fillOpacity="0.5"
    />
  </svg>
);

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Typography
            variant="h3"
            className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
          >
            <span className="relative inline-block">
              <span className="relative z-10">What Our Clients Say</span>
            </span>
          </Typography>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Hear from the couples and clients who trusted us with their special
            moments
          </p>
        </motion.div>

        <div className="relative mt-12 lg:mt-20">
          {/* Decorative elements */}
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <QuoteIcon className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-blue-400 opacity-20 w-12 h-12" />

          {/* Main testimonial card */}
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="lg:grid lg:grid-cols-12">
              {/* Left decorative panel */}
              <div className="hidden lg:block lg:col-span-4 bg-gradient-to-br from-blue-900 to-gray-950">
                <div className="h-full flex items-center justify-center p-12">
                  <div className="text-center">
                
                    <div className="mt-8 text-white">
                      <StarRating
                        rating={testimonials[currentTestimonial].rating}
                      />
                      <div className="font-medium">
                        {testimonials[currentTestimonial].name}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial content */}
              <div className="lg:col-span-8">
                <div className="h-full flex flex-col justify-between p-8 lg:p-12">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {/* Mobile image (visible only on small screens) */}
                    <div className="flex items-center mb-6 lg:hidden">
                      {/* <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="h-16 w-16 rounded-full object-cover mr-4"
                      /> */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-gray-500">
                          {testimonials[currentTestimonial].role}
                        </p>
                        <StarRating
                          rating={testimonials[currentTestimonial].rating}
                        />
                      </div>
                    </div>

                    {/* Quote */}
                    <motion.div variants={itemVariants}>
                      <div className="relative">
                        <QuoteIcon className="absolute -top-2 -left-2 text-blue-200 w-8 h-8 transform -scale-x-100" />
                        <p className="text-xl leading-relaxed text-gray-700 italic pl-6 pr-4">
                          "{testimonials[currentTestimonial].text}"
                        </p>
                      </div>
                    </motion.div>

                    {/* Desktop client info */}
                    <motion.div
                      variants={itemVariants}
                      className="hidden lg:block mt-8"
                    >
                      <h4 className="text-xl font-semibold text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-blue-600">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation dots */}
          <div className="mt-8 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentTestimonial === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
