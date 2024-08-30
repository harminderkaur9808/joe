import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/BlogPage.css'; // Import the CSS file
import Image from 'next/image';
import Link from 'next/link';
import Footer from './Footer';
import Header from './Header';

const BlogPage: React.FC = () => {
    // section visiting Code.
    // section visiting Code.
    const [activeSection, setActiveSection] = useState<string>('trending');
    const [showMoreTrending, setShowMoreTrending] = useState<boolean>(true);
    const [showMoreHandyDIY, setShowMoreHandyDIY] = useState<boolean>(true);
    const [showMoreOBD2, setShowMoreOBD2] = useState<boolean>(true);
    const [showMoreModelStories, setShowMoreModelStories] = useState<boolean>(true);

    const handleScroll = () => {
        const sections = document.querySelectorAll('.Blog-page__section, .Blog-page__section--categories');
        let currentSection = '';

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                currentSection = section.getAttribute('data-section') || '';
            }
        });

        setActiveSection(currentSection);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(sectionId);
        }
    };


    // Sample blog data
    const posts = [
        { title: "Window Regulator Repair Cost: What to Know", content: "Operating a car is a complex process that often requires practice and training. However, not all car elements are hard to operate. For instance, the windows are the easiest car components to operate. Therefore, anyone, even kids, can open and close car wi...", date: "August 31st, 2022", image: "/images/BlogPage/Trendingpost1.svg", Postcategory: "Window Regulator", slug: "window-regulator-repair-cost" },
        { title: "Can I drive with a bad fuel pump？", content: "The engine of the vehicle requires the proper mixing of fuel and air for internal combustion in the engine. due to this combustion, the vehicle starts. Without the burning of the fuel, the engine will not work. Now, the fuel which can be diesel or petrol...", date: "August 31st, 2022", image: "/images/BlogPage/Fuel Pump.png", Postcategory: "Fuel Pump", slug: "bad-fuel-pump" },
        { title: "What is a fuel pump control module？", content: "The P0456 trouble code indicates a small leak in the vehicle's evaporative emission system. Possible causes include a loose or damaged fuel cap, defective purge...", date: "August 31st, 2022", image: "/images/BlogPage/fuel pump control.png", Postcategory: "Fuel Pump", slug: "fuel-pump-control-module" },
        { title: "How do you Reset the Power Steering Assist on Ford F150？", content: "If your Ford F150's power steering assist system is malfunctioning, you may want to learn how to repair it. Ford F150 electric steering issues are a frequent source of consumer complaints. Instead of a standard hydraulic pump, the wheel is driven by a mot..", date: "August 31st, 2022", image: "/images/BlogPage/Power Steering Pump.png", Postcategory: "Power Steering Pump", slug: "reset-power-steering-assist" },
        { title: "How To Roll Up A Power Window With A Broken Switch?", content: "As an owner, you never want your car windows to get stuck, doesn’t matter whether they got stuck up or down. If it happened on the upper side, don’t think of buying a coffee using the drive-through option again. But if this has happened on the bottom side...", date: "August 31st, 2022", image: "/images/BlogPage/Window Switch.png", Postcategory: "Window Switch", slug: "roll-up-power-window" },
        { title: "Difference between High and Low Pressure Power Steering Hose", content: "Discover the key contrasts between high and low-pressure power steering hoses, delving into their roles in ensuring optimal steering performance and safety in vehicles...", date: "August 31st, 2022", image: "/images/BlogPage/Power Steering Hose.png", Postcategory: "Power Steering Hose", slug: "high-vs-low-pressure-steering-hose" },
    ];
    const HANDYDIYHOW = [
        { title: "How To Know If You Need A New Brake Caliper？", content: "Read on to know more about the functions of a brake caliper and how you can know when it is time to change them. You will also learn why brake calipers can become faulty or degrade and get a better insight into your car brake maintenance.", date: "September 29th, 2022", image: "/images/BlogPage/Brake Caliper.png", Postcategory: "Brake Caliper", slug: "new-brake-caliper" },
        { title: "How Do You Size A Gas Lift Strut Support？", content: "A gas strut is a type of lifting mechanism that is commonly used in automobiles. These are components that depend upon pressurized gases such as nitrogen.  In this article, we will see the selection of the required gas strut.", date: "August 31st, 2022", image: "/images/BlogPage/Gas Strut.png", Postcategory: "Gas Strut", slug: "size-gas-lift-strut" },
        { title: "How do I know if my Blower Relay Fuse is Blown？", content: "It takes many different parts working together for a vehicle to move. The relay switches make up a few of these components. Relay switches are used to ensure that the vehicle's features to which they are allocated can function correctly.", date: "August 31st, 2022", image: "/images/BlogPage/Blower Motor.png", Postcategory: "Blower Motor", slug: "blower-relay-fuse" },
        { title: "How to Install Mud Flaps on Tesla Model Y", content: "The Tesla Model Y is famous to some people due to its exciting driving experience. It operates on great technology and an excellent all-electric drive range that's quite intriguing.", date: "September 29th, 2022", image: "/images/BlogPage/Mud Flaps.png", Postcategory: "Mud Flaps", slug: "install-mud-flaps-tesla" },
        { title: "Coil Springs 103: Bad Coil Spring Symptoms—Can I Still drive", content: "Find out the key indicators of deteriorating coil springs.", date: "August 31st, 2022", image: "/images/BlogPage/Coil Spring.png", Postcategory: "Coil Spring", slug: "bad-coil-spring-symptoms" },
        { title: "Heater Core Replacement", content: "Let Example guide you through the essential steps of replacing your heater core, a crucial component for maintaining a cozy and fog-free interior. Explore signs of a failing heater core, learn the step-by-step replacement process, and discover valuab", date: "August 31st, 2022", image: "/images/BlogPage/Heater Core.png", Postcategory: "Heater Core", slug: "heater-core-replacement" },
    ];
    const OBD2CODES = [
        { title: "What is OBD? Things to Know about On-Board Diagnostics", content: "OBD diagnostic tool monitors performance, retrieves data, detects issues, and plays a crucial role in vehicle maintenance and repair.", date: "September 29th, 2022", image: "/images/BlogPage/On-Board Diagnostics.png", Postcategory: "OBD Codes", slug: "what-is-obd", },
        { title: "Categories of OBD-II codes", content: "Uncover the essential structure of OBD-II codes, providing insight into Powertrain (P), Chassis (C), Body (B), and Network (U) categories, empowering readers to diagnose and resolve automotive issues with precision.", date: "August 31st, 2022", image: "/images/BlogPage/Categories of OBD-II codes.png", Postcategory: "OBD Codes", slug: "categories-of-obd-ii-codes" },
        { title: "Decoding the P0430 Trouble Code: Understanding and Resolving Catalytic Converter Efficiency Issues", content: "Discover the key insights to deciphering the P0430 Trouble Code in our blog post. Gain a deeper understanding of catalytic converter efficiency issues and uncover effective strategies for diagnosing and resolving them.", date: "August 31st, 2022", image: "/images/BlogPage/Decoding the P0430 Trouble.png", Postcategory: "OBD Codes", slug: "decoding-the-p0430-trouble-code", },
        { title: "P0456 Code - Diagnosing a Small Leak in the Evaporative Emission System", content: "The P0456 trouble code indicates a small leak in the vehicle's evaporative emission system. Possible causes include a loose or damaged fuel cap, defective purge valve, cracked hoses, among others.", date: "September 29th, 2022", image: "/images/BlogPage/Evaporative Emission System.png", Postcategory: "OBD Codes", slug: "p0456-code-diagnosing-a-small-leak", },
        { title: "P0172 Code: Fuel System Too Rich", content: "P0172 code indicates a rich fuel mixture issue. Diagnosis involves inspecting intake, fuel, exhaust, and PCV systems. Seek professional help for repairs.", date: "August 31st, 2022", image: "/images/BlogPage/Fuel System Too Rich.png", Postcategory: "OBD Codes", slug: "p0172-code-fuel-system-too-rich", },
        { title: "Decoding the P0352 Code: Troubleshooting Ignition Coil B Primary/Secondary Circuit Malfunction", content: "The P0352 fault code indicates that the ignition coil B circuit is abnormal, affecting engine ignition and vehicle performance. Ignoring this issue can result in engine damage and...", date: "August 31st, 2022", image: "/images/BlogPage/Secondary Circuit Malfunction.png", Postcategory: "OBD Codes", slug: "decoding-the-p0352-code", },
    ];

    const MODELSTORIES = [
        { title: "The Ford Mustang History", content: "The Ford Mustang has a storied history that began in 1964, captivating car enthusiasts with its sporty design and affordability. Over the decades, it has undergone transformations, embraced retro-inspired styles, and evolved into a symbol of American muscle.", date: "September 29th, 2022", image: "/images/BlogPage/Modelstories.svg", Postcategory: "Model Stories", slug: "ford-mustang-history" },
        { title: "Exploring the Ford F-Series: An Introduction to Its Rich Vehicle Model History (I)", content: "Looking at the first seven generations of the Ford F-Series, the world's best-selling pickup truck, whose rich history has shaped the industry and introduced groundbreaking features, advanced technology and global market dominance.", date: "August 31st, 2022", image: "/images/BlogPage/Vehicle Model History.png", Postcategory: "Model Stories", slug: "ford-f-series-introduction" },
        { title: "Nothing Except Power - A Look at the Evolution of Dodge Challenger Models", content: "Understand Dodge Challenger more through the years. From its legendary inception in 1970 to the modern models, explore the iconic design, powerful performance, and timeless appeal that have made it the...", date: "August 31st, 2022", image: "/images/BlogPage/Nothing Except Power.png", Postcategory: "Model Stories", slug: "dodge-challenger-evolution" },
        { title: "Exploring the Ford F-Series: Unveiling the Evolution of the Ford F-Series (II)", content: "The Ford F-Series is an iconic American automotive legend, embodying Ford's commitment to excellence and innovation. With its rich heritage and market dominance, the F-Series has become synonymous...", date: "September 29th, 2022", image: "/images/BlogPage/lastblogImg12.svg", Postcategory: "Model Stories", slug: "ford-f-series-evolution-ii" },
        { title: "The Future is Formidable: A Review of the History of the Three Generations of Chevrolet Equinox", content: "The Chevrolet Equinox is a successful SUV model with three generations. It has sold over 2 million units and achieved strong sales performance. Targeting the compact and mid-size SUV market, it offers impressive performance and...", date: "August 31st, 2022", image: "/images/BlogPage/generations of Chevrolet.png", Postcategory: "Model Stories", slug: "chevrolet-equinox-history" },
        { title: "Explore the History of Chevrolet Silverado", content: "The Chevrolet Silverado is a popular truck that has undergone multiple generations of updates, offering a range of engine options, improved design, and advanced technology features.", date: "August 31st, 2022", image: "/images/BlogPage/history Chevrolet Silverado.png", Postcategory: "Model Stories", slug: "chevrolet-silverado-history" },
    ];
    // Sample categories
    const categories = [
        { name: "ENGINE", image: "/images/BlogPage/Engine.png", slug: "engine" },
        { name: "TRANSMISSION", image: "/images/BlogPage/TRANSMISSION.png", slug: "transmission" },
        { name: "FUEL SYSTEM", image: "/images/BlogPage/FUEL SYSTEM.png", slug: "fuel-system" },
        { name: "ELECTRICAL SYSTEM", image: "/images/BlogPage/ELECTRICAL SYSTEM.png", slug: "electrical-system" },
        { name: "SUSPENSION & STEERING", image: "/images/BlogPage/SUSPENSION & STEERING.png", slug: "suspension-steering" },
        { name: "BRAKING", image: "/images/BlogPage/BRAKING.png", slug: "braking" },
    ];

    return (

        <>
        < Header />
            <section className='Main-Sec-Blog-Page'>
                <section className='Blog_Banner'>
                    <div className="Blog_Banner_topBox">
                        <div className="Blog_Banner_Container">
                            <p className="Blog_Banner_paragraph">
                                <span className="Blog_Banner_whiteText">Welcome to the Example blog.<br /></span>
                                <span className="Blog_Banner_whiteText">A place to hear from car </span>
                                <span className="Blog_Banner_whiteTextWithBorder"> enthusiasts.<br /></span>
                            </p>
                            <div className="Blog_Banner_overlayText">
                                <span className="Blog_Banner_redText">For all your car thought</span>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="Blog-page">
                    <div className="Blog-page__sidebar">
                        <div className='Main-blog-sidebar'>
                            <h1
                                className={`Blog-page__heading ${activeSection === 'trending' ? 'active' : ''}`} onClick={() => handleClick('trending')}
                            >
                                TRENDING POSTS
                            </h1>
                            <h1
                                className={`Blog-page__heading ${activeSection === 'categories' ? 'active' : ''}`}
                                onClick={() => handleClick('categories')}
                            >
                                SEARCH BY CATEGORIES
                            </h1>
                            <h1
                                className={`Blog-page__heading ${activeSection === 'handyDIY' ? 'active' : ''}`}
                                onClick={() => handleClick('handyDIY')}
                            >
                                HANDY DIY HOW-TO'S
                            </h1>
                            <h1
                                className={`Blog-page__heading ${activeSection === 'obd2Codes' ? 'active' : ''}`}
                                onClick={() => handleClick('obd2Codes')}
                            >
                                OBD2 CODES
                            </h1>
                            <h1
                                className={`Blog-page__heading ${activeSection === 'modelStories' ? 'active' : ''}`}
                                onClick={() => handleClick('modelStories')}
                            >
                                MODEL STORIES
                            </h1>
                        </div>
                    </div>
                    <div className="Blog-page__main-content">
                        <div id="trending" className="Blog-page__section" data-section="trending">
                            <h1 className="Blog-page__heading">TRENDING POSTS</h1>
                            <div className="Blog-page__grid">
                                {posts.slice(0, showMoreTrending ? posts.length : 4).map((post, index) => (
                                    <Link href={`/blog/${post.slug}`} key={index} className="Blog-page__post">
                                        <Image src={post.image} alt={post.title} className="Blog-page__image" width={500} height={266} />
                                        <h2 className="Blog-page__title-Category">{post.Postcategory}</h2>
                                        <h2 className="Blog-page__title">{post.title}</h2>
                                        {/* <h3>{post.title}</h3> */}
                                        <p className="Blog-page__content">{post.content}</p>
                                        <div className="Blog-page__footer">
                                            <span className="Blog-page__date">{post.date}</span>
                                            <Image src="/images/BlogPage/Arrow-01.svg" alt="Category-Img" className="Blog-page__arrow" width={13} height={13} />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            {!showMoreTrending && (
                                <button className="Blog-page__view-more" onClick={() => setShowMoreTrending(true)}>
                                    View More
                                </button>
                            )}
                        </div>
                        {/*  Implement Catyegories  */}

                        {/* 
                        <div id="categories" className="Blog-page__section Blog-page__section--categories" data-section="categories">
                            <h1 className="Blog-page__heading Blog-page__heading--categories">SEARCH BY CATEGORIES</h1>
                            <div className="Blog-page__categories">
                                {categories.map((category, index) => (
                                    <div className="Blog-page__category Blog-page__category--c3" key={index}>
                                        <Image src={category.image} alt={category.name} className="Blog-page__category-image" layout="fill" objectFit="cover" />
                                        <span className="Blog-page__category-name Blog-page__category-name--c3">{category.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                        <div id="categories" className="Blog-page__section Blog-page__section--categories" data-section="categories">
                            <h1 className="Blog-page__heading Blog-page__heading--categories">SEARCH BY CATEGORIES</h1>
                            <div className="Blog-page__categories">
                                {categories.map((category, index) => (

                                        <div className="Blog-page__category Blog-page__category--c3" key={index}>
                                            <Link href={category.slug} passHref>

                                            <Image
                                                src={category.image}
                                                alt={category.name}
                                                className="Blog-page__category-image"
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                            <span className="Blog-page__category-name Blog-page__category-name--c3">{category.name}</span>
                                            </Link>

                                        </div>

                                ))}
                            </div>
                        </div>
                        <div id="handyDIY" className="Blog-page__section" data-section="handyDIY">


                            {/*  Implement Catyegories  */}
                            <h1 className="Blog-page__heading">HANDY DIY HOW-TO'S</h1>
                            <div className="Blog-page__grid">
                                {HANDYDIYHOW.slice(0, showMoreHandyDIY ? HANDYDIYHOW.length : 4).map((post, index) => (
                                    <Link href={`/blog/${post.slug}`} key={index} className="Blog-page__post">
                                        <Image src={post.image} alt={post.title} className="Blog-page__image" width={500} height={266} />
                                        <h2 className="Blog-page__title-Category">{post.Postcategory}</h2>
                                        <h2 className="Blog-page__title">{post.title}</h2>
                                        {/* <h3>{post.title}</h3> */}
                                        <p className="Blog-page__content">{post.content}</p>
                                        <div className="Blog-page__footer">
                                            <span className="Blog-page__date">{post.date}</span>
                                            <Image src="/images/BlogPage/Arrow-01.svg" alt="Category-Img" className="Blog-page__arrow" width={13} height={13} />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            {!showMoreHandyDIY && (
                                <button className="Blog-page__view-more" onClick={() => setShowMoreHandyDIY(true)}>
                                    View More
                                </button>
                            )}
                        </div>

                        <div id="obd2Codes" className="Blog-page__section" data-section="obd2Codes">
                            <h1 className="Blog-page__heading">OBD2 CODES</h1>
                            <div className="Blog-page__grid">
                                {OBD2CODES.slice(0, showMoreOBD2 ? OBD2CODES.length : 4).map((post, index) => (
                                    <Link href={`/blog/${post.slug}`} key={index} className="Blog-page__post">
                                        <Image src={post.image} alt={post.title} className="Blog-page__image" width={500} height={266} />
                                        <h2 className="Blog-page__title-Category">{post.Postcategory}</h2>
                                        <h2 className="Blog-page__title">{post.title}</h2>
                                        {/* <h3>{post.title}</h3> */}
                                        <p className="Blog-page__content">{post.content}</p>
                                        <div className="Blog-page__footer">
                                            <span className="Blog-page__date">{post.date}</span>
                                            <Image src="/images/BlogPage/Arrow-01.svg" alt="Category-Img" className="Blog-page__arrow" width={13} height={13} />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            {!showMoreOBD2 && (
                                <button className="Blog-page__view-more" onClick={() => setShowMoreOBD2(true)}>
                                    View More
                                </button>
                            )}
                        </div>
                        <div id="modelStories" className="Blog-page__section" data-section="modelStories">
                            <h1 className="Blog-page__heading">MODEL STORIES</h1>
                            <div className="Blog-page__grid">
                                {MODELSTORIES.slice(0, showMoreModelStories ? MODELSTORIES.length : 4).map((post, index) => (
                                    <Link href={`/blog/${post.slug}`} key={index} className="Blog-page__post">
                                        <Image src={post.image} alt={post.title} className="Blog-page__image" width={500} height={266} />
                                        <h2 className="Blog-page__title-Category">{post.Postcategory}</h2>
                                        <h2 className="Blog-page__title">{post.title}</h2>
                                        {/* <h3>{post.title}</h3> */}
                                        <p className="Blog-page__content">{post.content}</p>
                                        <div className="Blog-page__footer">
                                            <span className="Blog-page__date">{post.date}</span>
                                            <Image src="/images/BlogPage/Arrow-01.svg" alt="Category-Img" className="Blog-page__arrow" width={13} height={13} />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            {!showMoreModelStories && (
                                <button className="Blog-page__view-more" onClick={() => setShowMoreModelStories(true)}>
                                    View More
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default BlogPage;
