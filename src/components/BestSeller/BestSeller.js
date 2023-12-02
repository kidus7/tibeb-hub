import React from 'react';
import './BestSeller.css';
import BestSellerCard from '../BestSellerCard/BestSellerCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'; // Import Typography component

const BestSeller = ({ artPieces }) => {
  return (
    <Box sx={{ flexGrow: 1, pt: { xs: 54, sm: 2, md: 2}, pb: 5, backgroundColor: 'rgb(25,25,25)' }}>
      <Container sx={{ mt: 0, display: 'flex', flexDirection: 'column'}}>
        <Typography fontSize={{ xs: '1.7rem', sm: '1.7rem', md: '2rem'}} variant="h4" component="h2" gutterBottom style={{ paddingTop: '20px', color: 'white', textAlign: 'start' }}>
          <b>Best Selling Arts</b>
        </Typography>
        <hr style={{ width: '100%', margin: '0 auto', border: '1px solid white' }} />

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Grid container spacing={2} justifyContent={{ xs: 'center', sm: 'flex-start' }}>
            {artPieces.map((art) => (
              <Grid display="flex" justifyContent="center" item xs={12} sm={6} md={3} key={art.id}>
                <BestSellerCard
                  title={art.title}
                  imageUrl={art.imageUrl}
                  priceRange={art.priceRange}
                />
              </Grid>
            ))}
          </Grid>

        </Box>
      </Container>
    </Box>
  );
};

export default BestSeller;
