import './AboutSection.css';

const AboutSection = () => {
    return (
        <>
            <div className='about-section'>
               
            <section className='img'>
                    <img src="./images/AboutImg1.svg" alt="What we do"/>
                    <div className='text'>
                        <h1>What we do</h1>
                        <h3>Learn what we really do</h3>
                        <p className='p-right'>
                        Your sales team will love you because you provide them with the tools they need to work efficiently, close deals quickly, and achieve success.
                        </p>
                    </div>
                </section>

                <section className='img'>
                    <div className='text'>
                        <h1>How we do</h1>
                        <h3>Learn how we do that</h3>
                        <p className='p-left'>
                        Your sales team will love you because you provide them with the tools they need to work efficiently, close deals quickly, and achieve success.
                        </p>
                    </div>
                    <img src="./images/AboutImg2.svg" alt="How we do that"/>

                </section>

                <section className='img'>
                    <img src="./images/AboutImg3.svg" alt="What we do"/>
                    <div className='text'>
                        <h1>Who we are</h1>
                        <h3>Learn who your players really are</h3>
                        <p className='p-right'>
                        Your sales team will love you because you provide them with the tools they need to work efficiently, close deals quickly, and achieve success.
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}
export default AboutSection; 