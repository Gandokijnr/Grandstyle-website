import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
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
      main: "#0056b3", // Deep blue
    },
    secondary: {
      main: "#dc3545", // Red
    },
    background: {
      default: "#ffffff", // White
      paper: "#f8f9fa", // Light gray for paper backgrounds
    },
    text: {
      primary: "#000000", // Black
      secondary: "#6c757d", // Dark gray for secondary text
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, fontSize: "3.5rem", color: "#0056b3" },
    h2: { fontWeight: 700, fontSize: "4rem", color: "#0056b3" },
    h3: {
      fontWeight: 600,
      fontSize: "2.0rem",
      color: "#0056b3",
      marginBottom: "2rem",
    },
    h4: { fontWeight: 600, fontSize: "2rem", color: "#dc3545" },
    h5: { fontWeight: 500, fontSize: "1.5rem", color: "#dc3545" },
    h6: { fontWeight: 500, fontSize: "1.25rem", color: "#000000" },
    body1: {
      fontSize: "1.1rem",
      color: "#000000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: 600,
          padding: "15px 30px",
          marginTop: "20px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Services />
          <FeaturedEvents />
          <Awards />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
