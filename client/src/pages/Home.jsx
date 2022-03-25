import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import HomeContent from '../components/HomeContent/HomeContent';
import { getCookie, setCookie } from '../cookie/cookieHandler';

function Home() {

  return (
    <>
       <Header />
            <HomeContent />
       <Footer /> 
    </>
  )
}

export default Home;