import React from 'react';
import { Typography, Box, Container, Grid, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Grandstyle Events
            </Typography>
            <Typography variant="body2">
              Creating unforgettable experiences since 2012. We specialize in weddings, corporate events, and milestone celebrations.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Quick Links
            </Typography>
            <Link href="#about" color="inherit" display="block" sx={{ mb: 1 }}>About Us</Link>
            <Link href="#services" color="inherit" display="block" sx={{ mb: 1 }}>Our Services</Link>
            <Link href="#gallery" color="inherit" display="block" sx={{ mb: 1 }}>Event Gallery</Link>
            <Link href="#testimonials" color="inherit" display="block" sx={{ mb: 1 }}>Testimonials</Link>
            <Link href="#contact" color="inherit" display="block">Contact Us</Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Connect With Us
            </Typography>
            <Box>
              <IconButton color="inherit" aria-label="Facebook" sx={{ mr: 1 }}>
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter" sx={{ mr: 1 }}>
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram" sx={{ mr: 1 }}>
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5} textAlign="center">
          <Typography variant="body2">
            © 2023 Grandstyle Events. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic' }}>
            Developed by Wintech
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;