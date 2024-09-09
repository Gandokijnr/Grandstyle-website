import React from 'react';
import { Typography, Box, Container, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const socialLinks = [
    { icon: <FacebookIcon />, url: 'https://facebook.com' },
    { icon: <TwitterIcon />, url: 'https://twitter.com' },
    { icon: <InstagramIcon />, url: 'https://instagram.com' },
    { icon: <LinkedInIcon />, url: 'https://linkedin.com' },
  ];

  return (
    <Box id="contact" className="py-32 bg-gradient-to-r from-blue-100 to-green-100">
      <Container maxWidth="lg">
        <Typography variant="h3" className="mb-16 text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
          Get in Touch
        </Typography>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 bg-gradient-to-br from-blue-500 to-green-500 text-white">
              <Typography variant="h5" className="mb-8 font-bold">Contact Information</Typography>
              <div className="space-y-6">
                <div className="flex items-center">
                  <EmailIcon className="mr-4" />
                  <Typography>info@grandstylevents.com</Typography>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="mr-4" />
                  <Typography>+1 (234) 567-890</Typography>
                </div>
                <div className="flex items-center">
                  <LocationOnIcon className="mr-4" />
                  <Typography>123 Event St, Party City, PC 12345</Typography>
                </div>
              </div>
              <div className="mt-12">
                <Typography variant="h6" className="mb-4">Follow Us</Typography>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <IconButton key={index} color="inherit" href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.icon}
                    </IconButton>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-12">
              <Typography variant="h5" className="mb-8 font-bold text-gray-700">Send us a Message</Typography>
              <form className="space-y-6">
                <input className="w-full p-3 border border-gray-300 rounded-md" placeholder="Your Name" />
                <input className="w-full p-3 border border-gray-300 rounded-md" placeholder="Your Email" type="email" />
                <textarea className="w-full p-3 border border-gray-300 rounded-md" placeholder="Your Message" rows={4}></textarea>
                <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-md hover:from-blue-600 hover:to-green-600 transition duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;