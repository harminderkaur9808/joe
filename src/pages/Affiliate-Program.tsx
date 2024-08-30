import Image from 'next/image';
import Footer from './Footer';
import Header from './Header';
import "../styles/Affiliateprogram.css"
const AffiliateProgramHeader = () => {
  return (
    <>
    <Header />
    <div>
      <div className="affiliate-program_SectionContainer">
        <section className="affiliate-program_section">
          <div className="affiliate-program_sectionInfo">
            <h1 className="affiliate-program_ourTitle">
              <div>JOIN THE</div>
              <div>A-PREMIUM.COM</div>
              <div className="affiliate-program_ourRedTitle">AFFILIATE PROGRAM</div>
            </h1>
          </div>
          <div className="affiliate-program_arrowBox">
            <span className="affiliate-program_arrowContainer">
              <Image alt="Arrow" src="/Affiliate Program/Affilliate icon.png" className="affiliate-program_arrowImage" layout="fill" objectFit="cover" />
            </span>
          </div>
        </section>
      </div>

      <div className="affiliate-program_container">
        <main className="affiliate-program_mainContent">
          <div className="affiliate-program_graphicBlock">
            <div className="affiliate-program_promiseImageBox">
              <Image
                alt="Affiliate Program Image"
                src="/Affiliate Program/Earn Commissions.png"
                width={615}
                height={340}
                objectFit="contain"
                className="affiliate-program_promiseImage"
              />
            </div>
            <div className="affiliate-program_textContainer">
              <div className="affiliate-program_titleBox">
                <div className="affiliate-program_promise"></div>
                <div className="affiliate-program_title">
                  Earn Commissions By Sharing Top Products
                </div>
              </div>
              <div className="affiliate-program_textContent">
                <p>Join the Example Affiliate Program and work with the nation&rsquo;s leading company.</p>
                <p> Example one of the top online auto part brands, is growing in sales and popularity, with a decade of selling experience on Amazon and eBay. 
                When customers consider car repairs, they choose A-Example for their needs.</p>
                <span>
                Example com supports affiliates in their growth. As an Example affiliate, you can leverage our unparalleled brand recognition to boost sales and earn commissions. 
                Plus, affiliates can access abundant and powerful resources and materials to help distribute. Our marketing team will always be with you to overcome any obstacles. 
                Join us today and start earning commission on every qualified sale with Example .com.
                </span>
              </div>
            </div>
          </div>
          <div className="why-join-a-premium-section">
            <div className="why-join-a-premium_textContainer">
              <div className="why-join-a-premium_titleBox">
      <div className="why-join-a-premium_promise"></div>
                <div className="why-join-a-premium_title">Why Join The Example.com Affiliate Program? </div>
              </div>
              <div className="why-join-a-premium_textContent">
                <ul>
                  <li> Reliable and affordable products - our products have the same quality as competitors, offered at only 70% of the price.
                  </li>
                  <li> Excellent customer service - we offer free standard shipping, 90-days free return, up to 3-year warranty and 24/7 customer service.
                  </li>
                  <li> Competitive Base Commission plus performance incentives - we offer 10%-20% base commission depending on the distribution models.
                  </li>
                  <li> Powerful Affiliate Resources - include but not limited to text/HTML links, banners, fresh promotional offers.
                  </li>
                  <li>Trusted 3rd Party Tracking - you can rest assured that you&rsquo;ll receive your commissions.
                  </li>
                  <li> Plus - we are devoted to boosting conversion rates on our site, so more of your leads will turn into sales. </li>
                </ul>
              </div>
            </div>
            <div className="why-join-a-premium_promiseImageBox">
              <Image alt="Why Join Affiliate Program" src="/Affiliate Program/Why Join The Example.png"  width={615} height={340} objectFit="contain"
                className="why-join-a-premium_promiseImage"/>
            </div>
          </div>
          <div className="sign-up-and-join-us_section">
      <div className="sign-up-and-join-us_promiseImageBox">
        <Image alt="Sign-up-and-join-us_Image" src="/Affiliate Program/Sign Up And Join Us Today.png" width={615} height={340} objectFit="contain" className="sign-up-and-join-us_promiseImage"/>
      </div>
      <div className="sign-up-and-join-us_textContainer">
        <div className="sign-up-and-join-us_titleBox">
          <div className="sign-up-and-join-us_promise"></div>
          <div className="sign-up-and-join-us_title">
            Sign Up And Join Us Today!
          </div>
        </div>
        <div className="sign-up-and-join-us_textContent">
          <p>Joining the Example.com affiliate program is simple and free. Here&rsquo;s how you can commence earning commissions with Example.com:</p>
          <ul>
            <li>Sign up for a free account</li>
            <li>Apply to the A-Premium affiliate program</li>
            <li>Grab links, banners, and more from our affiliate tools</li>
            <li>Start earning commissions from your web traffic!</li>
          </ul>
          <div>If you have more questions, please reach out to us at any time.</div>
          <div className="sign-up-and-join-us_emailBox">
            <span className="sign-up-and-join-us_label">Email:</span>
            <span className="sign-up-and-join-us_email">Example@gmail.com</span>
          </div>
        </div>
        <a className="sign-up-and-join-us_link" target="_blank" rel="noopener noreferrer" href="#">
          <div className="sign-up-and-join-us_myButton">Join Now</div>
        </a>
      </div>
    </div>
        </main>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AffiliateProgramHeader;
