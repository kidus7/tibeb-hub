import React from 'react';
import './HomeScreen.css';
import Header from "../../components/Header/Header"
import Hero from "../Hero/Hero"
import BestSeller from '../BestSeller/BestSeller';
import ArtWorks from '../ArtWorks/ArtWorks';
import Footer from '../Footer/Footer';
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

const HomeScreen = () => {
    const artPieces = [
        { title: "Pandora", imageUrl: Img1, priceRange: "2000 - 4000 ETB"  },
        { title: "Titan", imageUrl: Img2, priceRange: "1500 - 3000 ETB"  },
        { title: "Mars", imageUrl: Img3, priceRange: "3000 - 4000 ETB"  },
        { title: "Meskot", imageUrl: Img4, priceRange: "1500 - 3000 ETB"  },
        { title: "Ras", imageUrl: Img5, priceRange: "1000 - 3000 ETB"  },
        { title: "Nigus", imageUrl: Img6, priceRange: "4000 - 5000 ETB"  },
        { title: "Sitota", imageUrl: Img7, priceRange: "2000 - 3000 ETB"  },
        { title: "Selome", imageUrl: Img8, priceRange: "2500 - 4000 ETB"  },
        { title: "Shirshir", imageUrl: Img9, priceRange: "2000 - 4000 ETB"  },
        { title: "Sabi", imageUrl: Img10, priceRange: "1000 - 2000 ETB"  },
        { title: "Zemenegna", imageUrl: Img11, priceRange: "1500 - 3000 ETB"  },
        { title: "Antsebaraki", imageUrl: Img12, priceRange: "1000 - 2000 ETB"  },
    ]
    return (
        <div>
            <Header />
            <Hero />
            <BestSeller artPieces={artPieces}/>
            <ArtWorks artPieces={artPieces} />
            <Footer />
        </div>
    );
}

export default HomeScreen;
