import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import AvatarImg from '../../assets/img14.jpg';
import { useNavigate } from "react-router-dom"; 

const BestSellerCard = ({ title, imageUrl, priceRange }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/artdetail`, { replace: true });
  };

  return (
    <Card onClick={handleClick} sx={{
      maxWidth: {xs: '90%', sm: '90%', md: 300},
      height: 400,
      pb: 0,
      mt: 3,
      position: 'relative',
      overflow: 'hidden',
      transition: 'transform .5s',
      borderRadius: "20px",
      '&:hover': {
        transform: 'scale(1.03)', // Slightly scale up the card on hover
      },
      '&:hover .content': {
        opacity: 1, // Show the content on hover
        transform: 'translateY(-100%)', // Slide up the content on hover
      },
      '&:hover .gradient': {
        opacity: 0, // Hide the gradient on hover to reveal content
      }
    }}>
      <CardMedia
        component="img"
        image={imageUrl}
        alt={title}
        sx={{
          height: '100%',
          objectFit: 'cover',
        }}
      />
      {/* Gradient Overlay */}
      <Box className="gradient" sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(180deg, transparent, rgba(0,0,0,.7))',
        transition: 'opacity .5s',
        zIndex: 1, // Ensure the gradient is above the image
      }} />
      {/* Avatar Container */}
      <Box sx={{
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 2, // Ensure the avatar is above the gradient
      }}>
        <Avatar
          alt="Artist"
          src={AvatarImg}
          sx={{
            width: 64,
            height: 64,
            borderRadius: "10px",
            border: '2px solid white', // Optional: if you want a border around the avatar
          }}
        />
      </Box>
      {/* Content */}
      <CardContent className="content" sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'transparent',
        color: 'white',
        visibility: 'visible',
        opacity: 1,
        transform: 'translateY(100%)',
        transition: 'opacity .5s, transform .5s',
        zIndex: 1, // Ensure the content is above the image but below the gradient
        p: 2,
      }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
          {priceRange}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BestSellerCard;
