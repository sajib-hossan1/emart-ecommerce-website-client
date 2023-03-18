import React from 'react';
import Banner from '../Banner/Banner';
import BrowseProducts from '../BrowseProducts/BrowseProducts';
import Categories from '../Categories/Categories';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Partner from '../Partner/Partner';
import TopSale from '../TopSale/TopSale';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <TopSale/>
            <Categories/>
            <BrowseProducts/>
            <Features/>
            <Partner/>
            <Footer/>
        </div>
    );
};

export default Home;