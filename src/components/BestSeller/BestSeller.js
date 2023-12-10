import React from 'react';
import './BestSeller.css';
import BestSellerCard from '../BestSellerCard/BestSellerCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'; // Import Typography component
// import styles from './BestSellerCard.module.css'
import Masonry from "react-masonry-css"


const BestSeller = ({ artPieces }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <Box sx={{ flexGrow: 1, pt: { xs: 54, sm: 2, md: 2}, pb: 5, backgroundColor: 'rgb(0,0,0)' }}>
      <Container sx={{ mt: 0, display: 'flex', flexDirection: 'column'}}>
        <h2 className='best-seller-header'>
          Best Sellers
        </h2>
        <hr style={{ width: '100%', margin: '0 auto', border: '1px solid #C3EFC0', marginTop: "1rem" }} />

        {/* <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}> */}
        {/* <Grid container spacing={2} justifyContent={{ xs: 'center', sm: 'flex-start' }}> */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={"my-masonry-grid"}
          columnClassName={"my-masonry-grid_column"}
        >
            {artPieces.map((art) => (
              // <Grid display="flex" justifyContent="center" item xs={12} sm={6} md={3} key={art.id}>
                <BestSellerCard
                  title={art.title}
                  imageUrl={art.imageUrl}
                  priceRange={art.priceRange}
                  proImg={art.proImg}
                />
              // </Grid>
            ))}
          {/* </Grid> */}

        {/* </Box> */}
        </Masonry>
      </Container>
    </Box>
  );
};

export default BestSeller;
