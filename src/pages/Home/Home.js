import { React } from 'react';
import Banner from '../Banner/Banner';
import BrowseProducts from '../BrowseProducts/BrowseProducts';
import Categories from '../Categories/Categories';
import Features from '../Features/Features';
import Partner from '../Partner/Partner';
import TopSale from '../TopSale/TopSale';
import './Home.css'
import { useScrollTop } from '../../hooks/useScrollTop';

const Home = () => {
    useScrollTop();
    return (
        <div>
            <Banner/>
            <TopSale/>
            <Categories/>
            <BrowseProducts/>
            <Features/>
            <Partner/>
        </div>
    );
};

export default Home;