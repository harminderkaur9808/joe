import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "../styles/IndexPage.css";

// Define your categories array with slugs
const categories = [
  { src: '/images/NavigationImgHome/engine1.png', alt: 'Engine', name: 'Engine', slug: '#' },
  { src: '/images/engine2.png', alt: 'Drivetrain', name: 'Drivetrain', slug: '#' },
  { src: '/images/engine3.png', alt: 'Brake & Wheel Parts', name: 'Brake & Wheel Parts', slug: '#' },
  { src: '/images/engine4.png', alt: 'Suspension & Steering', name: 'Suspension & Steering', slug: '#' },
  { src: '/images/engine5.png', alt: 'Body & Lamp Assembly', name: 'Body & Lamp Assembly', slug: '#' },
  { src: '/images/engine6.png', alt: 'Heating & Cooling', name: 'Heating & Cooling', slug: '#' },
  { src: '/images/engine7.png', alt: 'Interior', name: 'Interior', slug: '#' },
  { src: '/images/engine8.png', alt: 'Exterior', name: 'Exterior', slug: '#' },
  { src: '/images/engine9.png', alt: 'ATV, UTV & RV Parts', name: 'ATV, UTV & RV Parts', slug: '#' },
  { src: '/images/engine10.png', alt: 'Motorcycle & Boat Parts', name: 'Motorcycle & Boat Parts', slug: '#' },
  { src: '/images/engine11.png', alt: 'Automotive Tools & Supplies', name: 'Automotive Tools & Supplies', slug: '#' }
];

const Categoriessection = () => (
  <div>
    <div className="marginContainer maxWidthContainer" style={{ overflow: 'revert' }}>
      <section style={{ display: 'block' }}></section>
      <div className="HomeSearchByCategory_titleBox__xq_p8">
        <h2 className="HomeSearchByCategory_title__ql_sT">Search By Category</h2>
      </div>
      <section role="table" className="HomeSearchByCategory_content__4d0JW">
        <div role="row" className="ant-row">
          {categories.map((category) => (
            <Link href={`${category.slug}`} key={category.slug} passHref>
              <div className="cate-box1">
                <div className="lft-ct">
                  <Image
                    src={category.src}
                    alt={category.alt}
                    width={108} // You can specify fixed width and height
                    height={108} // or use the `fill` prop if the parent container is sized
                    className="HomeSearchByCategory_itemImage__y16g3"
                  />
                </div>
                <p>{category.name}</p>
                <div className="rgt-ct">
                  <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                    <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
    
    <div className="Explore_more">
    <a href="/All-Categories">
             
      <div className="Explore_moreBtn">
        <span>ALL CATEGORIES</span>
        <span className="HomeMakes_moreIcon flexCenter">
          <img className='red11' src="/Home Images/Arrow left icon.svg" alt="Left Arrow Icon" width="16" height="16" />
          <img className='wht11' src="/Home Images/wht-ar.png" alt="Left Arrow Icon" width="16" height="16" />
        </span>
      </div>
      </a>
    </div>
    
  </div>
);

export default Categoriessection;
