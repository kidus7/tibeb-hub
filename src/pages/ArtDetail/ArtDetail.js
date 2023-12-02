import React, { useState } from 'react';
import { Box, Grid, Typography, Button, IconButton, Stack, CardMedia } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ArtImg from '../../assets/img11.jpg';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer'

const sizeStyles = {
  '30X40': { width: '75%', height: 'auto' },
  '40X60': { width: '85%', height: 'auto' },
  '50X80': { width: '95%', height: 'auto' },
  '60X90': { width: '100%', height: 'auto' },
};

const ArtDetail = () => {
  const [selectedSize, setSelectedSize] = useState('50X80'); // Default selected size

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <Box>
      <Header />
      <Box sx={{ flexGrow: 1, m: 0, p: 0 }}> 
      <Box sx={{ pt: "4rem", pb: "5rem", pl: "10vw", pr: "10vw", backgroundColor: '#191919', color: 'white', display: 'flex', justifyContent: 'center', }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <CardMedia
              component="img"
              image={ArtImg}
              sx={{
                width: '100%',
                height: 'auto',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: "10px"
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              Sileshi Molla
            </Typography>
            <Typography variant="h4" component="h1" gutterBottom>
              My Demon
            </Typography>
            <Stack direction="row" spacing={1} mb={2}>
              {/* <Button variant="outlined">30X40</Button>
              <Button variant="outlined">40X60</Button>
              <Button variant="outlined">50X80</Button>
              <Button variant="outlined">60X90</Button> */}
              {Object.keys(sizeStyles).map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? 'contained' : 'outlined'}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </Button>
                ))}
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center" mb={2}>
              <IconButton color="primary" aria-label="remove" size="large">
                <RemoveIcon />
              </IconButton>
              {/* Quantity Display */}
              <Typography variant="h6">1</Typography>
              <IconButton color="primary" aria-label="add" size="large">
                <AddIcon />
              </IconButton>
            </Stack>
            <Typography variant="h6" gutterBottom>
              Price: 2000 ETB
            </Typography>
            <Button variant="contained" size="small" sx={{ width: "200px", mb: 2 }}>
              Buy Now
            </Button>
            <Button variant="outlined" size="small" sx={{ width: "200px", mb: 2 }} startIcon={<AddShoppingCartIcon />}>
              Add To Bag
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
    <Footer />
    </Box>
  );
};

export default ArtDetail;
