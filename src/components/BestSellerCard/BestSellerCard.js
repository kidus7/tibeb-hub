import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import AvatarImg from '../../assets/img14.jpg';
import { useNavigate } from "react-router-dom";
import styles from './BestSellerCard.module.css'

const BestSellerCard = ({ title, imageUrl, priceRange, proImg }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/artdetail`);
  };

  return (
    <div className={styles["my-masonry"]} onClick={handleClick}>
      <img src={imageUrl} style={{ width: "100%" }} alt="" />
      {/* Avatar Container */}
      <Box sx={{
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 2, // Ensure the avatar is above the gradient
      }}>
        {/* <Avatar
          alt="Artist"
          src={AvatarImg}
          sx={{
            width: 64,
            height: 64,
            borderRadius: "10px",
            // border: '1px solid white', // Optional: if you want a border around the avatar
          }}
        /> */}
      </Box>
      <div className={`${styles["my-masnry-description"]} flex`}>
        <div className={`${styles["my-masnry-user-box"]} flex align-items-center`}>
          <div className={styles["my-masnry-user-prof"]}>
            <img src={proImg} alt="" />
          </div>
          <div className={`${styles["my-masnry-user-prof-desc"]} flex flex-column`}>
            <h1>{title}</h1>
            <h3>{priceRange}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
