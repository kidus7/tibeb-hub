import React from 'react';
import styles from "./MasonryLayout.module.css"
import Masonry from "react-masonry-css"
import MasonryBox from './MasonryBox/MasonryBox';

const MasonryLayout = ({ images }) => {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };
    
      return (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles["my-masonry-grid"]}
          columnClassName={styles["my-masonry-grid_column"]}
        >
          {images.map(item => (
            <MasonryBox 
              key={item.id} 
              wallSrc={item.src} 
              userProf={item.user.src} 
              userName={item.user.name} 
              userJob={item.user.job} 
            />
          ))}
        </Masonry>
      )
    }

export default MasonryLayout;
