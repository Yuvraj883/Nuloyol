// import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 
import HeroSection from '../components/HeroSection'; 
import AboutSection from '../components/AboutSection'; 
import TextContent from '../components/TextContent';
import TryNuloyal from '../components/TryNuloyal'; 
import SelfFunded from '../components/SelfFunded';
import WhatWeDo from '../components/WhatWeDo';
import FAQ from '../components/FAQ';



const Platform = ()=>{
    return(
        <>
        {/* <Navbar/> */}
        <HeroSection/>
        <WhatWeDo/>
        <AboutSection/>
        <SelfFunded/>
        <TextContent/>
        <TryNuloyal/>
        <FAQ/>
        <Footer/>
        
        </>
    )
}
export default Platform;
