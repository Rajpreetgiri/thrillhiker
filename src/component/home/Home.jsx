import React from 'react';
import Header from './Header';
import BottomHeader from './BottomHeader';
import Package from './Package';
import Destination from './TopDestination';
import BottomBanner from './BottomBanner';
import Blog from './Blogs/Blog';
import ContactForm from './ContactUS/ContactUs';
import Footer from '../home/footer/Footer';
import PopularPackage from '../home/TravelCategory/PopularPackage';

function Home() {
    return (
        <>
            <Header />
            <BottomHeader />
            <Package />
            <Destination />
            <BottomBanner />
            <Blog />
            <ContactForm />
            <PopularPackage />
            <Footer />
        </>
    );
}

export default Home;
