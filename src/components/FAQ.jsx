import './FAQ.css';

const FAQ = () => {
    return (
        <>
            <div className='FAQ'>
                <div className='FAQ-questions'>
                    <div className='question'>What is Chowdeck?</div>
                    <div className='question'>What locations do we currently deliver to?</div>
                    <div className='question'>What is Chowdeck wallet?</div>
                    <div className='question'>What is Chowscore?</div>
                    <div className='question'>What is Service fee?</div>
                  

                </div>
                <div className='FAQ-answers'>
                    <div className='answer'>
                        <p>Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FAQ; 