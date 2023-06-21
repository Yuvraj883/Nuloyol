import { useState } from 'react';
import './FAQ.css';


const FAQ = () => {
    const [question1, setQuestion1] = useState('true');
    const [question2, setQuestion2] = useState('false');
    const [question3, setQuestion3] = useState('false');
    const [question4, setQuestion4] = useState('false');
    const [question5, setQuestion5] = useState('false');


    const handleSetQuestion1 = () => {
        setQuestion1('true');
        setQuestion2('false');
        setQuestion3('false');
        setQuestion4('false');
        setQuestion5('false');

    }


    const handleSetQuestion2 = () => {
        setQuestion1('false');
        setQuestion2('true');
        setQuestion3('false');
        setQuestion4('false');
        setQuestion5('false');

    }

    const handleSetQuestion3 = () => {
        setQuestion1('false');
        setQuestion2('false');
        setQuestion3('true');
        setQuestion4('false');
        setQuestion5('false');

    }

    const handleSetQuestion4 = () => {
        setQuestion1('false');
        setQuestion2('false');
        setQuestion3('false');
        setQuestion4('true');
        setQuestion5('false');

    }

    const handleSetQuestion5 = () => {
        setQuestion1('false');
        setQuestion2('false');
        setQuestion3('false');
        setQuestion4('false');
        setQuestion5('true');

    }


    return (
        <>
            <div className='FAQ'>
                <div className='FAQ-questions'>
                    <h1>FAQs.</h1>
                    <div className={question1 === 'true' ? 'question active ' : 'question'} onClick={handleSetQuestion1}>What is Chowdeck?
                        <img className={question1 === 'true' ? '' : 'hidden'} src='../images/YellowStar.svg' alt="star-icon" />
                    </div>
                    <div className={question2 === 'true' ? 'question active' : 'question'} onClick={handleSetQuestion2}>What locations do we currently deliver to?
                        <img className={question2 === 'true' ? '' : 'hidden'} src='../images/YellowStar.svg' alt="star-icon" />
                    </div>
                    <div className={question3 === 'true' ? 'question active' : 'question'} onClick={handleSetQuestion3}>What is Chowdeck wallet?
                        <img className={question3 === 'true' ? '' : 'hidden'} src='../images/YellowStar.svg' alt="star-icon" />
                    </div>
                    <div className={question4 === 'true' ? 'question active' : 'question'} onClick={handleSetQuestion4}>What is Chowscore?
                        <img className={question4 === 'true' ? '' : 'hidden'} src='../images/YellowStar.svg' alt="star-icon" />
                    </div>
                    <div className={question5 === 'true' ? 'question active' : 'question'} onClick={handleSetQuestion5}>What is Service fee?
                        <img className={question5 === 'true' ? '' : 'hidden'} src='../images/YellowStar.svg' alt="star-icon" />
                    </div>


                </div>
                <div className='FAQ-answers'>
                    <h1>Ans.</h1>

                    <div className={question1 === 'true' ? 'answer active ' : 'hidden'}>
                        1.
                        <img className={question1 === 'true' ? '' : 'hidden'} src='../images/WhiteStar.svg' alt="star-icon" />

                        <p>Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.</p>
                    </div>
                    <div className={question2 === 'true' ? 'answer active' : 'hidden'}>
                        2.
                        <img className={question2 === 'true' ? '' : 'hidden'} src='../images/WhiteStar.svg' alt="star-icon" />

                        <p>Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.</p>
                    </div><div className={question3 === 'true' ? 'answer active' : 'hidden'}>
                        3.
                        <img className={question3 === 'true' ? '' : 'hidden'} src='../images/WhiteStar.svg' alt="star-icon" />

                        <p>Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.</p>
                    </div>
                    <div className={question4 === 'true' ? 'answer active' : 'hidden'}>
                        4.
                        <img className={question4 === 'true' ? '' : 'hidden'} src='../images/WhiteStar.svg' alt="star-icon" />

                        <p>Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.</p>
                    </div>
                    <div className={question5 === 'true' ? 'answer active' : 'hidden'}>
                        5.
                        <img className={question5 === 'true' ? '' : 'hidden'} src='../images/WhiteStar.svg' alt="star-icon" />

                        <p>Chowdeck is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default FAQ; 