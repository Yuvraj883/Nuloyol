import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TextContent from "../components/TextContent";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import SocialMediaSection from "../components/SocialMediaSection";
import RevenueHub from "../components/RevenueHub";
import TryNuloyal from "../components/TryNuloyal";

const Home=()=> {
    console.log("Social media section");
    return (
        <>
            <Navbar/>
            <HeroSection/>
            <TextContent/>
            <AboutSection/>
            <RevenueHub/>
            <SocialMediaSection/>            
            <TryNuloyal/>
            <Footer/>
            
        </>
    )

}
export default Home; 