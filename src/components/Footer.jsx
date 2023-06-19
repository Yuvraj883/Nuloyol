import './Footer.css';

const Footer = ()=>{

    return(
        <>
        <div className='parent'>
        <div className="footer">
            <div className='title'>
                <p>NULOYAL</p>
            </div>
            <div >
                <h4>Learn More</h4>
                <ul>
                    <li>About</li>
                    <li>Press Releases</li>
                    <li>Career</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div >
                <h4>Our Features</h4>
                <ul>
                    <li>Analytics</li>
                    <li>Personalized</li>
                    <li>Offers</li>
                    <li>Shop</li>
                </ul>
            </div>
            <div >
                <h4>Externals</h4>
                <ul>
                    <li>Blog</li>
                    <li>Documentation</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div >
                <h4>Social</h4>
                <ul className='social'>
                    <li>
                        <img src='./images/facebook.svg' alt="fb-icon"/>
                    </li>
                    <li>
                        <img src='./images/insta.svg' alt="fb-icon"/>
                    </li>
                    <li>
                        <img src='./images/twitter.svg' alt="fb-icon"/>
                    </li>
                    <li>
                        <img src='./images/youtube.svg' alt="fb-icon"/>
                    </li>
                    
                </ul>
            </div>
        </div>
        <div>
            <hr></hr>
            <p className='copyright'>&copy; 2022 NULOYAL  All Rights Reserved</p>
        </div>
        </div>
        </>
    )
}
export default Footer;