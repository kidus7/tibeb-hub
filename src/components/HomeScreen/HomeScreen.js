import React, { useState } from 'react';
import styles from './HomeScreen.module.css';
import Header from "../../components/Header/Header"
import Hero from "../Hero/Hero"
import BestSeller from '../BestSeller/BestSeller';
import ArtWorks from '../ArtWorks/ArtWorks';
import MasonryLayout from '../MasonryLayout/MasonryLayout';
import Footer from '../Footer/Footer';
import ContainerCard from '../ContainerCard/ContainerCard';
import Dropdown from '../Dropdown/Dropdown'
import HeroUpdated from '../HeroUpdated/Header';
import Img1 from "../../assets/img13.jpg"
import Img2 from "../../assets/img12.jpg"
import Img3 from "../../assets/img11.jpg"
import Img4 from "../../assets/img8.jpg"
import Img5 from "../../assets/img9.jpg"
import Img6 from "../../assets/img7.jpg"
import Img7 from "../../assets/img15.jpg"
import Img8 from "../../assets/img14.jpg"
import Img9 from "../../assets/img6.png"
import Img10 from "../../assets/img16.jpg"
import Img11 from "../../assets/img5.jpg"
import Img12 from "../../assets/img18.png"
import images from "../../Jsons/Images.json"
import { Container } from '@mui/material';


const HomeScreen = () => {
    const [categoryImage, setCategoryImage] = useState(images.categories.all)

    const takeDdTitle = (ddTitle) => {
        setCategoryImage(() => {
            let categoryChoose = Object.keys(images.categories).filter(item => {
                const titleSplited = ddTitle.toLowerCase().split(" ")[0]
                return item.toLowerCase().includes(titleSplited)
            })
            return [...images.categories[categoryChoose]]
        })
    }

    const artPieces = [
        { title: "Pandora", imageUrl: Img1, priceRange: "2000 - 4000 ETB", proImg: images.categories.all[0].user.src },
        { title: "Titan", imageUrl: Img2, priceRange: "1500 - 3000 ETB", proImg: images.categories.all[1].user.src },
        { title: "Mars", imageUrl: Img3, priceRange: "3000 - 4000 ETB", proImg: images.categories.all[2].user.src },
        { title: "Meskot", imageUrl: Img4, priceRange: "1500 - 3000 ETB", proImg: images.categories.all[3].user.src },
        { title: "Ras", imageUrl: Img5, priceRange: "1000 - 3000 ETB", proImg: images.categories.all[4].user.src },
        { title: "Nigus", imageUrl: Img6, priceRange: "4000 - 5000 ETB", proImg: images.categories.all[5].user.src },
        { title: "Sitota", imageUrl: Img7, priceRange: "2000 - 3000 ETB", proImg: images.categories.all[6].user.src },
        { title: "Selome", imageUrl: Img8, priceRange: "2500 - 4000 ETB", proImg: images.categories.all[7].user.src },
        { title: "Shirshir", imageUrl: Img9, priceRange: "2000 - 4000 ETB", proImg: images.categories.all[8].user.src },
        { title: "Sabi", imageUrl: Img10, priceRange: "1000 - 2000 ETB", proImg: images.categories.all[9].user.src },
        { title: "Zemenegna", imageUrl: Img11, priceRange: "1500 - 3000 ETB", proImg: images.categories.all[10].user.src },
        { title: "Antsebaraki", imageUrl: Img12, priceRange: "1000 - 2000 ETB", proImg: images.categories.all[11].user.src },
    ]
    const ddItems = [
        {
            id: 1,
            title: "All",
            active: true
        },
        {
            id: 2,
            title: "Topic Images",
            active: false
        },
        {
            id: 3,
            title: "Nature Images",
            active: false
        },
        {
            id: 4,
            title: "NFT Images",
            active: false
        },
        {
            id: 5,
            title: "Space Images",
            active: false
        }
    ]

    return (
        <div>
            <Header />
            <Hero />
            {/* <HeroUpdated /> */}
            <Container maxWidth="lg" className="flex justify-content-center" style={{ marginTop: "50px", padding: '50px' }}>
                <ContainerCard>
                    <div className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}>
                        <h1>All images</h1>
                        <Dropdown title="All Images" items={ddItems} liftingDdTextUp={takeDdTitle} />
                    </div>
                    <MasonryLayout images={categoryImage} />
                </ContainerCard>
            </Container>
            <BestSeller artPieces={artPieces} />
            <ArtWorks artPieces={artPieces} />
            <Footer />
        </div>
    );
}

export default HomeScreen;
