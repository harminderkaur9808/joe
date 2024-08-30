import React from 'react'
import '../styles/style-a.css';
import Image from 'next/image';



    const Trending = () => {
  return (
    <>



<div className="main-width">
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
</div>



    

<div className="container12">

  {/* <div className="trending">
   <h1>Trending Categories
    <br/>
    <img src='/images/line.png' />
   </h1>
  </div> */}
  <div className="Carousel-head">
        <h3>Trending Categories</h3>
      </div>


  <div className="trendinginer">

        <div className="tren1">

                <div className="tbox1">
                    <div className="in-txt">
                    <h1>Brake Caliper</h1>
                    <h2>Time For New Calipers?</h2>
                    <p>Starting At $36.99</p>
                    </div>

                </div>

                <div className="tbox1 tbox2">
                    <div className="in-txt">
                    <h1>Control Arm</h1>
                    <h2>Strong & Reliable</h2>
                    <p>10% OFF Available</p>
                    </div>

                </div>

                <div className="tbox1 tbox3">
                    <div className="in-txt">
                    <h1>Catalytic Converter</h1>
                    <p>Save At Least $10</p>
                    </div>

                </div>

        </div>


  </div>





        <div className="tren1 trn2">

<div className="tbox1 tbox4">
    <div className="in-txt">
    <h1>Brake Roters & Pads</h1>
    <h2>Something Not Sounding Right?</h2>
    <p>Replacement At Affordable Price</p>
    </div>

</div>

<div className="tbox1 tbox5">
    <div className="in-txt">
    <h1>Alternator</h1>
    <h2>On Sale 10% off</h2>

    <p>Don’t Miss Out!</p>
    </div>

</div>

<div className="tbox1 tbox6">
    <div className="in-txt">
    <h1>AC Compressor</h1>
    <h2>Save up to 50%</h2>
    <p>Prepare For A Cooling Summer</p>
    </div>

</div>

</div>









</div>

      
    </>
  )
}

export default Trending;