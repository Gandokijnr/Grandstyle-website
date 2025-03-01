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
import { styled } from "@mui/material/styles";

// Styled components for enhanced UI
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: "16px",
  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
  borderTop: "4px solid #1976d2", // Blue accent border
}));

const ContactField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    "&:hover fieldset": {
      borderColor: "#1976d2",
    },
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1.5),
  fontWeight: 600,
  borderRadius: "10px",
  backgroundColor: "#1976d2",
  "&:hover": {
    backgroundColor: "#1565c0",
    boxShadow: "0 6px 20px rgba(25, 118, 210, 0.3)",
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: "rgba(25, 118, 210, 0.1)",
  borderRadius: "50%",
  marginRight: "16px",
  display: "inline-flex",
}));

const BlinkingText = styled(Typography)`
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: blink 1.5s infinite;
`;

const Contact: React.FC = () => {
  return (
    <Box id="contact" py={12} bgcolor="#f8f9fa">
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            textAlign="center"
            sx={{
              color: "#1e293b",
              fontWeight: "bold",
              mb: 1,
            }}
          >
            Let's Plan Your Next Event
          </Typography>
          <Typography
            variant="body1"
            className="text-center"
            sx={{
              color: "#64748b",
              maxWidth: "650px",
              mx: "auto",
              mb: 4,
            }}
          >
            If you're looking for a partner to help you create an unforgettable
            event, get in touch with us today!
          </Typography>
        </motion.div>
        <StyledPaper elevation={3}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "#1976d2",
                  fontWeight: 600,
                }}
              >
                Quick Contact
              </Typography>
              <Box display="flex" alignItems="center" mb={2} mt={6}>
                <IconContainer>
                  <PhoneIcon color="primary" />
                </IconContainer>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "#64748b", fontWeight: 500 }}
                  >
                    Phone
                  </Typography>
                  <Typography sx={{ color: "#1e293b" }}>
                    <a
                      href="tel:+2348065098130"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      +234 806 509 8130
                    </a>
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <IconContainer>
                  <WhatsApp color="primary" />
                </IconContainer>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "#64748b", fontWeight: 500 }}
                  >
                    WhatsApp
                  </Typography>
                  <Typography sx={{ color: "#1e293b" }}>
                    <a
                      href="https://wa.me/2348137635064"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      +234 813 763 5064
                    </a>
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <IconContainer>
                  <EmailIcon color="primary" />
                </IconContainer>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "#64748b", fontWeight: 500 }}
                  >
                    Email
                  </Typography>
                  <Typography sx={{ color: "#1e293b" }}>
                    <a
                      href="mailto:info@grandstylevents.com"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      info@grandstylevents.com
                    </a>
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center">
                <IconContainer>
                  <LocationOnIcon color="primary" />
                </IconContainer>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ color: "#64748b", fontWeight: 500 }}
                  >
                    Locations
                  </Typography>
                  <Typography sx={{ color: "#1e293b" }}>
                    Ondo, Lagos and Abuja, Nigeria
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "#1976d2",
                  fontWeight: 600,
                }}
              >
                Request a Quote
              </Typography>
              <ContactField
                fullWidth
                label="Your Name"
                variant="outlined"
                placeholder="Enter your full name"
                margin="normal"
              />
              <ContactField
                fullWidth
                label="Your Email"
                variant="outlined"
                placeholder="Enter your email address"
                margin="normal"
              />
              <ContactField
                fullWidth
                label="Event Type"
                variant="outlined"
                placeholder="What kind of event are you planning?"
                margin="normal"
              />
              <ContactButton
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                sx={{ mt: 2 }}
              >
                Get Your Free Quote
              </ContactButton>
            </Grid>
          </Grid>
        </StyledPaper>
        <Box
          mt={5}
          textAlign="center"
          sx={{
            padding: "16px",
            borderRadius: "16px",
            color: "white",
            boxShadow: "0 4px 20px rgba(25, 118, 210, 0.25)",
          }}
        >
          <BlinkingText variant="h6" fontWeight="bold">
            Note that Operation is Worldwide, Let's help you plan your next
            event
          </BlinkingText>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
