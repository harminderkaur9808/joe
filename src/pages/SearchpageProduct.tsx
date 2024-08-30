import React, { useState } from 'react';
import '../styles/SearchpageProduct.css';
import Pagination from './Pagination'; // Adjust the path if necessary
import Image from 'next/image';

const products = Array.from({ length: 70 }, (_, index) => ({
  image: '/images/Searchpageimg/Productoneimg.png',
  imagesechead: '/images/Searchpageimg/psectionimg12.svg',
  name: `4 Pcs Engine Motor & Engine Torque Strut Mount for 2005 Buick Terraza`,
  itemNumber: `item # 95383947969933303`,
  rating: "4",
  replacesPartNumber: "A2900, A2899, 2900, 2899, 10274661, 1",
  Engine: "3.9L V6 | 3.9L V6 | 3.9L V6 | 3.9L V6",
  price: `$75.99`,
  originalPrice: `$83.99`,
  details: 'More details for faster compatibility verification.',
  count: index + 1, // Unique count for each product starting from 1
}));

const SearchpageProduct: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const currentProducts = products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [visibleCategories, setVisibleCategories] = useState<{ [key: number]: boolean }>({});
  const [showText, setShowText] = useState<{ [key: number]: boolean }>({});

  const toggleCategoryVisibility = (index: number) => {
    setVisibleCategories(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const handleImageClick = (index: number) => {
    setShowText(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
    toggleCategoryVisibility(index);
  };

  return (
    <>
      <div className="Main-search-page">
        {/* Products Section */}
        <div className="products">
          {currentProducts.map((product, index) => (
            <div key={index} className="product-box">
              <div className="product-image">
                <Image src={product.image} alt={product.name}  width={200} height={100}/>
              </div>
              <div className="product-details">
                <div className='Imageheadsec'>
                  <Image src={product.imagesechead} alt=""  width={350} height={100} />
                </div>
                <div className='Product-name-sec'>
                  <h3 className="product-name">{product.name}</h3>
                </div>
                <p className="product-item-number">{product.itemNumber}</p>
                <div className="product-rating">
                  Quantity
                  {[...Array(1)].map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                  <span className="rating-text">{product.rating}</span>
                  <span className="rating-text">{product.count}</span>
                </div>
                <p className="product-replaces-part-number">Replaces part number: <span>{product.replacesPartNumber}</span></p>
                <p className="product-engin-details">Engine: <span>{product.Engine}</span></p>

                {/* Vehicle Details Section */}
                <div className='Main-thir12'>
                  <section className='main1-first12'>
                    <Image src="/images/Searchpageimg/raphael_car.svg" alt="Add Vehicle" className="feature-icon-vehicle"  width={100} height={100}/>
                  </section>
                  <section className='main1-first13'>
                    <text>Specify your vehicle details to guarantee fit.</text>
                  </section>
                  <section className='main1-first14'>
                    <a href="#">Add Vehicle</a>
                  </section>
                </div>
              </div>
              <div className="product-pricing">
                <div className="product-actions">
                  <div className='div-text-addcart'>
                    <text>{product.price} <span>{product.originalPrice}</span></text>
                  </div>
                  <div className='add-to-cart1'>
                    <button className="add-to-cart">Add to Cart</button>
                  </div>
                  <button className="view-details">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Counter section */}
        <section id='Main-counterpage'>
          <div className='Main-counterpage-1'>
            <text>
              Showing {products.length} products
            </text>
          </div>
          <div>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </div>
        </section>

        
      </div>
    </>
  );
};

export default SearchpageProduct;
