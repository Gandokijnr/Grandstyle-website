import React from 'react';
import { Typography, Box, Container, Button, TextField, Grid, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <Box id="contact" py={12} bgcolor="background.default">
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" textAlign="center" mb={6} color="primary">
            Let's Plan Your Next Event
          </Typography>
        </motion.div>
        <Paper elevation={3} sx={{ p: 4, borderRadius: '16px', bgcolor: 'background.paper' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom color="secondary">
                Quick Contact
              </Typography>
              <Box display="flex" alignItems="center" mb={2}>
                <PhoneIcon color="primary" sx={{ mr: 2 }} />
                <Typography variant="h6">+234 123 456 7890</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <EmailIcon color="primary" sx={{ mr: 2 }} />
                <Typography>info@grandstylevents.com</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <LocationOnIcon color="primary" sx={{ mr: 2 }} />
                <Typography>123 Event St, Lagos, Nigeria</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom color="secondary">
                Request a Quote
              </Typography>
              <TextField fullWidth label="Your Name" variant="outlined" margin="normal" />
              <TextField fullWidth label="Your Email" variant="outlined" margin="normal" />
              <TextField fullWidth label="Event Type" variant="outlined" margin="normal" />
              <Button variant="contained" color="primary" size="large" fullWidth sx={{ mt: 2 }}>
                Get Quote
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;