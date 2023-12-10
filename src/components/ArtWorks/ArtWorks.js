import React from 'react';
import './ArtWorks.css';
import BestSellerCard from '../BestSellerCard/BestSellerCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Masonry from "react-masonry-css"


const ArtWorks = ({ artPieces }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Box sx={{ flexGrow: 1, pt: 2,  pb: 5, backgroundColor: 'rgb(0,0,0)' }}>
      <Container sx={{ mt: 0, display: 'flex', flexDirection: 'column'}}>
        {/* Header and horizontal line */}
        <h2 className='art-header' >
          Arts
        </h2>
        <hr style={{ width: '100%', margin: '0 auto', border: '1px solid #C3EFC0', marginTop: '1rem' }} />

         <Masonry
          breakpointCols={breakpointColumnsObj}
          className={"my-masonry-grid"}
          columnClassName={"my-masonry-grid_column"}
        >
            {artPieces.map((art) => (
                <BestSellerCard
                  title={art.title}
                  imageUrl={art.imageUrl}
                  priceRange={art.priceRange}
                />
            ))}
             </Masonry>
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
