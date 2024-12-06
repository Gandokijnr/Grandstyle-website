import React from "react";
import {
  Typography,
  Box,
  Container,
  Button,
  TextField,
  Grid,
  Paper,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";
import { WhatsApp } from "@mui/icons-material";

const Contact: React.FC = () => {
  return (
    <Box id="contact" py={12} bgcolor="background.default">
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h3" textAlign="center" color="primary">
            Let's Plan Your Next Event
          </Typography>
          <Typography
            variant="body2"
            className="text-center"
            gutterBottom
            mb={4}
          >
            If you're looking for a partner to help you create an unforgettable
            event, get in touch with us today!
          </Typography>
        </motion.div>
        <Paper
          elevation={3}
          sx={{ p: 4, borderRadius: "16px", bgcolor: "background.paper" }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Quick Contact
              </Typography>
              <Box display="flex" alignItems="center" mb={2} mt={6}>
                <PhoneIcon color="primary" sx={{ mr: 2 }} />
                <Typography>+234 806 509 8130</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <WhatsApp color="primary" sx={{ mr: 2 }} />
                <Typography>+234 813 763 5064</Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <EmailIcon color="primary" sx={{ mr: 2 }} />
                <Typography>info@grandstylevents.com</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <LocationOnIcon color="primary" sx={{ mr: 2 }} />
                <Typography>Ondo, Lagos and Abuja, Nigeria</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Request a Quote
              </Typography>
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Your Email"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Event Type"
                variant="outlined"
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                sx={{ mt: 2 }}
              >
                Get Quote
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Box
          mt={5}
          textAlign="center"
          sx={{
            padding: "16px",
            borderRadius: "16px",
            backgroundColor: "background.paper",
          }}
          className="text-center"
        >
          <Typography variant="h6">
            Note that Operation is Worldwide, Let's help you plan your next
            event
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
