import React, { useState } from 'react';
import '../styles/TrackOrderPage.css';
import Header from './Header';
import TrackorderSlider from './TrackorderSlider'
import Footer from './Footer';

const TrackOrderPage: React.FC = () => {

    // FAQ :---------------------


    interface FaqItem {
        question: string;
        answer: string;
    }

    const faqData: Record<string, FaqItem[]> = {
        General: [
            { question: "What if my vehicle model is not on the product listing page?", answer: "It is easy to place an order on A-Premium.com. Please click https://a-premium.com/guidevideo for reference." },
            { question: "How to check my order status?", answer: "A Vehicle Identification Number (VIN) is a unique code assigned to every motor vehicle. You can find it on the vehicle's registration documents or on the vehicle itself, often near the windshield or inside the driver's door." },
            { question: "Is there a maximum order size?", answer: "For the vehicle model that is not on the product listing page, please kindly message us for more information." },
            { question: "Will I be notified once my order is shipped out?", answer: "A Vehicle Identification Number (VIN) is a unique code assigned to every motor vehicle. You can find it on the vehicle's registration documents or on the vehicle itself, often near the windshield or inside the driver's door." },
            { question: "How to change my billing address?", answer: "For the vehicle model that is not on the product listing page, please kindly message us for more information." },
            { question: "How to modify my shipping address?", answer: "A Vehicle Identification Number (VIN) is a unique code assigned to every motor vehicle. You can find it on the vehicle's registration documents or on the vehicle itself, often near the windshield or inside the driver's door." },
        ],
    };

    // State to manage the currently open FAQ
    const [openIndex, setOpenIndex] = useState<number>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(index === openIndex ? -1 : index); // Toggle open and close
    };

    // **************************
    const [email, setEmail] = useState('');
    const [orderNumber, setOrderNumber] = useState('');
    const [errors, setErrors] = useState<{ email?: string; orderNumber?: string }>({});

    const validateForm = () => {
        const newErrors: { email?: string; orderNumber?: string } = {};

        if (!email) {
            newErrors.email = 'Please input email!';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Provide a valid email address.';
        }

        if (!orderNumber) {
            newErrors.orderNumber = 'Order Number can not be empty';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleTrackButtonClick = () => {
        if (validateForm()) {
            // Proceed with form submission or tracking logic
            console.log('Form is valid, proceeding with tracking...');
        }
    };

    return (
        <>
            <Header />
            <section className="Main-Track-Page">
                <div className="mainTrackContainer">
                    <h1 className="title-track-order">Track Order</h1>
                    <p className="subtitle">Track your order here. Find a single order with the form below.</p>
                    <div className="formContainer">
                        <label htmlFor="email" className="label">Email</label>
                        <input
                            type="email"
                            id="email"
                            className={`input ${errors.email ? 'input-error' : ''}`}
                            placeholder="Please Enter"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                        <label htmlFor="orderNumber" className="label">Order Number</label>
                        <input
                            type="text"
                            id="orderNumber"
                            className={`input ${errors.orderNumber ? 'input-error' : ''}`}
                            placeholder="Please Enter"
                            value={orderNumber}
                            onChange={(e) => setOrderNumber(e.target.value)}
                        />
                        {errors.orderNumber && <p className="error-message">{errors.orderNumber}</p>}
                        <button className="trackButton" onClick={handleTrackButtonClick}>Track</button>
                    </div>
                    <div className="orContainer">
                        <span className="orText">Or</span>

                    </div>
                    <div className='orContainer-After-buttons'>
                        <div className="authButtons">
                            <button className="authButton">SIGN UP</button>
                            <button className="authButton">LOG IN</button>
                        </div>
                    </div>

                    <p className="infoText">Log In to see your entire order history or Sign Up using your order email to unlock more.</p>
                </div>
                {/* Faq Chat Support Button */}


                <section className="Faq-Chat-S-Button">
                    <div className="faq-chat-header">
                        <h2>Need any help?</h2>
                    </div>
                    <section className="MainChat-support-F1">
                        <span className="chat-text">
                            24-hour service for you
                        </span>
                        <button className="chat-button">
                            <img src="/images/TrackOrder/Headphones.svg" alt="Chat icon" className="chat-icon" />
                            Chat with us
                        </button>
                    </section>
                </section>
                {/* FAQ Section */}
                <section className="faq-section">
                    <section className='faq-s1-Main'>
                        <h2 className="faq-title">FAQs</h2>


                    </section>
                    <div className="faq-container">
                        {faqData.General.map((item, index) => (
                            <div
                                key={index}
                                className={`faq-item ${index === openIndex ? 'open' : ''}`}
                                onClick={() => handleToggle(index)}
                            >
                                <div className="faq-question">
                                    <span>{item.question}</span>
                                    <span className={`arrow ${index === openIndex ? 'down' : 'up'}`}>▲</span>
                                </div>
                                {index === openIndex && <div className="faq-answer">{item.answer}</div>}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Close */}
                <section className='faq-s1-Main-M2'>
                    <h2 className="faq-title">Recently Viewed Products</h2>
<div className='Track-recent-slider'>
    < TrackorderSlider />

</div>

                </section>
            </section>
        
        < Footer />
        </>


    );
};

export default TrackOrderPage;
