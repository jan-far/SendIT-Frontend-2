import React, { Component } from 'react';
import Footer from '../../../Components/Footer';
import HeroSection from '../../../Components/HeroSection';
import InfoSection from '../../../Components/InfoSection';
import { homeObjOne } from '../../../Components/InfoSection/Data';
import Navbar from '../../../Components/Navbar';
import Services from '../../../Components/Services';
import Sidebar from '../../../Components/Sidebar';

class HomePage extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <Navbar />
        <HeroSection />
        <InfoSection {...homeObjOne} />
        <Services />
        <Footer />
      </>
    );
  }
}

export default HomePage;
