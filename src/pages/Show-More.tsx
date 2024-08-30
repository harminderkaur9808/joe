import React, { useState } from 'react';
import '../styles/show-more.css'; 
import Header from './Header';
import Footer from './Footer';
import Image from 'next/image';
import Link from 'next/link';

const ShowMorePage = () => {
  const [visibleMakesCount, setVisibleMakesCount] = useState(50);

  const makes = [
    { name: "Acura", link: "/makes/acura" },
    { name: "Advance Mixer", link: "/makes/advance-mixer" },
    { name: "Alfa Romeo", link: "/makes/Alfa Romeo" },
    { name: "AM General", link: "/makes/AM General" },
    { name: "AMC", link: "/makes/AMC" },
    { name: "American LaFrance", link: "/makes/American LaFrance" },
    { name: "Aston Martin", link: "/makes/Aston Martin" },
    { name: "Asuna", link: "/makes/Asuna" },
    { name: "Audi", link: "/makes/Audi" },
    { name: "Austin", link: "/makes/Austin" },
    { name: "Autocar LLC.", link: "/makes/Autocar LLC." },
    { name: "Avanti", link: "/makes/Avanti" },
    { name: "Bentley", link: "/makes/Bentley" },
    { name: "Bertone", link: "/makes/Bertone" },
    { name: "Blue Bird", link: "/makes/Blue Bird" },
    { name: "BMW", link: "/makes/BMW" },
    { name: "Bricklin", link: "/makes/Bricklin" },
    { name: "Buick", link: "/makes/Buick" },
    { name: "Cadillac", link: "/makes/Cadillac" },
    { name: "Can-Am", link: "/makes/Can-Am" },
    { name: "Capacity Of Texas", link: "/makes/Capacity Of Texas" },
    { name: "Caterpillar", link: "/makes/Caterpillar" },
    { name: "Checker", link: "/makes/Checker" },
    { name: "Chevrolet", link: "/makes/Chevrolet" },
    { name: "Chrysler", link: "/makes/Chrysler" },
    { name: "Crane Carrier", link: "/makes/Crane Carrier" },
    { name: "Daewoo", link: "/makes/Daewoo" },
    { name: "Daihatsu", link: "/makes/Daihatsu" },
    { name: "Datsun", link: "/makes/Datsun" },
    { name: "DeLorean", link: "/makes/DeLorean" },
    { name: "DeSoto", link: "/makes/DeSoto" },
    { name: "Dodge", link: "/makes/Dodge" },
    { name: "Eagle", link: "/makes/Eagle" },
    { name: "Edsel", link: "/makes/Edsel" },
    { name: "El Dorado", link: "/makes/El Dorado" },
    { name: "Fargo", link: "/makes/Fargo" },
    { name: "Ferrari", link: "/makes/Ferrari" },
    { name: "Fiat", link: "/makes/Fiat" },
    { name: "Fisker", link: "/makes/Fisker" },
    { name: "Ford", link: "/makes/Ford" },
    { name: "Freightliner", link: "/makes/Freightliner" },
    { name: "Genesis", link: "/makes/Genesis" },
    { name: "Geo", link: "/makes/Geo" },
    { name: "Gillig", link: "/makes/Gillig" },
    { name: "GMC", link: "/makes/GMC" },
    { name: "Harley-Davidson", link: "/makes/Harley-Davidson" },
    { name: "Hino", link: "/makes/Hino" },
    { name: "Honda", link: "/makes/Honda" },
    { name: "Hummer", link: "/makes/Hummer" },
    { name: "Hyundai", link: "/makes/Hyundai" },
    { name: "IC Corporation", link: "/makes/IC Corporation" },
    { name: "INFINITI", link: "/makes/INFINITI" },
    { name: "International", link: "/makes/International" },
    { name: "International Harvester", link: "/makes/International Harvester" },
    { name: "Isuzu", link: "/makes/Isuzu" },
    { name: "Jaguar", link: "/makes/Jaguar" },
    { name: "Jeep", link: "/makes/Jeep" },
    { name: "Kenworth", link: "/makes/Kenworth" },
    { name: "Kia", link: "/makes/Kia" },
    { name: "Laforza", link: "/makes/Laforza" },
    { name: "Lamborghini", link: "/makes/Lamborghini" },
    { name: "Lancia", link: "/makes/Lancia" },
    { name: "Land Pride", link: "/makes/Land Pride" },
    { name: "Land Rover", link: "/makes/Land Rover" },
    { name: "Lexus", link: "/makes/Lexus" },
    { name: "Lincoln", link: "/makes/Lincoln" },
    { name: "Lotus", link: "/makes/Lotus" },
    { name: "Mack", link: "/makes/Mack" },
    { name: "Maserati", link: "/makes/Maserati" },
    { name: "Maybach", link: "/makes/Maybach" },
    { name: "Mazda", link: "/makes/Mazda" },
    { name: "Mercedes-Benz", link: "/makes/Mercedes-Benz" },
    { name: "Mercury", link: "/makes/Mercury" },
    { name: "Merkur", link: "/makes/Merkur" },
    { name: "Mini", link: "/makes/Mini" },
    { name: "Mitsubishi", link: "/makes/Mitsubishi" },
    { name: "Nissan", link: "/makes/Nissan" },
    { name: "Oldsmobile", link: "/makes/Oldsmobile" },
    { name: "Opel", link: "/makes/Opel" },
    { name: "Orion Bus", link: "/makes/Orion Bus" },
    { name: "Oshkosh Motor Truck Co.", link: "/makes/Oshkosh Motor Truck Co." },
    { name: "Panoz", link: "/makes/Panoz" },
    { name: "Peterbilt", link: "/makes/Peterbilt" },
    { name: "Peugeot", link: "/makes/Peugeot" },
    { name: "Pierce Mfg. Inc.", link: "/makes/Pierce Mfg. Inc." },
    { name: "Plymouth", link: "/makes/Plymouth" },
    { name: "Polaris", link: "/makes/Polaris" },
    { name: "Pontiac", link: "/makes/Pontiac" },
    { name: "Porsche", link: "/makes/Porsche" },
    { name: "Qvale", link: "/makes/Qvale" },
    { name: "Ram", link: "/makes/Ram" },
    { name: "Renault", link: "/makes/Renault" },
    { name: "Roadmaster Rail", link: "/makes/Roadmaster Rail" },
    { name: "Rolls-Royce", link: "/makes/Rolls-Royce" },
    { name: "Saab", link: "/makes/Saab" },
    { name: "Saturn", link: "/makes/Saturn" },
    { name: "Scion", link: "/makes/Scion" },
    { name: "Seat", link: "/makes/Seat" },
    { name: "Shelby", link: "/makes/Shelby" },
    { name: "Smart", link: "/makes/Smart" },
    { name: "Spartan Motors", link: "/makes/Spartan Motors" },
    { name: "SRT", link: "/makes/SRT" },
    { name: "Sterling", link: "/makes/Sterling" },
    { name: "Sterling Truck", link: "/makes/Sterling Truck" },
    { name: "Subaru", link: "/makes/Subaru" },
    { name: "Suzuki", link: "/makes/Suzuki" },
    { name: "Tesla", link: "/makes/Tesla" },
    { name: "Textron Off Road", link: "/makes/Textron Off Road" },
    { name: "Thomas", link: "/makes/Thomas" },
    { name: "Toyota", link: "/makes/Toyota" },
    { name: "Triumph", link: "/makes/Triumph" },
    { name: "Van Hool", link: "/makes/Van Hool" },
    { name: "Volkswagen", link: "/makes/Volkswagen" },
    { name: "Volvo", link: "/makes/Volvo" },
    { name: "VPG", link: "/makes/VPG" },
    { name: "Western Star", link: "/makes/Western Star" },
    { name: "White/GMC", link: "/makes/White/GMC" },
    { name: "Workhorse", link: "/makes/Workhorse" },
    { name: "Workhorse Custom Chassis", link: "/makes/Workhorse Custom Chassis" },
    { name: "Yugo", link: "/makes/Yugo" }
   
  ];

  const handleViewMore = () => {
    setVisibleMakesCount((prevCount) => prevCount + 70);
  };

  return (
    <>
    <Header/>
     <section className="Breadcrumb_navList__Em86D Breadcrumb_nowrap__7sLp9" style={{ color: '#F5F5F5' }}>
        <h5 className="Breadcrumb_lineTitle__OrmvR">
          <Link className="Breadcrumb_link__DV2I4" href="/" style={{ color: '' }}>Home</Link>
          <span className="mr5 Breadcrumb_slash__0QI0n" style={{ color: '' }}>/</span>
        </h5>
        <h5 className="Breadcrumb_lineTitle__OrmvR">
          <span className="Breadcrumb_lastNav__YDqwS Breadcrumb_unlink__shdVn" style={{ color: '#DD1D23', cursor: 'not-allowed' }}>Shop by makes</span>
          <span className="mr5 Breadcrumb_slash__0QI0n" style={{ color: '#DD1D23)' }}></span>
        </h5>
      </section>
 <section className="Viewthe_Makes_section">
        <div className="Viewthe_Makes_container">
          <div className="Viewthe_Makes_section_Heading">
            <h1 className="Viewthe_Makes_section_HeaderTitle">
              View the Makes
            </h1>
          </div>
        </div>
      </section>

      <section className="Showmore_section">
  <div className="Showmore_container">
    <div className="Showmores_content__xboha">
      <div className="makesGrid">
        {makes.slice(0, visibleMakesCount).map((make, index) => (
          <div key={index} className="makesItem">
            <Link href={make.link} className="makesLink">
              <div className="makesName">
                {make.name}
                <div className="makesRightIcon">
                  <span className="arrowIcon">
                    <Image
                      src="/Show More/Left arrow.svg"
                      alt="Arrow Icon"
                      className="svgIcon arrowIconDefault"
                      width={30}
                      height={30}
                    />
                    <Image
                      src="/Show More/Left arrow hover.svg"
                      alt="Arrow Icon Hover"
                      className="svgIcon arrowIconHover"
                      width={30}
                      height={30}
                    />
                  </span>
                  <span className="makesIcon">&nbsp;</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {visibleMakesCount < makes.length && (
        <div className="View_more">
          <button onClick={handleViewMore} className="View_moreBtn">
            <span>View More</span>
            <span className="HomeMakes_moreIcon">
              <Image
                src="/Show More/Arrow down.svg"
                alt="Arrow Down Icon"
                width={16}
                height={16}
              />
            </span>
          </button>
        </div>
      )}
    </div>
  </div>
</section>
      <section className="Showmore_guide-section">
        <div className="Showmore_guide-wrapper">
          <div className="Showmore_guide-main-col">
            <div className="Showmore_guide-column">
              <div className="Showmore_guide-item">
                <div className="Showmore_guide-content">
                  <div className="Showmore_guide-title">Help Guide</div>
                  <div className="Showmore_guide-info">
                    <div className="Showmore_guide-desc">
                      Get help with any questions or concerns by speaking with an expert.
                    </div>
                    <Link href="/#">
                      <div className="Showmore_guide-button">
                        <button className="Showmore_btn-guide">GET HELP</button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="Showmore_chat-column">
              <div className="Showmore_guide-item align-center">
                <div className="Showmore_guide-title">
                  <span role="img" aria-label="mail" className="Showmore_guide-icon">
                    <Image src="/Home Images/Envelop.svg" alt="mail icon" className="guide-icon-img" width={30} height={30} />
                  </span>
                </div>
                <div className="Showmore_guide-info">
                  <div className="Showmore_guide-desc align-center">
                    <span>Support Hours Mon-Sun: 24/7</span>
                  </div>
                  <Link href="/#">
                    <div className="Showmore_chat-button">
                      <button className="btn-chat">CHAT WITH US</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ShowMorePage;
