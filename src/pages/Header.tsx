import { useState } from "react";
import Link from "next/link";
import DividerWithText from "@/components/DividerWithText";
import '../styles/style-r.css';
import { useEffect } from "react";
import Image from "next/image";
import { truncateText } from '@/utils/truncateText';

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLangBox, setShowLangBox] = useState<boolean>(false);
  const [showUserBox, setShowUserBox] = useState(false);
  const [showCartBox, setShowCartBox] =  useState<boolean>(false);
  const [showShipPopup, setShowShipPopup] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeDiv, setActiveDiv] = useState<number | null>(null);
  const [clickedDiv, setClickedDiv] = useState<number | null>(null);
  const [showNextContent, setShowNextContent] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState(1);

  const handleLangMouseOver = () => setShowLangBox(true);
  const handleLangMouseOut = () => setShowLangBox(false);
  const handleUserMouseOver = () => setShowUserBox(true);
  const handleUserMouseOut = () => setShowUserBox(false);
  const handleCartMouseOver = () => setShowCartBox(true);
  const handleCartMouseOut = () => setShowCartBox(false);
  const handleAddressClick = () => setShowShipPopup(true);
  

  const closePopup = (event: React.MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).classList.contains('ship-popup')) {
      setShowShipPopup(false);
    }
  };

  const toggleSidebar = () => {
    const isOpeningSidebar = !showSidebar; // Determine if the sidebar is being opened
    setShowSidebar(isOpeningSidebar);
    setShowNextContent(!isOpeningSidebar); // Hide next-content when sidebar is opened
  };
  
  const handleMouseEnter = (index: number) => {
    setActiveDiv(index);
  };

  const handleMouseLeave = () => {
    setActiveDiv(null);
  };

  const handleClick = (index: number) => {
    setClickedDiv(clickedDiv === index ? null : index);
  };

  const handleBackBtnClick = () => {
    setShowSidebar(true);
    setShowNextContent(false);
  };
  

  const messages = [
    '24/7 Service Available',
    'Free Standard Shipping',
    'Subscribe to Enjoy 10% OFF',
    '90 Days Free Return'
  ];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000); // change message every 3 seconds
    return () => clearInterval(intervalId);
  }, [messages.length]);

  useEffect(() => {
    document.querySelectorAll('.box-text p').forEach(p => {
      const originalText = p.textContent || '';
      p.textContent = truncateText(originalText, 3); 
    });
  }, []);


// ***************************************************************************************************************************************************************
const [hovered, setHovered] = useState(false);

const handleMouseOver = () => {
  setShowUserBox(true);
  setHovered(true);
};

const handleMouseOut = () => {
  if (!hovered) {
    setShowUserBox(false);
  }
};

const handleUserBoxMouseOver = () => {
  setHovered(true);
};

const handleUserBoxMouseOut = () => {
  setHovered(false);
  if (!document.querySelector('.user-box:hover') && !document.querySelector('.divider-with-text:hover')) {
    setShowUserBox(false);
  }
};

const handleButtonClick = () => {
  setShowUserBox(false);
};
//  *********************************

// Show the cart box
  // Show the cart box
  const handleMouseOverCartDiv = () => {
    setShowCartBox(true);
  };

  // Hide the cart box if the mouse is leaving both the cart div and cart box
  const handleMouseOutCartDiv = (e: React.MouseEvent<HTMLDivElement>) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (!relatedTarget || (!relatedTarget.closest('.cart-box') && !relatedTarget.closest('.cart-div'))) {
      setShowCartBox(false);
    }
  };

  // Show the cart box
  const handleMouseOverCartBox = () => {
    setShowCartBox(true);
  };

  // Hide the cart box if the mouse is leaving both the cart box and cart div
  const handleMouseOutCartBox = (e: React.MouseEvent<HTMLDivElement>) => {
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (!relatedTarget || (!relatedTarget.closest('.cart-box') && !relatedTarget.closest('.cart-div'))) {
      setShowCartBox(false);
    }
  };



  // ******************************************** Currency popup
    // Show the language box
    const handleMouseOverLangDiv = () => {
      setShowLangBox(true);
    };
  
    // Show the language box
    const handleMouseOverLangBox = () => {
      setShowLangBox(true);
    };
  
    // Hide the language box if the mouse is leaving both the language div and the language box
    const handleMouseOutLang = (e: React.MouseEvent<HTMLDivElement>) => {
      const relatedTarget = e.relatedTarget as HTMLElement;
      if (!relatedTarget || (!relatedTarget.closest('.lang-box') && !relatedTarget.closest('.lang-trans-div'))) {
        setShowLangBox(false);
      }
    };


    // Counter in the pop **********************************************************************************************

    const [timeLeft, setTimeLeft] = useState<number>(5 * 24 * 60 * 60); // 5 days in seconds

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 0) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }, []);
  
    const formatTime = (seconds: number) => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const secs = seconds % 60;
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };


  return (
    <main>
    <div className="header">
      <div className="head-container">
        <div className="top-bar">
        {messages.map((message, index) => (
    <div
      key={index}
      className={`header-item ${index === currentIndex ? 'active' : ''}`}
      style={{ transform: `translateY(${(index - currentIndex) * 50}%)` }}
    >
      {message}
    </div>
  ))}
        </div>
      </div>

      <div className="header-second-bar">
        <div className="container logo-bar">
          <div className="left-side">
          <Image
            className="sidebar-icon"
            src="/images/menu-bar.svg"
            alt="Menu"
            width={30} 
            height={25}
            onClick={toggleSidebar}
          />
             <Link href="#">
            <Image className="main-logo" src="/images/logo.png" width={70} height={50} alt="" />
            </Link>

            <div className="address-div" onClick={handleAddressClick}>
              <Image
                src="/images/address-icon.svg"
                width={20}
                height={20}
                alt=""
              />
              <p>Hello<br /> Select address</p>
            </div>
            {showShipPopup && (
              <div className="ship-popup" onClick={closePopup}>
                <div className="popup-box" onClick={(event) => event.stopPropagation()}>
                <Image className="close-icon" src="/images/close.svg" width={20} height={15} alt="" onClick={() => setShowShipPopup(false)} />
                  <h3>Ship Order To:</h3>
                  <p>A-Premium can ship to the USA only, except for Alaska, Hawaii, Puerto Rico, and Guam.
                    Does not ship to US Protectorates, PO Box, mailbox, and APO/FPO addresses.</p>
                  <div className="zip-code-sec">
                    <h4>Zip Code</h4>
                    <div className="main-form">
                      <div className="zip-code-field">
                        <input type="number" name="code" id="zip-code" />
                      </div>
                      <div className="zip-code-field">
                        <input type="number" name="code" id="zip-code" />
                      </div>
                      <div className="zip-code-field">
                        <input type="number" name="code" id="zip-code" />
                      </div>
                      <div className="zip-code-field">
                        <input type="number" name="code" id="zip-code" />
                      </div>
                      <div className="zip-code-field">
                        <input type="number" name="code" id="zip-code" />
                      </div>
                    </div>
                    <div className="submit-buttons">
                      <button className="reset-btn">Reset</button>
                      <button className="apply-btn">Apply</button>
                    </div>
                    <p className="end-text">Enter the Zip Code to view the estimated delivery time of the product</p>
                  </div>
                </div>
              </div>
            )}
          </div>
{/*  Cueewncy Open and close  */}
<div className="right-side">
      <div
        onMouseOver={handleMouseOverLangDiv}
        onMouseOut={handleMouseOutLang}
        className="lang-trans-div"
      >
        <Image
          className="flag"
          src="/images/flag-us.png"
          width={40}
          height={30}
          alt="US Flag"
        />
        <p>USA</p>
        <Image src="/images/down-angle.svg" width={15} height={10} alt="Down Arrow" />
      </div>

      <div
        className={`lang-box ${showLangBox ? 'showCurrencypop' : 'hideCurrencypop'}`}
        onMouseOver={handleMouseOverLangBox}
        onMouseOut={handleMouseOutLang}
      >
        <p>Ship to</p>
        <div className="ship-to-div">
          <div className="input-div">
            <Image
              src="/images/flag-us.png"
              width={40}
              height={30}
              alt="US Flag"
            />
            <p>United States</p>
            <Image
              className="down-arrow"
              src="/images/down-angle-black.svg"
              width={20}
              height={15}
              alt="Down Arrow"
            />
          </div>
        </div>

        <div className="currency-div">
          <p>Currency</p>
          <div className="input-div">
            <p>USD-US Dollar</p>
          </div>
        </div>
        <button className="save-btn mt-5">SAVE</button>
      </div>

            <button className="track-order-btn">Track Order</button>


            {/*  Main Popup Login SignUp. */}

            <div className="icons-div">
           {/*    <div
                onMouseOver={handleUserMouseOver}
                // onMouseOut={handleUserMouseOut}
                className="user-div"
              >
                <Link href="">
                  <Image src="/images/user-icon.svg" alt="" />
                </Link>
              </div>
              <div className={`user-box ${showUserBox ? "show" : "hide"}`}>
                <h3>Welcome</h3>
                <a href="/Auth">
                <button className="sign-up-btn">Free Sign Up</button>
                </a>
                <a href="/Auth">
                <button className="login-btn">Login</button>
                </a>
                <DividerWithText />
                <button className="sign-google-btn">
                  <Image src="/images/google-logo.png" width={20} height={20} alt="" />
                  Sign In With Google
                </button>
              </div> */}
 <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="user-div"
      >
        <Link href="#">
        <Image src="/images/user-icon.svg" alt="User Icon" width={20} height={15}/>
        </Link>
      </div>
      <div
        className={`user-box ${showUserBox ? 'show' : 'hide'}`}
        onMouseOver={handleUserBoxMouseOver}
        onMouseOut={handleUserBoxMouseOut}
      >
        <h3>Welcome</h3>
          <a  href="/Auth">
            <button className="sign-up-btn" onClick={handleButtonClick}>Free Sign Up</button>
          </a>
          <a  href="/Auth">
            <button className="login-btn" onClick={handleButtonClick}>Login</button>
          </a>
        <DividerWithText
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
        />
        <button className="sign-google-btn" onClick={handleButtonClick}>
          <Image src="/images/google-logo.png" width={20} height={20} alt="Google Logo" />
          Sign In With Google
        </button>
      </div>
    {/* .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, */}

    <div
        onMouseOver={handleMouseOverCartDiv}
        // onMouseOut={handleMouseOutCartDiv}
        className="cart-div"
      >
        <Link href="#">
          <Image src="/images/cart-icon.svg" width={20} height={15} alt="Cart Icon" />
        </Link>
      </div>
      <div
        className={`cart-box ${showCartBox ? 'show' : 'hide'}`}
        onMouseOver={handleMouseOverCartBox}
        onMouseOut={handleMouseOutCartBox}
      >
        <h3>Shopping Cart</h3>
        <section className="counter-main-cart">
      <div className="left-side">
        <p className="discount-text">
          ExampleDay<br />
          15% OFF Code: PD24
        </p>
      </div>
      <div className="center">
        <p className="days-left">5 Days</p>
        <p className="counter">{formatTime(timeLeft)}</p>
      </div>
      <div className="background-image">
        <Image
          src="/images/Popups/Maincarttimer.svg"
          layout="fill"
          objectFit="cover"
          alt="Cart Icon"
        />
      </div>
    </section>


        <div className="loading-div">
          <div className="cart-img-sec">
            <div className="cart-icon-img">
            <Image
        src="/images/Popups/Mainpopupadcart.svg"
        width={90}
        height={90} 
        alt="Cart Icon" 
      />
                  </div>
          </div>
          <div className="simple-text-with-link">
            <p>Looks like your cart is empty. <span style={{ color: '#da3b1f' }}>Go to store</span> to<br /> start shopping</p>
          </div>
        </div>
      </div>
    
              {/* ********** */}
          </div>
          </div>
        </div>
      </div>
{/* ************************************************************************************ */}
     
      <div className={`sidebar-div ${showSidebar ? "open" : "closed"}`}>
        <div className="close-icon-div">
        <Image
            src="/images/sidebar-close.svg"
            alt="Close Sidebar"
            onClick={toggleSidebar}
            width={20}
            height={15}
          />
        </div>

        {showSidebar && (
        <div className="sidebar-menus">
         <div className="menu-div">
          <div className="menu-icons">
          <Image src="/images/Live-chat.svg" width={20} height={15} alt="" />
            </div>
         <Link href="#">
                <p>Live Chat</p>
              </Link>
         </div>
         <div className="menu-div">
         <div className="menu-icons">
            <Image src="/images/phone.svg" width={20} height={15} alt="" />
            </div>
         <Link href="#">
                <p>+1 888 374 5088</p>
              </Link>
         </div>
         <div className="menu-div">
         <div className="menu-icons">
            <Image src="/images/help.svg" width={20} height={15} alt="" />
            </div>

            <a href="/Help-center">
            Help Center
            </a>

         </div>
         <div className="menu-div">
         <div className="menu-icons">
            <Image src="/images/track-order.svg" width={20} height={15} alt="" />
            </div>
         <a href="/TrackOrderPage">
                Track Order
              </a>
         </div>
         <div className="menu-div">
         <div className="menu-icons">
            <Image src="/images/account.svg" width={20} height={15} alt="" />
            </div>
         <a href="/Auth">
                <span>My Account</span>&nbsp;&nbsp;&nbsp;
                <span className="badge">20% OFF</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-simple">Sign in</span>
              </a>
         </div>
         <div className="menu-div">
         <div className="menu-icons">
            <Image src="/images/About.svg" width={20} height={15} alt="" />
            </div>
         <Link href="/about">
                <p>About Us</p>
              </Link>
         </div>
         <div className="menu-div">
         <div className="menu-icons">
            <Image src="/images/blog.svg" width={20} height={15} alt="" />
            </div>
         <Link href="/BlogPage">
                <p>Blog</p>
              </Link>
         </div>

         <div className="categories-div">
          <div className="head-sec">
         <Link href="/">
            <h2>Categories</h2>
            {/* <Image src="/images/open.svg" alt="" /> */}
            <Image src="/images/close-1.svg" width={20} height={15} alt="" />
              </Link>
              </div>
            <div className="categories-links">

            <div className="category-menu" onClick={() => handleCategoryClick('Automotive Tools & Supplies')}>
              <Link href="/">
              <div className="link-cate">
              <Image src="/images/minus.svg" width={15} height={10} alt="" />
              <p className="category-name">Automotive Tools & Supplies</p>
              </div>
              <Image src="/images/angle-right.svg" width={20} height={15} alt="" />
              </Link>
              </div>
              <div className="category-menu" onClick={() => handleCategoryClick('Motorcycle & Boat Parts')}>
              <Link href="/">
              <div className="link-cate">
              <Image src="/images/minus.svg" width={15} height={10} alt="" />
              <p className="category-name">Motorcycle & Boat Parts</p>
              </div>
              <Image src="/images/angle-right.svg" width={20} height={15} alt="" />
              </Link>
              </div>
              <div className="category-menu" onClick={() => handleCategoryClick('ATV, UTV & RV Parts')}>
              <Link href="/">
              <div className="link-cate">
              <Image src="/images/minus.svg" width={15} height={10} alt="" />
              <p className="category-name">ATV, UTV & RV Parts</p>
              </div>
              <Image src="/images/angle-right.svg" width={20} height={15} alt="" />
              </Link>
              </div>
              <div className="category-menu" onClick={() => handleCategoryClick('Exterior')}>
              <Link href="/">
              <div className="link-cate">
              <Image src="/images/minus.svg" width={15} height={10} alt="" />
              <p className="category-name">Exterior</p>
              </div>
              <Image src="/images/angle-right.svg" width={20} height={15} alt="" />
              </Link>
              </div>
              <div className="category-menu" onClick={() => handleCategoryClick('Interior')}>
              <Link href="/">
              <div className="link-cate">
              <Image src="/images/minus.svg" width={15} height={10} alt="" />
              <p className="category-name">Interior</p>
              </div>
              <Image src="/images/angle-right.svg" width={20} height={15} alt="" />
              </Link>
              </div>
              <div className="category-menu" onClick={() => handleCategoryClick('Heating & Cooling')}>
              <Link href="/">
              <div className="link-cate">
              <Image src="/images/minus.svg" width={15} height={10} alt="" />
              <p className="category-name">Heating & Cooling</p>
              </div>
              <Image src="/images/angle-right.svg" width={20} height={15} alt="" />
              </Link>
              </div>
              <div className="category-menu" onClick={() => handleCategoryClick('Body & Lamp Assembly')}>
              <Link href="/">
              <div className="link-cate">
              <Image src="/images/minus.svg" width={15} height={10} alt="" />
              <p className="category-name">Body & Lamp Assembly</p>
              </div>
              <Image src="/images/angle-right.svg" width={20} height={15} alt="" />
              </Link>
              </div>
              <div className="category-menu" onClick={() => handleCategoryClick('Suspension & Steering')}>  
              <Link href="/">
              <div className="link-cate">
              <Image src="/images/minus.svg" width={15} height={10} alt="" />
              <p className="category-name">Suspension & Steering</p>
              </div>
              <Image src="/images/angle-right.svg" width={20} height={15} alt="" />
              </Link>
              </div>
              <div className="category-menu" onClick={() => handleCategoryClick('Brake & Wheel Parts')}>
              <Link href="/">
              <div className="link-cate">
              <Image src="/images/minus.svg" width={15} height={10} alt="" />
              <p className="category-name">Brake & Wheel Parts</p>
              </div>
              <Image src="/images/angle-right.svg" width={20} height={15} alt="" />
              </Link>
              </div>
              <div className="category-menu" onClick={() => handleCategoryClick('Drivetrain')}>
              <Link href="/">
              <div className="link-cate">
              <Image src="/images/minus.svg" width={15} height={10} alt="" />
              <p className="category-name">Drivetrain</p>
              </div>
              <Image src="/images/angle-right.svg" width={20} height={15} alt="" />
              </Link>
              </div>
              <div className="category-menu" onClick={() => handleCategoryClick('Engine')}>
              <Link href="/">
              <div className="link-cate">
              <Image src="/images/minus.svg" width={15} height={10} alt="" />
              <p className="category-name">Engine</p>
              </div>
              <Image src="/images/angle-right.svg" width={20} height={15} alt="" />
              </Link>
              </div>
            </div>

        </div>

        </div>
        )}

       {/***************** click menu text *****************/}
       {activeCategory === 'Automotive Tools & Supplies' && (
        <div className="next-content">
          <div className="top-head">
            <Image 
            className="back-btn"
            src="/images/left-angle.svg" 
            width={10} 
            height={5}
            alt="" 
            onClick={() => setActiveCategory(null)}
            />
            <div className="content-menu">
              <h3>Automotive Tools & Supplies</h3>
            </div>
          </div>

          <div className="specfic-div">
          <div 
          className="next-menu-1"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(1)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/28c8e166c6884140958e499fea4cdb68.png" width={30} height={25} alt="Automotive Electrical Appliances" />
            </span>
            <span className="next-sub-menu">Automotive Electrical Appliances</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 1 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 1 || clickedDiv === 1) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/Automotive_Tools_Supplies.png" width={30} height={25} alt="Portable Car Fridge" />
             </div>
             <div className="box-text">
             <p>Portable Car Fridge</p>
             </div>
             </Link>
             </div>
           </div>
          </div>

          <div className="specfic-div-2">
          <div 
            className="next-menu-2"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(2)}
          >
            <div className="icon-text">
            <span>
              <Image src="/images/Diagnostic_Service_Tools.png" width={30} height={25} alt="Diagnostic Service Tools" />
            </span>
            <span className="next-sub-menu">Diagnostic Service Tools</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 2 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
          </span>
          </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 2 || clickedDiv === 2) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/Air_Leak_Test_Tool.png" width={30} height={25} alt="Air Leak Test Tool" />
             </div>
             <div className="box-text">
             <p>Air Leak Test Tool</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/Code_Readers_&_Scanners.png" width={30} height={25} alt="Code Readers & Scanners" />
             </div>
             <div className="box-text">
             <p>Code Readers & Scanners</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

        </div>
)}
{/********************** Second Category content page **************************/}
        {activeCategory === 'Motorcycle & Boat Parts' && (
        <div className="next-content">
          <div className="top-head">
          <Image 
            className="back-btn"
            src="/images/left-angle.svg" 
            width={10} 
            height={5}
            alt="" 
            onClick={() => setActiveCategory(null)}
          />
            <div className="content-menu">
              <h3>Motorcycle & Boat Parts</h3>
            </div>
          </div>


          <div className="specfic-div">
          <div 
          className="next-menu-1"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(1)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/Inboard_Engines_&_Components.png" width={30} height={25} alt="Inboard Engines & Components" />
            </span>
            <span className="next-sub-menu">Inboard Engines & Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 1 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 1 || clickedDiv === 1) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/Marine_Exhaust_Manifold.png" width={30} height={25} alt="Marine Exhaust Manifold" />
             </div>
             <div className="box-text">
             <p>Marine Exhaust Manifold</p>
             </div>
             </Link>
             </div>
           </div>
          </div>

          <div className="specfic-div-2">
          <div 
            className="next-menu-2"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(2)}
          >
            <div className="icon-text">
            <span>
              <Image src="/images/Motorcycle_Body_&_Frame.png" width={30} height={25} alt="Motorcycle Body & Frame" />
            </span>
            <span className="next-sub-menu">Motorcycle Body & Frame</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 2 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
          </span>
          </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 2 || clickedDiv === 2) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/Battery_Box_Cover.png" width={30} height={25} alt="Battery Box Cover" />
             </div>
             <div className="box-text">
             <p>Battery Box Cover</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/Motorcycle_Fuel_Tank.png" width={30} height={25} alt="Plastic Body" />
             </div>
             <div className="box-text">
             <p>Plastic Body</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/Plastic_Body.png" width={30} height={25} alt="Motorcycle Fuel Tank" />
             </div>
             <div className="box-text">
             <p>Motorcycle Fuel Tank</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-3">
          <div 
          className="next-menu-3"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(3)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/Motorcycle_Brakes_&_Suspension_Parts.png" width={30} height={25} alt="Motorcycle Brakes & Suspension Parts" />
            </span>
            <span className="next-sub-menu">Motorcycle Brakes & Suspension Parts</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 3 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 3 || clickedDiv === 3) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/Suspension_Lowering_Link.png" width={30} height={25} alt="Suspension Lowering Link" />
             </div>
             <div className="box-text">
             <p>Suspension Lowering Link</p>
             </div>
             </Link>
             </div>
           </div>
          </div>

          <div className="specfic-div-4">
          <div 
          className="next-menu-4"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(4)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/Motorcycle_Engines_&_Parts.png" width={30} height={25} alt="Motorcycle Engines & Parts" />
            </span>
            <span className="next-sub-menu">Motorcycle Engines & Parts</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 4 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 4 || clickedDiv === 4) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/Balance_Shaft.png" width={30} height={25} alt="Balance Shaft" />
             </div>
             <div className="box-text">
             <p>Balance Shaft</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/Crankcase_Cover.png" width={30} height={25} alt="Crankcase Cover" />
             </div>
             <div className="box-text">
             <p>Crankcase Cover</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/Engine_Cover_Case.png" width={30} height={25} alt="Engine Cover Case" />
             </div>
             <div className="box-text">
             <p>Engine Cover Case</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/Programmable_Single_Fire_Electronic_Ignition.png" width={30} height={25} alt="Programmable Single Fire Electronic Ignition" />
             </div>
             <div className="box-text">
             <p>Programmable Single Fire Electronic Ignition</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/Stator_Generator_Rotor.png" width={30} height={25} alt="Stator Generator Rotor" />
             </div>
             <div className="box-text">
             <p>Stator Generator Rotor</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-5">
          <div 
          className="next-menu-5"
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(5)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/Motorcycle_Handlebars_Grips_&_Levers.png" width={30} height={25} alt="Motorcycle Handlebars, Grips & Levers" />
            </span>
            <span className="next-sub-menu">Motorcycle Handlebars, Grips &<br/>Levers</span>
          </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 5 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 5 || clickedDiv === 5) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/Handlebars.png" width={30} height={25} alt="Handlebars" />
             </div>
             <div className="box-text">
             <p>Handlebars</p>
             </div>
             </Link>
             </div>
           </div>
          </div>

          <div className="specfic-div-6">
          <div 
          className="next-menu-6"
          onMouseEnter={() => handleMouseEnter(6)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(6)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/Outboard_Engines_&_Components.png" width={30} height={25} alt="Outboard Engines & Components" />
            </span>
            <span className="next-sub-menu">Outboard Engines & Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 6 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 6 || clickedDiv === 6) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/Engine_Coupler.png" width={30} height={25} alt="Engine Coupler" />
             </div>
             <div className="box-text">
             <p>Engine Coupler</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/Marine_Drive_Shaft_Kit.png" width={30} height={25} alt="Marine Drive Shaft Kit" />
             </div>
             <div className="box-text">
             <p>Marine Drive Shaft Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/Marine_Hydraulic_Power_Pump.png" width={30} height={25} alt="Marine Hydraulic Power Pump" />
             </div>
             <div className="box-text">
             <p>Marine Hydraulic Power Pump</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/Outboard_Oil_Tank_Assembly.png" width={30} height={25} alt="Outboard Oil Tank Assembly" />
             </div>
             <div className="box-text">
             <p>Outboard Oil Tank Assembly</p>
             </div>
             </Link>
             </div>

           </div>
          </div>
        </div>
)}

   {/********************** Third Category content page **************************/}
   {activeCategory === 'ATV, UTV & RV Parts' && (
        <div className="next-content">
          <div className="top-head">
          <Image 
            className="back-btn"
            src="/images/left-angle.svg" 
            width={10} 
            height={5}
            alt="" 
            onClick={() => setActiveCategory(null)}
          />
            <div className="content-menu">
              <h3>ATV, UTV & RV Parts</h3>
            </div>
          </div>

          <div className="specfic-div">
          <div 
          className="next-menu-1"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(1)}
        >
        <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/icon-ATV, UTV & RV Parts Engine_width_400_height_400.png" width={30} height={25} alt="ATV, UTV & RV Parts Engine" />
            </span>
            <span className="next-sub-menu">ATV, UTV & RV Parts Engine</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 1 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 1 || clickedDiv === 1) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/icon-Cylinder Rebuild Kit_width_400_height_400.png" width={30} height={25} alt="Cylinder Rebuild Kit" />
             </div>
             <div className="box-text">
             <p>Cylinder Rebuild Kit</p>
             </div>
             </Link>
             </div>
           </div>
          </div>

          <div className="specfic-div-2">
          <div 
            className="next-menu-2"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(2)}
          >
            <div className="icon-text">
            <span>
              <Image src="/images/Motorcycle_Body_&_Frame.png" width={30} height={25} alt="Body & Frame" />
            </span>
            <span className="next-sub-menu">Body & Frame</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 2 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
          </span>
          </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 2 || clickedDiv === 2) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-WDP.png" width={30} height={25} alt="ATV Window Panel" />
             </div>
             <div className="box-text">
             <p>ATV Window Panel</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240401-MS.png" width={30} height={25} alt="Motorcycle Seat" />
             </div>
             <div className="box-text">
             <p>Motorcycle Seat</p>
             </div>
             </Link>
             </div>


           </div>
          </div>

          <div className="specfic-div-3">
          <div 
          className="next-menu-3"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(3)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Clutches, Flywheels & Components.png" width={30} height={25} alt="Clutches, Flywheels & Components" />
            </span>
            <span className="next-sub-menu">Clutches, Flywheels & Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 3 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 3 || clickedDiv === 3) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-CPG.png" width={30} height={25} alt="Clutch Primary Gear" />
             </div>
             <div className="box-text">
             <p>Clutch Primary Gear</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Starter Clutch Gear kit.png" width={30} height={25} alt="Starter Clutch Gear kit" />
             </div>
             <div className="box-text">
             <p>Starter Clutch Gear kit</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-4">
          <div 
          className="next-menu-4"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(4)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Other RV, Trailer & Camper Parts & Accessories.png" width={30} height={25} alt="Other RV, Trailer & Camper Parts & Accessories" />
            </span>
            <span className="next-sub-menu">Other RV, Trailer & Camper Parts &<br/> Accessories</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 4 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 4 || clickedDiv === 4) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-DBK.png" width={30} height={25} alt="Dual Battery Isolator Kit" />
             </div>
             <div className="box-text">
             <p>Dual Battery Isolator Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/RV Awning Motor.png" width={30} height={25} alt="RV Awning Motor" />
             </div>
             <div className="box-text">
             <p>RV Awning Motor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-RSJM.png" width={30} height={25} alt="RV Electric Rear Stabilizer Jack Motor" />
             </div>
             <div className="box-text">
             <p>RV Electric Rear Stabilizer Jack Motor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/RV Slide Out Motor.png" width={30} height={25} alt="RV Slide Out Motor" />
             </div>
             <div className="box-text">
             <p>RV Slide Out Motor</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-5">
          <div 
          className="next-menu-5"
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(5)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Trailer Leveling & Towing.png" width={30} height={25} alt="Trailer Leveling & Towing" />
            </span>
            <span className="next-sub-menu">Trailer Leveling & Towing</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 5 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 5 || clickedDiv === 5) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-WGA.png" width={30} height={25} alt="Wheel Gooseneck Adapter" />
             </div>
             <div className="box-text">
             <p>Wheel Gooseneck Adapter</p>
             </div>
             </Link>
             </div>
           </div>
          </div>

        </div>
           )}


     {/********************** Fourth Category content page **************************/}
   {activeCategory === 'Exterior' && (
        <div className="next-content">
          <div className="top-head">
          <Image 
            className="back-btn"
            src="/images/left-angle.svg" 
            width={10} 
            height={5}
            alt="" 
            onClick={() => setActiveCategory(null)}
          />
            <div className="content-menu">
              <h3>Exterior</h3>
            </div>
          </div>

          <div className="specfic-div">
          <div 
          className="next-menu-1"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(1)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Body Moldings & Trims.png" width={30} height={25} alt="Body Moldings & Trims" />
            </span>
            <span className="next-sub-menu">Body Moldings & Trims</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 1 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 1 || clickedDiv === 1) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-DPT.png" width={30} height={25} alt="Door Entry Keypad Pillar Molding Trim" />
             </div>
             <div className="box-text">
             <p>Door Entry Keypad Pillar Molding Trim</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Door Lower Weatherstrip Seal.png" width={30} height={25} alt="Door Lower Weatherstrip Seal" />
             </div>
             <div className="box-text">
             <p>Door Lower Weatherstrip Seal</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-WSL.png" width={30} height={25} alt="Weatherstrip Seal" />
             </div>
             <div className="box-text">
             <p>Weatherstrip Seal</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-WV.png" width={30} height={25} alt="Window Visor" />
             </div>
             <div className="box-text">
             <p>Window Visor</p>
             </div>
             </Link>
             </div>


           </div>
          </div>

          <div className="specfic-div-2">
          <div 
            className="next-menu-2"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(2)}
          >
            <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Bumpers & Components.png" width={30} height={25} alt="Bumpers & Components" />
            </span>
            <span className="next-sub-menu">Bumpers & Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 2 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
          </span>
          </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 2 || clickedDiv === 2) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-FBPN.png" width={30} height={25} alt="Front Bumper" />
             </div>
             <div className="box-text">
             <p>Front Bumper</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Park Assist Camera.png" width={30} height={25} alt="Park Assist Camera" />
             </div>
             <div className="box-text">
             <p>Park Assist Camera</p>
             </div>
             </Link>
             </div>


           </div>
          </div>

          <div className="specfic-div-3">
          <div 
          className="next-menu-3"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(3)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Doors, Trunk Lids & Hatches.png" width={30} height={25} alt="Doors, Trunk Lids & Hatches" />
            </span>
            <span className="next-sub-menu">Doors, Trunk Lids & Hatches</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 3 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 3 || clickedDiv === 3) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-DGS.png" width={30} height={25} alt="Door Corner Gusset Assembly" />
             </div>
             <div className="box-text">
             <p>Door Corner Gusset Assembly</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-DH.png" width={30} height={25} alt="Door Handle" />
             </div>
             <div className="box-text">
             <p>Door Handle</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Door Handle Carrier.png" width={30} height={25} alt="Door Handle Carrier" />
             </div>
             <div className="box-text">
             <p>Door Handle Carrier</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Door Handle Harness.png" width={30} height={25} alt="Door Handle Harness" />
             </div>
             <div className="box-text">
             <p>Door Handle Harness</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Door Hinge.png" width={30} height={25} alt="Door Hinge" />
             </div>
             <div className="box-text">
             <p>Door Hinge</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Door Lock Actuator.png" width={30} height={25} alt="Door Lock Actuator" />
             </div>
             <div className="box-text">
             <p>Door Lock Actuator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Door Lock Cylinder Barrel Repair Kit.png" width={30} height={25} alt="Door Lock Cylinder Barrel Repair Kit" />
             </div>
             <div className="box-text">
             <p>Door Lock Cylinder Barrel Repair Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Door Lock Cylinder Set.png" width={30} height={25} alt="Door Lock Cylinder Set" />
             </div>
             <div className="box-text">
             <p>Door Lock Cylinder Set</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-HL.png" width={30} height={25} alt="Hood Latch" />
             </div>
             <div className="box-text">
             <p>Hood Latch</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Hydralic Liftgate Pump.png" width={30} height={25} alt="Hydralic Liftgate Pump" />
             </div>
             <div className="box-text">
             <p>Hydralic Liftgate Pump</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Lift support.png" width={30} height={25} alt="Lift support" />
             </div>
             <div className="box-text">
             <p>Lift support</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-4">
          <div 
          className="next-menu-4"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(4)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Fender Flares, Vents & Accessories.png" width={30} height={25} alt="Fender Flares, Vents & Accessories" />
            </span>
            <span className="next-sub-menu">Fender Flares, Vents & Accessories</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 4 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 4 || clickedDiv === 4) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-FDR.png" width={30} height={25} alt="Fender" />
             </div>
             <div className="box-text">
             <p>Fender</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fender Flares.png" width={30} height={25} alt="Fender Flares" />
             </div>
             <div className="box-text">
             <p>Fender Flares</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Inner-Fender.png" width={30} height={25} alt="Inner Fender" />
             </div>
             <div className="box-text">
             <p>Inner Fender</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-5">
          <div 
          className="next-menu-5"
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(5)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Grilles & Components.png" width={30} height={25} alt="Grilles & Components" />
            </span>
            <span className="next-sub-menu">Grilles & Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 5 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 5 || clickedDiv === 5) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Active-Grille-Shutter.png" width={30} height={25} alt="Active Grille Shutter" />
             </div>
             <div className="box-text">
             <p>Active Grille Shutter</p>
             </div>
             </Link>
             </div>
           </div>
          </div>

          <div className="specfic-div-6">
          <div 
          className="next-menu-6"
          onMouseEnter={() => handleMouseEnter(6)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(6)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Guards & Protection.png" width={30} height={25} alt="Guards & Protection" />
            </span>
            <span className="next-sub-menu">Guards & Protection</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 6 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 6 || clickedDiv === 6) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Splash-Guard.png" width={30} height={25} alt="Splash Guard" />
             </div>
             <div className="box-text">
             <p>Splash Guard</p>
             </div>
             </Link>
             </div>
           </div>
          </div>


          <div className="specfic-div-7">
          <div 
          className="next-menu-7"
          onMouseEnter={() => handleMouseEnter(7)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(7)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Hitches, Winches & Trailers.png" width={30} height={25} alt="Hitches, Winches & Trailers" />
            </span>
            <span className="next-sub-menu">Hitches, Winches & Trailers</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 7 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 7 || clickedDiv === 7) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Tow-Hook.png" width={30} height={25} alt="Tow Hook" />
             </div>
             <div className="box-text">
             <p>Tow Hook</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-THH.png" width={30} height={25} alt="Trailer Hitch" />
             </div>
             <div className="box-text">
             <p>Trailer Hitch</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Trailer Hitch System Kit.png" width={30} height={25} alt="Trailer Hitch System Kit" />
             </div>
             <div className="box-text">
             <p>Trailer Hitch System Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-TLK.png" width={30} height={25} alt="Trailer Lock" />
             </div>
             <div className="box-text">
             <p>Trailer Lock</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Trailer-Wiring-Harness.png" width={30} height={25} alt="Trailer Wiring Harness" />
             </div>
             <div className="box-text">
             <p>Trailer Wiring Harness</p>
             </div>
             </Link>
             </div>

           </div>
          </div>


          <div className="specfic-div-8">
          <div 
          className="next-menu-8"
          onMouseEnter={() => handleMouseEnter(8)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(8)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Plastic Tooling Box & Components.png" width={30} height={25} alt="Plastic Tooling Box & Components" />
            </span>
            <span className="next-sub-menu">Plastic Tooling Box & Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 8 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 8 || clickedDiv === 8) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Plastic-Tooling-Box.png" width={30} height={25} alt="Plastic Tooling Box" />
             </div>
             <div className="box-text">
             <p>Plastic Tooling Box</p>
             </div>
             </Link>
             </div>
           </div>
          </div>


          <div className="specfic-div-9">
          <div 
          className="next-menu-9"
          onMouseEnter={() => handleMouseEnter(9)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(9)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Roofs, Tops & Sunroofs.png" width={30} height={25} alt="Roofs, Tops & Sunroofs" />
            </span>
            <span className="next-sub-menu">Roofs, Tops & Sunroofs</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 9 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 9 || clickedDiv === 9) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Convertible-Soft-Top.png" width={30} height={25} alt="Convertible Soft Top" />
             </div>
             <div className="box-text">
             <p>Convertible Soft Top</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-CTM.png" width={30} height={25} alt="Convertible Soft Top Latch Assembly Motor" />
             </div>
             <div className="box-text">
             <p>Convertible Soft Top Latch Assembly Motor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Convertible-Top-Hydraulic-Cylinders.png" width={30} height={25} alt="Convertible Top Hydraulic Cylinders" />
             </div>
             <div className="box-text">
             <p>Convertible Top Hydraulic Cylinders</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-CTP.png" width={30} height={25} alt="Convertible Top Lift Motor Pump" />
             </div>
             <div className="box-text">
             <p>Convertible Top Lift Motor Pump</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Hard Top Rack.png" width={30} height={25} alt="Hard Top Rack" />
             </div>
             <div className="box-text">
             <p>Hard Top Rack</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240401-HAV.png" width={30} height={25} alt="Headliner Air Vent" />
             </div>
             <div className="box-text">
             <p>Headliner Air Vent</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Sunroof-Motor.png" width={30} height={25} alt="Sunroof Motor" />
             </div>
             <div className="box-text">
             <p>Sunroof Motor</p>
             </div>
             </Link>
             </div>

           </div>
          </div>


          <div className="specfic-div-10">
          <div 
          className="next-menu-10"
          onMouseEnter={() => handleMouseEnter(10)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(10)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Running Boards & Step Bars.png" width={30} height={25} alt="Running Boards & Step Bars" />
            </span>
            <span className="next-sub-menu">Running Boards & Step Bars</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 10 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 10 || clickedDiv === 10) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Power-Running-Board-Motor.png" width={30} height={25} alt="Power Running Board Motor" />
             </div>
             <div className="box-text">
             <p>Power Running Board Motor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-RBS.png" width={30} height={25} alt="Rear Bed Step" />
             </div>
             <div className="box-text">
             <p>Rear Bed Step</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Running Board.png" width={30} height={25} alt="Running Board" />
             </div>
             <div className="box-text">
             <p>Running Board</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-SBAR.png" width={30} height={25} alt="Side Bar" />
             </div>
             <div className="box-text">
             <p>Side Bar</p>
             </div>
             </Link>
             </div>

           </div>
          </div>


          <div className="specfic-div-11">
          <div 
          className="next-menu-11"
          onMouseEnter={() => handleMouseEnter(11)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(11)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Truck Beds & Parts.png" width={30} height={25} alt="Truck Beds & Parts" />
            </span>
            <span className="next-sub-menu">Truck Beds & Parts</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 11 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 11 || clickedDiv === 11) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Cargo-Tie-Down-Brackets.png" width={30} height={25} alt="Cargo Tie Down Brackets" />
             </div>
             <div className="box-text">
             <p>Cargo Tie Down Brackets</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Stowable-Bed-Extender-Kit.png" width={30} height={25} alt="Stowable Bed Extender Kit" />
             </div>
             <div className="box-text">
             <p>Stowable Bed Extender Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Tonneau Cover.png" width={30} height={25} alt="Tonneau Cover" />
             </div>
             <div className="box-text">
             <p>Tonneau Cover</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-TBD.png" width={30} height={25} alt="Trunk Bed Cargo Divider" />
             </div>
             <div className="box-text">
             <p>Trunk Bed Cargo Divider</p>
             </div>
             </Link>
             </div>

           </div>
          </div>


          <div className="specfic-div-12">
          <div 
          className="next-menu-12"
          onMouseEnter={() => handleMouseEnter(12)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(12)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Windshield, Wipers, Washers, Accessories & Components.png" width={30} height={25} alt="Windshield, Wipers, Washers, Accessories & Components" />
            </span>
            <span className="next-sub-menu">Windshield, Wipers, Washers,<br/> Accessories & Components</span>
           </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 12 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 12 || clickedDiv === 12) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Headlight-Washer-Nozzle.png" width={30} height={25} alt="Headlight Washer Nozzle" />
             </div>
             <div className="box-text">
             <p>Headlight Washer Nozzle</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Windshield Washer Reservoir.png" width={30} height={25} alt="Windshield Washer Reservoir" />
             </div>
             <div className="box-text">
             <p>Windshield Washer Reservoir</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Wiper-Linkage.png" width={30} height={25} alt="Wiper Linkage" />
             </div>
             <div className="box-text">
             <p>Wiper Linkage</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Wiper-Motor.png" width={30} height={25} alt="Wiper Motor" />
             </div>
             <div className="box-text">
             <p>Wiper Motor</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

        </div>
           )}

 {/********************** Fifth Category content page **************************/}
 {activeCategory === 'Interior' && (
        <div className="next-content">
          <div className="top-head">
          <Image 
            className="back-btn"
            src="/images/left-angle.svg" 
            width={10} 
            height={5}
            alt="" 
            onClick={() => setActiveCategory(null)}
          />
            <div className="content-menu">
              <h3>Interior</h3>
            </div>
          </div>

          <div className="specfic-div">
          <div 
          className="next-menu-1"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(1)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Center,-Overhead-Consoles-&-Parts.png" width={30} height={25} alt="Center, Overhead Consoles & Parts" />
            </span>
            <span className="next-sub-menu">Center, Overhead Consoles & Parts</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 1 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 1 || clickedDiv === 1) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Center-Console-Safe-Box.png" width={30} height={25} alt="Center Console Safe Box" />
             </div>
             <div className="box-text">
             <p>Center Console Safe Box</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-2">
          <div 
            className="next-menu-2"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(2)}
          >
            <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Consoles-&-Organizers.png" width={30} height={25} alt="Consoles & Organizers" />
            </span>
            <span className="next-sub-menu">Consoles & Organizers</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 2 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
          </span>
          </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 2 || clickedDiv === 2) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Cup-Holder.png" width={30} height={25} alt="Cup Holder" />
             </div>
             <div className="box-text">
             <p>Cup Holder</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-3">
          <div 
          className="next-menu-3"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(3)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Dash-&-Dash-Accessories.png" width={30} height={25} alt="Dash & Dash Accessories" />
            </span>
            <span className="next-sub-menu">Dash & Dash Accessories</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 3 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 3 || clickedDiv === 3) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Dash-Air-Vent.png" width={30} height={25} alt="Dash Air Vent" />
             </div>
             <div className="box-text">
             <p>Dash Air Vent</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-4">
          <div 
          className="next-menu-4"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(4)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Door-Panels.png" width={30} height={25} alt="Door Panels" />
            </span>
            <span className="next-sub-menu">Door Panels</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 4 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 4 || clickedDiv === 4) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Door-Armrest.png" width={30} height={25} alt="Door Armrest" />
             </div>
             <div className="box-text">
             <p>Door Armrest</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Power-Sliding-Door-Cable-Kit.png" width={30} height={25} alt="Power Sliding Door Cable Kit" />
             </div>
             <div className="box-text">
             <p>Power Sliding Door Cable Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Power-Sliding-Door-Track.png" width={30} height={25} alt="Power Sliding Door Track" />
             </div>
             <div className="box-text">
             <p>Power Sliding Door Track</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-5">
          <div 
          className="next-menu-5"
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(5)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Electrical-&-Switches.png" width={30} height={25} alt="Electrical & Switches" />
            </span>
            <span className="next-sub-menu">Electrical & Switches</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 5 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 5 || clickedDiv === 5) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-RSK.png" width={30} height={25} alt="Remote Start Kit" />
             </div>
             <div className="box-text">
             <p>Remote Start Kit</p>
             </div>
             </Link>
             </div>
           </div>
          </div>

          <div className="specfic-div-6">
          <div 
          className="next-menu-6"
          onMouseEnter={() => handleMouseEnter(6)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(6)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Gauges.png" width={30} height={25} alt="Gauges" />
            </span>
            <span className="next-sub-menu">Gauges</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 6 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 6 || clickedDiv === 6) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-GSP.png" width={30} height={25} alt="Gauge Speedometer" />
             </div>
             <div className="box-text">
             <p>Gauge Speedometer</p>
             </div>
             </Link>
             </div>
           </div>
          </div>

          <div className="specfic-div-7">
          <div 
          className="next-menu-7"
          onMouseEnter={() => handleMouseEnter(7)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(7)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Glove-Boxes.png" width={30} height={25} alt="Glove Boxes" />
            </span>
            <span className="next-sub-menu">Glove Boxes</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 7 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 7 || clickedDiv === 7) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Glove-Box-Handle-Latch.png" width={30} height={25} alt="Glove Box Handle Latch" />
             </div>
             <div className="box-text">
             <p>Glove Box Handle Latch</p>
             </div>
             </Link>
             </div>

           </div>
          </div>


          <div className="specfic-div-8">
          <div 
          className="next-menu-8"
          onMouseEnter={() => handleMouseEnter(8)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(8)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Other-Interior-Parts-&-Accessories.png" width={30} height={25} alt="Other Interior Parts & Accessories" />
            </span>
            <span className="next-sub-menu">Other Interior Parts & Accessories</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 8 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 8 || clickedDiv === 8) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/A-Pillar-Interior-Trim-Handle.png" width={30} height={25} alt="A Pillar Interior Trim Handle" />
             </div>
             <div className="box-text">
             <p>A Pillar Interior Trim Handle</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-APA.png" width={30} height={25} alt="Accelerator Pedal" />
             </div>
             <div className="box-text">
             <p>Accelerator Pedal</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Floor Mat.png" width={30} height={25} alt="Floor Mat" />
             </div>
             <div className="box-text">
             <p>Floor Mat</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Horn.png" width={30} height={25} alt="Horn" />
             </div>
             <div className="box-text">
             <p>Horn</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Printed-Circuit-Board-with-Gauges.png" width={30} height={25} alt="Printed Circuit Board with Gauges" />
             </div>
             <div className="box-text">
             <p>Printed Circuit Board with Gauges</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-STB.png" width={30} height={25} alt="Storage Box" />
             </div>
             <div className="box-text">
             <p>Storage Box</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-SBC.png" width={30} height={25} alt="Storage Box Cover" />
             </div>
             <div className="box-text">
             <p>Storage Box Cover</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-SMT.png" width={30} height={25} alt="Storage Mat" />
             </div>
             <div className="box-text">
             <p>Storage Mat</p>
             </div>
             </Link>
             </div>

           </div>
          </div>


          <div className="specfic-div-9">
          <div 
          className="next-menu-9"
          onMouseEnter={() => handleMouseEnter(9)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(9)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Pedal-Assemblies,-Pads-&-Parts.png" width={30} height={25} alt="Pedal Assemblies, Pads & Parts" />
            </span>
            <span className="next-sub-menu">Pedal Assemblies, Pads & Parts</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 9 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 9 || clickedDiv === 9) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-CPA.png" width={30} height={25} alt="Clutch Pedal Assembly" />
             </div>
             <div className="box-text">
             <p>Clutch Pedal Assembly</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-10">
          <div 
          className="next-menu-10"
          onMouseEnter={() => handleMouseEnter(10)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(10)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Seats,-Seat-Covers-&-Accessories.png" width={30} height={25} alt="Seats, Seat Covers & Accessories" />
            </span>
            <span className="next-sub-menu">Seats, Seat Covers & Accessories</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 10 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 10 || clickedDiv === 10) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Seat-Belt-Buckle.png" width={30} height={25} alt="Seat Belt Buckle" />
             </div>
             <div className="box-text">
             <p>Seat Belt Buckle</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Seat-Cover.png" width={30} height={25} alt="Seat Cover" />
             </div>
             <div className="box-text">
             <p>Seat Cover</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Seat-Hinge-Motor.png" width={30} height={25} alt="Seat Hinge Motor" />
             </div>
             <div className="box-text">
             <p>Seat Hinge Motor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Seat-Panel-Trim.png" width={30} height={25} alt="Seat Panel Trim" />
             </div>
             <div className="box-text">
             <p>Seat Panel Trim</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Seat-Swivel.png" width={30} height={25} alt="Seat Swivel" />
             </div>
             <div className="box-text">
             <p>Seat Swivel</p>
             </div>
             </Link>
             </div>

           </div>
          </div>


          <div className="specfic-div-11">
          <div 
          className="next-menu-11"
          onMouseEnter={() => handleMouseEnter(11)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(11)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Shifter-Accessories.png" width={30} height={25} alt="Shifter Accessories" />
            </span>
            <span className="next-sub-menu">Shifter Accessories</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 11 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 11 || clickedDiv === 11) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Shift-Knob.png" width={30} height={25} alt="Shift Knob" />
             </div>
             <div className="box-text">
             <p>Shift Knob</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-SPS.png" width={30} height={25} alt="Steering Wheel Paddle Shifter" />
             </div>
             <div className="box-text">
             <p>Steering Wheel Paddle Shifter</p>
             </div>
             </Link>
             </div>

           </div>
          </div>


          <div className="specfic-div-12">
          <div 
          className="next-menu-12"
          onMouseEnter={() => handleMouseEnter(12)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(12)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Switches-&-Controls.png" width={30} height={25} alt="Switches & Controls" />
            </span>
            <span className="next-sub-menu">Switches & Controls</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 12 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 12 || clickedDiv === 12) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/4-Wheel-Drive-Selector-Switch.png" width={30} height={25} alt="4 Wheel Drive Selector Switch" />
             </div>
             <div className="box-text">
             <p>4 Wheel Drive Selector Switch</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Brake-Light-Switch.png" width={30} height={25} alt="Brake Light Switch" />
             </div>
             <div className="box-text">
             <p>Brake Light Switch</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Clutch-Starter-Safety-Switch.png" width={30} height={25} alt="Clutch Starter Safety Switch" />
             </div>
             <div className="box-text">
             <p>Clutch Starter Safety Switch</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Convertible-Top-Switch.png" width={30} height={25} alt="Convertible Top Switch" />
             </div>
             <div className="box-text">
             <p>Convertible Top Switch</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Cruise-Control-Switch.png" width={30} height={25} alt="Cruise Control Switch" />
             </div>
             <div className="box-text">
             <p>Cruise Control Switch</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Decklid-Release-Switch.png" width={30} height={25} alt="Decklid Release Switch" />
             </div>
             <div className="box-text">
             <p>Decklid Release Switch</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Door-Lock-Switch.png" width={30} height={25} alt="Door Lock Switch" />
             </div>
             <div className="box-text">
             <p>Door Lock Switch</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-DMS.png" width={30} height={25} alt="Drive Monitor Information Switch" />
             </div>
             <div className="box-text">
             <p>Drive Monitor Information Switch</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Driver-Information-Display-Switch.png" width={30} height={25} alt="Driver Information Display Switch" />
             </div>
             <div className="box-text">
             <p>Driver Information Display Switch</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fog-Light-Switch.png" width={30} height={25} alt="Fog Light Switch" />
             </div>
             <div className="box-text">
             <p>Fog Light Switch</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Headlight-Switch.png" width={30} height={25} alt="Headlight Switch" />
             </div>
             <div className="box-text">
             <p>Headlight Switch</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-13">
          <div 
          className="next-menu-13"
          onMouseEnter={() => handleMouseEnter(13)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(13)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Tailgates-&-Components.png" width={30} height={25} alt="Tailgates & Components" />
            </span>
            <span className="next-sub-menu">Tailgates & Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 13 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 13 || clickedDiv === 13) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Liftgate-Control-Module.png" width={30} height={25} alt="Liftgate Control Module" />
             </div>
             <div className="box-text">
             <p>Liftgate Control Module</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-14">
          <div 
          className="next-menu-14"
          onMouseEnter={() => handleMouseEnter(14)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(14)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Window-Motors-&-Regulators.png" width={30} height={25} alt="Window Motors & Regulators" />
            </span>
            <span className="next-sub-menu">Window Motors & Regulators</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 14 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 14 || clickedDiv === 14) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Plastic-Slider.png" width={30} height={25} alt="Plastic Slider" />
             </div>
             <div className="box-text">
             <p>Plastic Slider</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-WMA.png" width={30} height={25} alt="Rear Window Motor Assembly" />
             </div>
             <div className="box-text">
             <p>Rear Window Motor Assembly</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Window-Motor.png" width={30} height={25} alt="Window Motor" />
             </div>
             <div className="box-text">
             <p>Window Motor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Window-Regulator.png" width={30} height={25} alt="Window Regulator" />
             </div>
             <div className="box-text">
             <p>Window Regulator</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

        </div>
           )}


          {/********************** Sixth Category content page **************************/}
          {activeCategory === 'Heating & Cooling' && (
        <div className="next-content">
          <div className="top-head">
          <Image 
            className="back-btn"
            src="/images/left-angle.svg" 
            width={10} 
            height={5}
            alt="" 
            onClick={() => setActiveCategory(null)}
          />
            <div className="content-menu">
              <h3>Heating & Cooling</h3>
            </div>
          </div>

          <div className="specfic-div">
          <div 
          className="next-menu-1"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(1)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Heating,-Air-Conditioning-&-Components.png" width={30} height={25} alt="Heating, Air Conditioning & Components" />
            </span>
            <span className="next-sub-menu">Heating, Air Conditioning &<br/> Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 1 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>


           <div className={`open-boxes-div ${(activeDiv === 1 || clickedDiv === 1) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/AC Compressor Bracket.png" width={30} height={25} alt="A/C Compressor Bracket" />
             </div>
             <div className="box-text">
             <p>A/C Compressor Bracket</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/AC Compressor Bracket.png" width={30} height={25} alt="A/C Expansion Valve" />
             </div>
             <div className="box-text">
             <p>A/C Expansion Valve</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/AC Compressor Bracket.png" width={30} height={25} alt="A/C Hose" />
             </div>
             <div className="box-text">
             <p>A/C Hose</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/AC Compressor Bracket.png" width={30} height={25} alt="A/C Orifice Tube" />
             </div>
             <div className="box-text">
             <p>A/C Orifice Tube</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/AC-Compressor.png" width={30} height={25} alt="AC Compressor" />
             </div>
             <div className="box-text">
             <p>AC Compressor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-ACK.png" width={30} height={25} alt="AC Compressor Clutch Kit" />
             </div>
             <div className="box-text">
             <p>AC Compressor Clutch Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/AC Evaporator.png" width={30} height={25} alt="AC Evaporator" />
             </div>
             <div className="box-text">
             <p>AC Evaporator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-ACCP.png" width={30} height={25} alt="Air Conditional Control Panel" />
             </div>
             <div className="box-text">
             <p>Air Conditional Control Panel</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Blend-Door-Actuator.png" width={30} height={25} alt="Blend Door Actuator" />
             </div>
             <div className="box-text">
             <p>Blend Door Actuator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Blend-Door-Repair-Kit.png" width={30} height={25} alt="Blend Door Repair Kit" />
             </div>
             <div className="box-text">
             <p>Blend Door Repair Kit</p>
             </div>
             </Link>
             </div>
             
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Blower-Motor.png" width={30} height={25} alt="Blower Motor" />
             </div>
             <div className="box-text">
             <p>Blower Motor</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-2">
          <div 
            className="next-menu-2"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(2)}
          >
            <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Radiators, Fans, Cooling Systems & Components.png" width={30} height={25} alt="Radiators, Fans, Cooling Systems & Components" />
            </span>
            <span className="next-sub-menu">Radiators, Fans, Cooling Systems &<br/> Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 2 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
          </span>
          </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 2 || clickedDiv === 2) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Cooling-Fan.png" width={30} height={25} alt="Cooling Fan" />
             </div>
             <div className="box-text">
             <p>Cooling Fan</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fan-Blade.png" width={30} height={25} alt="Fan Blade" />
             </div>
             <div className="box-text">
             <p>Fan Blade</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fan-Clutch.png" width={30} height={25} alt="Fan Clutch" />
             </div>
             <div className="box-text">
             <p>Fan Clutch</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Radiator-Fan-Shroud.png" width={30} height={25} alt="Radiator Fan Shroud" />
             </div>
             <div className="box-text">
             <p>Radiator Fan Shroud</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-RSS.png" width={30} height={25} alt="Radiator Shrouds" />
             </div>
             <div className="box-text">
             <p>Radiator Shrouds</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Thermostat.png" width={30} height={25} alt="Thermostat" />
             </div>
             <div className="box-text">
             <p>Thermostat</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Water-Pump.png" width={30} height={25} alt="Water Pump" />
             </div>
             <div className="box-text">
             <p>Water Pump</p>
             </div>
             </Link>
             </div>

           </div>
          </div>
        </div>
)}

   {/********************** Seventh Category content page **************************/}
          {activeCategory === 'Body & Lamp Assembly' && (
        <div className="next-content">
          <div className="top-head">
          <Image 
            className="back-btn"
            src="/images/left-angle.svg" 
            width={10} 
            height={5}
            alt="" 
            onClick={() => setActiveCategory(null)}
          />
            <div className="content-menu">
              <h3>Body & Lamp Assembly</h3>
            </div>
          </div>

          <div className="specfic-div">
          <div 
          className="next-menu-1"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(1)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Headlight Assemblies & Components.png" width={30} height={25} alt="Headlight Assemblies & Components" />
            </span>
            <span className="next-sub-menu">Headlight Assemblies & Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 1 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 1 || clickedDiv === 1) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-HDL.png" width={30} height={25} alt="Headlight" />
             </div>
             <div className="box-text">
             <p>Headlight</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Headlight control module.png" width={30} height={25} alt="Headlight control module" />
             </div>
             <div className="box-text">
             <p>Headlight control module</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Headlight Level Sensor.png" width={30} height={25} alt="Headlight Level Sensor" />
             </div>
             <div className="box-text">
             <p>Headlight Level Sensor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Headlight Motor.png" width={30} height={25} alt="Headlight Motor" />
             </div>
             <div className="box-text">
             <p>Headlight Motor</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-2">
          <div 
            className="next-menu-2"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(2)}
          >
            <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Light Bulbs & LEDs.png" width={30} height={25} alt="Light Bulbs & LEDs" />
            </span>
            <span className="next-sub-menu">Light Bulbs & LEDs</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 2 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
          </span>
          </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 2 || clickedDiv === 2) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Bed Lighting Kit.png" width={30} height={25} alt="Bed Lighting Kit" />
             </div>
             <div className="box-text">
             <p>Bed Lighting Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-TSL.png" width={30} height={25} alt="Tailgate Step Light" />
             </div>
             <div className="box-text">
             <p>Tailgate Step Light</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-TLL.png" width={30} height={25} alt="Turn Signal Light Lens" />
             </div>
             <div className="box-text">
             <p>Turn Signal Light Lens</p>
             </div>
             </Link>
             </div>

           </div>
          </div>


          <div className="specfic-div-3">
          <div 
            className="next-menu-3"
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(3)}
          >
            <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Mirrors & Components.png" width={30} height={25} alt="Mirrors & Components" />
            </span>
            <span className="next-sub-menu">Mirrors & Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 3 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
          </span>
          </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 3 || clickedDiv === 3) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Mirror.png" width={30} height={25} alt="Mirror" />
             </div>
             <div className="box-text">
             <p>Mirror</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-4">
          <div 
            className="next-menu-4"
            onMouseEnter={() => handleMouseEnter(4)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(4)}
          >
            <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Parking Assistance.png" width={30} height={25} alt="Parking Assistance" />
            </span>
            <span className="next-sub-menu">Parking Assistance</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 4? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
          </span>
          </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 4 || clickedDiv === 4) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-BSRS.png" width={30} height={25} alt="Blind Spot Radar Sensor" />
             </div>
             <div className="box-text">
             <p>Blind Spot Radar Sensor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-PAS.png" width={30} height={25} alt="Parking Assist Sensor" />
             </div>
             <div className="box-text">
             <p>Parking Assist Sensor</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

        </div>
)}


        {/********************** Eighth Category content page **************************/}
        {activeCategory === 'Suspension & Steering' && (
        <div className="next-content">
          <div className="top-head">
          <Image 
            className="back-btn"
            src="/images/left-angle.svg" 
            width={10} 
            height={5}
            alt="" 
            onClick={() => setActiveCategory(null)}
          />
            <div className="content-menu">
              <h3>Suspension & Steering</h3>
            </div>
          </div>

          <div className="specfic-div">
          <div 
          className="next-menu-1"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(1)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Air Suspension & Components.png" width={30} height={25} alt="Air Suspension & Components" />
            </span>
            <span className="next-sub-menu">Air Suspension & Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 1 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 1 || clickedDiv === 1) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Air-Spring.png" width={30} height={25} alt="Air Spring" />
             </div>
             <div className="box-text">
             <p>Air Spring</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Air-Strut.png" width={30} height={25} alt="Air Strut" />
             </div>
             <div className="box-text">
             <p>Air Strut</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-ASK.png" width={30} height={25} alt="Air Suspension Bag Kit" />
             </div>
             <div className="box-text">
             <p>Air Suspension Bag Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Air-Suspension-Compressor.png" width={30} height={25} alt="Air Suspension Compressor" />
             </div>
             <div className="box-text">
             <p>Air Suspension Compressor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Air-Suspension-Control-Module.png" width={30} height={25} alt="Air Suspension Control Module" />
             </div>
             <div className="box-text">
             <p>Air Suspension Control Module</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Air-Suspension-Solenoid-Valve.png" width={30} height={25} alt="Air Suspension Solenoid Valve" />
             </div>
             <div className="box-text">
             <p>Air Suspension Solenoid Valve</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-2">
          <div 
            className="next-menu-2"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(2)}
          >
            <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Control-Arms,-Ball-Joints-&-Assemblies.png" width={30} height={25} alt="Control Arms, Ball Joints & Assemblies" />
            </span>
            <span className="next-sub-menu">Control Arms, Ball Joints & Assemblies</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 2 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
          </span>
          </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 2 || clickedDiv === 2) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Control-Arm.png" width={30} height={25} alt="Control Arm" />
             </div>
             <div className="box-text">
             <p>Control Arm</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-SBR.png" width={30} height={25} alt="Stabilizer Bar" />
             </div>
             <div className="box-text">
             <p>Stabilizer Bar</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Suspension-Sway-Bar-Kit.png" width={30} height={25} alt="Suspension Sway Bar Kit" />
             </div>
             <div className="box-text">
             <p>Suspension Sway Bar Kit</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-3">
          <div 
          className="next-menu-3"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(3)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Other-Steering-&-Suspension-Parts.png" width={30} height={25} alt="Other Steering & Suspension Parts" />
            </span>
            <span className="next-sub-menu">Other Steering & Suspension Parts</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 3 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 3 || clickedDiv === 3) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Coupling-Assembly.png" width={30} height={25} alt="Coupling Assembly" />
             </div>
             <div className="box-text">
             <p>Coupling Assembly</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-FAES.png" width={30} height={25} alt="Front Axle Engine Subframe" />
             </div>
             <div className="box-text">
             <p>Front Axle Engine Subframe</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-PSK.png" width={30} height={25} alt="Power Steering Valve Cylinder Ram Hose Kit" />
             </div>
             <div className="box-text">
             <p>Power Steering Valve Cylinder Ram Hose Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Protection-Boot.png" width={30} height={25} alt="Protection Boot" />
             </div>
             <div className="box-text">
             <p>Protection Boot</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Ride-Height-Level-Sensor.png" width={30} height={25} alt="Ride Height Level Sensor" />
             </div>
             <div className="box-text">
             <p>Ride Height Level Sensor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Suspension-Lift-Kit.png" width={30} height={25} alt="Suspension Lift Kit" />
             </div>
             <div className="box-text">
             <p>Suspension Lift Kit</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-4">
          <div 
          className="next-menu-4"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(4)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Shocks,-Struts-&-Springs.png" width={30} height={25} alt="Shocks, Struts & Springs" />
            </span>
            <span className="next-sub-menu">Shocks, Struts & Springs</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 4 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 4 || clickedDiv === 4) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Coil Spring.png" width={30} height={25} alt="Coil Spring" />
             </div>
             <div className="box-text">
             <p>Coil Spring</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Magnetic-Shock-Absorber.png" width={30} height={25} alt="Magnetic Shock Absorber" />
             </div>
             <div className="box-text">
             <p>Magnetic Shock Absorber</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Shock-Absorber.png" width={30} height={25} alt="Shock Absorber" />
             </div>
             <div className="box-text">
             <p>Shock Absorber</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Strut-Mount.png" width={30} height={25} alt="Strut Mount" />
             </div>
             <div className="box-text">
             <p>Strut Mount</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-SAR.png" width={30} height={25} alt="Suspension Accumulator" />
             </div>
             <div className="box-text">
             <p>Suspension Accumulator</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-5">
          <div 
          className="next-menu-5"
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(5)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Steering-Systems-&-Components.png" width={30} height={25} alt="Steering Systems & Components" />
            </span>
            <span className="next-sub-menu">Steering Systems & Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 5 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 5 || clickedDiv === 5) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-PSC.png" width={30} height={25} alt="Power Steering Cooler" />
             </div>
             <div className="box-text">
             <p>Power Steering Cooler</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Power-Steering-Hose.png" width={30} height={25} alt="Power Steering Hose" />
             </div>
             <div className="box-text">
             <p>Power Steering Hose</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Power-Steering-Pump.png" width={30} height={25} alt="Power Steering Pump" />
             </div>
             <div className="box-text">
             <p>Power Steering Pump</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Power-Steering-Pump-Pulley.png" width={30} height={25} alt="Power Steering Pump Pulley" />
             </div>
             <div className="box-text">
             <p>Power Steering Pump Pulley</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Power-Steering-Tank.png" width={30} height={25} alt="Power Steering Tank" />
             </div>
             <div className="box-text">
             <p>Power Steering Tank</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Steering-Column-Shaft.png" width={30} height={25} alt="Steering Column Shaft" />
             </div>
             <div className="box-text">
             <p>Steering Column Shaft</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Knuckle-Steering.png" width={30} height={25} alt="Steering Knuckle" />
             </div>
             <div className="box-text">
             <p>Steering Knuckle</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Steering-Knuckle-Assembly.png" width={30} height={25} alt="Steering Knuckle Assembly" />
             </div>
             <div className="box-text">
             <p>Steering Knuckle Assembly</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Steering-Linkage-Drag-Link-Tie-Rod-Assembly.png" width={30} height={25} alt="Steering Linkage Drag Link Tie Rod Assembly" />
             </div>
             <div className="box-text">
             <p>Steering Linkage Drag Link Tie Rod Assembly</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-6">
          <div 
          className="next-menu-6"
          onMouseEnter={() => handleMouseEnter(6)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(6)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Tie-Rods,-Steering-Racks,-Gearboxes-&-Components.png" width={30} height={25} alt="Tie Rods, Steering Racks, Gearboxes & Components" />
            </span>
            <span className="next-sub-menu">Tie Rods, Steering Racks, Gearboxes &<br/> Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 6 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 6 || clickedDiv === 6) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Power-Steering-Rack.png" width={30} height={25} alt="Power Steering Rack" />
             </div>
             <div className="box-text">
             <p>Power Steering Rack</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Steering-Rack-And-Pinion.png" width={30} height={25} alt="Steering Rack And Pinion" />
             </div>
             <div className="box-text">
             <p>Steering Rack And Pinion</p>
             </div>
             </Link>
             </div>

           </div>
          </div>
        </div>
)}

  {/********************** Nineth Category content page **************************/}
           {activeCategory === 'Brake & Wheel Parts' && (
        <div className="next-content">
          <div className="top-head">
          <Image 
            className="back-btn"
            src="/images/left-angle.svg" 
            width={10} 
            height={5}
            alt="" 
            onClick={() => setActiveCategory(null)}
          />
            <div className="content-menu">
              <h3>Brake & Wheel Parts</h3>
            </div>
          </div>

          <div className="specfic-div">
          <div 
          className="next-menu-1"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(1)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Brake-Discs,-Pads-&-Calipers.png" width={30} height={25} alt="Brake Discs, Pads & Calipers" />
            </span>
            <span className="next-sub-menu">Brake Discs, Pads & Calipers</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 1 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 1 || clickedDiv === 1) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Brake Caliper.png" width={30} height={25} alt="Brake Caliper" />
             </div>
             <div className="box-text">
             <p>Brake Caliper</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Brake Pad.png" width={30} height={25} alt="Brake Pad" />
             </div>
             <div className="box-text">
             <p>Brake Pad</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Brake Pad Wear Sensor.png" width={30} height={25} alt="Brake Pad Wear Sensor" />
             </div>
             <div className="box-text">
             <p>Brake Pad Wear Sensor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Brake Rotor.png" width={30} height={25} alt="Brake Rotor" />
             </div>
             <div className="box-text">
             <p>Brake Rotor</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-2">
          <div 
            className="next-menu-2"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(2)}
          >
            <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Brake-Drums,-Shoes-&-Components.png" width={30} height={25} alt="Brake Drums, Shoes & Components" />
            </span>
            <span className="next-sub-menu">Brake Drums, Shoes & Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 2 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
          </span>
          </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 2 || clickedDiv === 2) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-BDR.png" width={30} height={25} alt="Brake Drum" />
             </div>
             <div className="box-text">
             <p>Brake Drum</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Brake Drum and Brake Shoe Assembly.png" width={30} height={25} alt="Brake Drum and Brake Shoe Assembly" />
             </div>
             <div className="box-text">
             <p>Brake Drum and Brake Shoe Assembly</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-BDC.png" width={30} height={25} alt="Brake Drum Cover" />
             </div>
             <div className="box-text">
             <p>Brake Drum Cover</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Brake Dust Shield.png" width={30} height={25} alt="Brake Dust Shield" />
             </div>
             <div className="box-text">
             <p>Brake Dust Shield</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-BSH.png" width={30} height={25} alt="Brake Shoe Set" />
             </div>
             <div className="box-text">
             <p>Brake Shoe Set</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-RBD.png" width={30} height={25} alt="Rear Brake Drum" />
             </div>
             <div className="box-text">
             <p>Rear Brake Drum</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-3">
          <div 
          className="next-menu-3"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(3)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Brake-Master-Cylinders,-Boosters-&-Components.png" width={30} height={25} alt="Brake Master Cylinders, Boosters & Components" />
            </span>
            <span className="next-sub-menu">Brake Master Cylinders, Boosters &<br/> Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 3 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 3 || clickedDiv === 3) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Brake Hydraulic Hose.png" width={30} height={25} alt="Brake Hydraulic Hose" />
             </div>
             <div className="box-text">
             <p>Brake Hydraulic Hose</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Brake Master Cylinder.png" width={30} height={25} alt="Brake Master Cylinder" />
             </div>
             <div className="box-text">
             <p>Brake Master Cylinder</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Brake Vacuum Pump.png" width={30} height={25} alt="Brake Vacuum Pump" />
             </div>
             <div className="box-text">
             <p>Brake Vacuum Pump</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Brake Wheel Cylinders.png" width={30} height={25} alt="Brake Wheel Cylinders" />
             </div>
             <div className="box-text">
             <p>Brake Wheel Cylinders</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Driveshaft Parking Brake.png" width={30} height={25} alt="Driveshaft Parking Brake" />
             </div>
             <div className="box-text">
             <p>Driveshaft Parking Brake</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Power Brake Booster.png" width={30} height={25} alt="Power Brake Booster" />
             </div>
             <div className="box-text">
             <p>Power Brake Booster</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Trailer Brake Control Module.png" width={30} height={25} alt="Trailer Brake Control Module" />
             </div>
             <div className="box-text">
             <p>Trailer Brake Control Module</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-4">
          <div 
          className="next-menu-4"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(4)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Parking-Brake,-ABS-&-Other-Components.png" width={30} height={25} alt="Parking Brake, ABS & Other Components" />
            </span>
            <span className="next-sub-menu">Parking Brake, ABS & Other<br/> Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 4 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 4 || clickedDiv === 4) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/ABS Speed Sensor.png" width={30} height={25} alt="ABS Speed Sensor" />
             </div>
             <div className="box-text">
             <p>ABS Speed Sensor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Emergency Parking Brake Handle Lever.png" width={30} height={25} alt="Emergency Parking Brake Handle Lever" />
             </div>
             <div className="box-text">
             <p>Emergency Parking Brake Handle Lever</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Parking Brake Actuator.png" width={30} height={25} alt="Parking Brake Actuator" />
             </div>
             <div className="box-text">
             <p>Parking Brake Actuator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-PBC-2.png" width={30} height={25} alt="Parking Brake Cable" />
             </div>
             <div className="box-text">
             <p>Parking Brake Cable</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Parking Brake Module.png" width={30} height={25} alt="Parking Brake Module" />
             </div>
             <div className="box-text">
             <p>Parking Brake Module</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-PBP.png" width={30} height={25} alt="Parking Brake Pedal Assembly" />
             </div>
             <div className="box-text">
             <p>Parking Brake Pedal Assembly</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Speed Sensor.png" width={30} height={25} alt="Speed Sensor" />
             </div>
             <div className="box-text">
             <p>Speed Sensor</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-5">
          <div 
          className="next-menu-5"
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(5)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Wheel-&-Tire-Accessories.png" width={30} height={25} alt="Wheel & Tire Accessories" />
            </span>
            <span className="next-sub-menu">Wheel & Tire Accessories</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 5 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 5 || clickedDiv === 5) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Spare Tire Winch Carrier.png" width={30} height={25} alt="Spare Tire Winch Carrier" />
             </div>
             <div className="box-text">
             <p>Spare Tire Winch Carrier</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Tire Pressure Monitoring Sensor.png" width={30} height={25} alt="Tire Pressure Monitoring Sensor" />
             </div>
             <div className="box-text">
             <p>Tire Pressure Monitoring Sensor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-WSP.png" width={30} height={25} alt="Wheel Spacer" />
             </div>
             <div className="box-text">
             <p>Wheel Spacer</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-6">
          <div 
          className="next-menu-6"
          onMouseEnter={() => handleMouseEnter(6)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(6)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Wheel-Hubs,-Bearings,-and-Components.png" width={30} height={25} alt="Wheel Hubs, Bearings, and Components" />
            </span>
            <span className="next-sub-menu">Wheel Hubs, Bearings, and<br/> Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 6 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 6 || clickedDiv === 6) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Hub bearing.png" width={30} height={25} alt="Hub bearing" />
             </div>
             <div className="box-text">
             <p>Hub bearing</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-WHC.png" width={30} height={25} alt="Wheel Cap" />
             </div>
             <div className="box-text">
             <p>Wheel Cap</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Wheel Nut.png" width={30} height={25} alt="Wheel Nut" />
             </div>
             <div className="box-text">
             <p>Wheel Nut</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Wheel Stud.png" width={30} height={25} alt="Wheel Stud" />
             </div>
             <div className="box-text">
             <p>Wheel Stud</p>
             </div>
             </Link>
             </div>

           </div>
          </div>
        </div>
)}    

  {/********************** Tenth Category content page **************************/}
  {activeCategory === 'Drivetrain' && (
        <div className="next-content">
          <div className="top-head">
          <Image 
            className="back-btn"
            src="/images/left-angle.svg" 
            width={10} 
            height={5}
            alt="" 
            onClick={() => setActiveCategory(null)}
          />
            <div className="content-menu">
              <h3>Brake & Wheel Parts</h3>
            </div>
          </div>

          <div className="specfic-div">
          <div 
          className="next-menu-1"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(1)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Automatic-Transmission-Parts.png" width={30} height={25} alt="Automatic Transmission Parts" />
            </span>
            <span className="next-sub-menu">Automatic Transmission Parts</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 1 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 1 || clickedDiv === 1) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Automatic Transmission Filter.png" width={30} height={25} alt="Automatic Transmission Filter" />
             </div>
             <div className="box-text">
             <p>Automatic Transmission Filter</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Differential-Vacuum-Actuator.png" width={30} height={25} alt="Differential Vacuum Actuator" />
             </div>
             <div className="box-text">
             <p>Differential Vacuum Actuator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Gear-Selector-Position-Sensor.png" width={30} height={25} alt="Gear Selector Position Sensor" />
             </div>
             <div className="box-text">
             <p>Gear Selector Position Sensor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-HGLK.png" width={30} height={25} alt="High Gear Lock up Switch Kit" />
             </div>
             <div className="box-text">
             <p>High Gear Lock up Switch Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240401-SHP.png" width={30} height={25} alt="Servo High Performance" />
             </div>
             <div className="box-text">
             <p>Servo High Performance</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-SSK.png" width={30} height={25} alt="Solenoid Service Kit" />
             </div>
             <div className="box-text">
             <p>Solenoid Service Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Transmission-Conductor-Plate.png" width={30} height={25} alt="Transmission Conductor Plate" />
             </div>
             <div className="box-text">
             <p>Transmission Conductor Plate</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-TCL.png" width={30} height={25} alt="Transmission Cooler Lines" />
             </div>
             <div className="box-text">
             <p>Transmission Cooler Lines</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-TRL.png" width={30} height={25} alt="Transmission Shift Lever" />
             </div>
             <div className="box-text">
             <p>Transmission Shift Lever</p>
             </div>
             </Link>
             </div>
             
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Transmission Shift Solenoid.png" width={30} height={25} alt="Transmission Shift Solenoid" />
             </div>
             <div className="box-text">
             <p>Transmission Shift Solenoid</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Transmission-Throttle-Valve-Actuator.png" width={30} height={25} alt="Transmission Throttle Valve Actuator" />
             </div>
             <div className="box-text">
             <p>Transmission Throttle Valve Actuator</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-2">
          <div 
            className="next-menu-2"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(2)}
          >
            <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Axles,-Driveshaft-&-4WD.png" width={30} height={25} alt="Axles, Driveshaft & 4WD" />
            </span>
            <span className="next-sub-menu">Axles, Driveshaft & 4WD</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 2 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
          </span>
          </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 2 || clickedDiv === 2) ? 'show' : ''}`}>
           <div className={`tab-content ${activeTab === 1 ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/4WD-Actuator.png" width={30} height={25} alt="4WD Actuator" />
             </div>
             <div className="box-text">
             <p>4WD Actuator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-ADCA.png" width={30} height={25} alt="Axle Disconnect Cable Operated Actuator" />
             </div>
             <div className="box-text">
             <p>Axle Disconnect Cable Operated Actuator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/CV Axle Shaft.png" width={30} height={25} alt="CV Axle Shaft" />
             </div>
             <div className="box-text">
             <p>CV Axle Shaft</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/CV-Intermediate-Shaft.png" width={30} height={25} alt="CV Intermediate Shaft" />
             </div>
             <div className="box-text">
             <p>CV Intermediate Shaft</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Drive-Shaft.png" width={30} height={25} alt="Drive Shaft" />
             </div>
             <div className="box-text">
             <p>Drive Shaft</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-DSB.png" width={30} height={25} alt="Drive Shaft Center Support Bearing" />
             </div>
             <div className="box-text">
             <p>Drive Shaft Center Support Bearing</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-FAH.png" width={30} height={25} alt="Front Axle Housing" />
             </div>
             <div className="box-text">
             <p>Front Axle Housing</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-FAP.png" width={30} height={25} alt="Front Axle Pivot Bar" />
             </div>
             <div className="box-text">
             <p>Front Axle Pivot Bar</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-FAK.png" width={30} height={25} alt="Front Axle Shaft Seal And Bearing Kit" />
             </div>
             <div className="box-text">
             <p>Front Axle Shaft Seal And Bearing Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-MAK.png" width={30} height={25} alt="Manual 4WD Actuator Kit" />
             </div>
             <div className="box-text">
             <p>Manual 4WD Actuator Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Propshaft-Coupling.png" width={30} height={25} alt="Propshaft Coupling" />
             </div>
             <div className="box-text">
             <p>Propshaft Coupling</p>
             </div>
             </Link>
             </div>
             </div>

{/*----------------------- Tab Content 2 ------------------------*/}

<div className={`tab-content-2 ${activeTab === 2 ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Propshaft-Coupling.png" width={30} height={25} alt="Propshaft Coupling" />
             </div>
             <div className="box-text">
             <p>Propshaft Coupling</p>
             </div>
             </Link>
             </div>
             </div>

{/*----------------- Tab Change buttons -------------------*/}
<div className="tab-buttons">
      <button
        onMouseEnter={() => setActiveTab(1)}
        onClick={() => setActiveTab(1)}
      >
        {activeTab === 1 ? (
          <Image src="/images/sidebar-imgs/active-icon.svg" width={20} height={15} alt="active-icon" />
        ) : (
          <Image src="/images/sidebar-imgs/non-active-icon.svg" width={20} height={15} alt="non-active-icon" />
        )}
      </button>
      <button
        onMouseEnter={() => setActiveTab(2)}
        onClick={() => setActiveTab(2)}
      >
        {activeTab === 2 ? (
          <Image src="/images/sidebar-imgs/active-icon.svg" width={20} height={15} alt="active-icon" />
        ) : (
          <Image src="/images/sidebar-imgs/non-active-icon.svg" width={20} height={15} alt="non-active-icon" />
        )}
      </button>  
    </div>

           </div>
          </div>

          <div className="specfic-div-3">
          <div 
          className="next-menu-3"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(3)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Clutches-&-Components.png" width={30} height={25} alt="Clutches & Components" />
            </span>
            <span className="next-sub-menu">Clutches & Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 3 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 3 || clickedDiv === 3) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-BHK.png" width={30} height={25} alt="Bellhousing Kit" />
             </div>
             <div className="box-text">
             <p>Bellhousing Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Clutch-Bellhousing.png" width={30} height={25} alt="Clutch Bellhousing" />
             </div>
             <div className="box-text">
             <p>Clutch Bellhousing</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-CFK.png" width={30} height={25} alt="Clutch Fork Kit" />
             </div>
             <div className="box-text">
             <p>Clutch Fork Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Clutch Hydraulic Hose.png" width={30} height={25} alt="Clutch Hydraulic Hose" />
             </div>
             <div className="box-text">
             <p>Clutch Hydraulic Hose</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Clutch Kit.png" width={30} height={25} alt="Clutch Kit" />
             </div>
             <div className="box-text">
             <p>Clutch Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-CMC.png" width={30} height={25} alt="Clutch Master Cylinder" />
             </div>
             <div className="box-text">
             <p>Clutch Master Cylinder</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-CSL.png" width={30} height={25} alt="Clutch Slave Cylinder" />
             </div>
             <div className="box-text">
             <p>Clutch Slave Cylinder</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Clutch-Slave-Cylinder-Actuator.png" width={30} height={25} alt="Clutch Slave Cylinder Actuator" />
             </div>
             <div className="box-text">
             <p>Clutch Slave Cylinder Actuator</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-4">
          <div 
          className="next-menu-4"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(4)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Differentials,-Assemblies-&-Parts.png" width={30} height={25} alt="Differentials, Assemblies & Parts" />
            </span>
            <span className="next-sub-menu">Differentials, Assemblies & Parts</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 4 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 4 || clickedDiv === 4) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Axle-Ring-And-Pinion-Kit.png" width={30} height={25} alt="Axle Ring And Pinion Kit" />
             </div>
             <div className="box-text">
             <p>Axle Ring And Pinion Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Coupling-Oil-Pump.png" width={30} height={25} alt="Coupling Oil Pump" />
             </div>
             <div className="box-text">
             <p>Coupling Oil Pump</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Differential.png" width={30} height={25} alt="Differential" />
             </div>
             <div className="box-text">
             <p>Differential</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Differential Cover.png" width={30} height={25} alt="Differential Cover" />
             </div>
             <div className="box-text">
             <p>Differential Cover</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Differential-Lock-Motor.png" width={30} height={25} alt="Differential Lock Motor" />
             </div>
             <div className="box-text">
             <p>Differential Lock Motor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Differential-Locker.png" width={30} height={25} alt="Differential Locker" />
             </div>
             <div className="box-text">
             <p>Differential Locker</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-5">
          <div 
          className="next-menu-5"
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(5)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Manual-Transmission-Parts.png" width={30} height={25} alt="Manual Transmission Parts" />
            </span>
            <span className="next-sub-menu">Manual Transmission Parts</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 5 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 5 || clickedDiv === 5) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-SLK.png" width={30} height={25} alt="Shift Linkage Kit" />
             </div>
             <div className="box-text">
             <p>Shift Linkage Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Short-Throw-Shifter.png" width={30} height={25} alt="Short Throw Shifter" />
             </div>
             <div className="box-text">
             <p>Short Throw Shifter</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-TSK.png" width={30} height={25} alt="Transmission Shifter Stub Kit" />
             </div>
             <div className="box-text">
             <p>Transmission Shifter Stub Kit</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-6">
          <div 
          className="next-menu-6"
          onMouseEnter={() => handleMouseEnter(6)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(6)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Other-Transmission-Parts.png" width={30} height={25} alt="Other Transmission Parts" />
            </span>
            <span className="next-sub-menu">Other Transmission Parts</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 6 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 6 || clickedDiv === 6) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-DAA.png" width={30} height={25} alt="Differential Actuator Assembly" />
             </div>
             <div className="box-text">
             <p>Differential Actuator Assembly</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-DGC.png" width={30} height={25} alt="Differential Gear & Clutch kit" />
             </div>
             <div className="box-text">
             <p>Differential Gear & Clutch kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Gearbox-Pump.png" width={30} height={25} alt="Gearbox Pump" />
             </div>
             <div className="box-text">
             <p>Gearbox Pump</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Transfer-Case-Assembly.png" width={30} height={25} alt="Transfer Case Assembly" />
             </div>
             <div className="box-text">
             <p>Transfer Case Assembly</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-TCCM.png" width={30} height={25} alt="Transfer Case Control Module" />
             </div>
             <div className="box-text">
             <p>Transfer Case Control Module</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Transfer-Case-Motor-Actuator.png" width={30} height={25} alt="Transfer Case Motor Actuator" />
             </div>
             <div className="box-text">
             <p>Transfer Case Motor Actuator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-THF.png" width={30} height={25} alt="Transmission Holding Fixture" />
             </div>
             <div className="box-text">
             <p>Transmission Holding Fixture</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Transmission-Wire-Hardness.png" width={30} height={25} alt="Transmission Wire Harness" />
             </div>
             <div className="box-text">
             <p>Transmission Wire Harness</p>
             </div>
             </Link>
             </div>

           </div>
          </div>
        </div>
)}   


  {/********************** Last Category content page **************************/}
  {activeCategory === 'Engine' && (
        <div className="next-content">
          <div className="top-head">
          <Image 
            className="back-btn"
            src="/images/left-angle.svg" 
            width={10} 
            height={5}
            alt="" 
            onClick={() => setActiveCategory(null)}
          />
            <div className="content-menu">
              <h3>Engine</h3>
            </div>
          </div>

          <div className="specfic-div">
          <div 
          className="next-menu-1"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(1)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Air-Filters-&-Intake-Systems.png" width={30} height={25} alt="Air Filters & Intake Systems" />
            </span>
            <span className="next-sub-menu">Air Filters & Intake Systems</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 1 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 1 || clickedDiv === 1) ? 'show' : ''}`}>
           <div className={`tab-content ${activeTab === 1 ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-AC.png" width={30} height={25} alt="Air Cleaner" />
             </div>
             <div className="box-text">
             <p>Air Cleaner</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Air Filter Box.png" width={30} height={25} alt="Air Filter Box" />
             </div>
             <div className="box-text">
             <p>Air Filter Box</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Air Flow Sensor.png" width={30} height={25} alt="Air Flow Sensor" />
             </div>
             <div className="box-text">
             <p>Air Flow Sensor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Air Intake Duct.png" width={30} height={25} alt="Air Intake Duct" />
             </div>
             <div className="box-text">
             <p>Air Intake Duct</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Air Intake Hose.png" width={30} height={25} alt="Air Intake Hose" />
             </div>
             <div className="box-text">
             <p>Air Intake Hose</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Air Intake Manifold Actuator Control Solenoid.png" width={30} height={25} alt="Air Intake Manifold Actuator Control Solenoid" />
             </div>
             <div className="box-text">
             <p>Air Intake Manifold Actuator Control Solenoid</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Air Intake Manifold Flap Adjuster.png" width={30} height={25} alt="Air Intake Manifold Flap Adjuster" />
             </div>
             <div className="box-text">
             <p>Air Intake Manifold Flap Adjuster</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Air Intake Manifold Runner Control Sensor.png" width={30} height={25} alt="Air Intake Manifold Runner Control Sensor" />
             </div>
             <div className="box-text">
             <p>Air Intake Manifold Runner Control Sensor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Electric Vacuum Pump.png" width={30} height={25} alt="Electric Vacuum Pump" />
             </div>
             <div className="box-text">
             <p>Electric Vacuum Pump</p>
             </div>
             </Link>
             </div>
             
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Engine Air Duct Assembly.png" width={30} height={25} alt="Engine Air Duct Assembly" />
             </div>
             <div className="box-text">
             <p>Engine Air Duct Assembly</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Engine Air Filter.png" width={30} height={25} alt="Engine Air Filter" />
             </div>
             <div className="box-text">
             <p>Engine Air Filter</p>
             </div>
             </Link>
             </div>
             </div>

{/*-------------- Tab Content 2 -----------------*/}

            <div className={`tab-content-2 ${activeTab === 2 ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/sidebar-imgs/Intake Manifold.png" width={30} height={25} alt="Intake Manifold" />
             </div>
             <div className="box-text">
             <p>Intake Manifold</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-IMA.png" width={30} height={25} alt="Intake Manifold Flap Actuator" />
             </div>
             <div className="box-text">
             <p>Intake Manifold Flap Actuator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-IMB.png" width={30} height={25} alt="Intake Manifold Repair Bracket" />
             </div>
             <div className="box-text">
             <p>Intake Manifold Repair Bracket</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Intake Manifold Runner Control Valve.png" width={30} height={25} alt="Intake Manifold Runner Control Valve" />
             </div>
             <div className="box-text">
             <p>Intake Manifold Runner Control Valve</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Intercooler.png" width={30} height={25} alt="Intercooler" />
             </div>
             <div className="box-text">
             <p>Intercooler</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Air Intake Hose.png" width={30} height={25} alt="Air Intake Hose" />
             </div>
             <div className="box-text">
             <p>Air Intake Hose</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Air Intake Manifold Actuator Control Solenoid.png" width={30} height={25} alt="Air Intake Manifold Actuator Control Solenoid" />
             </div>
             <div className="box-text">
             <p>Air Intake Manifold Actuator Control Solenoid</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Air Intake Manifold Flap Adjuster.png" width={30} height={25} alt="Air Intake Manifold Flap Adjuster" />
             </div>
             <div className="box-text">
             <p>Air Intake Manifold Flap Adjuster</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Air Intake Manifold Runner Control Sensor.png" width={30} height={25} alt="Air Intake Manifold Runner Control Sensor" />
             </div>
             <div className="box-text">
             <p>Air Intake Manifold Runner Control Sensor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Electric Vacuum Pump.png" width={30} height={25} alt="Electric Vacuum Pump" />
             </div>
             <div className="box-text">
             <p>Electric Vacuum Pump</p>
             </div>
             </Link>
             </div>
             
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Engine Air Duct Assembly.png" width={30} height={25} alt="Engine Air Duct Assembly" />
             </div>
             <div className="box-text">
             <p>Engine Air Duct Assembly</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Engine Air Filter.png" width={30} height={25} alt="Engine Air Filter" />
             </div>
             <div className="box-text">
             <p>Engine Air Filter</p>
             </div>
             </Link>
             </div>
             </div>

{/*-------------- Tab Content 3 -----------------*/}
            <div className={`tab-content-3 ${activeTab === 3 ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/sidebar-imgs/Intake Manifold.png" width={30} height={25} alt="Intake Manifold" />
             </div>
             <div className="box-text">
             <p>Intake Manifold</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-IMA.png" width={30} height={25} alt="Intake Manifold Flap Actuator" />
             </div>
             <div className="box-text">
             <p>Intake Manifold Flap Actuator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-IMB.png" width={30} height={25} alt="Intake Manifold Repair Bracket" />
             </div>
             <div className="box-text">
             <p>Intake Manifold Repair Bracket</p>
             </div>
             </Link>
             </div>

             </div>

{/*----------------- Tab Change buttons -------------------*/}
<div className="tab-buttons">
  <button
    onMouseEnter={() => setActiveTab(1)}
    onClick={() => setActiveTab(1)}
  >
    {activeTab === 1 ? (
      <Image src="/images/sidebar-imgs/active-icon.svg" width={20} height={15} alt="active-icon" />
    ) : (
      <Image src="/images/sidebar-imgs/non-active-icon.svg" width={20} height={15} alt="non-active-icon" />
    )}
  </button>
  <button
    onMouseEnter={() => setActiveTab(2)}
    onClick={() => setActiveTab(2)}
  >
    {activeTab === 2 ? (
      <Image src="/images/sidebar-imgs/active-icon.svg" width={20} height={15} alt="active-icon" />
    ) : (
      <Image src="/images/sidebar-imgs/non-active-icon.svg" width={20} height={15} alt="non-active-icon" />
    )}
  </button>
  <button
    onMouseEnter={() => setActiveTab(3)}
    onClick={() => setActiveTab(3)}
  >
    {activeTab === 3 ? (
      <Image src="/images/sidebar-imgs/active-icon.svg" width={20} height={15} alt="active-icon" />
    ) : (
      <Image src="/images/sidebar-imgs/non-active-icon.svg" width={20} height={15} alt="non-active-icon" />
    )}
  </button>

</div>


           </div>
          </div>


          <div className="specfic-div-2">
          <div 
            className="next-menu-2"
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(2)}
          >
            <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Cams,-Timing-&-Valvetrain.png" width={30} height={25} alt="Cams, Timing & Valvetrain" />
            </span>
            <span className="next-sub-menu">Cams, Timing & Valvetrain</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 2 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
          </span>
          </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 2 || clickedDiv === 2) ? 'show' : ''}`}>
           <div className={`tab-content ${activeTab === 1 ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Camshaft Adjuster.png" width={30} height={25} alt="Camshaft Adjuster" />
             </div>
             <div className="box-text">
             <p>Camshaft Adjuster</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Camshaft Adjuster Cover.png" width={30} height={25} alt="Camshaft Adjuster Cover" />
             </div>
             <div className="box-text">
             <p>Camshaft Adjuster Cover</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-CSK.png" width={30} height={25} alt="Camshaft Kit" />
             </div>
             <div className="box-text">
             <p>Camshaft Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Camshaft Timing Gear.png" width={30} height={25} alt="Camshaft Timing Gear" />
             </div>
             <div className="box-text">
             <p>Camshaft Timing Gear</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Camshafts.png" width={30} height={25} alt="Camshafts" />
             </div>
             <div className="box-text">
             <p>Camshafts</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Chain Tensioner Adjuster.png" width={30} height={25} alt="Chain Tensioner Adjuster" />
             </div>
             <div className="box-text">
             <p>Chain Tensioner Adjuster</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Cylinder Head.png" width={30} height={25} alt="Cylinder Head" />
             </div>
             <div className="box-text">
             <p>Cylinder Head</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-CHA.png" width={30} height={25} alt="Cylinder Head Assembly" />
             </div>
             <div className="box-text">
             <p>Cylinder Head Assembly</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Eccentric Shaft-Actuator.png" width={30} height={25} alt="Eccentric Shaft Actuator" />
             </div>
             <div className="box-text">
             <p>Eccentric Shaft Actuator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Engine Valve Cover.png" width={30} height={25} alt="Engine Valve Cover" />
             </div>
             <div className="box-text">
             <p>Engine Valve Cover</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Harmonic Balancer.png" width={30} height={25} alt="Harmonic Balancer" />
             </div>
             <div className="box-text">
             <p>Harmonic Balancer</p>
             </div>
             </Link>
             </div>
            </div>

{/*------------------ Tab Content 2 -------------------*/}
            <div className={`tab-content-2 ${activeTab === 2 ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Camshaft Adjuster.png" width={30} height={25} alt="Camshaft Adjuster" />
             </div>
             <div className="box-text">
             <p>Camshaft Adjuster</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Camshaft Adjuster Cover.png" width={30} height={25} alt="Camshaft Adjuster Cover" />
             </div>
             <div className="box-text">
             <p>Camshaft Adjuster Cover</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-CSK.png" width={30} height={25} alt="Camshaft Kit" />
             </div>
             <div className="box-text">
             <p>Camshaft Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Camshaft Timing Gear.png" width={30} height={25} alt="Camshaft Timing Gear" />
             </div>
             <div className="box-text">
             <p>Camshaft Timing Gear</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Camshafts.png" width={30} height={25} alt="Camshafts" />
             </div>
             <div className="box-text">
             <p>Camshafts</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Chain Tensioner Adjuster.png" width={30} height={25} alt="Chain Tensioner Adjuster" />
             </div>
             <div className="box-text">
             <p>Chain Tensioner Adjuster</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Cylinder Head.png" width={30} height={25} alt="Cylinder Head" />
             </div>
             <div className="box-text">
             <p>Cylinder Head</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-CHA.png" width={30} height={25} alt="Cylinder Head Assembly" />
             </div>
             <div className="box-text">
             <p>Cylinder Head Assembly</p>
             </div>
             </Link>
             </div>
            </div>

{/*----------------- Tab Change buttons -------------------*/}
        <div className="tab-buttons">
          <button
            onMouseEnter={() => setActiveTab(1)}
            onClick={() => setActiveTab(1)}
          >
            {activeTab === 1 ? (
              <Image src="/images/sidebar-imgs/active-icon.svg" width={20} height={15} alt="active-icon" />
            ) : (
              <Image src="/images/sidebar-imgs/non-active-icon.svg" width={20} height={15} alt="non-active-icon" />
            )}
          </button>
          <button
            onMouseEnter={() => setActiveTab(2)}
            onClick={() => setActiveTab(2)}
          >
            {activeTab === 2 ? (
              <Image src="/images/sidebar-imgs/active-icon.svg" width={20} height={15} alt="active-icon" />
            ) : (
              <Image src="/images/sidebar-imgs/non-active-icon.svg" width={20} height={15} alt="non-active-icon" />
            )}
          </button>        
        </div>
           </div>
          </div>

          <div className="specfic-div-3">
          <div 
          className="next-menu-3"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(3)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Cranks,-Pistons,-Oil-&-Components.png" width={30} height={25} alt="Cranks, Pistons, Oil & Components" />
            </span>
            <span className="next-sub-menu">Cranks, Pistons, Oil & Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 3 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 3 || clickedDiv === 3) ? 'show' : ''}`}>
           <div className={`tab-content ${activeTab === 1 ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Belt Tensioner.png" width={30} height={25} alt="Belt Tensioner" />
             </div>
             <div className="box-text">
             <p>Belt Tensioner</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Coolant Level Sensor.png" width={30} height={25} alt="Coolant Level Sensor" />
             </div>
             <div className="box-text">
             <p>Coolant Level Sensor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Crank Installer Tool.png" width={30} height={25} alt="Crank Installer Tool" />
             </div>
             <div className="box-text">
             <p>Crank Installer Tool</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Crankcase Breather Hose.png" width={30} height={25} alt="Crankcase Breather Hose" />
             </div>
             <div className="box-text">
             <p>Crankcase Breather Hose</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Crankcase Breather Valve.png" width={30} height={25} alt="Crankcase Breather Valve" />
             </div>
             <div className="box-text">
             <p>Crankcase Breather Valve</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Crankshaft Position Sensor.png" width={30} height={25} alt="Crankshaft Position Sensor" />
             </div>
             <div className="box-text">
             <p>Crankshaft Position Sensor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Crankshaft Pulley.png" width={30} height={25} alt="Crankshaft Pulley" />
             </div>
             <div className="box-text">
             <p>Crankshaft Pulley</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Engine Oil Dipstick.png" width={30} height={25} alt="Engine Oil Dipstick" />
             </div>
             <div className="box-text">
             <p>Engine Oil Dipstick</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Engine Oil Dipstick Tube.png" width={30} height={25} alt="Engine Oil Dipstick Tube" />
             </div>
             <div className="box-text">
             <p>Engine Oil Dipstick Tube</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240401-EOF.png" width={30} height={25} alt="Engine Oil Filter" />
             </div>
             <div className="box-text">
             <p>Engine Oil Filter</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Engine Oil Pan Gasket.png" width={30} height={25} alt="Engine Oil Pan Gasket" />
             </div>
             <div className="box-text">
             <p>Engine Oil Pan Gasket</p>
             </div>
             </Link>
             </div>
             </div>

{/*----------------------- Tab Content 2 ------------------------*/}
             <div className={`tab-content-2 ${activeTab === 2 ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Belt Tensioner.png" width={30} height={25} alt="Belt Tensioner" />
             </div>
             <div className="box-text">
             <p>Belt Tensioner</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Coolant Level Sensor.png" width={30} height={25} alt="Coolant Level Sensor" />
             </div>
             <div className="box-text">
             <p>Coolant Level Sensor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Crank Installer Tool.png" width={30} height={25} alt="Crank Installer Tool" />
             </div>
             <div className="box-text">
             <p>Crank Installer Tool</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Crankcase Breather Hose.png" width={30} height={25} alt="Crankcase Breather Hose" />
             </div>
             <div className="box-text">
             <p>Crankcase Breather Hose</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Crankcase Breather Valve.png" width={30} height={25} alt="Crankcase Breather Valve" />
             </div>
             <div className="box-text">
             <p>Crankcase Breather Valve</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Crankshaft Position Sensor.png" width={30} height={25} alt="Crankshaft Position Sensor" />
             </div>
             <div className="box-text">
             <p>Crankshaft Position Sensor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Crankshaft Pulley.png" width={30} height={25} alt="Crankshaft Pulley" />
             </div>
             <div className="box-text">
             <p>Crankshaft Pulley</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Engine Oil Dipstick.png" width={30} height={25} alt="Engine Oil Dipstick" />
             </div>
             <div className="box-text">
             <p>Engine Oil Dipstick</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Engine Oil Dipstick Tube.png" width={30} height={25} alt="Engine Oil Dipstick Tube" />
             </div>
             <div className="box-text">
             <p>Engine Oil Dipstick Tube</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240401-EOF.png" width={30} height={25} alt="Engine Oil Filter" />
             </div>
             <div className="box-text">
             <p>Engine Oil Filter</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Engine Oil Pan Gasket.png" width={30} height={25} alt="Engine Oil Pan Gasket" />
             </div>
             <div className="box-text">
             <p>Engine Oil Pan Gasket</p>
             </div>
             </Link>
             </div>
             </div>

{/*----------------------- Tab Content 3 ------------------------*/}
<div className={`tab-content-3 ${activeTab === 3 ? 'show' : ''}`}>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Crank Installer Tool.png" width={30} height={25} alt="Crank Installer Tool" />
             </div>
             <div className="box-text">
             <p>Crank Installer Tool</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Crankcase Breather Hose.png" width={30} height={25} alt="Crankcase Breather Hose" />
             </div>
             <div className="box-text">
             <p>Crankcase Breather Hose</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Crankcase Breather Valve.png" width={30} height={25} alt="Crankcase Breather Valve" />
             </div>
             <div className="box-text">
             <p>Crankcase Breather Valve</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Crankshaft Position Sensor.png" width={30} height={25} alt="Crankshaft Position Sensor" />
             </div>
             <div className="box-text">
             <p>Crankshaft Position Sensor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Crankshaft Pulley.png" width={30} height={25} alt="Crankshaft Pulley" />
             </div>
             <div className="box-text">
             <p>Crankshaft Pulley</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Engine Oil Dipstick.png" width={30} height={25} alt="Engine Oil Dipstick" />
             </div>
             <div className="box-text">
             <p>Engine Oil Dipstick</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Engine Oil Dipstick Tube.png" width={30} height={25} alt="Engine Oil Dipstick Tube" />
             </div>
             <div className="box-text">
             <p>Engine Oil Dipstick Tube</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240401-EOF.png" width={30} height={25} alt="Engine Oil Filter" />
             </div>
             <div className="box-text">
             <p>Engine Oil Filter</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Engine Oil Pan Gasket.png" width={30} height={25} alt="Engine Oil Pan Gasket" />
             </div>
             <div className="box-text">
             <p>Engine Oil Pan Gasket</p>
             </div>
             </Link>
             </div>
             </div>

    {/*----------------- Tab Change buttons -------------------*/}
    <div className="tab-buttons">
      <button
        onMouseEnter={() => setActiveTab(1)}
        onClick={() => setActiveTab(1)}
      >
        {activeTab === 1 ? (
          <Image src="/images/sidebar-imgs/active-icon.svg" width={20} height={15} alt="active-icon" />
        ) : (
          <Image src="/images/sidebar-imgs/non-active-icon.svg" width={20} height={15} alt="non-active-icon" />
        )}
      </button>
      <button
        onMouseEnter={() => setActiveTab(2)}
        onClick={() => setActiveTab(2)}
      >
        {activeTab === 2 ? (
          <Image src="/images/sidebar-imgs/active-icon.svg" width={20} height={15} alt="active-icon" />
        ) : (
          <Image src="/images/sidebar-imgs/non-active-icon.svg" width={20} height={15} alt="non-active-icon" />
        )}
      </button>
      <button
        onMouseEnter={() => setActiveTab(3)}
        onClick={() => setActiveTab(3)}
      >
        {activeTab === 3 ? (
          <Image src="/images/sidebar-imgs/active-icon.svg" width={20} height={15} alt="active-icon" />
        ) : (
          <Image src="/images/sidebar-imgs/non-active-icon.svg" width={20} height={15} alt="non-active-icon" />
        )}
      </button>    
    </div>

           </div>
          </div>

          <div className="specfic-div-4">
          <div 
          className="next-menu-4"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(4)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Electronic-Control-Modules,-Ignition-&-Distributors.png" width={30} height={25} alt="Electronic Control Modules, Ignition & Distributors" />
            </span>
            <span className="next-sub-menu">Electronic Control Modules, Ignition &<br/> Distributors</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 4 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 4 || clickedDiv === 4) ? 'show' : ''}`}>
           <div className={`tab-content ${activeTab === 1 ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Camshaft-Position-Sensor.png" width={30} height={25} alt="Camshaft Position Sensor" />
             </div>
             <div className="box-text">
             <p>Camshaft Position Sensor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-CAMK.png" width={30} height={25} alt="Camshaft Position Sensor & Magnet Kit" />
             </div>
             <div className="box-text">
             <p>Camshaft Position Sensor & Magnet Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Connector-Plug.png" width={30} height={25} alt="Connector Plug" />
             </div>
             <div className="box-text">
             <p>Connector Plug</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-DC-2.png" width={30} height={25} alt="Distributor Cap" />
             </div>
             <div className="box-text">
             <p>Distributor Cap</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Electronic Ignition System.png" width={30} height={25} alt="Electronic Ignition System" />
             </div>
             <div className="box-text">
             <p>Electronic Ignition System</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-EVCK.png" width={30} height={25} alt="Engine Valve Covers & Ignition Coils Kits" />
             </div>
             <div className="box-text">
             <p>Engine Valve Covers & Ignition Coils Kits</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Glow-Plug-Relay-Module.png" width={30} height={25} alt="Glow Plug Relay Module" />
             </div>
             <div className="box-text">
             <p>Glow Plug Relay Module</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Ignition Coil.png" width={30} height={25} alt="Ignition Coil" />
             </div>
             <div className="box-text">
             <p>Ignition Coil</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Ignition Coils & Spark Plugs Kits.png" width={30} height={25} alt="Ignition Coils & Spark Plugs Kits" />
             </div>
             <div className="box-text">
             <p>Ignition Coils & Spark Plugs Kits</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-ID.png" width={30} height={25} alt="Ignition Distributor" />
             </div>
             <div className="box-text">
             <p>Ignition Distributor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-ISS.png" width={30} height={25} alt="Ignition Starter Switch" />
             </div>
             <div className="box-text">
             <p>Ignition Starter Switch</p>
             </div>
             </Link>
             </div>
             </div>

{/*----------------------- Tab Content 2 ------------------------*/}
             <div className={`tab-content-2 ${activeTab === 2 ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-EVCK.png" width={30} height={25} alt="Engine Valve Covers & Ignition Coils Kits" />
             </div>
             <div className="box-text">
             <p>Engine Valve Covers & Ignition Coils Kits</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Glow-Plug-Relay-Module.png" width={30} height={25} alt="Glow Plug Relay Module" />
             </div>
             <div className="box-text">
             <p>Glow Plug Relay Module</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Ignition Coil.png" width={30} height={25} alt="Ignition Coil" />
             </div>
             <div className="box-text">
             <p>Ignition Coil</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Ignition Coils & Spark Plugs Kits.png" width={30} height={25} alt="Ignition Coils & Spark Plugs Kits" />
             </div>
             <div className="box-text">
             <p>Ignition Coils & Spark Plugs Kits</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-ID.png" width={30} height={25} alt="Ignition Distributor" />
             </div>
             <div className="box-text">
             <p>Ignition Distributor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-ISS.png" width={30} height={25} alt="Ignition Starter Switch" />
             </div>
             <div className="box-text">
             <p>Ignition Starter Switch</p>
             </div>
             </Link>
             </div>
             </div>
{/*----------------- Tab Change buttons -------------------*/}
            <div className="tab-buttons">
                  <button
                    onMouseEnter={() => setActiveTab(1)}
                    onClick={() => setActiveTab(1)}
                  >
                    {activeTab === 1 ? (
                      <Image src="/images/sidebar-imgs/active-icon.svg" width={20} height={15} alt="active-icon" />
                    ) : (
                      <Image src="/images/sidebar-imgs/non-active-icon.svg" width={20} height={15} alt="non-active-icon" />
                    )}
                  </button>
                  <button
                    onMouseEnter={() => setActiveTab(2)}
                    onClick={() => setActiveTab(2)}
                  >
                    {activeTab === 2 ? (
                      <Image src="/images/sidebar-imgs/active-icon.svg" width={20} height={15} alt="active-icon" />
                    ) : (
                      <Image src="/images/sidebar-imgs/non-active-icon.svg" width={20} height={15} alt="non-active-icon" />
                    )}
                  </button> 
                </div>
           </div>
          </div>

          <div className="specfic-div-5">
          <div 
          className="next-menu-5"
          onMouseEnter={() => handleMouseEnter(5)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(5)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Engine-Cooling.png" width={30} height={25} alt="Engine Cooling" />
            </span>
            <span className="next-sub-menu">Engine Cooling</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 5 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 5 || clickedDiv === 5) ? 'show' : ''}`}>
           <div className={`tab-content ${activeTab === 1 ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-AGSA.png" width={30} height={25} alt="Active Grille Shutter Actuator" />
             </div>
             <div className="box-text">
             <p>Active Grille Shutter Actuator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Auxiliary Water Pump.png" width={30} height={25} alt="Auxiliary Water Pump" />
             </div>
             <div className="box-text">
             <p>Auxiliary Water Pump</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Electric Engine Water Pump.png" width={30} height={25} alt="Electric Engine Water Pump" />
             </div>
             <div className="box-text">
             <p>Electric Engine Water Pump</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-ECP.png" width={30} height={25} alt="Engine Coolant Pipe" />
             </div>
             <div className="box-text">
             <p>Engine Coolant Pipe</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Expansion-Tank.png" width={30} height={25} alt="Expansion Tank" />
             </div>
             <div className="box-text">
             <p>Expansion Tank</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Expansion-Tank-Mounting-Plate.png" width={30} height={25} alt="Expansion Tank Mounting Plate" />
             </div>
             <div className="box-text">
             <p>Expansion Tank Mounting Plate</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fan Pulley Bracket.png" width={30} height={25} alt="Fan Pulley Bracket" />
             </div>
             <div className="box-text">
             <p>Fan Pulley Bracket</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fuel Cooler.png" width={30} height={25} alt="Fuel Cooler" />
             </div>
             <div className="box-text">
             <p>Fuel Cooler</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Overflow-Hose-Connector.png" width={30} height={25} alt="Overflow Hose Connector" />
             </div>
             <div className="box-text">
             <p>Overflow Hose Connector</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Radiator.png" width={30} height={25} alt="Radiator" />
             </div>
             <div className="box-text">
             <p>Radiator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Radiator-Control-Fan-Module.png" width={30} height={25} alt="Radiator Control Fan Module" />
             </div>
             <div className="box-text">
             <p>Radiator Control Fan Module</p>
             </div>
             </Link>
             </div>
             </div>
{/*----------------------- Tab Content 2 ------------------------*/}
             <div className={`tab-content-2 ${activeTab === 2 ? 'show' : ''}`}>
             
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Auxiliary Water Pump.png" width={30} height={25} alt="Auxiliary Water Pump" />
             </div>
             <div className="box-text">
             <p>Auxiliary Water Pump</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Electric Engine Water Pump.png" width={30} height={25} alt="Electric Engine Water Pump" />
             </div>
             <div className="box-text">
             <p>Electric Engine Water Pump</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-ECP.png" width={30} height={25} alt="Engine Coolant Pipe" />
             </div>
             <div className="box-text">
             <p>Engine Coolant Pipe</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Expansion-Tank.png" width={30} height={25} alt="Expansion Tank" />
             </div>
             <div className="box-text">
             <p>Expansion Tank</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Expansion-Tank-Mounting-Plate.png" width={30} height={25} alt="Expansion Tank Mounting Plate" />
             </div>
             <div className="box-text">
             <p>Expansion Tank Mounting Plate</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fan Pulley Bracket.png" width={30} height={25} alt="Fan Pulley Bracket" />
             </div>
             <div className="box-text">
             <p>Fan Pulley Bracket</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fuel Cooler.png" width={30} height={25} alt="Fuel Cooler" />
             </div>
             <div className="box-text">
             <p>Fuel Cooler</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Overflow-Hose-Connector.png" width={30} height={25} alt="Overflow Hose Connector" />
             </div>
             <div className="box-text">
             <p>Overflow Hose Connector</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Radiator.png" width={30} height={25} alt="Radiator" />
             </div>
             <div className="box-text">
             <p>Radiator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Radiator-Control-Fan-Module.png" width={30} height={25} alt="Radiator Control Fan Module" />
             </div>
             <div className="box-text">
             <p>Radiator Control Fan Module</p>
             </div>
             </Link>
             </div>
             </div>

{/*----------------- Tab Change buttons -------------------*/}
<div className="tab-buttons">
      <button
        onMouseEnter={() => setActiveTab(1)}
        onClick={() => setActiveTab(1)}
      >
        {activeTab === 1 ? (
          <Image src="/images/sidebar-imgs/active-icon.svg" width={20} height={15} alt="active-icon" />
        ) : (
          <Image src="/images/sidebar-imgs/non-active-icon.svg" width={20} height={15} alt="non-active-icon" />
        )}
      </button>
      <button
        onMouseEnter={() => setActiveTab(2)}
        onClick={() => setActiveTab(2)}
      >
        {activeTab === 2 ? (
          <Image src="/images/sidebar-imgs/active-icon.svg" width={20} height={15} alt="active-icon" />
        ) : (
          <Image src="/images/sidebar-imgs/non-active-icon.svg" width={20} height={15} alt="non-active-icon" />
        )}
      </button> 
    </div>

           </div>
          </div>

          <div className="specfic-div-6">
          <div 
          className="next-menu-6"
          onMouseEnter={() => handleMouseEnter(6)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(6)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Engine-Mounts.png" width={30} height={25} alt="Engine Mounts" />
            </span>
            <span className="next-sub-menu">Engine Mounts</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 6 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 6 || clickedDiv === 6) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-EBA.png" width={30} height={25} alt="Engine Bracket Arm" />
             </div>
             <div className="box-text">
             <p>Engine Bracket Arm</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Engine-Mount.png" width={30} height={25} alt="Engine Mount" />
             </div>
             <div className="box-text">
             <p>Engine Mount</p>
             </div>
             </Link>
             </div>

           </div>
          </div>

          <div className="specfic-div-7">
          <div 
          className="next-menu-7"
          onMouseEnter={() => handleMouseEnter(7)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(7)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Exhaust-&-Emission-Systems.png" width={30} height={25} alt="Exhaust & Emission Systems" />
            </span>
            <span className="next-sub-menu">Exhaust & Emission Systems</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 7 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 7 || clickedDiv === 7) ? 'show' : ''}`}>
           <div className={`tab-content ${activeTab === 1 ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-CCT.png" width={30} height={25} alt="Catalytic Converter" />
             </div>
             <div className="box-text">
             <p>Catalytic Converter</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-COV.png" width={30} height={25} alt="Change Over Valve" />
             </div>
             <div className="box-text">
             <p>Change Over Valve</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/EGR Tube.png" width={30} height={25} alt="EGR Tube" />
             </div>
             <div className="box-text">
             <p>EGR Tube</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/EGR-Valve.png" width={30} height={25} alt="EGR Valve" />
             </div>
             <div className="box-text">
             <p>EGR Valve</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Emissions-Fluid-Pump.png" width={30} height={25} alt="Emissions Fluid Pump" />
             </div>
             <div className="box-text">
             <p>Emissions Fluid Pump</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Exhaust-Fluid-Heater.png" width={30} height={25} alt="Exhaust Fluid Heater" />
             </div>
             <div className="box-text">
             <p>Exhaust Fluid Heater</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Exhaust-Gas-Temperature-Sensor.png" width={30} height={25} alt="Exhaust Gas Temperature Sensor" />
             </div>
             <div className="box-text">
             <p>Exhaust Gas Temperature Sensor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Exhaust Manifold.png" width={30} height={25} alt="Exhaust Manifold" />
             </div>
             <div className="box-text">
             <p>Exhaust Manifold</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-EPE.png" width={30} height={25} alt="Exhaust Pipe Expander" />
             </div>
             <div className="box-text">
             <p>Exhaust Pipe Expander</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-FTV.png" width={30} height={25} alt="Fuel Tank Breather Valve" />
             </div>
             <div className="box-text">
             <p>Fuel Tank Breather Valve</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240401-FDP.png" width={30} height={25} alt="Fuel Vapor Leak Detection Pump" />
             </div>
             <div className="box-text">
             <p>Fuel Vapor Leak Detection Pump</p>
             </div>
             </Link>
             </div>
             </div>

{/*----------------------- Tab Content 2 ------------------------*/}

<div className={`tab-content-2 ${activeTab === 2 ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-EPE.png" width={30} height={25} alt="Exhaust Pipe Expander" />
             </div>
             <div className="box-text">
             <p>Exhaust Pipe Expander</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-FTV.png" width={30} height={25} alt="Fuel Tank Breather Valve" />
             </div>
             <div className="box-text">
             <p>Fuel Tank Breather Valve</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240401-FDP.png" width={30} height={25} alt="Fuel Vapor Leak Detection Pump" />
             </div>
             <div className="box-text">
             <p>Fuel Vapor Leak Detection Pump</p>
             </div>
             </Link>
             </div>
             </div>


{/*----------------- Tab Change buttons -------------------*/}
<div className="tab-buttons">
      <button
        onMouseEnter={() => setActiveTab(1)}
        onClick={() => setActiveTab(1)}
      >
        {activeTab === 1 ? (
          <Image src="/images/sidebar-imgs/active-icon.svg" width={20} height={15} alt="active-icon" />
        ) : (
          <Image src="/images/sidebar-imgs/non-active-icon.svg" width={20} height={15} alt="non-active-icon" />
        )}
      </button>
      <button
        onMouseEnter={() => setActiveTab(2)}
        onClick={() => setActiveTab(2)}
      >
        {activeTab === 2 ? (
          <Image src="/images/sidebar-imgs/active-icon.svg" width={20} height={15} alt="active-icon" />
        ) : (
          <Image src="/images/sidebar-imgs/non-active-icon.svg" width={20} height={15} alt="non-active-icon" />
        )}
      </button> 
    </div>


           </div>
          </div>

          <div className="specfic-div-8">
          <div 
          className="next-menu-8"
          onMouseEnter={() => handleMouseEnter(8)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(8)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Fuel-Systems-&-Components.png" width={30} height={25} alt="Fuel Systems & Components" />
            </span>
            <span className="next-sub-menu">Fuel Systems & Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 8 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 8 || clickedDiv === 8) ? 'show' : ''}`}>
           <div className={`tab-content ${activeTab === 1 ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-CBT.png" width={30} height={25} alt="Carburetor" />
             </div>
             <div className="box-text">
             <p>Carburetor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Diesel Fuel Lift Pump Kit.png" width={30} height={25} alt="Diesel Fuel Lift Pump Kit" />
             </div>
             <div className="box-text">
             <p>Diesel Fuel Lift Pump Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-DPK.png" width={30} height={25} alt="Disaster Prevention Bypass Kit" />
             </div>
             <div className="box-text">
             <p>Disaster Prevention Bypass Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fuel-Filter.png" width={30} height={25} alt="Fuel Filter" />
             </div>
             <div className="box-text">
             <p>Fuel Filter</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fuel-Filter-Housing.png" width={30} height={25} alt="Fuel Filter Housing" />
             </div>
             <div className="box-text">
             <p>Fuel Filter Housing</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-FLA.png" width={30} height={25} alt="Fuel Flap Lock Actuator" />
             </div>
             <div className="box-text">
             <p>Fuel Flap Lock Actuator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fuel-Injection-Control-Module.png" width={30} height={25} alt="Fuel Injection Control Module" />
             </div>
             <div className="box-text">
             <p>Fuel Injection Control Module</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fuel-Injection-Pressure-Regulator.png" width={30} height={25} alt="Fuel Injection Pressure Regulator" />
             </div>
             <div className="box-text">
             <p>Fuel Injection Pressure Regulator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fuel-Injector.png" width={30} height={25} alt="Fuel Injector" />
             </div>
             <div className="box-text">
             <p>Fuel Injector</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-FIK.png" width={30} height={25} alt="Fuel Injector Kit" />
             </div>
             <div className="box-text">
             <p>Fuel Injector Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fuel-Injector-Module-Wiring-Harness.png" width={30} height={25} alt="Fuel Injector Module Wiring Harness" />
             </div>
             <div className="box-text">
             <p>Fuel Injector Module Wiring Harness</p>
             </div>
             </Link>
             </div>
             </div>

{/*----------------------- Tab Content 2 ------------------------*/}

<div className={`tab-content-2 ${activeTab === 2 ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-CBT.png" width={30} height={25} alt="Carburetor" />
             </div>
             <div className="box-text">
             <p>Carburetor</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Diesel Fuel Lift Pump Kit.png" width={30} height={25} alt="Diesel Fuel Lift Pump Kit" />
             </div>
             <div className="box-text">
             <p>Diesel Fuel Lift Pump Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-DPK.png" width={30} height={25} alt="Disaster Prevention Bypass Kit" />
             </div>
             <div className="box-text">
             <p>Disaster Prevention Bypass Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fuel-Filter.png" width={30} height={25} alt="Fuel Filter" />
             </div>
             <div className="box-text">
             <p>Fuel Filter</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fuel-Filter-Housing.png" width={30} height={25} alt="Fuel Filter Housing" />
             </div>
             <div className="box-text">
             <p>Fuel Filter Housing</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-FLA.png" width={30} height={25} alt="Fuel Flap Lock Actuator" />
             </div>
             <div className="box-text">
             <p>Fuel Flap Lock Actuator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fuel-Injection-Control-Module.png" width={30} height={25} alt="Fuel Injection Control Module" />
             </div>
             <div className="box-text">
             <p>Fuel Injection Control Module</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fuel-Injection-Pressure-Regulator.png" width={30} height={25} alt="Fuel Injection Pressure Regulator" />
             </div>
             <div className="box-text">
             <p>Fuel Injection Pressure Regulator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fuel-Injector.png" width={30} height={25} alt="Fuel Injector" />
             </div>
             <div className="box-text">
             <p>Fuel Injector</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-FIK.png" width={30} height={25} alt="Fuel Injector Kit" />
             </div>
             <div className="box-text">
             <p>Fuel Injector Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fuel-Injector-Module-Wiring-Harness.png" width={30} height={25} alt="Fuel Injector Module Wiring Harness" />
             </div>
             <div className="box-text">
             <p>Fuel Injector Module Wiring Harness</p>
             </div>
             </Link>
             </div>
             </div>

{/*----------------------- Tab Content 3 ------------------------*/}
             <div className={`tab-content-3 ${activeTab === 3 ? 'show' : ''}`}>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fuel-Injection-Pressure-Regulator.png" width={30} height={25} alt="Fuel Injection Pressure Regulator" />
             </div>
             <div className="box-text">
             <p>Fuel Injection Pressure Regulator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fuel-Injector.png" width={30} height={25} alt="Fuel Injector" />
             </div>
             <div className="box-text">
             <p>Fuel Injector</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/20240328-FIK.png" width={30} height={25} alt="Fuel Injector Kit" />
             </div>
             <div className="box-text">
             <p>Fuel Injector Kit</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Fuel-Injector-Module-Wiring-Harness.png" width={30} height={25} alt="Fuel Injector Module Wiring Harness" />
             </div>
             <div className="box-text">
             <p>Fuel Injector Module Wiring Harness</p>
             </div>
             </Link>
             </div>
             </div>

{/*----------------- Tab Change buttons -------------------*/}
<div className="tab-buttons">
      <button
        onMouseEnter={() => setActiveTab(1)}
        onClick={() => setActiveTab(1)}
      >
        {activeTab === 1 ? (
          <Image src="/images/sidebar-imgs/active-icon.svg" width={20} height={15} alt="active-icon" />
        ) : (
          <Image src="/images/sidebar-imgs/non-active-icon.svg" width={20} height={15} alt="non-active-icon" />
        )}
      </button>
      <button
        onMouseEnter={() => setActiveTab(2)}
        onClick={() => setActiveTab(2)}
      >
        {activeTab === 2 ? (
          <Image src="/images/sidebar-imgs/active-icon.svg" width={20} height={15} alt="active-icon" />
        ) : (
          <Image src="/images/sidebar-imgs/non-active-icon.svg" width={20} height={15} alt="non-active-icon" />
        )}
      </button>
      <button
        onMouseEnter={() => setActiveTab(3)}
        onClick={() => setActiveTab(3)}
      >
        {activeTab === 3 ? (
          <Image src="/images/sidebar-imgs/active-icon.svg" width={20} height={15} alt="active-icon" />
        ) : (
          <Image src="/images/sidebar-imgs/non-active-icon.svg" width={20} height={15} alt="non-active-icon" />
        )}
      </button>    
    </div>

           </div>
          </div>

          <div className="specfic-div-9">
          <div 
          className="next-menu-9"
          onMouseEnter={() => handleMouseEnter(9)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(9)}
        >
          <div className="icon-text">
            <span>
              <Image src="/images/sidebar-imgs/Starters,-Alternators,-Batteries-&-Components.png" width={30} height={25} alt="Starters, Alternators, Batteries & Components" />
            </span>
            <span className="next-sub-menu">Starters, Alternators, Batteries &<br/> Components</span>
            </div>
            <div className="arrow-div">
            <span className="arrows-icon">
            <Image src={clickedDiv === 9 ? "/images/angle-down.svg" : "/images/angle-up.svg"} width={20} height={10} alt="" />
           </span>
           </div>
           </div>

           <div className={`open-boxes-div ${(activeDiv === 9 || clickedDiv === 9) ? 'show' : ''}`}>
             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image src="/images/view-all.svg" width={30} height={25} alt="View All" />
             </div>
             <div className="box-text">
             <p>View All</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Alternator.png" width={30} height={25} alt="Alternator" />
             </div>
             <div className="box-text">
             <p>Alternator</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Battery Fuse Overload Protection Trip.png" width={30} height={25} alt="Battery Fuse Overload Protection Trip" />
             </div>
             <div className="box-text">
             <p>Battery Fuse Overload Protection Trip</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Engine Voltage Converter Module.png" width={30} height={25} alt="Engine Voltage Converter Module" />
             </div>
             <div className="box-text">
             <p>Engine Voltage Converter Module</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Positive Battery Cable.png" width={30} height={25} alt="Positive Battery Cable" />
             </div>
             <div className="box-text">
             <p>Positive Battery Cable</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Starter.png" width={30} height={25} alt="Starter" />
             </div>
             <div className="box-text">
             <p>Starter</p>
             </div>
             </Link>
             </div>

             <div className="main-box">
              <Link href="/">
             <div className="box-img">
             <Image className="category-imges" src="/images/sidebar-imgs/Wiring Harness.png" width={30} height={25} alt="Wiring Harness" />
             </div>
             <div className="box-text">
             <p>Wiring Harness</p>
             </div>
             </Link>
             </div>

           </div>
          </div>


        </div>
)}   

      </div>

    </div>
    </main>
    
  );
}