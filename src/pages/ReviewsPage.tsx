
// import React, { useState } from 'react';
// import '../styles/reviewspage.css'; // Import CSS file



// const ReviewsPage: React.FC = () => {
//     const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
//     const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
//     const [selectedRating, setSelectedRating] = useState<number | null>(null);
//     const [sortOption, setSortOption] = useState<string>('newest');

//     const handleImageClick = (images: string[], index: number) => {
//         setSelectedImages(images);
//         setCurrentImageIndex(index);
//     };

//     const handleCloseModal = () => {
//         setSelectedImages(null);
//     };

//     const handlePrevImage = () => {
//         if (selectedImages) {
//             setCurrentImageIndex(prevIndex => (prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1));
//         }
//     };

//     const handleNextImage = () => {
//         if (selectedImages) {
//             setCurrentImageIndex(prevIndex => (prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1));
//         }
//     };

//     const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSelectedRating(Number(event.target.value));
//     };

//     const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//         setSortOption(event.target.value);
//     };

//     const filteredReviews = dummyReviews
//         .filter(review => selectedRating === null || review.rating === selectedRating)
//         .sort((a, b) => {
//             switch (sortOption) {
//                 case 'newest':
//                     return new Date(b.date).getTime() - new Date(a.date).getTime();
//                 case 'oldest':
//                     return new Date(a.date).getTime() - new Date(b.date).getTime();
//                 case 'lowest':
//                     return a.rating - b.rating;
//                 default:
//                     return 0;
//             }
//         });

//     return (
//         <section className='Main-review-C'>
//             <div className="container">
//                 <h1 className="heading">A-Premium Reviews</h1>
//                 <p className="description">
//                     A-Premium is proud to offer an exceptional and comprehensive shopping experience that caters to all your automotive needs. We’re with you every step of the way—from the minute you start researching symptoms to figure out what issues your car is having to the moment you receive your replacement part and install it in your vehicle.
//                     <br /><br />
//                     Your satisfaction is our top priority above all else. A-Premium treasures each and every customer review as a valuable insight into our parts and services. We stand by our belief that actions speak louder than words. Take a look at these authenticated reviews from our numerous delighted customers:
//                 </p>
//                 <div className="filters">
//                     <label htmlFor="sortOption"></label>
//                     <select
//                         id="sortOption"
//                         value={sortOption}
//                         onChange={handleSortChange}
//                         className="dropdown"
//                     >
//                         <option value="newest">Most Recent</option>
//                         <option value="oldest">Oldest</option>
//                         <option value="lowest">Lowest Rating</option>
//                     </select>
//                     <label htmlFor="ratingFilter"></label>
//                     <select
//                         id="ratingFilter"
//                         value={selectedRating ?? ''}
//                         onChange={handleRatingChange}
//                         className="dropdown"
//                     >
//                         <option value="">All Ratings</option>
//                         {[5, 4, 3, 2, 1].map((rating) => (
//                             <option key={rating} value={rating}>
//                                 {'★'.repeat(rating) + '☆'.repeat(5 - rating)} {rating} Star{rating > 1 ? 's' : ''}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="reviews">
//                     {filteredReviews.map((review, index) => (
//                         <div key={index} className="review">
//                             <div className="reviewHeader">
//                                 <div className="stars">
//                                     {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
//                                     <div className="date">{review.count}</div>

//                                 </div>
//                                 <div className="date">{review.date}</div>
//                             </div>
//                             <div className="reviewer">
//                                 <div className="name">{review.name}</div>
//                                 <div className="verified">
//                                     {review.verified ? 'Verified Purchaser' : 'Verified Purchaser'}
//                                 </div>

//                                 <section className='Verify-img-side'>
//                                 10 Pcs Front & Rear Control Arm Ball Join
//                                 <img src="/images/reviews/FrameIcon-0111.svg" alt="Add Vehicle" className="feature-icon-vehicleprodu" />

//                                 </section>
//                             </div>
//                             <div className="reviewText">{review.reviewText}</div>
//                             {review.images && review.images.length > 0 && (
//                                 <div className="reviewImages">
//                                     {review.images.map((image, idx) => (
//                                         <img
//                                             key={idx}
//                                             src={image}
//                                             alt={`Review image ${idx}`}
//                                             className="reviewImage"
//                                             onClick={() => handleImageClick(review.images!, idx)}
//                                         />
//                                     ))}
//                                 </div>
//                             )}
//                             <div className="reviewItemInfo">{review.ReviewItem_infoUser__fITJA}</div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {selectedImages && (
//                 <div className="modal">
//                     <div className="modalContent">
//                         <button className="modalClose" onClick={handleCloseModal}>&times;</button>
//                         <button className="modalPrev" onClick={handlePrevImage}>&lt;</button>
//                         <button className="modalNext" onClick={handleNextImage}>&gt;</button>
//                         <div className="modalScrollContainer">
//                             {selectedImages.length > 0 && (
//                                 <img
//                                     src={selectedImages[currentImageIndex]}
//                                     alt={`Modal image ${currentImageIndex}`}
//                                     className="modalImage"
//                                 />
//                             )}
//                         </div>

//                     </div>

//                 </div>
//             )}
//             {/* button */}
//             <div className='Mainbuttoncounter10'>

//                 <div className='Mainbuttoncounter10-01'>
//                     <section>
//                         NEXT 10

//                     </section>
//                     <section className='img-sec-01rev'>
//                         <img src="/images/reviews/Framebuttonside.svg" alt="Add Vehicle" className="feature-icon-vehicle" />

//                     </section>
//                 </div>

//             </div>

//         </section>
//     );
// };

// export default ReviewsPage;0
import React, { useState } from 'react';
import '../styles/reviewspage.css'; // Import CSS file
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

const dummyReviews = [
    {
        rating: 4,
        date: '2024-07-20',
        name: 'Jane Smith',
        verified: false,
        reviewText: 'Good product but the delivery was a bit slow.',
        productName: 'Premium Air Filter',
        ReviewItem_infoUser__fITJA: "Hii My alx first / user 12",
        count: "Count --- of 5"

    },
    // Add more dummy reviews as needed
    {
        rating: 3,
        date: '2024-06-15',
        name: 'Alice Johnson',
        verified: true,
        reviewText: 'Average product, not too bad.',
        productName: 'Standard Brake Pads',
        ReviewItem_infoUser__fITJA: "Hii My alx first / user 12",

    },
    {
        rating: 2,
        date: '2024-05-10',
        name: 'Bob Brown',
        verified: false,
        reviewText: 'Not satisfied with the quality.',
        productName: 'Basic Fuel Filter',
        ReviewItem_infoUser__fITJA: "Hii My alx first / user 12",

    },
    {
        rating: 1,
        date: '2024-04-01',
        name: 'Charlie White',
        verified: true,
        reviewText: 'Terrible experience. Would not recommend.',
        productName: 'Cheap Spark Plugs',
        ReviewItem_infoUser__fITJA: "Hii My alx first / user 12",

    },
    {
        rating: 5,
        date: '2024-08-20',
        name: 'Jane Smith',
        verified: false,
        reviewText: 'Good product but the delivery was a bit slow.',
        productName: 'Premium Air Filter',
        ReviewItem_infoUser__fITJA: "Hii My alx first / user 12",
        count: "Count --- of 5"
    },
    {
        rating: 4,
        date: '2024-08-20',
        name: 'Jane Smith',
        verified: false,
        reviewText: 'Good product but the delivery was a bit slow.',
        productName: 'Premium Air Filter',
        ReviewItem_infoUser__fITJA: "Hii My alx first / user 12",
        count: "Count --- of 5"

    },
    {
        rating: 4.6,
        date: '2024-08-20',
        name: 'Jane Smith',
        verified: false,
        reviewText: 'Good product but the delivery was a bit slow.',
        productName: 'Premium Air Filter',
        ReviewItem_infoUser__fITJA: "Hii My alx first / user 12",
        count: "Count --- of 5"

    },
    {
        rating: 5,
        date: '2024-08-01',
        name: 'John Doe',
        verified: true,
        reviewText: 'Excellent quality and service. Highly recommended!',
        productName: 'Super Car Battery',
        images: [
            '/images/Searchpageimg/Productoneimg.png',
            '/images/comp.png',
            '/images/Searchpageimg/Productoneimg.png',
        ],
        ReviewItem_infoUser__fITJA: "Hii My alx first / user 12",
        count: "Count --- of 5"

    },
    {
        rating: 4,
        date: '2024-07-20',
        name: 'Jane Smith',
        verified: false,
        reviewText: 'Good product but the delivery was a bit slow.',
        productName: 'Premium Air Filter',
        ReviewItem_infoUser__fITJA: "Hii My alx first / user 12",
        count: "Count --- of 5"

    },
    // Add more dummy reviews as needed
    {
        rating: 3,
        date: '2024-06-15',
        name: 'Alice Johnson',
        verified: true,
        reviewText: 'Average product, not too bad.',
        productName: 'Standard Brake Pads',
        ReviewItem_infoUser__fITJA: "Hii My alx first / user 12",

    },
    {
        rating: 2,
        date: '2024-05-10',
        name: 'Bob Brown',
        verified: false,
        reviewText: 'Not satisfied with the quality.',
        productName: 'Basic Fuel Filter',
        ReviewItem_infoUser__fITJA: "Hii My alx first / user 12",

    },
    {
        rating: 1,
        date: '2024-04-01',
        name: 'Charlie White',
        verified: true,
        reviewText: 'Terrible experience. Would not recommend.',
        productName: 'Cheap Spark Plugs',
        ReviewItem_infoUser__fITJA: "Hii My alx first / user 12",

    },
];

const ReviewsPage: React.FC = () => {
    const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const [sortOption, setSortOption] = useState<string>('newest');
    const [visibleReviewsCount, setVisibleReviewsCount] = useState<number>(10); // Number of reviews initially visible

    const handleImageClick = (images: string[], index: number) => {
        setSelectedImages(images);
        setCurrentImageIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedImages(null);
    };

    const handlePrevImage = () => {
        if (selectedImages) {
            setCurrentImageIndex(prevIndex => (prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1));
        }
    };

    const handleNextImage = () => {
        if (selectedImages) {
            setCurrentImageIndex(prevIndex => (prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1));
        }
    };

    const handleRatingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRating(Number(event.target.value) || null);
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value);
    };

    const handleLoadMore = () => {
        setVisibleReviewsCount(prevCount => prevCount + 10);
    };

    const filteredReviews = dummyReviews
        .filter(review => selectedRating === null || review.rating === selectedRating)
        .sort((a, b) => {
            switch (sortOption) {
                case 'newest':
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                case 'oldest':
                    return new Date(a.date).getTime() - new Date(b.date).getTime();
                case 'lowest':
                    return a.rating - b.rating;
                default:
                    return 0;
            }
        });

    const reviewsToShow = filteredReviews.slice(0, visibleReviewsCount);




    //  handlw review down to up slider 

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleButtonClick = () => {
        setIsDropdownVisible(true);
    };

// routes ***Only in mobile show these *************************************************************************************************************************************************************
const dummyReviewCounts: { [key: number]: string } = {
    5: '1.2K Reviews',
    4: '900 Reviews',
    3: '600 Reviews',
    2: '300 Reviews',
    1: '100 Reviews'
}

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // **********************************************  Only in mobile show these 
    const sortingOptions001 = [
        { id: 1, label: 'Most Popular' },
        { id: 2, label: 'Older' },
        { id: 3, label: 'Highest Rated' },
        { id: 4, label: 'Oldest Rated' ,Main: 22},
    ];

    
    const [isDropdownOpen001, setIsDropdownOpen001] = useState(false);
    const [selectedOption001, setSelectedOption001] = useState(1); // Default selected option

    // Toggle dropdown open/close
    const toggleDropdown001 = () => {
        setIsDropdownOpen001(prevState => !prevState);
    };

    // Handle the click on sorting options
     // Handle the click on sorting options
     const handleOptionClick001 = (id: number | string) => {
        console.log("Option clicked with ID:", id); // Debugging line
        if (typeof id === 'number' && !isNaN(id)) { // Check if id is a number and not NaN
            setSelectedOption001(id);
        } else {
            console.error("Invalid ID:", id); // Error handling if id is not valid
        }
    };
    
    return (
<>

<Header />

        <section className='Main-review-C'>
            <img src="/images/reviews/MainCImgrev.svg" alt="Add Vehicle" className="feature-icon-reviewFirst" />

            <div className="container">
                <h1 className="heading">A-Premium Reviews</h1>
                <p className="description">
                    A-Premium is proud to offer an exceptional and comprehensive shopping experience that caters to all your automotive needs. We’re with you every step of the way—from the minute you start researching symptoms to figure out what issues your car is having to the moment you receive your replacement part and install it in your vehicle.
                    <br /><br />
                    Your satisfaction is our top priority above all else. A-Premium treasures each and every customer review as a valuable insight into our parts and services. We stand by our belief that actions speak louder than words. Take a look at these authenticated reviews from our numerous delighted customers:
                </p>
                <div className="filters">
                    {/* <label className='Main-filter-Sort' htmlFor="sortOption"></label> */}
                    <select
                        id="sortOption"
                        value={sortOption}
                        onChange={handleSortChange}
                        className="dropdown"
                    >
                        <option value="newest">Most Recent</option>
                        <option value="oldest">Oldest</option>
                        <option value="lowest">Lowest Rating</option>
                    </select>
                    {/* <label htmlFor="ratingFilter"></label> */}
                    <select
                        id="ratingFilter"
                        value={selectedRating ?? ''}
                        onChange={handleRatingChange}
                        className="dropdown"
                    >
                        <option value="">All Ratings</option>
                        {[5, 4, 3, 2, 1].map((rating) => (
                            <option className='MainKey-stars' key={rating} value={rating}>
                                {'★'.repeat(rating) + '☆'.repeat(5 - rating)} {rating} Star{rating > 1 ? 's' : ''}
                            </option>
                        ))}
                    </select>
                   
                </div>
              <button className="secB12-open-dropdown-btn" onClick={toggleDropdown001}>
                {isDropdownOpen001 ? 'Close Filter' : 'Open Filter'}
            </button>
               
       {/* 
       
       Dropdown Opening **********************************************************************************************
       */}




                   {/* Dropdown Content  only in mobile First up */}


<div className={`Main010-page-container ${isDropdownOpen ? 'Main010-dropdown-open' : ''}`}>


            {/* Button to open the dropdown */}
            <section className='Main-Container-Open-after'>
            <div>
            <button className="Main010-open-dropdown-btnc" onClick={toggleDropdown001}>
                {isDropdownOpen ? 'Close Filter' : 'Star Ratings'}
            </button>
            </div>

            <div>
            <button className="Main010-open-dropdown-btnc" onClick={toggleDropdown}>
                {isDropdownOpen ? 'Close Filter' : 'Open Filter'}
            </button>
            </div>
            </section>
          
          

            {/* Dropdown Content  only in mobile second */}

            <div className={`Main010-dropdown ${isDropdownOpen ? 'Main010-open' : ''}`}>
                {/* *************************************************************************************************************** */}



                                {/* *************************************************************************************************************** */}

                <div className="Main010-dropdown-content">
                    <div className="Main010-dropdown-header">
                        <h2>Star Ratings</h2>
                        <button className="Main010-close-dropdown-btn" onClick={toggleDropdown}>
                            &times;
                        </button>
                    </div>
                    <div className="Main010-dropdown-body">
                        {[5, 4, 3, 2, 1].map((star) => (
                            <div key={star} className="Main010-dropdown-row">
                                <div className="Main010-checkbox-group">
                                    <label>
                                        <input type="checkbox" />
                                        {/* <span>{`Star ${star}`}</span> */}
                                        <div className="Main010-stars">
                                    {'★'.repeat(star) + '☆'.repeat(5 - star)}
                                </div>
                               
                                    </label>
                                </div>
                                <div className="Main010-review-count">
                                    {dummyReviewCounts[star]}
                                </div>
                            </div>
                        ))}
                        <section className='Main010-Button-search-review'>
                            <button className="Main010-search-button">Search</button>
                        </section>
                    </div>
                </div>
            </div>
        </div>
       {/* 
       
       Dropdown close **********************************************************************************************
       */}

<div className='Main010-page-container'>
            {/* Button to open/close the dropdown */}
            <button className="secB12-open-dropdown-btn" onClick={toggleDropdown001}>
                {isDropdownOpen001 ? 'Close Filter' : 'Open Filter'}
            </button>

            {/* Dropdown Content */}
            <div className={`secB12-dropdown ${isDropdownOpen001 ? 'secB12-open' : ''}`}>
                <div className="secB12-dropdown-content">
                    <div className="secB12-dropdown-header">
                        <h2>Sort By</h2>
                        <button className="secB12-close-dropdown-btn" onClick={toggleDropdown001}>
                            &times;
                        </button>
                    </div>
                    <div className="secB12-dropdown-body">
                        {sortingOptions001.map((option) => (
                            <div
                                key={option.id}
                                className={`secB12-dropdown-row ${selectedOption001 === option.id ? 'selected' : ''}`}
                                onClick={() => handleOptionClick001(option.id)}
                            >
                                <span className="secB12-option-label">{option.label}</span>
                                <span className={`secB12-check-icon ${selectedOption001 === option.id ? 'visibles' : 'hiddens'}`}>✔</span>
                            </div>
                        ))}
                        <section className='secB12-Button-search-review'>
                            <button className="secB12-search-button">Search</button>
                        </section>
                    </div>
                </div>
            </div>
        </div>

                <div className="reviews">
                    {reviewsToShow.map((review, index) => (
                        <div key={index} className="review">
                            <div className="reviewHeader">
                                <div className="stars">
                                    {'★'.repeat(Math.floor(review.rating)) + '☆'.repeat(5 - Math.floor(review.rating))}
                                </div>
                                <div className="date">{review.date}</div>
                            </div>
                            <div className="reviewer">
                                <div className="name">{review.name}</div>
                                <div className="verified">
                                    {review.verified ? 'Verified Purchaser' : 'Verified Purchaser'}
                                </div>
                               
                            </div>
                            <div className="reviewText">{review.reviewText}</div>

                            {/* review section text */}
                            <section className='Verify-img-side'>
                                    10 Pcs Front & Rear Control Arm Ball Joint
                                    <img src="/images/reviews/FrameIcon-0111.svg" alt="Add Vehicle" className="feature-icon-vehicleprodu" />
                                </section>
                            {/* ***************** */}
                            {review.images && review.images.length > 0 && (
                                <div className="reviewImages">
                                    {review.images.map((image, idx) => (
                                        <img
                                            key={idx}
                                            src={image}
                                            alt={`Review image ${idx}`}
                                            className="reviewImage"
                                            onClick={() => handleImageClick(review.images!, idx)}
                                        />
                                    ))}
                                </div>
                            )}
                            <div className="reviewItemInfo">{review.ReviewItem_infoUser__fITJA}</div>
                        </div>
                    ))}
                </div>

                {/* <button className="loadMoreButton" >
                        Load More
                    </button> */}

                {filteredReviews.length > visibleReviewsCount && (
                    <div className='Mainbuttoncounter10'>
                        <div className='Mainbuttoncounter10-01' onClick={handleLoadMore}>
                            <section>
                                NEXT 10
                            </section>
                            <section className='img-sec-01rev'>
                                <img src="/images/reviews/Framebuttonside.svg" alt="Add Vehicle" className="feature-icon-vehicle" />
                            </section>
                        </div>
                    </div>
                )}
            </div>

            {selectedImages && (
                <div className="modal">
                    <div className="modalContent">
                        <button className="modalClose" onClick={handleCloseModal}>&times;</button>
                        <button className="modalPrev" onClick={handlePrevImage}>&lt;</button>
                        <button className="modalNext" onClick={handleNextImage}>&gt;</button>
                        <div className="modalScrollContainer">
                            {selectedImages.length > 0 && (
                                <img
                                    src={selectedImages[currentImageIndex]}
                                    alt={`Modal image ${currentImageIndex}`}
                                    className="modalImage"
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/*  google review */}
            <section className='Review-On-Google-S'>
                <h1>Example.COM REVIEWS ON GOOGLE</h1>
                <div className='Review-On-Google-Div'>
                    <section className='Review-On-Google-Div-S1'>
                        <div className='review-box'>
                            <img src="/images/reviews/Check-google-verify.svg" alt="Review" className="review-image" />
                            <div className='starsMain-G'>
                            {'★'.repeat(4) + '☆'.repeat(1)} {/* 4 stars filled */}
                            </div>
                            <div className='rating-text'>
                                <span className='rating-value'>4.6/5</span>
                                <span className='trusted-store'>Trusted Store</span>
                            </div>
                        </div>
                        <div className='Google-Main-G-R'>
                                <button>
                                See Reviews
                                </button>
                            </div>
                    </section>

                    <div>

                    </div>
                    <section className='Review-On-Google-Div-S2'>


                        <div>



                            <div className='review-box gray-background'>
                                <div className='review-header'>
                                    <div className='rating-stars-231'>
                                        {'★'.repeat(4) + '☆'.repeat(1)} {/* 4 stars filled */}
                                    </div>
                                    <img src="/images/reviews/Google-icon-review.svg" alt="Icon" className="review-icon" />
                                </div>
                                <div className='review-text'>
                                    The part I ordered was a perfect fit and it was about a third of the cost of all my local parts store, and also it was delivered in three days.
                                </div>
                                <img src="/images/reviews/SVGICONARROWDOW.svg" alt="#" className="profile-image-arrow-SVGICONARROWDOW" />

                            </div>

                            <div className='review-text-main-search'>
                                <img src="/images/reviews/Profile-Img.svg" alt="Profile" className="profile-image" />
                                <div className='profile-info'>
                                    <div className='profile-name'>Brandon Huffman</div>
                                    <div className='profile-time'>11 hours ago</div>
                                </div>
                                
                            </div>
                           
                            <div>

                            </div>
                        </div>

                        {/* Repeat the review box as needed */}
                        <div className='Google-Main-review-s12'>



                            <div className='review-box gray-background'>
                                <div className='review-header'>
                                    <div className='rating-stars-231'>
                                        {'★'.repeat(4) + '☆'.repeat(1)} {/* 4 stars filled */}
                                    </div>
                                    <img src="/images/reviews/Google-icon-review.svg" alt="Icon" className="review-icon" />
                                </div>
                                <div className='review-text'>
                                    The part I ordered was a perfect fit and it was about a third of the cost of all my local parts store, and also it was delivered in three days.
                                </div>
                                <img src="/images/reviews/SVGICONARROWDOW.svg" alt="#" className="profile-image-arrow-SVGICONARROWDOW" />

                            </div>

                            <div className='review-text-main-search'>
                                <img src="/images/reviews/Profile-Img.svg" alt="Profile" className="profile-image" />
                                <div className='profile-info'>
                                    <div className='profile-name'>Brandon Huffman</div>
                                    <div className='profile-time'>11 hours ago</div>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>



                        <div className='Google-Main-review-s12'>



                            <div className='review-box gray-background'>
                                <div className='review-header'>
                                    <div className='rating-stars-231'>
                                        {'★'.repeat(4) + '☆'.repeat(1)} {/* 4 stars filled */}
                                    </div>
                                    <img src="/images/reviews/Google-icon-review.svg" alt="Icon" className="review-icon" />
                                </div>
                                <div className='review-text'>
                                    The part I ordered was a perfect fit and it was about a third of the cost of all my local parts store, and also it was delivered in three days.
                                </div>
                                <img src="/images/reviews/SVGICONARROWDOW.svg" alt="#" className="profile-image-arrow-SVGICONARROWDOW" />

                            </div>

                            <div className='review-text-main-search'>
                                <img src="/images/reviews/Profile-Img.svg" alt="Profile" className="profile-image" />
                                <div className='profile-info'>
                                    <div className='profile-name'>Brandon Huffman</div>
                                    <div className='profile-time'>11 hours ago</div>
                                </div>
                            </div>
                            <div>

                            </div>



                        </div>
                    </section>
                </div>
            </section>



        </section>

        <Footer />
        </>

    );
};

export default ReviewsPage;
