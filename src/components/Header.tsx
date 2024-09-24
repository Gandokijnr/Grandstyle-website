import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null); // Track the active nav item

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (item: string) => {
    setActiveNavItem(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = ['About', 'Services', 'Gallery', 'Testimonials', 'Contact'];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: 'background.paper' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Button
              component="a"
              href={`#${item.toLowerCase()}`}
              sx={{
                width: '100%',
                justifyContent: 'center',
                color: 'text.primary',
                backgroundColor: activeNavItem === item ? 'rgba(0, 86, 179, 0.1)' : 'transparent',
              }}
              onClick={() => handleNavClick(item)}
            >
              <ListItemText primary={item} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
          boxShadow: isScrolled ? 1 : 0,
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: isScrolled ? 'primary.main' : 'white' }}>
            Grandstyle Events
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                href={`#${item.toLowerCase()}`}
                sx={{
                  color: isScrolled ? 'text.primary' : 'white',
                  backgroundColor: activeNavItem === item ? 'rgba(0, 86, 179, 0.1)' : 'transparent', // Keep active background color
                  '&:hover': {
                    backgroundColor: 'rgba(0, 86, 179, 0.1)',
                  },
                }}
                onClick={() => handleNavClick(item)} // Set the active item when clicked
              >
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
