import React from 'react';
import Image from 'next/image';
import SearchBar from "./Searchbar";
import '../styles/style-a.css';


const Banner = () => {
  return (
    <div> 
        <div className="container1">
            <div className="main-banner">

        <div className="banner-sec">
     <Image src="/images/banner-logo.png" alt="a-premium-image" layout="fill" className='custom-image' loading="lazy" />

         

        </div>
        <div className="ban-txt">
         <h1>Lorem ipsum dolor sit amet. Id dolor ipsa et tempore</h1>

         </div>

         <div className="search-bar">
         <SearchBar />
         </div>

         
     
        </div>

        </div>

{/* <div className="main-width">
        <div className="days">

<div className="days1">
<Image src="/images/days1.png" alt="img" layout="fill" loading="lazy" />
    <p>90 Days Free Return</p>
</div>


<div className="days1 serv">
<Image src="/images/service.png" alt="img" layout="fill" loading="lazy" />
    <p>24/7 Service</p>
</div>


<div className="days1 fre21">
<Image src="/images/ship.png" alt="img" layout="fill" loading="lazy" />
    <p>Free Shipping</p>
</div>



<div className="days1 fit43">
<Image src="/images/guaranteed.png" alt="img" layout="fill" loading="lazy" />
    <p>Fit Guaranteed</p>
</div>


</div>
</div> */}








    </div>
  )
};

export default Banner;