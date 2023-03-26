import { React, useContext} from 'react';
import { AuthContext } from '../../contexts/UserContext';
import Banner from '../Banner/Banner';
import BrowseProducts from '../BrowseProducts/BrowseProducts';
import Categories from '../Categories/Categories';
import Features from '../Features/Features';
import Partner from '../Partner/Partner';
import TopSale from '../TopSale/TopSale';
import './Home.css'

const Home = () => {
    const user = useContext(AuthContext);
    console.log(user.user);
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