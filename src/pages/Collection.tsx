import Image from "next/image";
import { Inter } from "next/font/google";
import { useState,useRef } from "react";
import ProductCollection from './ProductCollection';
import "@/styles/Collection.css";
import Modal from './Modal';
import Footer from "./Footer";
import Link from "next/link";


import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const products = [
    { id: 1, name: 'Example AD 1 00 Car Fault Code Reader OBD2', price: '$25.99', regularPrice: '$30.99', image: '/Product Images/Example AD 1 00 Car Fault Code Reader OBD2.png', discount: -10, rating: 4.5 },
    { id: 2, name: '8 Pcs Ignition Coil & 8 Pcs PLATINUM Spark Plug Kit', price: '$115.99', regularPrice: '$34.99', image: '/Product Images/8 Pcs Ignition Coil & 8 Pcs PLATINUM Spark Plug Kit.png', discount: -15, rating: 3.8 },
    { id: 3, name: '4 Pcs Ignition Coil & 4 Pcs IRIDIUM Spark Plug Kit', price: '$79.99', regularPrice: '$99.99', image: '/Product Images/4 Pcs Ignition Coil & 4 Pcs IRIDIUM Spark Plug Kit.png', discount: -20, rating: 3.8 },
    { id: 4, name: '4 Pcs Ignition Coil & 4 Pcs IRIDIUM Spark Plug Kit (1)', price: '$26.99', regularPrice: '$33.99', image: '/Product Images/4 Pcs Ignition Coil & 4 Pcs IRIDIUM Spark Plug Kit (1).png', discount: -25, rating: 2.8 },
    { id: 6, name: 'Turbo Turbocharger', price: '$67.99!', regularPrice: '$399.99', image: '/Product Images/Turbo Turbocharger.png', discount: -5, rating: 3.8 },
    { id: 7, name: 'Throttle Body Assembly with Sensor', price: '$25.99', regularPrice: '$84.99', image: '/Product Images/Throttle Body Assembly with Sensor.png', discount: -10, rating: 4.8 },
    { id: 8, name: 'Example AD 1 00 Car Fault Code Reader OBD2', price: '$25.99', regularPrice: '$30.99', image: '/Product Images/Example AD 1 00 Car Fault Code Reader OBD2.png', discount: -10, rating: 4.5 },
    { id: 9, name: '8 Pcs Ignition Coil & 8 Pcs PLATINUM Spark Plug Kit', price: '$115.99', regularPrice: '$34.99', image: '/Product Images/8 Pcs Ignition Coil & 8 Pcs PLATINUM Spark Plug Kit.png', discount: -15, rating: 3.8 },
  ];
// ***********************

const [query, setQuery] = useState('');
const [suggestions, setSuggestions] = useState([
  'Year',
  'Make',
  'Model',
  'Part Type',
  'Part Number',
  'Another suggestion',
  'Yet another suggestion',
]);
const [showModal, setShowModal] = useState(false);

// State for dropdown selections
const [selectedYear, setSelectedYear] = useState<string>('');
const [selectedMake, setSelectedMake] = useState<string>('');
const [selectedModel, setSelectedModel] = useState<string>('');
const [selectedPartType, setSelectedPartType] = useState<string>('');
const [selectedPartNumber, setSelectedPartNumber] = useState<string>('');

// References for dropdowns
const makeRef = useRef<HTMLSelectElement>(null);
const modelRef = useRef<HTMLSelectElement>(null);
const partTypeRef = useRef<HTMLSelectElement>(null);
const partNumberRef = useRef<HTMLSelectElement>(null);

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  setQuery(value);

  // Filter suggestions based on input value
  if (value.trim() === '') {
    setSuggestions([]);
  } else {
    const filtered = suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  }
};

const handleSearch = () => {
  // Handle the search functionality here
  console.log(`Searching for: ${query}`);
  // router.push('/Searchpage');

};

const handleSuggestionClick = (suggestion: string) => {
  // Set query to the clicked suggestion and clear suggestions
  setQuery(suggestion);
  setSuggestions([]);
};

const handleLeftAction = () => {
  // Show the modal on left button click
  setShowModal(true);
};

const handleCloseModal = () => {
  setShowModal(false);
};

// Handlers for dropdown changes
const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setSelectedYear(e.target.value);
};

const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setSelectedMake(e.target.value);
};

const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setSelectedModel(e.target.value);
};

const handlePartTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setSelectedPartType(e.target.value);
};

const handlePartNumberChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setSelectedPartNumber(e.target.value);
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (selectedYear && selectedMake && selectedModel && selectedPartType && selectedPartNumber) {
    console.log('Form Submitted');
    console.log(`Year: ${selectedYear}`);
    console.log(`Make: ${selectedMake}`);
    console.log(`Model: ${selectedModel}`);
    console.log(`Part Type: ${selectedPartType}`);
    console.log(`Part Number: ${selectedPartNumber}`);
    setShowModal(false);
  } else {
    alert('Please make all selections');
  }
};
  return (
    <>
    <Header />
    <main className="custom_main">
    <section className="headerContent">
      {/* <div className="headerTitle">
        <h1 className="categoryTitle">All Categories</h1>
      </div> */}
       <section className="Breadcrumb_navList__Em86D Breadcrumb_nowrap__7sLp9" style={{ color: '#F5F5F5' }}>
        <h5 className="Breadcrumb_lineTitle__OrmvR">
          <a className="Breadcrumb_link__DV2I4" href="/" style={{ color: '' }}>Home</a>
          <span className="mr5 Breadcrumb_slash__0QI0n" style={{ color: '' }}>/</span>
        </h5>
        <h5 className="Breadcrumb_lineTitle__OrmvR">
          <span className="Breadcrumb_lastNav__YDqwS Breadcrumb_unlink__shdVn" style={{ color: '#DD1D23', cursor: 'not-allowed' }}>All Collection</span>
          <span className="mr5 Breadcrumb_slash__0QI0n" style={{ color: '#DD1D23)' }}></span>
        </h5>
      </section>

      <section className="headerContent">
          <div className="headerTitle">
  <h1 className="categoryTitle">All Categories</h1>
          </div>
        </section>

{/* ************************* */}
<Modal show={showModal} handleClose={handleCloseModal}>
        <h2 className='heading1'>Select Your Vehicle</h2>
        <form onSubmit={handleSubmit} className="dropdown-form">
          <div className="modal-container">
            <Image src="/images/car98.png" alt="Year Icon" className="dropdown-icon" width={30} height={30} />
            <div className="dropdown-container">
              <select value={selectedYear} onChange={handleYearChange} required className="dropdown-select">
                <option className='opt' value="" disabled>Year</option>
                <option className='opt' value="2024">2024</option>
                <option className='opt' value="2023">2023</option>
                <option className='opt' value="2022">2022</option>
                <option className='opt' value="2021">2021</option>
                <option className='opt' value="2020">2020</option>
                <option className='opt' value="2019">2019</option>
              </select>
            </div>
            <div className="dropdown-container">
              <select ref={makeRef} value={selectedMake} onChange={handleMakeChange} required className="dropdown-select">
                <option className='opt' value="" disabled>Make</option>
                <option className='opt' value="Acura">Acura</option>
                <option className='opt' value="Audi">Audi</option>
                <option className='opt' value="BMW">BMW</option>
                <option className='opt' value="Mercedes-Benz">Mercedes-Benz</option>
                <option className='opt' value="Suzuki">Suzuki</option>
              </select>
            </div>
            <div className="dropdown-container">
              <select ref={modelRef} value={selectedModel} onChange={handleModelChange} required className="dropdown-select">
                <option className='opt' value="" disabled>Model</option>
                <option className='opt' value="A3">A3</option>
                <option className='opt' value="A3 Quattro">A3 Quattro</option>
                <option className='opt' value="A4 Allroad">A4 Allroad</option>
                <option className='opt' value="A4 Quattro">A4 Quattro</option>
                <option className='opt' value="A5 Sportback">A5 Sportback</option>
              </select>
            </div>
            <div className="dropdown-container">
              <select ref={partTypeRef} value={selectedPartType} onChange={handlePartTypeChange} required className="dropdown-select">
                <option className='opt' value="" disabled>Trim</option>
                <option className='opt' value="Engine">Komfort Sedan 4-door</option>
                <option className='opt' value="Transmission">Premium plus Sedan 4-door</option>
                <option className='opt' value="Transmission">Premium Sedan 4-door</option>
                <option className='opt' value="Transmission">Prestige Sedan 4-door</option>
                <option className='opt' value="Transmission">Progressive Sedan 4-door</option>
              </select>
            </div>
            <div className="dropdown-container">
              <select ref={partNumberRef} value={selectedPartNumber} onChange={handlePartNumberChange} required className="dropdown-select">
                <option className='opt' value="" disabled>Engine</option>
                <option className='opt' value="12345">12345</option>
                <option className='opt' value="67890">67890</option>
              </select>
            </div>
            <button className='subm' type="submit">GO</button>
          </div>
        </form>
      </Modal>
      <section className="vehicleCollection">
        <div className="vehicleInfo" title="Select Your Vehicle To See Exact Fit Parts">
          Select Your Vehicle To See Exact Fit Parts
        </div>
        <div className="vehicleTools">
      <div className="vehicleBtn" onClick={handleLeftAction}>
        <div className="vehicleTips">Add Vehicle</div>
        <div className="vehicleIconBox">
          <span role="img" className="vehicleIcon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="5em" height="5em" fill="currentColor" aria-hidden="true"focusable="false" >
              <defs>
                <pattern id="Vehicle_black_svg__b" patternContentUnits="objectBoundingBox"width="1"height="1" >
                  <use transform="scale(.01515)" xlinkHref="#Vehicle_black_svg__a"></use>
                </pattern>
                <image id="Vehicle_black_svg__a" width="66"height="66" xlinkHref="/Collection/vehicle.png" // Ensure this path is correct
                 ></image>
              </defs>
              <path
                fillRule="evenodd"
                d="M0 24h24V0H0v24Z"
                style={{ fill: "url(#Vehicle_black_svg__b)" }}
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
      </section>
    </section>

   <section className="textImageContainer">
    <div className="containerContent">
      <div className="Engine_textContent">
        <h2 className="mt-5">Engine</h2>
      </div>
      {/* <div className="imageContent">
        <Image  src="/Collection/divider.png"  alt="Description of the image"  width={300}  height={200} />
      </div> */}
    </div>
  </section>

<section className="Engine-section">
  <div className="main-container">
  <div role="cell" className="category-item">
  <Link href="/air-filters-and-intake-systems">
    <div className="category-box" title="Air Filters & Intake Systems" >
      <div className="icon-content">
        <div className="icon-box">
          <Image src="/Collection/Air filters.png" alt="Air Filters Icon" width={50} height={50} />
        </div>
      </div>
      <h3 className="item-label">Air Filters & Intake Systems</h3>
      <span role="img" aria-label="right" className="arrow-icon">
        <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
          <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
        </svg>
      </span>
    </div>
  </Link>
</div>

  <div role="cell" className="category-item">
    <Link href="/Cams, Timing & Valvetrain">
      <div className="category-box" title="Cams, Timing & Valvetrain">
        <div className="icon-content">
          <div className="icon-box">
            <Image src="/Collection/Cams timing.png" alt="Cams, Timing & Valvetrain Icon" width={50} height={50} />
          </div>
        </div>
        <h3 className="item-label">Cams, Timing & Valvetrain</h3>
        <span role="img" aria-label="right" className="arrow-icon">
          <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
          </svg>
        </span>
      </div>
    </Link>
  </div>
  <div role="cell" className="category-item">
    <Link href="/Cranks, Pistons, Oil & Components">
      <div className="category-box" title="Cranks, Pistons, Oil & Components">
        <div className="icon-content">
          <div className="icon-box">
            <Image src="/Collection/Cranks.png" alt="Cranks, Pistons, Oil & Components Icon" width={50} height={50} />
          </div>
        </div>
        <h3 className="item-label">Cranks, Pistons, Oil & Components</h3>
        <span role="img" aria-label="right" className="arrow-icon">
          <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
          </svg>
        </span>
      </div>
    </Link>
  </div>

  <div role="cell" className="category-item">
    <Link href="/Electronic Control Modules, Ignition & Distributors">
      <div className="category-box" title="Electronic Control Modules, Ignition & Distributors">
        <div className="icon-content">
          <div className="icon-box">
            <Image src="/Collection/Electronic module.png" alt="Electronic Control Modules Icon" width={50} height={50} />
          </div>
        </div>
        <h3 className="item-label">Electronic Control Modules, Ignition & Distributors</h3>
        <span role="img" aria-label="right" className="arrow-icon">
          <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
          </svg>
        </span>
      </div>
    </Link>
  </div>

  <div role="cell" className="category-item">
    <Link href="/air-filters-and-intake-systems">
      <div className="category-box" title="Air Filters & Intake Systems">
        <div className="icon-content">
          <div className="icon-box">
            <Image src="/Collection/Engine Cooling.png"  alt="Air Filters Icon"  width={50}  height={50} />
          </div>
        </div>
        <h3 className="item-label">Engine Cooling</h3>
        <span role="img" aria-label="right" className="arrow-icon">
          <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
          </svg>
        </span>
      </div>
    </Link>
  </div>

  <div role="cell" className="category-item">
    <Link href="/Cams, Timing & Valvetrain">
      <div className="category-box" title="Cams, Timing & Valvetrain">
        <div className="icon-content">
          <div className="icon-box">
            <Image  src="/Collection/Engine Mounts.png"  alt="Cams, Timing & Valvetrain Icon" width={50} height={50} 
            />
          </div>
        </div>
        <h3 className="item-label">Engine Mounts</h3>
        <span role="img" aria-label="right" className="arrow-icon">
          <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
          </svg>
        </span>
      </div>
    </Link>
  </div>

  <div role="cell" className="category-item">
    <Link href="/Cranks, Pistons, Oil & Components">
      <div className="category-box" title="Cranks, Pistons, Oil & Components">
        <div className="icon-content">
          <div className="icon-box">
            <Image src="/Collection/Exhaust & Emission Systems.png"  alt="Exhaust & Emission Systems Icon"  width={50} height={50}/>
          </div>
        </div>
        <h3 className="item-label">Exhaust & Emission Systems</h3>
        <span role="img" aria-label="right" className="arrow-icon">
          <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
          </svg>
        </span>
      </div>
    </Link>
  </div>

  <div role="cell" className="category-item">
    <Link href="/Electronic Control Modules, Ignition & Distributors">
      <div className="category-box" title="Electronic Control Modules, Ignition & Distributors">
        <div className="icon-content">
          <div className="icon-box">
            <Image src="/Collection/Fuel Systems & Components.png" alt="Fuel Systems & Components Icon" width={50} height={50} 
            />
          </div>
        </div>
        <h3 className="item-label">Fuel Systems & Components</h3>
        <span role="img" aria-label="right" className="arrow-icon">
          <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
          </svg>
        </span>
      </div>
    </Link>
  </div>
  <div role="cell" className="category-item">
    <Link href="/Starters, Alternators, Batteries & Components">
      <div className="category-box" title="Starters, Alternators, Batteries & Components">
        <div className="icon-content">
          <div className="icon-box">
            <Image src="/Collection/Starters.png" alt="Air Filters Icon" width={50} height={50} />
          </div>
          <div className="image-content">
            <span></span>
          </div>
        </div>
        <h3 className="item-label">Starters, Alternators, Batteries & Components</h3>
        <span role="img" aria-label="right" className="arrow-icon">
          <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
          </svg>
        </span>
      </div>
    </Link>
</div>
</div>
</section>
<section className="body-lamp-assembly">
  <div className="container-content">
    <div className="body-lamp-text-content">
      <h2>Body & Lamp Assembly</h2>
    </div>
    {/* <div className="image-content">
      <Image src="/Collection/divider.png"  alt="Description of the image"  width={100}  height={50}/>
    </div> */}
  </div>

  <div className="body-lamp-main-container">
    <div role="cell" className="category-item">
      <Link href="/headlight-assemblies-components">
        <div className="category-box" title="Headlight Assemblies & Components">
          <div className="icon-content">
            <div className="icon-box">
               <Image  src="/Collection/Headlight Assemblies.png" alt="Headlight Assemblies Icon" width={50} height={50}/>
            </div>
          </div>
          <h3 className="item-label">Headlight Assemblies & Components</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/light-bulbs-leds">
        <div className="category-box" title="Light Bulbs & LEDs">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Light Bulbs.png" alt="Light Bulbs Icon" width={50} height={50} 
              />
            </div>
          </div>
          <h3 className="item-label">Light Bulbs & LEDs</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/mirrors-components">
        <div className="category-box" title="Mirrors & Components">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Mirrors & Components.png" alt="Mirrors Icon" width={50} height={50}/>
            </div>
          </div>
          <h3 className="item-label">Mirrors & Components</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/parking-assistance">
        <div className="category-box" title="Parking Assistance">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Parking Assistance.png"  alt="Parking Assistance Icon"  width={50} height={50} 
              />
            </div>
          </div>
          <h3 className="item-label">Parking Assistance</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>
  </div>
</section>


<section className="Brake Wheel Parts-sec">
  <div className="container-content">
    <div className="Brake-Wheels-text-content">
      <h2>Brake & Wheel Parts</h2>
    </div>
    {/* <div className="image-content">
      <Image src="/Collection/divider.png"  alt="Description of the image"  width={100}  height={50}  />
    </div> */}
  </div>

  <div className="Brake-Wheel-main-container">
    <div role="cell" className="category-item">
      <Link href="/Brake Discs, Pads & Calipers">
        <div className="category-box" title="Brake Discs, Pads & Calipers">
          <div className="icon-content">
            <div className="icon-box">
               <Image  src="/Collection/Brake Discs.png" alt="Brake Discs, Pads & Calipers Icon" width={50} height={50}/>
            </div>
          </div>
          <h3 className="item-label">Brake Discs, Pads & Calipers</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/Brake Drums, Shoes & Components">
        <div className="category-box" title="Brake Drums, Shoes & Components">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Brake Drums.png" alt="Brake Drums, Shoes & Components Icon" width={50} height={50} 
              />
            </div>
          </div>
          <h3 className="item-label">Brake Drums, Shoes & Components</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/Brake Master Cylinders">
        <div className="category-box" title="Brake Master Cylinders, Boosters & Components">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Brake Master.png" alt="Brake Master Cylinders Icon" width={50} height={50}/>
            </div>
          </div>
          <h3 className="item-label">Brake Master Cylinders, Boosters & Components</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/parking-assistance">
        <div className="category-box" title="Parking Brake, ABS & Other Components">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Parking Brake.png"  alt="Parking Assistance Icon"  width={50} height={50} 
              />
            </div>
          </div>
          <h3 className="item-label">Parking Brake, ABS & Other Components</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>


    <div role="cell" className="category-item">
      <Link href="/Wheel & Tire Accessories">
        <div className="category-box" title="Wheel & Tire Accessories">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Wheel & Tire Accessories.png" alt="Wheel & Tire Accessories Icon" width={50} height={50}/>
            </div>
          </div>
          <h3 className="item-label">Wheel & Tire Accessories</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/Wheel Hubs, Bearings, and Components">
        <div className="category-box" title="Wheel Hubs, Bearings, and Components">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Wheel Hubs.png"  alt="Wheel Hubs, Bearings, and Components Icon"  width={50} height={50} 
              />
            </div>
          </div>
          <h3 className="item-label">Wheel Hubs, Bearings, and Components</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>
  </div>
</section>

<section className="Drivetrain-sec">
  <div className="container-content">
    <div className="Drivetrain-text-content">
      <h2>Drivetrain</h2>
    </div>
    {/* <div className="image-content">
      <Image src="/Collection/divider.png"  alt="Description of the image"  width={100}  height={50} />
    </div> */}
  </div>

  <div className="Drivetrain-main-container">
    <div role="cell" className="category-item">
      <Link href="/Automatic Transmission Parts">
        <div className="category-box" title="Automatic Transmission Parts">
          <div className="icon-content">
            <div className="icon-box">
               <Image  src="/Collection/Automatic Transmission Parts.png" alt="Automatic Transmission Parts Icon" width={50} height={50}/>
            </div>
          </div>
          <h3 className="item-label">Automatic Transmission Parts</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/Axles, Driveshaft & 4WD">
        <div className="category-box" title="Axles, Driveshaft & 4WD">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Axles, Driveshaft & 4WD.png" alt="Axles, Driveshaft & 4WD Icon" width={50} height={50} 
              />
            </div>
          </div>
          <h3 className="item-label">Axles, Driveshaft & 4WD</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/Clutches & Components">
        <div className="category-box" title="Clutches & Components">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Clutches & Components.png" alt="Clutches & Components Icon" width={50} height={50}/>
            </div>
          </div>
          <h3 className="item-label">Clutches & Components</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/Differentials, Assemblies & Parts">
        <div className="category-box" title="Differentials, Assemblies & Parts">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Differentials Assemblies & Parts.png"  alt="Differentials, Assemblies & Parts Icon"  width={50} height={50} 
              />
            </div>
          </div>
          <h3 className="item-label">Differentials, Assemblies & Parts</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>
    <div role="cell" className="category-item">
      <Link href="/Manual Transmission Parts">
        <div className="category-box" title="Manual Transmission Parts">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Manual Transmission Parts.png" alt="Manual Transmission Parts Icon" width={50} height={50}/>
            </div>
          </div>
          <h3 className="item-label">Manual Transmission Parts</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/Other Transmission Parts">
        <div className="category-box" title="Other Transmission Parts">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Other Transmission Parts.png"  alt="Other Transmission Parts Icon"  width={50} height={50} 
              />
            </div>
          </div>
          <h3 className="item-label">Other Transmission Parts</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>
  </div>
</section>
<section className="Heating-Cooling-sec">
  <div className="container-content">
    <div className="Heating-Cooling-text-content">
      <h2>Heating & Cooling</h2>
    </div>
    {/* <div className="image-content">
      <Image src="/Collection/divider.png"  alt="Description of the image"  width={100}  height={50} />
    </div> */}
  </div>

  <div className="Heating-Cooling-main-container">
    <div role="cell" className="category-item">
      <Link href="/Heating, Air Conditioning & Components">
        <div className="category-box" title="Heating, Air Conditioning & Components">
          <div className="icon-content">
            <div className="icon-box">
               <Image  src="/Collection/Heating Air Conditioning.png" alt="Heating, Air Conditioning & Components Icon" width={50} height={50}/>
            </div>
          </div>
          <h3 className="item-label">Heating, Air Conditioning & Components</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/Radiators, Fans, Cooling Systems & Components">
        <div className="category-box" title="Radiators, Fans, Cooling Systems & Components">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Radiators.png" alt="Radiators, Fans, Cooling Systems & Components Icon" width={50} height={50} 
              />
            </div>
          </div>
          <h3 className="item-label">Radiators, Fans, Cooling Systems & Components</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>
  </div>
</section>
<section className="Engine-sec">
  <div className="container-content">
    <div className="Engine-text-content">
      <h2>Engine</h2>
    </div>
    {/* <div className="image-content">
      <Image src="/Collection/divider.png"  alt="Description of the image"  width={100}  height={50} 
      />
    </div> */}
  </div>

  <div className="Engine-main-container">
    <div role="cell" className="category-item">
      <Link href="/Body Moldings & Trims">
        <div className="category-box" title="Body Moldings & Trims">
          <div className="icon-content">
            <div className="icon-box">
               <Image  src="/Collection/Body Moldings & Trims.png" alt="Body Moldings & Trims Icon" width={50} height={50}/>
            </div>
          </div>
          <h3 className="item-label">Body Moldings & Trims</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/Bumpers & Components">
        <div className="category-box" title="Bumpers & Components">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Bumpers & Components.png" alt="Bumpers & Components Icon" width={50} height={50} 
              />
            </div>
          </div>
          <h3 className="item-label">Bumpers & Components</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/Doors, Trunk Lids & Hatches">
        <div className="category-box" title="Doors, Trunk Lids & Hatches">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Doors.png" alt="Doors, Trunk Lids & Hatches" width={50} height={50}/>
            </div>
          </div>
          <h3 className="item-label">Doors, Trunk Lids & Hatches</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/Fender Flares, Vents & Accessories">
        <div className="category-box" title="Fender Flares, Vents & Accessories">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Fender Flares.png"  alt="Fender Flares, Vents & Accessories Icon"  width={50} height={50} 
              />
            </div>
          </div>
          <h3 className="item-label">Fender Flares, Vents & Accessories</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>
    <div role="cell" className="category-item">
      <Link href="/Grilles & Components">
        <div className="category-box" title="Grilles & Components">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Grilles & Components.png" alt="Grilles & Components Icon" width={50} height={50}/>
            </div>
          </div>
          <h3 className="item-label">Grilles & Components</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/Guards & Protection">
        <div className="category-box" title="Guards & Protection">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Guards & Protection.png"  alt="Guards & Protection Icon"  width={50} height={50} 
              />
            </div>
          </div>
          <h3 className="item-label">Guards & Protection</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/Hitches, Winches & Trailers">
        <div className="category-box" title="Hitches, Winches & Trailers">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Hitches, Winches & Trailers.png" alt="Hitches, Winches & Trailers Icon" width={50} height={50}/>
            </div>
          </div>
          <h3 className="item-label">Hitches, Winches & Trailers</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/Plastic Tooling Box & Components">
        <div className="category-box" title="Plastic Tooling Box & Components">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Plastic Tooling Box.png"  alt="Plastic Tooling Box & Components Icon"  width={50} height={50} 
              />
            </div>
          </div>
          <h3 className="item-label">Plastic Tooling Box & Components</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/Roofs, Tops & Sunroofs">
        <div className="category-box" title="Roofs, Tops & Sunroofs">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Roofs.png" alt="Roofs, Tops & Sunroofs Icon" width={50} height={50}/>
            </div>
          </div>
          <h3 className="item-label">Roofs, Tops & Sunroofs</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/Running Boards & Step Bars">
        <div className="category-box" title="Running Boards & Step Bars">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Running Boards.png"  alt="Running Boards & Step Bars Icon"  width={50} height={50} 
              />
            </div>
          </div>
          <h3 className="item-label">Running Boards & Step Bars</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>
    <div role="cell" className="category-item">
      <Link href="/Truck Beds & Parts">
        <div className="category-box" title="Truck Beds & Parts">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Truck Beds & Parts.png" alt="Truck Beds & Parts Icon" width={50} height={50}/>
            </div>
          </div>
          <h3 className="item-label">Truck Beds & Parts</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/Windshield, Wipers, Washers, Accessories & Components">
        <div className="category-box" title="Windshield, Wipers, Washers, Accessories & Components">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Windshield.png"  alt="Windshield Icon"  width={50} height={50} 
              />
            </div>
          </div>
          <h3 className="item-label">Windshield, Wipers, Washers, Accessories & Components</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>
  </div>
</section>

<section className="Suspension-Steering-sec">
  <div className="container-content">
    <div className="Suspension-Steering-text-content">
      <h2>Suspension & Steering</h2>
    </div>
    {/* <div className="image-content">
      <Image src="/Collection/divider.png"  alt="Description of the image"  width={100}  height={50} 
      />
    </div> */}
  </div>

  <div className="Suspension-Steering-main-container">
    <div role="cell" className="category-item">
      <Link href="/Air Suspension & Components">
        <div className="category-box" title="Air Suspension & Components">
          <div className="icon-content">
            <div className="icon-box">
               <Image  src="/Collection/Air Suspension & Components.png" alt="Air Suspension & Components Icon" width={50} height={50}/>
            </div>
          </div>
          <h3 className="item-label">Air Suspension & Components</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/Control Arms, Ball Joints & Assemblies">
        <div className="category-box" title="Control Arms, Ball Joints & Assemblies">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Control Arms.png" alt="Control Arms Icon" width={50} height={50} 
              />
            </div>
          </div>
          <h3 className="item-label">Control Arms, Ball Joints & Assemblies</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>
    <div role="cell" className="category-item">
      <Link href="/Other Steering & Suspension Parts">
        <div className="category-box" title="Other Steering & Suspension Parts">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Other Steering.png" alt="Other Steering Icon" width={50} height={50}/>
            </div>
          </div>
          <h3 className="item-label">Other Steering & Suspension Parts</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>
    <div role="cell" className="category-item">
      <Link href="/Shocks, Struts & Springs">
        <div className="category-box" title="Shocks, Struts & Springs">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Shocks.png"  alt="Shocks, Struts & Springs Icon"  width={50} height={50}/>
            </div>
          </div>
          <h3 className="item-label">Shocks, Struts & Springs</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>
    <div role="cell" className="category-item">
      <Link href="/Steering Systems & Components">
        <div className="category-box" title="Steering Systems & Components">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Steering Systems.png" alt="Steering Systems & Components Icon" width={50} height={50}/>
            </div>
          </div>
          <h3 className="item-label">Steering Systems & Components</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>

    <div role="cell" className="category-item">
      <Link href="/Tie Rods, Steering Racks, Gearboxes & Components">
        <div className="category-box" title="Tie Rods, Steering Racks, Gearboxes & Components">
          <div className="icon-content">
            <div className="icon-box">
              <Image src="/Collection/Tie Rods.png"  alt="Tie Rods Icon"  width={50} height={50} 
              />
            </div>
          </div>
          <h3 className="item-label">Tie Rods, Steering Racks, Gearboxes & Components</h3>
          <span role="img" aria-label="right" className="arrow-icon">
            <svg viewBox="64 64 896 896" focusable="false" width="1em" height="1em" fill="currentColor" aria-hidden="true">
              <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
          </span>
        </div>
      </Link>
    </div>
  </div>
</section>

<ProductCollection products={products} />
<section className="helpguide_section">
      <div className="helpguide_section_wrapper">
        <div className="helpguide_section_main_col">
          <div className="helpguide_column">
            <div className="helpguide_item">
              <div className="helpguide_content">
                <div className="helpguide_title">Help Guide</div>
                <div className="helpguide_info">
                  <div className="helpguide_desc">
                    Get help with any questions or concerns by speaking with an expert.
                  </div>
                  <Link href="/#">
                    <div className="helpguide_button">
                      <button className="btn_help">GET HELP</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="chat_column">
<div className="helpguide_item align_center">
  <div className="helpguide_title">
   <span role="img" aria-label="mail" className="helpguide_icon">
   <Image src="/Collection/envelop.png" alt="mail icon" className="helpguide_icon_img" width={20} height={10} />
                </span>
              </div>
              <div className="helpguide_info">
                <div className="helpguide_desc align_center">
                  <span>Support Hours Mon-Sun: 24/7</span>
                </div>
                <Link href="/#">
                  <div className="chatwith_us_button">
                    <button className="btn_chat">CHAT WITH US</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
  </main>
  <Footer/>
  </>
  );
}