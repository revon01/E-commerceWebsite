import React from 'react';
import Data from '../../utils/Data.json'; 
import '../../styles/Question.css'
function Question() {
    const { ContactUs } = Data;

    return (
        <div className='question-section'>
            <div>
                <h2>Any other questions?</h2>
                <p>We’re here to help. You can contact us: Weekdays: 6am to 6pm PT, Weekends: 6am to 6pm PT.</p>
            </div>
            <div className='contact-main'>
                <div className='contact-method'>
                    <img src={ContactUs.method1} alt="" />
                    <h3>Call</h3>
                    <p>012-345-6789</p>
                </div>
                <div className='contact-method'>
                    <img src={ContactUs.method2} alt="" />
                    <h3>Email</h3>
                    <p>Contact Us</p>
                </div>
                <div className='contact-method'>
                    <img src={ContactUs.method3} alt="" />
                    <h3>Chat</h3>
                    <p>Chat Now</p>
                </div>
                <div className='contact-method'>
                    <img src={ContactUs.method4} alt="" />
                    <h3>Message</h3>
                    <p>Support Now</p>
                </div>
            </div>
        </div>
    );
}

export default Question;

