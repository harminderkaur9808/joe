import React, { useState, useRef } from 'react';
import Modal from './Modal';
import '../styles/style-a.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const SearchBar = () => {
  const router = useRouter();

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
    <div className="search-bar">
      <div className="search-input-container">
        <button className="left-button" onClick={handleLeftAction}>
          <Image src="/images/raphael_car.png" alt="img" width={100} height={100} /> 
          Select Your Vehicle 
          <Image className='arrow87' src="/images/down-arrow.png" alt="Dropdown Arrow" loading="lazy" width={30} height={30} /> 
        </button> 
        <input 
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="find year make model …"
          className="search-input"
        />
      
        <button className="search-button" onClick={handleSearch}>
          <a href="Searchpage">
          <Image src="/images/search.png" alt="Search" loading="lazy" width={30} height={30} />
          </a>

          SEARCH
        </button>
        
      </div>
      {query && suggestions.length > 0 && (
        <ul className="suggestions-dropdown">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="suggestion-item"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
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
    </div>
  );
};

export default SearchBar;
