import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FeaturedEvents from './components/FeaturedEvents';
import Awards from './components/Awards';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B35', // A vibrant orange
    },
    secondary: {
      main: '#004E89', // A deep blue
    },
    background: {
      default: '#FFFBF5', // A warm off-white
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, fontSize: '3.5rem' },
    h2: { fontWeight: 700, fontSize: '3rem' },
    h3: { fontWeight: 600, fontSize: '2.5rem' },
    h4: { fontWeight: 600, fontSize: '2rem' },
    h5: { fontWeight: 500, fontSize: '1.5rem' },
    h6: { fontWeight: 500, fontSize: '1.25rem' },
    body1: { 
      fontFamily: '"Lato", "Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '1.1rem',
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