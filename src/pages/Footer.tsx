import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import '../styles/style-r.css';
import Faq from './Faq'

const Footer = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');

  
  return (







    <footer className="MyFooter">
      <div className="normalFooterContainer maxWidthContainer" role="table">
        <div role="row" className="footTop">
          <div role="cell" className="col-6">
            <div className="leftContact">
              <div className="title">CONTACT US</div>
              <div className="contactItem">
                <div className="icon">
                
                </div>
                <div className="contactText">
                  <div className="lft-cht">
                  <img src="/Footer Images/chat.png" alt="Chat Icon" className="chatIcon" />
                    
                  </div>
                  <div className="textLine">
                    <div className="liveChatBox">Live Chat
                    <img src="/Footer Images/Arrow icon.png" alt="Chat Icon" className="chatIcon" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="normal_contactItem__x8TXo false">
  <div className="normal_icon__VbhQ5">
    <img src="/Footer Images/Phone.png" alt="Contact Icon" className="normal_imgIcon__84tqs" style={{ width: "24px", height: "24px" }} />
  </div>
  <div className="normal_contactText__zN5AP">
    <div className="normal_textLabel__ulUQ_">Phone</div>
    <div className="normal_textLine__moKeB">
    <a href='tel:54646546466'>+ 54646546466</a>
    </div>
  </div>
</div>

<div className="normal_contactItem__x8TXo false">
  <div className="normal_icon__VbhQ5">
    <img src="/Footer Images/Email.png" alt="Email Icon" className="normal_imgIcon__84tqs" style={{ width: "24px", height: "24px" }} />
  </div>
  <div className="normal_contactText__zN5AP">
    <div className="normal_textLabel__ulUQ_">
      Email:</div>
    <div className="normal_textLine__moKeB">
    <a href='mailto:Lorempesum.com'>Lorempesum.com</a>
      </div>
  </div>
</div>

<div className="normal_contactItem__x8TXo false">
  <div className="normal_icon__VbhQ5">
    <img src="/Footer Images/Help guide.png" alt="Help Icon" className="normal_imgIcon__84tqs" style={{ width: "40px", height: "30px" }} />
  </div>
  <div className="normal_contactText__zN5AP">
    <div className="normal_textLabel__ulUQ_">Help Guide:</div>
    <div className="normal_textLine__moKeB">Seek expert help for inquiries and concerns</div>
  </div>
</div>

<div className="normal_contactItem__x8TXo false">
  <div className="normal_icon__VbhQ5">
    <img src="/Footer Images/Feedback.png" alt="Feedback Icon" className="normal_imgIcon__84tqs" style={{ width: "24px", height: "24px" }} />
  </div>
  <div className="normal_contactText__zN5AP">
    <div className="normal_textLabel__ulUQ_">Feedback</div>

  </div>
</div>
          </div>
     
          <div role="cell" className="col-4">
            <div className="leftService">
              <div className="title">POPULAR MAKES</div>
              <Link href="#">
                Chevrolet Parts
              </Link>
              <Link href="#">
                Ford Parts
              </Link>
              <Link href="#">
                GMC Parts
              </Link>
              <Link href="#">
                Dodge Parts
              </Link>
              <Link href="#">
                Toyota Parts
              </Link>
              <Link href="#">
                Show more
              </Link>
            </div>
          </div>
          <div role="cell" className="col-4">
            <div className="leftService">
              <div className="title">CUSTOMER SERVICE</div>
              <a href="/Help-center">
                Help Center
              </a>
              <a href="/TrackOrderPage">
              Track Order
              </a>
              <a href="/Member-Policy">
              Member Policy
              </a>
             
              <Link href="#">
                Return Policy
              </Link>
              <Link href="#">
                Shipping Policy
              </Link>
              <Link href="#">
                Warranty Policy
              </Link>
              <Link href="#">
                Payment Policy
              </Link>
              <Link href="#">
                Term of Use
              </Link>
            </div>
          </div>
          <div role="cell" className="col-4">
            <div className="leftService">
              <div className="title">INFORMATION</div>

              <a href="/about">
              About Us
               </a>
               <a href="/Auth">
               My Account
               </a>
               <a href="/Auth">
               My Points
               </a>
             
            
              <a href="/Faq">
               FAQS
               </a>
               <a href="/BlogPage">
               Blog
               </a>
              
               <a href="/ReviewsPage">
               Customer Reviews
               </a>
               <a href="/Affiliate-Program">
               Affiliate Program
               </a>
              
            </div>
          </div>
          <div role="cell" className="col-4">
            <div className="leftService">
              <div className="title2">SUBSCRIBE TO GET 10% OFF for Your Next Order
                 </div>
              <form>
                <input
                  type="email"
                  placeholder="Please enter your email address "
                  className="emailInput"/>
                <button type="submit" className="subscribeButton">
                  Subscribe
                </button>
              </form>
              <div className="socialIcons">
                <Link href="https://www.facebook.com/apremiumauto" aria-label="Facebook">
                  <img src="/Footer Images/Facebook.svg" alt="Facebook" />
                </Link>
                <Link href="https://www.youtube.com/channel/UCmuhWwcDdYmnkh7Ihm09QiA" aria-label="Twitter">
                  <img src="/Footer Images/you tube.svg" alt="Twitter" />
                </Link>
              </div>
              <div className="badges mt10">
                <div className="googleReviewBadge">
                <img src="/Footer Images/foot-rat.png" alt="img" />
                 
                </div>
                <div className="bbbBadge mt10 ml10">
                <img src="/Footer Images/foot-bbb.png" alt="img" />
                  
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerCopy">
      <div className="footerBottomContainer">
        <div className="footerText">
        “2024” Silonest.com. All rights reserved
        </div>
        <div className="payListBox">
          <img alt="MasterCard" src="/Footer Images/master card.png" loading="lazy" className="payIcon" />
          <img alt="Visa" src="/Footer Images/Visa.png" loading="lazy" className="payIcon" />
          <img alt="PayPal" src="/Footer Images/Paypal.png" loading="lazy" className="payIcon" />
          <img alt="Diners Club" src="/Footer Images/Diners Club.png" loading="lazy" className="payIcon" />
          <img alt="Discover" src="/Footer Images/Discover.png" loading="lazy" className="payIcon" />
          <img alt="American Express" src="/Footer Images/American Express.png" loading="lazy" className="payIcon" />
          <img alt="Apple Pay" src="/Footer Images/Pay.png" loading="lazy" className="payIcon" />
          <img alt="Google Pay" src="/Footer Images/G pay.png" loading="lazy" className="payIcon" />
        </div>

        <div className="footerText2">
        <p>Lorem Pesum dummy</p>
        <a href='/Privacypolicy'><p>Privacy Policy</p></a>
        </div>

      </div>
      </div>
    </footer>
  );
};

export default Footer;
