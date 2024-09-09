import React from 'react';
import { Typography, Box, Container, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
  return (
    <Box className="bg-gray-800 text-white py-8">
      <Container maxWidth="lg">
        <Typography variant="body1" className="text-center mb-4">
          © 2023 Grandstyle Events. All rights reserved.
        </Typography>
        <Box className="flex justify-center space-x-4">
          <IconButton color="inherit" aria-label="Facebook">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Twitter">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Instagram">
            <InstagramIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;