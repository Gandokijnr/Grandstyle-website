import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FeaturedEvents from "./components/FeaturedEvents";
import Awards from "./components/Awards";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00008B",
      light: "#4169E1",
      dark: "#000066",
    },
    secondary: {
      main: "#900000",
      light: "#DC143C",
      dark: "#660000",
    },
    background: {
      default: "#ffffff",
      paper: "#f8f9fa",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#6c757d",
    },
    success: {
      main: "#40E0D0",
      dark: "#00CED1",
    },
  },
  typography: {
    fontFamily: '"Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    h1: { 
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 700, 
      fontSize: "clamp(2.5rem, 5vw, 4rem)", 
      color: "#00008B",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h2: { 
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 700, 
      fontSize: "clamp(2rem, 4vw, 3.5rem)", 
      color: "#00008B",
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
      fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
      color: "#00008B",
      marginBottom: "1.5rem",
      lineHeight: 1.3,
    },
    h4: { 
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600, 
      fontSize: "clamp(1.25rem, 2.5vw, 2rem)", 
      color: "#900000",
      lineHeight: 1.3,
    },
    h5: { 
      fontWeight: 500, 
      fontSize: "clamp(1.125rem, 2vw, 1.5rem)", 
      color: "#900000",
      lineHeight: 1.4,
    },
    h6: { 
      fontWeight: 500, 
      fontSize: "clamp(1rem, 1.5vw, 1.25rem)", 
      color: "#1a1a1a",
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#1a1a1a",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: "#6c757d",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "9999px",
          textTransform: "none",
          fontWeight: 600,
          padding: "12px 32px",
          fontSize: "1rem",
          transition: "all 0.3s ease",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          },
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #00008B 0%, #4169E1 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #000066 0%, #00008B 100%)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(135deg, #900000 0%, #DC143C 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #660000 0%, #900000 100%)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Hero />
          <About />
          <Services />
          <FeaturedEvents />
          <Awards />
          <Gallery />
          <Testimonials />
          <Contact />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
