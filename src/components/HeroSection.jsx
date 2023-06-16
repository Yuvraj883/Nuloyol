import './HeroSection.css';
// import HeroImage from './images/HeroImage.svg'
const HeroSection = ()=>{
    return(
        <>
        <section className='hero-section'>
            <div className='hero-text'>
            <h1>
                One Fluid Revenue Motion
            </h1>
            <p>
            Streamline your quote-to-revenue process. Issue proposals, close deals, manage contracts, and automate your subscriptions and billing in one unified platform.
            </p>
            <p>
                <span>CPQ</span><span>DealRoom</span><span>CPL</span><span>Billing</span>
            </p>
            <button className='request-demo'>Request Demo</button>
            </div>
            <div className='hero-image'>
                
                <img src="./images/HeroImage.svg" alt="Hero"/>
            </div>
        </section>

        </>
    )
}
export default HeroSection;