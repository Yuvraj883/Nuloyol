import './FormSection.css';

const FormSection = () => {
    return (
        <>
            <div className='main'>
                <div className='explore-area'>
                    <h1>Explore how Nuloyal can work for you</h1>
                    <p>Streamline your quote-to-revenue process. Issue proposals, close deals, manage contracts, and automate your subscriptions and billing in one unified platform.</p>
                    <p className='subscript'>Trusted by 50% of fortune 1000</p>
                    <div className='contact-info'>
                    <div className="flex1">
                                <img src="./images/Phone.svg" alt="phone-icon" />
                                <div>
                                    <p className='contact-info-p'>PHONE </p>

                                    <span>111 1111 111</span>
                                </div>
                            </div>
                            <div className="flex1">
                                <img src="./images/Email.svg" alt="phone-icon" />
                                <div>
                                    <p className='contact-info-p'>E-MAIL </p>

                                    <span>info@company.com</span>
                                </div>
                            </div>
                            <div className="flex1">
                                <img src="./images/Email.svg" alt="phone-icon" />
                                <div>
                                    <p className='contact-info-p'>HELPDESK </p>

                                    <span>https://helpdesk.com</span>
                                </div>
                            </div>
                    </div>
                      
                </div>

                <div className='form'>
                    <form >
                        <label>
                            Full Name
                        </label>
                        <input type='text' placeholder='Alex Smith' />
                        <label>Work Email</label>
                        <input type='email' placeholder='alex@email.com' />
                        <div className='phone-date'>
                            <div>
                                <label >Phone number</label>
                                <input type="tel" placeholder='999999999' />
                            </div>

                            <div>
                                <label>Date</label>
                                <input type='date' placeholder='DD/MM/YYYY' />


                            </div>


                        </div>
                        <label>How can we help?</label>
                        <textarea type='text' />
                        <input className='submit-btn' type="submit" />
                        <p>You verify that this info is correct</p>

                    </form>

                </div>

            </div>
        </>
    )
}
export default FormSection; 

