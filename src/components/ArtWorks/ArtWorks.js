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
    <Box sx={{ flexGrow: 1, pt: 2,  pb: 5, backgroundColor: 'rgb(0,0,0)' }}>
      <Container sx={{ mt: 0, display: 'flex', flexDirection: 'column'}}>
        {/* Header and horizontal line */}
        <h2 className='art-header' >
          Arts
        </h2>
        <hr style={{ width: '100%', margin: '0 auto', border: '1px solid #C3EFC0', marginTop: '1rem' }} />

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
