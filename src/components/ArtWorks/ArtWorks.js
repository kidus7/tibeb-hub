import React from 'react';
import './ArtWorks.css';
import BestSellerCard from '../BestSellerCard/BestSellerCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ArtWorks = ({ artPieces }) => {
  return (
    <Box sx={{ flexGrow: 1, pt: 2,  pb: 5, backgroundColor: 'rgb(25,25,25)' }}>
      <Container sx={{ mt: 0, display: 'flex', flexDirection: 'column'}}>
        {/* Header and horizontal line */}
        <Typography variant="h4" component="h2" gutterBottom style={{ paddingTop: "10px", color: 'white', textAlign: 'start' }}>
          <b>Art Collection</b>
        </Typography>
        <hr style={{ width: '100%', margin: '0 auto', border: '1px solid white' }} />

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'start' }}>
          <Grid container spacing={2}>
            {artPieces.map((art) => (
              <Grid item xs={12} sm={6} md={3} key={art.id}>
                <BestSellerCard
                  title={art.title}
                  imageUrl={art.imageUrl}
                  priceRange={art.priceRange}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button variant="contained" color="primary" sx={{ bgcolor: '#324a61' }}>
            Load More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ArtWorks;
