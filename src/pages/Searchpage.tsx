import React, { useState ,useRef} from 'react';
import '../styles/Searchpage.css';
import Pagination from './Pagination'; // Adjust the path if necessary
import Productcrausallink from './Productcrausallink'
import Footer from './Footer';
import Header from './Header';
import SearchpageProduct from './SearchpageProduct';
import SearchpageProductFullwidth from './SearchpageProductFullwidth'
import Modal from './Modal';
import '../styles/style-a.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// Dummy data
const categoriesProducts = [
  {
    name: 'Engine',
    products: [
      {
        name: 'Buy Main Engine',
        subProducts: ['Engine 1.1.1', 'Engine 1.1.2', 'Engine 1.1.3']
      },


    ]
  },
  {
    name: 'Product 2',
    products: [
      {
        name: 'Product 1.1',
        subProducts: ['Product 1.1.1', 'Product 1.1.2', 'Product 1.1.3']
      },
      {
        name: 'Product 1.2',
        subProducts: ['Product 1.2.1', 'Product 1.2.2']
      },
      {
        name: 'Product 1.3',
        subProducts: ['Product 1.3.1', 'Product 1.3.2']
      }
    ]
  },
  {
    name: 'Product 3',
    products: [
      {
        name: 'Product 1.1',
        subProducts: ['Product 1.1.1', 'Product 1.1.2', 'Product 1.1.3']
      },
      {
        name: 'Product 1.2',
        subProducts: ['Product 1.2.1', 'Product 1.2.2']
      },
      {
        name: 'Product 1.3',
        subProducts: ['Product 1.3.1', 'Product 1.3.2']
      }
    ]
  },
  {
    name: 'Product 4',
    products: [
      {
        name: 'Product 1.1',
        subProducts: ['Product 1.1.1', 'Product 1.1.2', 'Product 1.1.3']
      },
      {
        name: 'Product 1.2',
        subProducts: ['Product 1.2.1', 'Product 1.2.2']
      },
      {
        name: 'Product 1.3',
        subProducts: ['Product 1.3.1', 'Product 1.3.2']
      }
    ]
  },


];

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

// Define TypeScript types
type FilterOption = {
  id: string;
  text: string;
  count: number;
};

type FilterCategory = {
  category: string;
  options: FilterOption[];
};

const filterOptions: FilterCategory[] = [
  {
    category: "Categories",
    options: [
      { id: '25to50', text: 'Front Axle Engine Subframe', count: 2314 },
      { id: '25to51', text: 'Engine Air Filter', count: 2315 },
      { id: '25to52', text: 'Knock Detonation Sensor', count: 2314 },
      { id: '25to53', text: 'Coolant Level Sensor', count: 2315 }
    ]
  },
  {
    category: "Price",
    options: [
      { id: "price1", text: "Less than $25", count: 13132 },
      { id: "price2", text: "$25 - $49.99", count: 17765 },
      { id: "price3", text: "$50 - $74.99", count: 13326 },
      { id: "price4", text: "$75 - $99.99", count: 10267 },
      { id: "price5", text: "$100 and up", count: 23703 }
    ]
  },
  {
    category: "Placement on vehicle",
    options: [
      { id: "place1", text: "Front", count: 13132 },
      { id: "place2", text: "Rear", count: 17765 },
      { id: "place3", text: "Left", count: 13326 },
      { id: "place4", text: "Right", count: 10267 },
    ]
  },
  {
    category: "Material",
    options: [
      { id: "mat1", text: "Plastic", count: 13132 },
      { id: "mat2", text: "Metal", count: 17765 },
      { id: "mat3", text: "Rubber", count: 13326 },
      { id: "mat4", text: "Composite", count: 10267 },
    ]
  },
  {
    category: "Color",
    options: [
      { id: "color1", text: "Black", count: 13132 },
      { id: "color2", text: "White", count: 17765 },
      { id: "color3", text: "Silver", count: 13326 },
      { id: "color4", text: "Red", count: 10267 },
    ]
  }
];

// Add these styles inline or in your CSS file

const SearchPage: React.FC = () => {

   // State to track which image is currently visible
   const [activeImage, setActiveImage] = useState<'first' | 'second'>('first');

   // Toggle function to switch images
   const toggleImage = () => {
     setActiveImage(activeImage === 'first' ? 'second' : 'first');
   };
  //  ************************************

  const [activeCategoryProducts, setActiveCategoryProducts] = useState<string | null>(null);
  const [activeSubProduct, setActiveSubProduct] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleCategoryClick = (name: string) => {
    setActiveCategoryProducts(name === activeCategoryProducts ? null : name);
    setActiveSubProduct(null); // Close sub-products when changing category
  };

  const handleProductClick = (productName: string) => {
    setActiveSubProduct(productName === activeSubProduct ? null : productName);
  };
  // Section hide and show
  const [activeSection, setActiveSection] = useState<'first' | 'second'>('second');

  // -------------------------
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
// ****************************************************************************************************************



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

////////////////////////////////// Sidebar and Filter categories /////////////////////////////////

type FilterOption = string;

interface Filter {
  name: string;
  options: string[];
  selectedOptions?: string[]; // Marking selectedOptions as optional
}

type Subcategory = string;

interface Product {
  name: string;
  subProducts: Subcategory[];
}

interface Category {
  name: string;
  products: Product[];
}

  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(null);

  const [isFilterSidebarVisible, setFilterSidebarVisible] = useState(false);
  // const [expandedFilter, setExpandedFilter] = useState<string | null>(null);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
    setExpandedSubcategory(null); // Close any expanded subcategory when a new category is toggled
  };

  const toggleSubcategory = (subcategory: string) => {
    setExpandedSubcategory(expandedSubcategory === subcategory ? null : subcategory);
  };

 // Using 'sidecate' instead of 'categories'
 const sidecate: Category[] = [
  {
    name: 'Engine',
    products: [
      {
     name: 'Air Filters & Intake Systems',
     subProducts: ['Air Cleaner', 'Air Filter Box', 'Air Flow Sensor','Air Intake Duct','Air Intake Hose','Air Inktake Manifold Actuator Control Solenoid','Air Intake Manifold Flap Adjuster',
          'Air Intake Manifold Runner Control Sensor','Electric Vacuum Pump','Engine Air Duct Assembly','Engine Air Filter','Intake Manifold','Intake Manifold Flap Actuator'
        ,'Intake Manifold Repair Bracket','Intake Manifold Runner Control Valve','Intercooler','Oxygen Sensor','Pressure Sensor','Supercharger Pulley Drive Unit','Supercharger Snout Rebuild Kit',
      'Throttle Body','Throttle Position Sensor','Turbocharger','Turbocharger Gasket Kit','Turbocharger Oil Line','Vacuum Pump']
      },

      {
        name: 'Cams, Timing & Valvetrain',
        subProducts: ['Camshaft Adjuster', 'Camshaft Adjuster Cover', 'Camshaft Kit','Camshaft Timing Gear','Camshafts','Chain Tensioner Adjuster','Cylinder Head',
             'Cylinder Head Assembly','Eccentric Shaft Actuator','Engine Valve Cover','Harmonic Balancer','Rocker Arm Shaft Lifter Assembly','Timing Belt Kit'
           ,'Timing Chain Gear','Timing Chain Kit','Timing Cover','Timing-Control Valve Solenoid','Valve Lifter Guides','Valve Lifters Tappet']
         },
         {
          name: 'Cranks, Pistons, Oil & Components',
          subProducts: ['Belt Tensioner', 'Coolant Level Sensor', 'Crank Installer Tool','Crankcase Breather Hose','Crankcase Breather Valve','Crankshaft Position Sensor','Crankshaft Pulley',
               'Engine Oil Dipstick','Engine Oil Dipstick Tube','Engine Oil Filter','Engine Oil Pan Gasket','Flywheel','Harmonic Balancer Crankshaft Hub'
             ,'Oil Cooler','Oil Cooler Line','Oil Filter','Oil Filter Base','Oil Filter Housing','Oil Filter Housing Cover','Oil Level Sensor','Oil Pan','Oil Pump Drive Gear Shaft','Oil Separator']
           },
         
        {
          name: 'Electronic Control Modules, Ignition & Distributors',
          subProducts: ['Camshaft Position Sensor', 'Camshaft Position Sensor & Magnet Kit', 'Connector Plug','Distributor Cap','Electronic Ignition System','Engine Valve Covers & Ignition Coils Kits','Glow Plug Relay Module',
               'Ignition Coil','Ignition Coils & Spark Plugs Kits','Ignition Distributor','Ignition Starter Switch','Ignition Switch Actuator','Kill Switch'
             ,'Knock Detonation Sensor','Relay','Spark Plug','Spark Plug Wire']
           },
           {
            name: 'Engine Cooling',
            subProducts: ['Active Grille Shutter Actuator', 'Auxiliary Water Pump', 'Electric Engine Water Pump','Engine Coolant Pipe','Expansion Tank','Expansion Tank Mounting Plate','Fan Pulley Bracket',
                 'Fuel Cooler','Overflow Hose Connector','Radiator','Radiator Control Fan Module','Radiator Core Support Skid Bar Plate','Radiator Fan Cooling Motor'
               ,'Radiator Hose','Radiator Support Assembly','Temperature Sensor','Thermostat Housing Cover','Turbo Hose','Water Coolant Pipe','Water Outlet','Water Pump Drive Shaft Coupler']
             },
             {
              name: 'Engine Mounts',
              subProducts: ['Engine Bracket Arm', 'Engine Mount']
               },
               {
                name: 'Exhaust & Emission Systems',
                subProducts: ['Catalytic Converter', 'Change Over Valve','EGR Tube','EGR Valve','Emissions Fluid Pump','Exhaust Fluid Heater','Exhaust Gas Temperature Sensor','Exhaust Manifold',
                  'Exhaust Pipe Expander','Fuel Tank Breather Valve','Fuel Vapor Leak Detection Pump','Nitrogen Oxide Sensor','Secondary Air Injection Check Valve','Vapor Canister Vent Solenoid']
                 },
                 {
                  name: 'Fuel Systems & Components',
                  subProducts: ['Carburetor', 'Diesel Fuel Lift Pump Kit','Disaster Prevention Bypass Kit','Fuel Filter','Fuel Filter Housing','Fuel Flap Lock Actuator','Fuel Injection Control Module','Fuel Injection Pressure Regulator',
                    'Fuel Injector','Fuel Injector Kit','Fuel Injector Module Wiring Harness','Fuel line Kit','Fuel Pressure Regulator','Fuel Pump','Fuel Rail Kit','Fuel Sending Unit','Fuel Tank',
                  'Fuel Tank Filler Neck Pipe','Fuel Tank Overfill Check Valve','Fuel Tank Strap','Gas Tank Side Covers','High Pressure Fuel Pump','Idle Air Control Valve',
                'Injector Rebuild Kit','Mechanical Fuel Pump','Oil Pressure Relief Valve','Pressure Regulator Valve Kit']
                   },
                   {
                    name: 'Starters, Alternators, Batteries & Components',
                    subProducts: ['Alternator', 'Battery Fuse Overload Protection Trip','Engine Voltage Converter Module','Positive Battery Cable','Starter','Wiring Harness']
                     },
    ]
  
  },
  {
    name: 'Drivetrain',
    products: [
      {
        name: 'Automatic Transmission Parts',
        subProducts: ['Automatic Transmission Filter', 'Differential Vacuum Actuator', 'Gear Selector Position Sensor','High Gear Lock up Switch Kit','Servo High Performance','Solenoid Service Kit',
          'Transmission Conductor Plate','Transmission Cooler Lines','Transmission Shift Lever','Transmission Shift Solenoid','Transmission Throttle Valve Actuator']
      },
      {
        name: 'Axles, Driveshaft & 4WD',
        subProducts: ['4WD Actuator', 'Axle Disconnect Cable Operated Actuator','CV Axle Shaft','CV Intermediate Shaft','Drive Shaft','Drive Shaft Center Support Bearing','Front Axle Housing','Front Axle Pivot Bar',
          'Front Axle Shaft Seal And Bearing Kit','Manual 4WD Actuator Kit','Propshaft Coupling','Rear Axle Housing']
      },
      {
        name: 'Clutches & Components',
        subProducts: ['Bellhousing Kit', 'Clutch Bellhousing','Clutch Fork Kit','Clutch Hydraulic Hose','Clutch Kit','Clutch Master Cylinder','Clutch Slave Cylinder','Clutch Slave Cylinder Actuator']
      },
      {
        name: 'Differentials, Assemblies & Parts',
        subProducts: ['Axle Ring And Pinion Kit', 'Coupling Oil Pump','Differential','Differential Cover','Differential Lock Motor','Differential Locker']
      },
      {
        name: 'Manual Transmission Parts',
        subProducts: ['Shift Linkage Kit', 'Short Throw Shifter','Transmission Shifter Stub Kit']
      },
      {
        name: 'Other Transmission Parts',
        subProducts: ['Differential Actuator Assembly', 'Differential Gear & Clutch kit','Gearbox Pump','Transfer Case Assembly','Transfer Case Control Module',
          'Transfer Case Motor Actuator','Transmission Holding Fixture','Transmission Wire Harness']
      },
    ]
  },
  {
    name: 'Brake & Wheel Parts',
    products: [
      {
        name: 'Brake Discs, Pads & Calipers',
        subProducts: ['Brake Caliper', 'Brake Pad', 'Brake Pad Wear Sensor','Brake Rotor']
      },
      {
        name: 'Brake Drums, Shoes & Components',
        subProducts: ['Brake Drum', 'Brake Drum and Brake Shoe Assembly','Brake Drum Cover','Brake Dust Shield','Brake Shoe Set','Rear Brake Drum']
      },
      {
        name: 'Brake Master Cylinders, Boosters & Components',
        subProducts: ['Brake Hydraulic Hose', 'Brake Master Cylinder','Brake Vacuum Pump','Brake Wheel Cylinders','Driveshaft Parking Brake','Power Brake Booster','Trailer Brake Control Module']
      },
      {
        name: 'Parking Brake, ABS & Other Components',
        subProducts: ['ABS Speed Sensor', 'Emergency Parking Brake Handle Lever','Parking Brake Actuator','Parking Brake Cable','Parking Brake Module','Parking Brake Pedal Assembly','Speed Sensor']
      },
      {
        name: 'Parking Brake, ABS & Other Components',
        subProducts: ['ABS Speed Sensor', 'Emergency Parking Brake Handle Lever','Parking Brake Actuator','Parking Brake Cable','Parking Brake Module','Parking Brake Pedal Assembly','Speed Sensor']
      },
      {
        name: 'Wheel & Tire Accessories',
        subProducts: ['Spare Tire Winch Carrier', 'Tire Pressure Monitoring Sensor','Wheel Spacer']
      },
      {
        name: 'Wheel Hubs, Bearings, and Components',
        subProducts: ['Hub bearing', 'Wheel Cap','Wheel Nut','Wheel Stud']
      },
    ]
  },
  {
    name: 'Suspension & Steering',
    products: [
      {
        name: 'Air Suspension & Components',
        subProducts: ['Air Spring', 'Air Strut', 'Air Suspension Bag Kit','Air Suspension Compressor','Air Suspension Control Module','Air Suspension Solenoid Valve']
      },
      {
        name: 'Control Arms, Ball Joints & Assemblies',
        subProducts: ['Control Arm', 'Stabilizer Bar','Suspension Sway Bar Kit']
      },
      {
        name: 'Other Steering & Suspension Parts',
        subProducts: ['Coupling Assembly', 'Front Axle Engine Subframe','Power Steering Valve Cylinder Ram Hose Kit','Protection Boot','Ride Height Level Sensor','Suspension Lift Kit']
      },
      {
        name: 'Shocks, Struts & Springs',
        subProducts: ['Coil Spring', 'Magnetic Shock Absorber','Shock Absorber','Strut Mount','Suspension Accumulator']
      },
      {
        name: 'Steering Systems & Components',
        subProducts: ['Power Steering Cooler', 'Power Steering Hose','Power Steering Pump','Power Steering Pump Pulley','Power Steering Tank','Steering Column Shaft','Steering Knuckle',
          'Steering Knuckle Assembly','Steering Linkage Drag Link Tie Rod Assembly']
      },
      {
        name: 'Tie Rods, Steering Racks, Gearboxes & Components',
        subProducts: ['Power Steering Rack', 'Steering Rack And Pinion']
      },
    ]
  },


  {
    name: 'Body & Lamp Assembly',
    products: [
      {
        name: 'Headlight Assemblies & Components',
        subProducts: ['Headlight', 'Headlight control module', 'Headlight Level Sensor','Headlight Motor']
      },
      {
        name: 'Light Bulbs & LEDs',
        subProducts: ['Bed Lighting Kit', 'Tailgate Step Light','Turn Signal Light Lens']
      },
      {
        name: 'Mirrors & Components',
        subProducts: ['Mirror']
      },
      {
        name: 'Shocks, Struts & Springs',
        subProducts: ['Blind Spot Radar Sensor', 'Parking Assist Sensor']
      },
    ]
  },
  
  {
    name: 'Heating & Cooling',
    products: [
      {
        name: 'Heating, Air Conditioning & Components',
        subProducts: ['A/C Compressor Bracket', 'A/C Expansion Valve', 'A/C Hose','A/C Orifice Tube','AC Compressor','AC Compressor Clutch Kit','AC Evaporator','Air Conditional Control Panel',
          'Blend Door Actuator','Blend Door Repair Kit','Blower Motor','Blower Motor Resistor','Cab Heater Kit','Cabin Air Filter','Condenser','Heater Control Valve','Heater Core','HVAC Heater Hose Assembly']
      },
      {
        name: 'Radiators, Fans, Cooling Systems & Components',
        subProducts: ['Cooling Fan', 'Fan Blade','Fan Clutch','Radiator Fan Shroud','Radiator Shrouds','Thermostat','Water Pump']
      },
    ]
  },
  {
    name: 'Interior',
    products: [
      {
        name: 'Center, Overhead Consoles & Parts',
        subProducts: ['Center Console Safe Box']
      },
      {
        name: 'Consoles & Organizers',
        subProducts: ['Cup Holder']
      },

      {
        name: 'Dash & Dash Accessories',
        subProducts: ['Dash Air Vent']
      },
      {
        name: 'Door Panels',
        subProducts: ['Door Armrest','Power Sliding Door Cable Kit','Power Sliding Door Track']
      },
      {
        name: 'Electrical & Switches',
        subProducts: ['Remote Start Kit']
      },
      {
        name: 'Gauges',
        subProducts: ['Gauge Speedometer']
      },

      {
        name: 'Glove Boxes',
        subProducts: ['Glove Box Handle Latch']
      },
      {
        name: 'Other Interior Parts & Accessories',
        subProducts: ['A Pillar Interior Trim Handle','Accelerator Pedal','Floor Mat','Horn','Printed Circuit Board with Gauges','Storage Box','Storage Box Cover','Storage Mat']
      },
      {
        name: 'Pedal Assemblies, Pads & Parts',
        subProducts: ['Clutch Pedal Assembly']
      },

      {
        name: 'Seats, Seat Covers & Accessories',
        subProducts: ['Seat Belt Buckle','Seat Cover','Seat Hinge Motor','Seat Panel Trim','Seat Swivel']
      },
      {
        name: 'Shifter Accessories',
        subProducts: ['Shift Knob','Steering Wheel Paddle Shifter']
      },
      {
        name: 'Switches & Controls',
        subProducts: ['4 Wheel Drive Selector Switch','Brake Light Switch','Clutch Starter Safety Switch','Convertible Top Switch','Cruise Control Switch','Decklid Release Switch','Door Lock Switch',
          'Drive Monitor Information Switch','Driver Information Display Switch','Fog Light Switch','Headlight Switch','Heated Seat Control Module','Ignition Lock Housing',
          'Power Mirror Switch','Power Seat Switch','Start Kit','Trailer Brake Control Switch','Turn Signal Switch','Window Switch']
      },
      {
        name: 'Tailgates & Components',
        subProducts: ['Liftgate Control Module']
      },
      {
        name: 'Window Motors & Regulators',
        subProducts: ['Plastic Slider','Rear Window Motor Assembly','Window Motor','Window Regulator']
      },

    ]
  },

  {
    name: 'Exterior',
    products: [
      {
        name: 'Body Moldings & Trims',
        subProducts: ['Door Entry Keypad Pillar Molding Trim', 'Door Lower Weatherstrip Seal', 'Weatherstrip Seal','Window Visor']
      },
      {
        name: 'Bumpers & Components',
        subProducts: ['Front Bumper', 'Park Assist Camera']
      },

      {
        name: 'Doors, Trunk Lids & Hatches',
        subProducts: ['Door Check', 'Door Corner Gusset Assembly', 'Door Handle','Door Handle Carrier','Door Handle Harness','Door Hinge','Door Lock Actuator','Door Lock Cylinder Barrel Repair Kit',
          'Door Lock Cylinder Set','Door Lock Cylinder Set','Hydralic Liftgate Pump','Lift support','Liftgate Glass Hinge','Liftgate Position Sensor','Mirror Flag Applique',
          'Outside Door Handle','Power Hatch Lift Support','Power Liftgate Actuator','Sliding Door Roller','Tailgate Lock Actuator','Trunk Latch Lid Pull Down Motor','Trunk Lid Grip',
          'Trunk Release Switch']
      },
      {
        name: 'Fender Flares, Vents & Accessories',
        subProducts: ['Fender', 'Fender Flares','Inner Fender']
      },
      {
        name: 'Grilles & Components',
        subProducts: ['Active Grille Shutter']
      },
      {
        name: 'Guards & Protection',
        subProducts: ['Splash Guard']
      },
      {
        name: 'Hitches, Winches & Trailers',
        subProducts: ['Tow Hook','Trailer Hitch','Trailer Hitch System Kit','Trailer Lock','Trailer Wiring Harness']
      },
      {
        name: 'Plastic Tooling Box & Components',
        subProducts: ['Plastic Tooling Box']
      },
      {
        name: 'Roofs, Tops & Sunroofs',
        subProducts: ['Convertible Soft Top','Convertible Soft Top Latch Assembly Motor','Convertible Top Hydraulic Cylinders','Convertible Top Lift Motor Pump','Hard Top Rack',
          'Headliner Air Vent','Sunroof Motor']
      },
      {
        name: 'Running Boards & Step Bars',
        subProducts: ['Power Running Board Motor','Rear Bed Step','Running Board','Side Bar']
      },
      {
        name: 'Truck Beds & Parts',
        subProducts: ['Cargo Tie Down Brackets','Stowable Bed Extender Kit','Tonneau Cover']
      },
      {
        name: 'Windshield, Wipers, Washers, Accessories & Components',
        subProducts: ['Headlight Washer Nozzle','Windshield Washer Reservoir','Wiper Linkage','Wiper Motor']
      },
    ]
  },
  {
    name: 'ATV, UTV & RV Parts',
    products: [
      {
        name: 'ATV, UTV & RV Parts Engine',
        subProducts: ['Cylinder Rebuild Kit']
      },
      {
        name: 'Body & Frame',
        subProducts: ['ATV Window Panel','Motorcycle Seat']
      },
      {
        name: 'Clutches, Flywheels & Components',
        subProducts: ['Clutch Primary Gear','Starter Clutch Gear kit']
      },
      {
        name: 'Other RV, Trailer & Camper Parts & Accessories',
        subProducts: ['Dual Battery Isolator Kit','RV Awning Motor','RV Electric Rear Stabilizer Jack Motor','RV Slide Out Motor']
      },
      {
        name: 'Trailer Leveling & Towing',
        subProducts: ['Wheel Gooseneck Adapter']
      },
    ]
  },

  {
    name: 'Motorcycle & Boat Parts',
    products: [
      {
        name: 'Inboard Engines & Components',
        subProducts: ['Marine Exhaust Manifold']
      },
      {
        name: 'Motorcycle Body & Frame',
        subProducts: ['Battery Box Cover','Motorcycle Fuel Tank','Plastic Body']
      },
      {
        name: 'Motorcycle Brakes & Suspension Parts',
        subProducts: ['Suspension Lowering Link']
      },
      {
        name: 'Motorcycle Engines & Parts',
        subProducts: ['Balance Shaft','Crankcase Cover','Engine Cover Case','Programmable Single Fire Electronic Ignition Module','Stator Generator Rotor']
      },
      {
        name: 'Motorcycle Handlebars, Grips & Levers',
        subProducts: ['Handlebars']
      },
      {
        name: 'Outboard Engines & Components',
        subProducts: ['Engine Coupler','Marine Drive Shaft Kit','Marine Hydraulic Power Pump','Outboard Oil Tank Assembly']
      },
    ]
  },

  {
    name: 'Automotive Tools & Supplies',
    products: [
      {
        name: 'Automotive Electrical Appliances',
        subProducts: ['Portable Car Fridge']
      },
      {
        name: 'Diagnostic Service Tools',
        subProducts: ['Air Leak Test Tool','Code Readers & Scanners']
      },
      
    ]
  },
];

/////////////////////////////////////////// Filter Sidebar Content //////////////////////////////////

interface Props {
  filters: Filter[];
}

const [expandedFilter, setExpandedFilter] = useState<string | null>(null);
const [activeSortOption, setActiveSortOption] = useState<string>('Best Match');

const toggleFilterSidebar = () => {
  setFilterSidebarVisible(!isFilterSidebarVisible);
  setSidebarVisible(false);
};

const closeFilterSidebar = () => {
  setFilterSidebarVisible(false);
};

const toggleFilter = (filter: string) => {
  setExpandedFilter(expandedFilter === filter ? null : filter);
};

const handleSortOptionClick = (option: string) => {
  setActiveSortOption(option);
};

const getProductCount = (option: string): number => {

  const mockCounts: { [key: string]: number } = {
    'Air Cleaner': 30,
    '$50-$74.99': 20,
    'Front': 15,
    'Aluminum': 25,
    'Silver': 18,
    'A-Premium': 22
  };
  return mockCounts[option] || 0;
};

const getTotalQuantity = (): number => {
  return filters.reduce((total, filter) => {
    return total + filter.options.reduce((optionTotal, option) => optionTotal + getProductCount(option), 0);
  }, 0);
};


const [filters, setFilters] = useState<Filter[]>([
  {
    name: 'Sort by',
    options: ['Best Match', 'Best Selling', 'Lowest Price', 'Highest Price', 'Best Rating', 'Most Reviews'],
    selectedOptions: ['Best Match'], 
  },
  {
    name: 'Category',
    options: ['Air Cleaner'],
    selectedOptions: [],
  },
  {
    name: 'Price',
    options: ['$50-$74.99'],
    selectedOptions: [],
  },
  {
    name: 'Placement on vehicle',
    options: ['Front'],
    selectedOptions: [],
  },
  {
    name: 'Material',
    options: ['Aluminum'],
    selectedOptions: [],
  },
  {
    name: 'Color',
    options: ['Silver'],
    selectedOptions: [],
  },
  {
    name: 'Brand',
    options: ['A-Premium'],
    selectedOptions: [],
  },
]);


const getSelectedOptionCount = (filterName: string): number => {
  const filter = filters.find(f => f.name === filterName);
  return filter?.selectedOptions?.length || 0;
};


const handleOptionClick = (filterName: string, option: string) => {
  setFilters(filters.map(f =>
    f.name === filterName ? {
      ...f,
      selectedOptions: f.selectedOptions?.includes(option)
        ? f.selectedOptions.filter(o => o !== option)
        : [...(f.selectedOptions || []), option]
    } : f
  ));
};



  return (
    <>    
      <Header />
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
      <div className="Main-search-page">
        {/* Firsts Sections */}
        <div className='First-sections-m'>
          <div className="feature-section">
            {/* Features Section */}
            <div className="feature-item">
              <img src="/images/Searchpageimg/Imgfirsticon.svg" alt="90 Days Free Return" className="feature-icon" />
              <span className="feature-text">90 Days Free Return</span>
            </div>
            <div className="feature-item">
              <img src="/images/Searchpageimg/Imgfirsticon1.svg" alt="24/7 Service" className="feature-icon" />
              <span className="feature-text">24/7 Service</span>
            </div>
            <div className="feature-item">
              <img src="/images/Searchpageimg/Imgfirsticon2.svg" alt="Free Shipping" className="feature-icon" />
              <span className="feature-text">Free Shipping</span>
            </div>
            <div className="feature-item">
              <img src="/images/Searchpageimg/Imgfirsticon3.svg" alt="Fit Guaranteed" className="feature-icon" />
              <span className="feature-text">Fit Guaranteed</span>
            </div>
          </div>

          {/* Second Section */}
          <div className='First-sections-m'>
            <section className="second-main-s-m1">
              <div className="text-container">
                Select Your Vehicle To See Exact Fit Parts
              </div>
              <button className="add-vehicle-button" onClick={handleLeftAction}>
                Add Vehicle
                <img src="/images/Searchpageimg/raphael_car.svg" alt="Add Vehicle" className="feature-icon-vehicle" />
              </button>
            </section>
          </div>
        </div>

        {/* Sidebar with Filters */}
        <div className="search-page">
          <div className="sidebar">
            {/* <div className="categories">
              <text>Categories</text>
              <img className="main-logo" src="/images/Searchpageimg/catesgv01.svg" width={70} height={50} alt="" />
            </div> */}
            <div
              className="sidebar-Products01"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className="categories001">
                <span>Categories</span>
                <img
                  className="main-logo-dojt"
                  src="/images/Searchpageimg/catesgv01.svg"
                  width={70}
                  height={50}
                  alt="Categories Logo"
                />
              </div>
              {showDropdown && (
                <div className="dropdown-container-main">
                  {categoriesProducts.map(category => (
                    <div
                      key={category.name}
                      className="dropdown-active"
                    >
                      <div
                        className="dropdown-header-active"
                        onClick={() => handleCategoryClick(category.name)}
                      >
                        {category.products.length > 0 && (
                          <span className={`dropdown-indicator ${activeCategoryProducts === category.name ? 'open' : 'closed'}`}>
                            {activeCategoryProducts === category.name ? '▼' : '►'}
                          </span>
                        )}
                        <span>{category.name}</span>

                      </div>
                      {activeCategoryProducts === category.name && (
                        <div className="dropdown-content-001">
                          {category.products.map(product => (
                            <div key={product.name} className="dropdown-item-c12">
                              <div
                                className="dropdown-header-active"
                                onClick={() => handleProductClick(product.name)}
                              >
                                {/* <img
                          src="/images/Searchpageimg/product-icon.svg"
                          className="product-icon"
                          alt="Product Icon"
                        /> */}
                                {product.subProducts.length > 0 && (
                                  <span className={`dropdown-indicator ${activeSubProduct === product.name ? 'open' : 'closed'}`}>
                                    {activeSubProduct === product.name ? '▼' : '►'}
                                  </span>
                                )}
                                <span>{product.name}</span>

                              </div>
                              {activeSubProduct === product.name && (
                                <div className="dropdown-subcontent-001">
                                  {product.subProducts.map(subProduct => (
                                    <div key={subProduct} className="dropdown-subitem-c12">
                                      {subProduct}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Close sidebar */}
            <div className="filters">
              <div className="filter-options">
                {filterOptions.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="filter-category">
                    <div className="category-header">
                      <h3>{category.category}</h3>
                      {showText[categoryIndex] ? (
                        <img
                          className="main-logoplusminu"
                          src="/images/Searchpageimg/Plus-icon121.svg"
                          width={70}
                          height={50}
                          alt="Hide"
                          onClick={() => handleImageClick(categoryIndex)}
                        />
                      ) : (
                        <img
                          className="main-logoplusminu"
                          src="/images/Searchpageimg/minus121.svg"
                          width={70}
                          height={50}
                          alt="Show"
                          onClick={() => handleImageClick(categoryIndex)}
                        />
                      )}
                    </div>
                    <div className={`category-options ${visibleCategories[categoryIndex] ? 'visible' : ''}`}>

                      {category.category !== "Price" && (
                        <div className="input-group-Main">
                          <input
                            className="input-group"
                            type="search"
                            id="search"
                            name="search"
                          />
                        </div>
                      )}
                      {category.options.map((option) => (
                        <div key={option.id} className="filter-option">
                          <input type="checkbox" id={option.id} />
                          <label className="filter-option-text" htmlFor={option.id}>{option.text}</label>
                          <span>
                            <label className="filter-option-text" htmlFor={option.id}>({option.count})</label>
                          </span>
                        </div>
                      ))}
                      {/* price sec */}
                      {category.category === "Price" && (
                        <div className="price-filter-container">
                          <div className="input-group-price">
                            <input
                              className="input-group-price-min"
                              type="number"
                              id="minPrice"
                              name="minPrice"
                              placeholder="Min"
                            />
                            <input
                              className="input-group-price-max"
                              type="number"
                              id="maxPrice"
                              name="maxPrice"
                              placeholder="Max"
                            />
                            <button className="go-button">GO</button>
                          </div>
                        </div>
                      )}
                      {/* price sec */}

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Products Section */}
          
          {/* counter and layout section */}

          <div className='Main-Container-products'>
          <div>
              <section className="items-display-section-01">
                <div className="items-display-left-section">
                  <span>Show items: </span>
                  <div className='Items-displaybutton-changelayout'>

                    <button className="items-display-items-button">20</button>
                    <button className="items-display-items-button">40</button>
                    <button className="items-display-items-button">70</button>

                  </div>

                </div>

                                  {/* <span>Total posts: </span> */}

                <div className="items-display-right-section">
                  <select className="items-display-dropdown">
                    <option>Best Match</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating: High to Low</option>
                  </select>
                  {/* <img src="/images/Searchpageimg/Group 1000005137.svg" alt="Icon 1" className="icon-image0011" />
              <img src="/images/Searchpageimg/Group 1000005138.svg" alt="Icon 2" className="icon-image0011" /> */}


<div className='Main-Layout-box-G'>
      {/* Icons for toggling */}
      <img
        src={activeSection === 'second' ? "/images/Searchpageimg/Group 1000005137.svg" : "/images/Searchpageimg/Group 1000005137.svg"}
        alt="Icon 2"
        className="icon-image0011"
        onClick={() => setActiveSection('second')}
        style={{ cursor: 'pointer' }}
      />
      <img
        src={activeSection === 'first' ? "/images/Searchpageimg/Replaceimagepro.svg" : "/images/Searchpageimg/Replaceimagepro.svg"}
        alt="Icon 1"
        className="icon-image0011"
        onClick={() => setActiveSection('first')}
        style={{ cursor: 'pointer' }}
      />
    
      </div>


                </div>

              </section>

    <div className="sidebar-container">
      <div className="sidebar-buttons">
        <div className="category-show">
          <button className='sideshow-btn' onClick={toggleSidebar}>
            <span>Category</span>
            <Image src="/images/Searchpageimg/angle-right-white.svg" width={10} height={5} alt='' />
          </button>
        </div>

        <div className="filter-show">
        <button className="sideshow-btn" onClick={toggleFilterSidebar}>
          <span>Filters</span>
          <Image src="/images/Searchpageimg/catesgv01.svg" width={20} height={15} alt="" />
        </button>
      </div>
      </div>

      </div>

   {/* Overlay */}
   {isSidebarVisible && <div className="overlay" onClick={closeSidebar}></div>}

{/* Sidebar */}
<div className={`right-sidebar ${isSidebarVisible ? 'visible' : ''}`}>
  <div className="sidebar-header-Tab">
    <div className="main-side-head">
      <h3>Categories</h3>
      <p>Viewing 294 items</p>
    </div>
    <div className="close-btn">
      <Image
        onClick={closeSidebar}
        src='/images/close.svg'
        width={20}
        height={15}
        alt='Close sidebar'
      />
    </div>
  </div>

  <div className="categories-content">
    {sidecate.map((category, index) => (
      <div key={index} className="category-item">
        <div className="side-cate">
          <span className="dropdown-icons">
            {expandedCategory === category.name ? (
              <Image src='/images/down-dropdown.svg' width={12} height={5} alt='Collapse' />
            ) : (
              <Image src='/images/left-dropdown.svg' width={7} height={5} alt='Expand' />
            )}
          </span>
          <button
            className="category-button"
            onClick={() => toggleCategory(category.name)}
          >
            {category.name}
          </button>
        </div>

        {/* Subcategory List */}
        <div className='main-cate-div'>
        {expandedCategory === category.name && (
          <div className="subcategory-container">
            {category.products.map((product, subIndex) => (
              <div key={subIndex} className="subcategory-item">
                <div className="sub-cate">
                  <span className="dropdown-icons">
                    {expandedSubcategory === product.name ? (
                      <Image src='/images/down-dropdown.svg' width={12} height={4} alt='Collapse' />
                    ) : (
                      <Image src='/images/left-dropdown.svg' width={7} height={4} alt='Expand' />
                    )}
                  </span>
                  <button
                    className="subcategory-button"
                    onClick={() => toggleSubcategory(product.name)}
                  >
                    {product.name}
                  </button>
                </div>
                

                {/* Sub-Products List */}
                {expandedSubcategory === product.name && (
                  <ul className="subcategory-list">
                    {product.subProducts.map((subProduct, subProdIndex) => (
                      <li key={subProdIndex}>{subProduct}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
         
        )}
         </div>
      </div>
    ))}
  </div>
</div>

{/*------------------------- Filter Sidebar ---------------------*/}
{isFilterSidebarVisible && <div className="overlay" onClick={closeFilterSidebar}></div>}
<div className={`right-sidebar filter-sidebar ${isFilterSidebarVisible ? 'visible' : ''}`}>
  <div className="sidebar-header-Tab">
    <div className="main-side-head">
      <h3>Filters ({filters.flatMap(f => f.selectedOptions || []).length})</h3>
      <p>Viewing {getTotalQuantity()} items</p>
      <div className="selected-options">
      {filters.flatMap(f => f.selectedOptions ?? []).length > 0 ? (
        filters
          .filter(filter => (filter.selectedOptions ?? []).length > 0)
          .map((filter) => (
            <div key={filter.name} className="selected-filter-group">
              {/* <h4>{filter.name}</h4> */}
              <ul>
                {(filter.selectedOptions ?? []).map((option, index) => (
                  <li
                    key={index}
                    className={`selected-option-item ${filter.selectedOptions?.includes(option) ? 'active' : ''}`}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))
      ) : (
        <p>No options selected</p>
      )}
    </div>
</div>
    <div className="close-btn">
      <Image 
        onClick={closeFilterSidebar} 
        src='/images/close.svg' 
        width={20} 
        height={15} 
        alt='Close sidebar' 
      />
    </div>
  </div>

  <div className="filters-content">
    {filters.map((filter, index) => (
      <div key={index} className="filter-item">
        <div
          className={`filter-cate ${expandedFilter === filter.name ? 'active' : ''}`}
          onClick={() => toggleFilter(filter.name)}
        >
          <button className="filter-button">
            {filter.name}
            {getSelectedOptionCount(filter.name) > 0 && (
              <span className="filter-count">
                {getSelectedOptionCount(filter.name)}
              </span>
            )}
          </button>
          <span className="dropdown-icons">
            {expandedFilter === filter.name ? (
              <Image src='/images/Searchpageimg/minus.svg' width={15} height={15} alt='Collapse' />
            ) : (
              <Image src='/images/Searchpageimg/plus.svg' width={15} height={10} alt='Expand' />
            )}
          </span>
        </div>

        {expandedFilter === filter.name && (
          <ul className={`filter-options-list filter-${filter.name.replace(/\s+/g, '-').toLowerCase()}`}>
            {filter.name === 'Sort by' ? (
              filter.options.map((option, optionIndex) => (
                <li
                  key={optionIndex}
                  className={`filter-option-item ${activeSortOption === option ? 'active' : ''}`}
                  onClick={() => handleSortOptionClick(option)}
                >
                  <span className="filter-option-text">{option}</span>
                  <span className="checkbox-icon">
                    {activeSortOption === option && (
                      <Image
                        src='/images/active-check.svg'
                        width={15}
                        height={15}
                        alt='Check Icon'
                      />
                    )}
                  </span>
                </li>
              ))
            ) : (
              filter.options.map((option, optionIndex) => (
                <li
                  key={optionIndex}
                  className={`filter-option-item-oth ${filter.selectedOptions?.includes(option) ? 'active' : ''}`}
                  onClick={() => handleOptionClick(filter.name, option)}
                >
                  <span className={`checkbox-icon-oth ${filter.selectedOptions?.includes(option) ? 'active' : ''}`}>
                    <Image
                      src='/images/checkbox.svg'
                      width={15}
                      height={15}
                      alt='Checkbox'
                    />
                  </span>
                  <span className="filter-option-text">{option}</span>
                  <span className="option-count">
                    ({getProductCount(option)})
                  </span>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    ))}
  </div>
</div>

            

              <div className="products">
              </div>
              <div>
                {/* Sections */}
                <section className='Section-boxes-producta'>
                  {activeSection === 'first' && <SearchpageProduct />}
                </section>

                <section className='Section-boxes-producta'>
                  {activeSection === 'second' && <SearchpageProductFullwidth />}
                </section>
              </div>
            </div>


            {/* <section className='Section-boxes-producta'>

          {currentProducts.map((product, index) => (

            <div key={index} className="product-box">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-details">
                <div className='Imageheadsec'>
                  <img src={product.imagesechead} alt="" />
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

                <div className='Main-thir12'>
                  <section className='main1-first12'>
                    <img src="/images/Searchpageimg/raphael_car.svg" alt="Add Vehicle" className="feature-icon-vehicle" />
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
          </section> */}




            {/* Counter section */}
            {/* <section id='Main-counterpage'>
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
        </section> */}



          </div>



        </div>

        {/* Product crausal section */}

        <div className='Product-crausal-sec1'>

          <Productcrausallink />


        </div>

        {/* Guide Section */}
        <section className="guide-section">
          <div className="guide-wrapper">
            <div className="guide-main-col">
              <div className="guide-column">
                <div className="guide-item">
                  <div className="guide-content">
                    <div className="guide-title">Help Guide</div>
                    <div className="guide-info">
                      <div className="guide-desc">
                        Get help with any questions or concerns by speaking with an expert.
                      </div>
                      <a href="/#">
                        <div className="guide-button">
                          <button className="btn-guide">GET HELP</button>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-column">
                <div className="guide-item align-center">
                  <div className="guide-title">
                    <span role="img" aria-label="mail" className="guide-icon">
                      <img src="/Home Images/Envelop.svg" alt="mail icon" className="guide-icon-img" />
                    </span>
                  </div>
                  <div className="guide-info">
                    <div className="guide-desc align-center">
                      <span>Support Hours Mon-Sun: 24/7</span>
                    </div>
                    <a href="/#">
                      <div className="chat-button">
                        <button className="btn-chat">CHAT WITH US</button>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* end */}

      </div>

      <Footer />

    </>
  );
};

export default SearchPage;
