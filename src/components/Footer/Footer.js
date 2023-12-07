import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram, CreditCard } from '@mui/icons-material'; // Importing icons for demonstration

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'rgb(44,42,42)', // Adjusted to a primary color for demonstration
        color: 'secondary.contrastText', // Adjusted to a contrasting text color
        py: 6, // Padding for top and bottom
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Company Detail
            </Typography>
            <Link href="#" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: '#C3EFC0' } }}>
              Customer Support
            </Link>
            <br />
            <Link href="#" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { color: '#C3EFC0' } }}>
              About Us
            </Link>
          </Grid>
          {/* Our Information */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Our Information
            </Typography>
            <Link href="#" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': {  color: '#C3EFC0'  } }}>
              Return Policy
            </Link>
            <br />
            <Link href="#" sx={{ color: 'inherit', textDecoration: 'none', '&:hover': {  color: '#C3EFC0' } }}>
              Terms of Service
            </Link>
            {/* Additional links can be added here */}
          </Grid>
          {/* Social */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Social
            </Typography>
            <Facebook sx={{ marginRight: 1 }} />
            <Twitter sx={{ marginRight: 1 }} />
            <Instagram />
            {/* Additional social media icons can be added here */}
          </Grid>
        </Grid>
        {/* Payment Methods and Social Icons */}
        <Box mt={5} textAlign="center">
          <CreditCard sx={{ marginRight: 1 }} />
          {/* Other payment method icons can be added here */}
          <Typography variant="body2">Secure Payment Methods</Typography>
        </Box>
        <Box mt={2} textAlign="center">
          <Typography variant="subtitle1" component="p">
          Copyright © {new Date().getFullYear()} ጥበብHub
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
