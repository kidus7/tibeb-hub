// Hero.js

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import HeroImage from '../../assets/img13.jpg';
import ArtCardImage1 from '../../assets/img13.jpg';
import ArtCardImage2 from '../../assets/img11.jpg';
import ArtCardImage3 from '../../assets/img4.jpg';
import ArtCardImage4 from '../../assets/img8.jpg';
import ArtCard from '../ArtCard/ArtCard';

const Hero = () => {
  const [heroImage, setHeroImage] = useState(HeroImage); // Default hero image
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const artCards = [
    { id: 1, title: 'Art 1', image: ArtCardImage1 },
    { id: 2, title: 'Art 2', image: ArtCardImage2 },
    { id: 3, title: 'Art 3', image: ArtCardImage3 },
    { id: 4, title: 'Art 4', image: ArtCardImage4 },
  ];

  useEffect(() => {
    // Automatically change the active card every 3 seconds
    const intervalId = setInterval(() => {
      setActiveCardIndex((prevIndex) =>
        prevIndex === artCards.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [artCards.length]);

  useEffect(() => {
    // Update the hero image when the active card index changes
    setHeroImage(artCards[activeCardIndex].image);
  }, [activeCardIndex, artCards]);

  return (
    <Box sx={{ flexGrow: 1, pt: 2, backgroundColor: 'rgb(0,0,0)' }}>
      <Container
        sx={{
          mt: 0,
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100vh - 0px)',
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              width: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Grid container>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  image={heroImage}
                  alt="Hero"
                  sx={{ width: '100%', height: 500 }} // Fixed height
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-end',
                }}
              >
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    sx={{ fontFamily: 'fantasy' }}
                  >
                    Get the best art for yourself
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontFamily: 'fantasy' }}
                  >
                    Explore the collection of arts of people around Ethiopia.
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: 2,
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'flex-start' },
            zIndex: { xs: '4', sm: '1' },
          }}
        >
          {artCards.map((card, index) => (
            <ArtCard
              key={card.id}
              title={card.title}
              image={card.image}
              isActive={index === activeCardIndex}
              sx={{
                width: { xs: '100%', sm: 'auto' },
                mb: { xs: 2, sm: 0 },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
