
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomDots from '../components/CustomDots';
import { truncateText } from '@/utils/truncateText';

const Navigation: React.FC = () => {

  const [currentItems, setCurrentItems] = useState<CarouselItem[]>([]);
  const carouselRef = useRef<Carousel>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [startIndex, setStartIndex] = useState<number>(0);
  const [showNavBox, setShowNavBox] = useState<boolean>(false);
  const dotArray = currentItems.map((_, index) => index === activeIndex);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeTab2, setActiveTab2] = useState<number>(0);
  const [activeTab3, setActiveTab3] = useState<number>(0);
  const [activeTab4, setActiveTab4] = useState<number>(0);
  const [activeTab5, setActiveTab5] = useState<number>(0);
  const [activeTab6, setActiveTab6] = useState<number>(0);
  const [activeTab7, setActiveTab7] = useState<number>(0);



// const [activeTabSet, setActiveTabSet] = useState<'tabs' | 'tabs2' | 'tabs3' | 'tabs4' | 'tabs5' | 'tabs6' | 'tabs7'>('tabs');
// const [activeTabIndex, setActiveTabIndex] = useState<number>(0);



const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

  interface CarouselItem {
    id: number;
    categoryName: string;
    src: string;
    alt: string;
  }

  interface CarouselData {
    [key: string]: CarouselItem[];
  }

  const carouselData: CarouselData = {
    "Air Filters & Intake Systems": [
      { id: 1, categoryName: 'Air Cleaner', src: '/images/category-images/air-cleaner.webp', alt: 'Air Cleaner' },
      { id: 2, categoryName: 'Air Filter Box', src: '/images/category-images/air-filter-box.png', alt: 'Air Filter Box' },
      { id: 3, categoryName: 'Air Flow Sensor', src: '/images/category-images/air-flow-sensor.png', alt: 'Air Flow Sensor' },
      { id: 4, categoryName: 'Air Intake Duct', src: '/images/category-images/Air Intake Duct.png', alt: 'Air Intake Duct' },
      { id: 5, categoryName: 'Air Intake Hose', src: '/images/category-images/Air Intake Hose.png', alt: 'Air Intake Hose' },
      { id: 6, categoryName: 'Air Intake Manifold Actuator Control Solenoid', src: '/images/category-images/Air Intake Manifold Actuator Control Solenoid.png', alt: 'Air Intake Manifold Actuator Control Solenoid' },
      { id: 7, categoryName: 'Air Intake Manifold Flap Adjuster', src: '/images/category-images/Air Intake Manifold Flap Adjuster.png', alt: 'Air Intake Manifold Flap Adjuster' },
      { id: 8, categoryName: 'Air Intake Manifold Runner Control Sensor', src: '/images/category-images/Air Intake Manifold Runner Control Sensor.png', alt: 'Air Intake Manifold Runner Control Sensor' },
      { id: 9, categoryName: 'Electric Vacuum Pump', src: '/images/category-images/Electric Vacuum Pump.png', alt: 'Electric Vacuum Pump' },
      { id: 10, categoryName: 'Engine Air Duct Assembly', src: '/images/category-images/Engine Air Duct Assembly.png', alt: 'Engine Air Duct Assembly' },
      { id: 11, categoryName: 'Engine Air Filter', src: '/images/category-images/Engine Air Filter.webp', alt: 'Engine Air Filter' },
      { id: 12, categoryName: 'Intake Manifold', src: '/images/category-images/Intake Manifold.png', alt: 'Intake Manifold' },
    ],
    "Cams, Timing & Valvetrain": [
      { id: 1, categoryName: 'Camshaft Adjuster', src: '/images/category-images/Camshaft Adjuster.png', alt: 'Camshaft Adjuster' },
      { id: 2, categoryName: 'Camshaft Adjuster Cover', src: '/images/category-images/Camshaft Adjuster Cover.png', alt: 'Camshaft Adjuster Cover' },
      { id: 3, categoryName: 'Camshaft Kit', src: '/images/category-images/Camshaft Kit.webp', alt: 'Camshaft Kit' },
      { id: 4, categoryName: 'Camshaft Timing Gear', src: '/images/category-images/Camshaft Timing Gear.png', alt: 'Camshaft Timing Gear' },
      { id: 5, categoryName: 'Camshafts', src: '/images/category-images/Camshafts.webp', alt: 'Camshafts' },
      { id: 6, categoryName: 'Chain Tensioner Adjuster', src: '/images/category-images/Chain Tensioner Adjuster.png', alt: 'Chain Tensioner Adjuster' },
      { id: 7, categoryName: 'Cylinder Head', src: '/images/category-images/Cylinder Head.png', alt: 'Cylinder Head' },
      { id: 8, categoryName: 'Cylinder Head Assembly', src: '/images/category-images/Cylinder Head Assembly.webp', alt: 'Cylinder Head Assembly' },
      { id: 9, categoryName: 'Eccentric Shaft Actuator', src: '/images/category-images/Eccentric Shaft-Actuator.png', alt: 'Eccentric Shaft Actuator' },
      { id: 10, categoryName: 'Engine Valve Cover', src: '/images/category-images/Engine Valve Cover.png', alt: 'Engine Valve Cover' },
      { id: 11, categoryName: 'Harmonic Balancer', src: '/images/category-images/Harmonic Balancer.png', alt: 'Harmonic Balancer' },
      { id: 12, categoryName: 'Rocker Arm Shaft Lifter Assembly', src: '/images/category-images/Rocker Arm Shaft Lifter Assembly.png', alt: 'Rocker Arm Shaft Lifter Assembly' },
    ],
    "Cranks, Pistons, Oil & Components": [
      { id: 1, categoryName: 'Belt Tensioner', src: '/images/category-images/Belt Tensioner.png', alt: 'Belt Tensioner' },
      { id: 2, categoryName: 'Coolant Level Sensor', src: '/images/category-images/Coolant Level Sensor.webp', alt: 'Coolant Level Sensor' },
      { id: 3, categoryName: 'Crank Installer Tool', src: '/images/category-images/Crank Installer Tool.png', alt: 'Crank Installer Tool' },
      { id: 4, categoryName: 'Crankcase Breather Hose', src: '/images/category-images/Crankcase Breather Hose.png', alt: 'Crankcase Breather Hose' },
      { id: 5, categoryName: 'Crankcase Breather Valve', src: '/images/category-images/Crankcase Breather Valve.png', alt: 'Crankcase Breather Valve' },
      { id: 6, categoryName: 'Crankshaft Position Sensor', src: '/images/category-images/Crankshaft Position Sensor.png', alt: 'Crankshaft Position Sensor' },
      { id: 7, categoryName: 'Crankshaft Pulley', src: '/images/category-images/Crankshaft Pulley.png', alt: 'Crankshaft Pulley' },
      { id: 8, categoryName: 'Engine Oil Dipstick', src: '/images/category-images/Engine Oil Dipstick.png', alt: 'Engine Oil Dipstick' },
      { id: 9, categoryName: 'Engine Oil Dipstick Tube', src: '/images/category-images/Engine Oil Dipstick Tube.png', alt: 'Engine Oil Dipstick Tube' },
      { id: 10, categoryName: 'Engine Oil Filter', src: '/images/category-images/Engine Oil Filter.webp', alt: 'Engine Oil Filter' },
      { id: 11, categoryName: 'Engine Oil Pan Gasket', src: '/images/category-images/Engine Oil Pan Gasket.png', alt: 'Engine Oil Pan Gasket' },
      { id: 12, categoryName: 'Flywheel', src: '/images/category-images/Flywheel.webp', alt: 'Flywheel' },
    ],
    "Electronic Control Modules, Ignition & Distributors": [
      { id: 1, categoryName: 'Camshaft Position Sensor', src: '/images/category-images/Camshaft Position Sensor.webp', alt: 'Camshaft Position Sensor' },
      { id: 2, categoryName: 'Camshaft Position Sensor & Magnet Kit', src: '/images/category-images/Camshaft Position Sensor & Magnet Kit.webp', alt: 'Camshaft Position Sensor & Magnet Kit' },
      { id: 3, categoryName: 'Connector Plug', src: '/images/category-images/Connector Plug.webp', alt: 'Connector Plug' },
      { id: 4, categoryName: 'Distributor Cap', src: '/images/category-images/Distributor Cap.webp', alt: 'Distributor Cap' },
      { id: 5, categoryName: 'Electronic Ignition System', src: '/images/category-images/Electronic Ignition System.png', alt: 'Electronic Ignition System' },
      { id: 6, categoryName: 'Engine Valve Covers & Ignition Coils Kits', src: '/images/category-images/Engine Valve Covers & Ignition Coils Kits.webp', alt: 'Engine Valve Covers & Ignition Coils Kits' },
      { id: 7, categoryName: 'Glow Plug Relay Module', src: '/images/category-images/Glow Plug Relay Module.webp', alt: 'Glow Plug Relay Module' },
      { id: 8, categoryName: 'Ignition Coil', src: '/images/category-images/Ignition Coil.png', alt: 'Ignition Coil' },
      { id: 9, categoryName: 'Ignition Coils & Spark Plugs Kits', src: '/images/category-images/Ignition Coils & Spark Plugs Kits.webp', alt: 'Ignition Coils & Spark Plugs Kits' },
      { id: 10, categoryName: 'Ignition Distributor', src: '/images/category-images/Ignition Distributor.webp', alt: 'Ignition Distributor' },
      { id: 11, categoryName: 'Ignition Starter Switch', src: '/images/category-images/Ignition Starter Switch.webp', alt: 'Ignition Starter Switch' },
      { id: 12, categoryName: 'Ignition Switch Actuator', src: '/images/category-images/Ignition Switch Actuator.webp', alt: 'Ignition Switch Actuator' },
    ],
    "Engine Cooling": [
      { id: 1, categoryName: 'Active Grille Shutter Actuator', src: '/images/category-images/Active Grille Shutter Actuator.webp', alt: 'Active Grille Shutter Actuator' },
      { id: 2, categoryName: 'Auxiliary Water Pump', src: '/images/category-images/Auxiliary Water Pump.webp', alt: 'Auxiliary Water Pump' },
      { id: 3, categoryName: 'Electric Engine Water Pump', src: '/images/category-images/Electric Engine Water Pump.webp', alt: 'Electric Engine Water Pump' },
      { id: 4, categoryName: 'Engine Coolant Pipe', src: '/images/category-images/Engine Coolant Pipe.webp', alt: 'Engine Coolant Pipe ' },
      { id: 5, categoryName: 'Expansion Tank', src: '/images/category-images/Expansion Tank.webp', alt: 'Expansion Tank' },
      { id: 6, categoryName: 'Expansion Tank Mounting Plate', src: '/images/category-images/Expansion Tank Mounting Plate.webp', alt: 'Expansion Tank Mounting Plate' },
      { id: 7, categoryName: 'Fan Pulley Bracket', src: '/images/category-images/Fan Pulley Bracket.webp', alt: 'Fan Pulley Bracket' },
      { id: 8, categoryName: 'Fuel Cooler', src: '/images/category-images/Fuel Cooler.webp', alt: 'Fuel Cooler' },
      { id: 9, categoryName: 'Overflow Hose Connector', src: '/images/category-images/Overflow Hose Connector.webp', alt: 'Overflow Hose Connector' },
      { id: 10, categoryName: 'Radiator', src: '/images/category-images/Radiator.webp', alt: 'Radiator' },
      { id: 11, categoryName: 'Radiator Control Fan Module', src: '/images/category-images/Radiator Control Fan Module.webp', alt: 'Radiator Control Fan Module' },
      { id: 12, categoryName: 'Radiator Core Support Skid Bar Plate', src: '/images/category-images/Radiator Core Support Skid Bar Plate.webp', alt: 'Radiator Core Support Skid Bar Plate' },
    ],
    "Engine Mounts": [
      { id: 1, categoryName: 'Engine Bracket Arm', src: '/images/category-images/Engine Bracket Arm.webp', alt: 'Engine Bracket Arm' },
      { id: 2, categoryName: 'Engine Mount', src: '/images/category-images/Engine Mount.webp', alt: 'Engine Mount' },
    ],
    "Exhaust & Emission Systems": [
      { id: 1, categoryName: 'Catalytic Converter', src: '/images/category-images/Catalytic Converter.webp', alt: 'Catalytic Converter' },
      { id: 2, categoryName: 'Change Over Valve', src: '/images/category-images/Change Over Valve.webp', alt: 'Change Over Valve' },
      { id: 3, categoryName: 'EGR Tube', src: '/images/category-images/EGR Tube.webp', alt: 'EGR Tube' },
      { id: 4, categoryName: 'EGR Valve', src: '/images/category-images/EGR Valve.webp', alt: 'EGR Valve' },
      { id: 5, categoryName: 'Emissions Fluid Pump', src: '/images/category-images/Emissions Fluid Pump.webp', alt: 'Emissions Fluid Pump' },
      { id: 6, categoryName: 'Exhaust Fluid Heater', src: '/images/category-images/Exhaust Fluid Heater.webp', alt: 'Exhaust Fluid Heater' },
      { id: 7, categoryName: 'Exhaust Gas Temperature Sensor', src: '/images/category-images/Exhaust Gas Temperature Sensor.webp', alt: 'Exhaust Gas Temperature Sensor' },
      { id: 8, categoryName: 'Exhaust Manifold', src: '/images/category-images/Exhaust Manifold.webp', alt: 'Exhaust Manifold' },
      { id: 9, categoryName: 'Exhaust Pipe Expander', src: '/images/category-images/Exhaust Pipe Expander.webp', alt: 'Exhaust Pipe Expander' },
      { id: 10, categoryName: 'Fuel Tank Breather Valve', src: '/images/category-images/Fuel Tank Breather Valve.webp', alt: 'Fuel Tank Breather Valve' },
      { id: 11, categoryName: 'Fuel Vapor Leak Detection Pump', src: '/images/category-images/Fuel Vapor Leak Detection Pump.webp', alt: 'Fuel Vapor Leak Detection Pump' },
      { id: 12, categoryName: 'Nitrogen Oxide Sensor', src: '/images/category-images/Nitrogen Oxide Sensor.webp', alt: 'Nitrogen Oxide Sensor' },
    ],
    "Fuel Systems & Components": [
      { id: 1, categoryName: 'Carburetor', src: '/images/category-images/Carburetor.webp', alt: 'Carburetor' },
      { id: 2, categoryName: 'Diesel Fuel Lift Pump Kit', src: '/images/category-images/Diesel Fuel Lift Pump Kit.webp', alt: 'Diesel Fuel Lift Pump Kit' },
      { id: 3, categoryName: 'Disaster Prevention Bypass Kit', src: '/images/category-images/Disaster Prevention Bypass Kit.webp', alt: 'Disaster Prevention Bypass Kit' },
      { id: 4, categoryName: 'Fuel Filter', src: '/images/category-images/Fuel Filter.webp', alt: 'Fuel Filter' },
      { id: 5, categoryName: 'Fuel Filter Housing', src: '/images/category-images/Fuel Filter Housing.webp', alt: 'Fuel Filter Housing' },
      { id: 6, categoryName: 'Fuel Flap Lock Actuator', src: '/images/category-images/Fuel Flap Lock Actuator.webp', alt: 'Fuel Flap Lock Actuator' },
      { id: 7, categoryName: 'Fuel Injection Control Module', src: '/images/category-images/Fuel Injection Control Module.webp', alt: 'Fuel Injection Control Module' },
      { id: 8, categoryName: 'Fuel Injection Pressure Regulator', src: '/images/category-images/Fuel Injection Pressure Regulator.webp', alt: 'Fuel Injection Pressure Regulator' },
      { id: 9, categoryName: 'Fuel Injector', src: '/images/category-images/Fuel Injector.webp', alt: 'Fuel Injector' },
      { id: 10, categoryName: 'Fuel Injector Kit', src: '/images/category-images/Fuel Injector Kit.webp', alt: 'Fuel Injector Kit' },
      { id: 11, categoryName: 'Fuel Injector Module Wiring Harness', src: '/images/category-images/Fuel Injector Module Wiring Harness.webp', alt: 'Fuel Injector Module Wiring Harness' },
      { id: 12, categoryName: 'Fuel line Kit', src: '/images/category-images/Fuel line Kit.webp', alt: 'Fuel line Kit' },
    ],
    "Starters, Alternators, Batteries & Components": [
      { id: 1, categoryName: 'Alternator', src: '/images/category-images/Alternator.webp', alt: 'Alternator' },
      { id: 2, categoryName: 'Battery Fuse Overload Protection Trip', src: '/images/category-images/Battery Fuse Overload Protection Trip.png', alt: 'Battery Fuse Overload Protection Trip' },
      { id: 3, categoryName: 'Engine Voltage Converter Module', src: '/images/category-images/Engine Voltage Converter Module.png', alt: 'Engine Voltage Converter Module' },
      { id: 4, categoryName: 'Positive Battery Cable', src: '/images/category-images/Positive Battery Cable.png', alt: 'Positive Battery Cable' },
      { id: 5, categoryName: 'Starter', src: '/images/category-images/Starter.webp', alt: 'Starter' },
      { id: 6, categoryName: 'Wiring Harness', src: '/images/category-images/Wiring Harness.png', alt: 'Wiring Harness' },
    ],
  };

  const carousel2Data: CarouselData = {
    "Headlight Assemblies & Components": [
      { id: 1, categoryName: 'Headlight', src: '/images/category-images/Headlight.webp', alt: 'Headlight' },
      { id: 2, categoryName: 'Headlight control module', src: '/images/category-images/Headlight control module.webp', alt: 'Headlight control module' },
      { id: 3, categoryName: 'Headlight Level Sensor', src: '/images/category-images/Headlight Level Sensor.png', alt: 'Headlight Level Sensor' },
      { id: 4, categoryName: 'Headlight Motor', src: '/images/category-images/Headlight Motor.png', alt: 'Headlight Motor' },
    ],
    "Light Bulbs & LEDs": [
      { id: 1, categoryName: 'Bed Lighting Kit', src: '/images/category-images/Bed Lighting Kit.png', alt: 'Bed Lighting Kit' },
      { id: 2, categoryName: 'Tailgate Step Light', src: '/images/category-images/Tailgate Step Light.webp', alt: 'Tailgate Step Light' },
      { id: 3, categoryName: 'Turn Signal Light Lens', src: '/images/category-images/Turn Signal Light Lens.webp', alt: 'Turn Signal Light Lens' },
    ],
    "Mirrors & Components": [
      { id: 1, categoryName: 'Mirror', src: '/images/category-images/Mirror.webp', alt: 'Mirror' },
     
    ],
    "Parking Assistance": [
      { id: 1, categoryName: 'Blind Spot Radar Sensor', src: '/images/category-images/Blind Spot Radar Sensor.webp', alt: 'Blind Spot Radar Sensor' },
      { id: 2, categoryName: 'Parking Assist Sensor', src: '/images/category-images/Parking Assist Sensor.webp', alt: 'Parking Assist Sensor' },
      
    ],
  };

  const carousel3Data: CarouselData = {
    "Brake Discs, Pads & Calipers": [
      { id: 1, categoryName: 'Brake Caliper', src: '/images/category-images/Brake Caliper.png', alt: 'Brake Caliper' },
      { id: 2, categoryName: 'Brake Pad', src: '/images/category-images/Brake Pad.png', alt: 'Brake Pad' },
      { id: 3, categoryName: 'Brake Pad Wear Sensor', src: '/images/category-images/Brake Pad Wear Sensor.png', alt: 'Brake Pad Wear Sensor' },
      { id: 4, categoryName: 'Brake Rotor', src: '/images/category-images/Brake Rotor.webp', alt: 'Brake Rotor' },
    ],
    "Brake Drums, Shoes & Components": [
      { id: 1, categoryName: 'Brake Drum', src: '/images/category-images/Brake Drum.webp', alt: 'Brake Drum' },
      { id: 2, categoryName: 'Brake Drum and Brake Shoe Assembly', src: '/images/category-images/Brake Drum and Brake Shoe Assembly.webp', alt: 'Brake Drum and Brake Shoe Assembly' },
      { id: 3, categoryName: 'Brake Drum Cover', src: '/images/category-images/Brake Drum Cover.webp', alt: 'Brake Drum Cover' },
      { id: 4, categoryName: 'Brake Dust Shield', src: '/images/category-images/Brake Dust Shield.png', alt: 'Brake Dust Shield' },
      { id: 5, categoryName: 'Brake Shoe Set', src: '/images/category-images/Brake Shoe Set.webp', alt: 'Brake Shoe Set' },
      { id: 6, categoryName: 'Rear Brake Drum', src: '/images/category-images/Rear Brake Drum.webp', alt: 'Rear Brake Drum' },
    ],
    "Brake Master Cylinders, Boosters & Components": [
      { id: 1, categoryName: 'Brake Hydraulic Hose', src: '/images/category-images/Brake Hydraulic Hose.webp', alt: 'Brake Hydraulic Hose' },
      { id: 2, categoryName: 'Brake Master Cylinder', src: '/images/category-images/Brake Master Cylinder.png', alt: 'Brake Master Cylinder' },
      { id: 3, categoryName: 'Brake Vacuum Pump', src: '/images/category-images/Brake Vacuum Pump.png', alt: 'Brake Vacuum Pump' },
      { id: 4, categoryName: 'Brake Wheel Cylinders', src: '/images/category-images/Brake Wheel Cylinders.png', alt: 'Brake Wheel Cylinders' },
      { id: 5, categoryName: 'Driveshaft Parking Brake', src: '/images/category-images/Driveshaft Parking Brake.webp', alt: 'Driveshaft Parking Brake' },
      { id: 6, categoryName: 'Power Brake Booster', src: '/images/category-images/Power Brake Booster.png', alt: 'Power Brake Booster' },
      { id: 7, categoryName: 'Trailer Brake Control Module', src: '/images/category-images/Trailer Brake Control Module.png', alt: 'Trailer Brake Control Module' },
    ],
    "Parking Brake, ABS & Other Components": [
      { id: 1, categoryName: 'ABS Speed Sensor', src: '/images/category-images/ABS Speed Sensor.png', alt: 'ABS Speed Sensor' },
      { id: 2, categoryName: 'Emergency Parking Brake Handle Lever', src: '/images/category-images/Emergency Parking Brake Handle Lever.png', alt: 'Emergency Parking Brake Handle Lever' },
      { id: 3, categoryName: 'Parking Brake Actuator', src: '/images/category-images/Parking Brake Actuator.png', alt: 'Parking Brake Actuator' },
      { id: 4, categoryName: 'Parking Brake Cable', src: '/images/category-images/Parking Brake Cable.webp', alt: 'Parking Brake Cable' },
      { id: 5, categoryName: 'Parking Brake Module', src: '/images/category-images/Parking Brake Module.webp', alt: 'Parking Brake Module' },
      { id: 6, categoryName: 'Parking Brake Pedal Assembly', src: '/images/category-images/Parking Brake Pedal Assembly.webp', alt: 'Parking Brake Pedal Assembly' },
      { id: 7, categoryName: 'Speed Sensor', src: '/images/category-images/Speed Sensor.png', alt: 'Speed Sensor' },
    ],
    "Wheel & Tire Accessories": [
      { id: 1, categoryName: 'Spare Tire Winch Carrier', src: '/images/category-images/Spare Tire Winch Carrier.png', alt: 'Spare Tire Winch Carrier' },
      { id: 2, categoryName: 'Tire Pressure Monitoring Sensor', src: '/images/category-images/Tire Pressure Monitoring Sensor.png', alt: 'Tire Pressure Monitoring Sensor' },
      { id: 3, categoryName: 'Wheel Spacer', src: '/images/category-images/Wheel Spacer.webp', alt: 'Wheel Spacer' },
    ],
    "Wheel Hubs, Bearings, and Components": [
      { id: 1, categoryName: 'Hub bearing', src: '/images/category-images/Hub bearing.png', alt: 'Hub bearing' },
      { id: 2, categoryName: 'Wheel Cap', src: '/images/category-images/Wheel Cap.webp', alt: 'Wheel Cap' },
      { id: 3, categoryName: 'Wheel Nut', src: '/images/category-images/Wheel Nut.png', alt: 'Wheel Nut' },
      { id: 4, categoryName: 'Wheel Stud', src: '/images/category-images/Wheel Stud.png', alt: 'Wheel Stud' },
    ],
  };

  const carousel4Data: CarouselData = {
    "Automatic Transmission Parts": [
      { id: 1, categoryName: 'Automatic Transmission Filter', src: '/images/category-images/Automatic Transmission Filter.webp', alt: 'Automatic Transmission Filter' },
      { id: 2, categoryName: 'Differential Vacuum Actuator', src: '/images/category-images/Differential Vacuum Actuator.webp', alt: 'Differential Vacuum Actuator' },
      { id: 3, categoryName: 'Gear Selector Position Sensor', src: '/images/category-images/Gear Selector Position Sensor.webp', alt: 'Gear Selector Position Sensor' },
      { id: 4, categoryName: 'High Gear Lock up Switch Kit', src: '/images/category-images/High Gear Lock up Switch Kit.webp', alt: 'High Gear Lock up Switch Kit' },
      { id: 5, categoryName: 'Servo High Performance', src: '/images/category-images/Servo High Performance.webp', alt: 'Servo High Performance' },
      { id: 6, categoryName: 'Solenoid Service Kit', src: '/images/category-images/Solenoid Service Kit.webp', alt: 'Solenoid Service Kit' },
      { id: 7, categoryName: 'Transmission Conductor Plate', src: '/images/category-images/Transmission Conductor Plate.webp', alt: 'Transmission Conductor Plate' },
      { id: 8, categoryName: 'Transmission Cooler Lines', src: '/images/category-images/Transmission Cooler Lines.webp', alt: 'Transmission Cooler Lines' },
      { id: 9, categoryName: 'Transmission Shift Lever', src: '/images/category-images/Transmission Shift Lever.webp', alt: 'Transmission Shift Lever' },
      { id: 10, categoryName: 'Transmission Shift Solenoid', src: '/images/category-images/Transmission Shift Solenoid.webp', alt: 'Transmission Shift Solenoid' },
      { id: 11, categoryName: 'Transmission Throttle Valve Actuator', src: '/images/category-images/Transmission Throttle Valve Actuator.webp', alt: 'Transmission Throttle Valve Actuator' },
    ],
    "Axles, Driveshaft & 4WD": [
      { id: 1, categoryName: '4WD Actuator', src: '/images/category-images/4WD Actuator.webp', alt: '4WD Actuator' },
      { id: 2, categoryName: 'Axle Disconnect Cable Operated Actuator', src: '/images/category-images/Axle Disconnect Cable Operated Actuator.webp', alt: 'Axle Disconnect Cable Operated Actuator' },
      { id: 3, categoryName: 'CV Axle Shaft', src: '/images/category-images/CV Axle Shaft.png', alt: 'CV Axle Shaft' },
      { id: 4, categoryName: 'CV Intermediate Shaft', src: '/images/category-images/CV Intermediate Shaft.webp', alt: 'CV Intermediate Shaft' },
      { id: 5, categoryName: 'Drive Shaft', src: '/images/category-images/Drive Shaft.webp', alt: 'Drive Shaft' },
      { id: 6, categoryName: 'Drive Shaft Center Support Bearing', src: '/images/category-images/Drive Shaft Center Support Bearing.webp', alt: 'Drive Shaft Center Support Bearing' },
      { id: 7, categoryName: 'Front Axle Housing', src: '/images/category-images/Front Axle Housing.webp', alt: 'Front Axle Housing' },
      { id: 8, categoryName: 'Front Axle Pivot Bar', src: '/images/category-images/Front Axle Pivot Bar.webp', alt: 'Front Axle Pivot Bar' },
      { id: 9, categoryName: 'Front Axle Shaft Seal And Bearing Kit', src: '/images/category-images/Front Axle Shaft Seal And Bearing Kit.webp', alt: 'Front Axle Shaft Seal And Bearing Kit' },
      { id: 10, categoryName: 'Manual 4WD Actuator Kit', src: '/images/category-images/Manual 4WD Actuator Kit.webp', alt: 'Manual 4WD Actuator Kit' },
      { id: 11, categoryName: 'Propshaft Coupling', src: '/images/category-images/Propshaft Coupling.webp', alt: 'Propshaft Coupling' },
      { id: 12, categoryName: 'Rear Axle Housing', src: '/images/category-images/Rear Axle Housing.webp', alt: 'Rear Axle Housing' },
    ],
    "Clutches & Components": [
      { id: 1, categoryName: 'Bellhousing Kit', src: '/images/category-images/Bellhousing Kit.webp', alt: 'Bellhousing Kit' },
      { id: 2, categoryName: 'Clutch Bellhousing', src: '/images/category-images/Clutch Bellhousing.webp', alt: 'Clutch Bellhousing' },
      { id: 3, categoryName: 'Clutch Fork Kit', src: '/images/category-images/Clutch Fork Kit.webp', alt: 'Clutch Fork Kit' },
      { id: 4, categoryName: 'Clutch Hydraulic Hose', src: '/images/category-images/Clutch Hydraulic Hose.webp', alt: 'Clutch Hydraulic Hose' },
      { id: 5, categoryName: 'Clutch Kit', src: '/images/category-images/Clutch Kit.webp', alt: 'Clutch Kit' },
      { id: 6, categoryName: 'Clutch Master Cylinder', src: '/images/category-images/Clutch Master Cylinder.webp', alt: 'Clutch Master Cylinder' },
      { id: 7, categoryName: 'Clutch Slave Cylinder', src: '/images/category-images/Clutch Slave Cylinder.webp', alt: 'Clutch Slave Cylinder' },
      { id: 8, categoryName: 'Clutch Slave Cylinder Actuator', src: '/images/category-images/Clutch Slave Cylinder Actuator.webp', alt: 'Clutch Slave Cylinder Actuator' },
     
    ],
    "Differentials, Assemblies & Parts": [
      { id: 1, categoryName: 'Axle Ring And Pinion Kit', src: '/images/category-images/Axle Ring And Pinion Kit.webp', alt: 'Axle Ring And Pinion Kit' },
      { id: 2, categoryName: 'Coupling Oil Pump', src: '/images/category-images/Coupling Oil Pump.webp', alt: 'Coupling Oil Pump' },
      { id: 3, categoryName: 'Differential', src: '/images/category-images/Differential.webp', alt: 'Differential' },
      { id: 4, categoryName: 'Differential Cover', src: '/images/category-images/Differential Cover.webp', alt: 'Differential Cover' },
      { id: 5, categoryName: 'Differential Lock Motor', src: '/images/category-images/Differential Lock Motor.webp', alt: 'Differential Lock Motor' },
      { id: 6, categoryName: 'Differential Locker', src: '/images/category-images/Differential Locker.webp', alt: 'Differential Locker' },      
    ],
    "Manual Transmission Parts": [
      { id: 1, categoryName: 'Shift Linkage Kit', src: '/images/category-images/Shift Linkage Kit.webp', alt: 'Shift Linkage Kit' },
      { id: 2, categoryName: 'Short Throw Shifter', src: '/images/category-images/Short Throw Shifter.webp', alt: 'Short Throw Shifter' },
      { id: 3, categoryName: 'Transmission Shifter Stub Kit', src: '/images/category-images/Transmission Shifter Stub Kit.webp', alt: 'Transmission Shifter Stub Kit' },
    ],
    "Other Transmission Parts": [
      { id: 1, categoryName: 'Differential Actuator Assembly', src: '/images/category-images/Differential Actuator Assembly.webp', alt: 'Differential Actuator Assembly' },
      { id: 2, categoryName: 'Differential Gear & Clutch kit', src: '/images/category-images/Differential Gear & Clutch kit.webp', alt: 'Differential Gear & Clutch kit' },
      { id: 3, categoryName: 'Gearbox Pump', src: '/images/category-images/Gearbox Pump.webp', alt: 'Gearbox Pump' },
      { id: 4, categoryName: 'Transfer Case Assembly', src: '/images/category-images/Transfer Case Assembly.webp', alt: 'Transfer Case Assembly' },
      { id: 5, categoryName: 'Transfer Case Control Module', src: '/images/category-images/Transfer Case Control Module.webp', alt: 'Transfer Case Control Module' },
      { id: 6, categoryName: 'Transfer Case Motor Actuator', src: '/images/category-images/Transfer Case Motor Actuator.webp', alt: 'Transfer Case Motor Actuator' },
      { id: 7, categoryName: 'Transmission Holding Fixture', src: '/images/category-images/Transmission Holding Fixture.webp', alt: 'Transmission Holding Fixture' },
      { id: 8, categoryName: 'Transmission Wire Harness', src: '/images/category-images/Transmission Wire Harness.webp', alt: 'Transmission Wire Harness' },
    ],
  };

  const carousel5Data: CarouselData = {
    "Heating, Air Conditioning & Components": [
      { id: 1, categoryName: 'A/C Compressor Bracket', src: '/images/category-images/ac_compressor.webp', alt: 'A/C Compressor Bracket' },
      { id: 2, categoryName: 'A/C Expansion Valve', src: '/images/category-images/AC Expansion Valve.webp', alt: 'A/C Expansion Valve' },
      { id: 3, categoryName: 'A/C Hose', src: '/images/category-images/AC Hose.webp', alt: 'A/C Hose' },
      { id: 4, categoryName: 'A/C Orifice Tube', src: '/images/category-images/AC Orifice Tube.webp', alt: 'A/C Orifice Tube' },
      { id: 5, categoryName: 'AC Compressor', src: '/images/category-images/AC Compressor.webp', alt: 'AC Compressor' },
      { id: 6, categoryName: 'AC Compressor Clutch Kit', src: '/images/category-images/AC Compressor Clutch Kit.webp', alt: 'AC Compressor Clutch Kit' },
      { id: 7, categoryName: 'AC Evaporator', src: '/images/category-images/AC Evaporator.webp', alt: 'AC Evaporator' },
      { id: 8, categoryName: 'Air Conditional Control Panel', src: '/images/category-images/Air Conditional Control Panel.webp', alt: 'Air Conditional Control Panel' },
      { id: 9, categoryName: 'Blend Door Actuator', src: '/images/category-images/Blend Door Actuator.webp', alt: 'Blend Door Actuator' },
      { id: 10, categoryName: 'Blend Door Repair Kit', src: '/images/category-images/Blend Door Repair Kit.webp', alt: 'Blend Door Repair Kit' },
      { id: 11, categoryName: 'Blower Motor', src: '/images/category-images/Blower Motor.webp', alt: 'Blower Motor' },
      { id: 12, categoryName: 'Blower Motor Resistor', src: '/images/category-images/Blower Motor Resistor.webp', alt: 'Blower Motor Resistor' },
      { id: 13, categoryName: 'Cab Heater Kit', src: '/images/category-images/Cab Heater Kit.webp', alt: 'Cab Heater Kit' },
      { id: 14, categoryName: 'Cabin Air Filter', src: '/images/category-images/Cabin Air Filter.webp', alt: 'Cabin Air Filter' },
      { id: 15, categoryName: 'Condenser', src: '/images/category-images/Condenser.webp', alt: 'Condenser' },
      { id: 16, categoryName: 'Heater Control Valve', src: '/images/category-images/Heater Control Valve.webp', alt: 'Heater Control Valve' },
      { id: 17, categoryName: 'Heater Core', src: '/images/category-images/Heater Core.webp', alt: 'Heater Core' },
      { id: 18, categoryName: 'HVAC Heater Hose Assembly', src: '/images/category-images/HVAC Heater Hose Assembly.webp', alt: 'HVAC Heater Hose Assembly' },
    ],
    "Radiators, Fans, Cooling Systems & Components": [
      { id: 1, categoryName: 'Cooling Fan', src: '/images/category-images/Cooling Fan.webp', alt: 'Cooling Fan' },
      { id: 2, categoryName: 'Fan Blade', src: '/images/category-images/Fan Blade.webp', alt: 'Fan Blade' },
      { id: 3, categoryName: 'Fan Clutch', src: '/images/category-images/Fan Clutch.webp', alt: 'Fan Clutch' },
      { id: 4, categoryName: 'Radiator Fan Shroud', src: '/images/category-images/Radiator Fan Shroud.webp', alt: 'Radiator Fan Shroud' },
      { id: 5, categoryName: 'Radiator Shrouds', src: '/images/category-images/Radiator Shrouds.webp', alt: 'Radiator Shrouds' },
      { id: 6, categoryName: 'Thermostat', src: '/images/category-images/Thermostat.webp', alt: 'Thermostat' },
      { id: 7, categoryName: 'Water Pump', src: '/images/category-images/Water Pump.webp', alt: 'Water Pump' },
    ],
  };

  const carousel6Data: CarouselData = {
    "Body Moldings & Trims": [
      { id: 1, categoryName: 'Door Entry Keypad Pillar Molding Trim', src: '/images/category-images/Door Entry Keypad Pillar Molding Trim.webp', alt: 'Door Entry Keypad Pillar Molding Trim' },
      { id: 2, categoryName: 'Door Lower Weatherstrip Seal', src: '/images/category-images/Door Lower Weatherstrip Seal.png', alt: 'Door Lower Weatherstrip Seal' },
      { id: 3, categoryName: 'Weatherstrip Seal', src: '/images/category-images/Weatherstrip Seal.webp', alt: 'Weatherstrip Seal' },
      { id: 4, categoryName: 'Window Visor', src: '/images/category-images/Window Visor.webp', alt: 'Window Visor' },
    ],
    "Bumpers & Components": [
      { id: 1, categoryName: 'Front Bumper', src: '/images/category-images/Front Bumper.webp', alt: 'Front Bumper' },
      { id: 2, categoryName: 'Park Assist Camera', src: '/images/category-images/Park Assist Camera.webp', alt: 'Park Assist Camera' },
    ],
    "Doors, Trunk Lids & Hatches": [
      { id: 1, categoryName: 'Door Corner Gusset Assembly', src: '/images/category-images/Door Corner Gusset Assembly.webp', alt: 'Door Corner Gusset Assembly' },
      { id: 2, categoryName: 'Door Handle', src: '/images/category-images/Door Handle.webp', alt: 'Door Handle' },
      { id: 3, categoryName: 'Door Handle Carrier', src: '/images/category-images/Door Handle Carrier.png', alt: 'Door Handle Carrier' },
      { id: 4, categoryName: 'Door Handle Harness', src: '/images/category-images/Door Handle Harness.png', alt: 'Door Handle Harness' },
      { id: 5, categoryName: 'Door Hinge', src: '/images/category-images/Door Hinge.png', alt: 'Door Hinge' },
      { id: 6, categoryName: 'Door Lock Actuator', src: '/images/category-images/Door Lock Actuator.png', alt: 'Door Lock Actuator' },
      { id: 7, categoryName: 'AC Evaporator', src: '/images/category-images/AC Evaporator.webp', alt: 'AC Evaporator' },
      { id: 8, categoryName: 'Air Conditional Control Panel', src: '/images/category-images/Air Conditional Control Panel.webp', alt: 'Air Conditional Control Panel' },
      { id: 9, categoryName: 'Blend Door Actuator', src: '/images/category-images/Blend Door Actuator.webp', alt: 'Blend Door Actuator' },
      { id: 10, categoryName: 'Blend Door Repair Kit', src: '/images/category-images/Blend Door Repair Kit.webp', alt: 'Blend Door Repair Kit' },
      { id: 11, categoryName: 'Blower Motor', src: '/images/category-images/Blower Motor.webp', alt: 'Blower Motor' },
      { id: 12, categoryName: 'Blower Motor Resistor', src: '/images/category-images/Blower Motor Resistor.webp', alt: 'Blower Motor Resistor' },
      { id: 13, categoryName: 'Cab Heater Kit', src: '/images/category-images/Cab Heater Kit.webp', alt: 'Cab Heater Kit' },
      { id: 14, categoryName: 'Cabin Air Filter', src: '/images/category-images/Cabin Air Filter.webp', alt: 'Cabin Air Filter' },
      { id: 15, categoryName: 'Condenser', src: '/images/category-images/Condenser.webp', alt: 'Condenser' },
      { id: 16, categoryName: 'Heater Control Valve', src: '/images/category-images/Heater Control Valve.webp', alt: 'Heater Control Valve' },
      { id: 17, categoryName: 'Heater Core', src: '/images/category-images/Heater Core.webp', alt: 'Heater Core' },
      { id: 18, categoryName: 'HVAC Heater Hose Assembly', src: '/images/category-images/HVAC Heater Hose Assembly.webp', alt: 'HVAC Heater Hose Assembly' },
     
    ],
    "Fender Flares, Vents & Accessories": [
      { id: 1, categoryName: 'Fender', src: '/images/category-images/Fender.webp', alt: 'Fender' },
      { id: 2, categoryName: 'Fender Flares', src: '/images/category-images/Fender Flares.webp', alt: 'Fender Flares' },
      { id: 3, categoryName: 'Inner Fender', src: '/images/category-images/Inner Fender.webp', alt: 'Inner Fender' },
    ],
    "Grilles & Components": [
      { id: 1, categoryName: 'Active Grille Shutter', src: '/images/category-images/Active Grille Shutter.webp', alt: 'Active Grille Shutter' },
    ],
    "Guards & Protection": [
      { id: 1, categoryName: 'Splash Guard', src: '/images/category-images/Splash Guard.webp', alt: 'Splash Guard' },
    ],
    "Hitches, Winches & Trailers": [
      { id: 1, categoryName: 'Tow Hook', src: '/images/category-images/Tow Hook.webp', alt: 'Tow Hook' },
      { id: 2, categoryName: 'Trailer Hitch', src: '/images/category-images/Trailer Hitch.webp', alt: 'Trailer Hitch' },
      { id: 3, categoryName: 'Trailer Hitch System Kit', src: '/images/category-images/Trailer Hitch System Kit.webp', alt: 'Trailer Hitch System Kit' },
      { id: 4, categoryName: 'Trailer Lock', src: '/images/category-images/Trailer Lock.webp', alt: 'Trailer Lock' },
      { id: 5, categoryName: 'Trailer Wiring Harness', src: '/images/category-images/Trailer Wiring Harness.webp', alt: 'Trailer Wiring Harness' },
    ],
    "Plastic Tooling Box & Components": [
      { id: 1, categoryName: 'Plastic Tooling Box', src: '/images/category-images/Plastic Tooling Box.webp', alt: 'Plastic Tooling Box' },
    ],
    "Roofs, Tops & Sunroofs": [
      { id: 1, categoryName: 'Convertible Soft Top', src: '/images/category-images/Convertible Soft Top.webp', alt: 'Convertible Soft Top' },
      { id: 2, categoryName: 'Convertible Soft Top Latch Assembly Motor', src: '/images/category-images/Convertible Soft Top Latch Assembly Motor.webp', alt: 'Convertible Soft Top Latch Assembly Motor' },
     
      { id: 3, categoryName: 'Convertible Top Hydraulic Cylinders', src: '/images/category-images/Convertible Top Hydraulic Cylinders.webp', alt: 'Convertible Top Hydraulic Cylinders' },
      { id: 4, categoryName: 'Convertible Top Lift Motor Pump', src: '/images/category-images/Convertible Top Lift Motor Pump.webp', alt: 'Convertible Top Lift Motor Pump' },
      { id: 5, categoryName: 'Hard Top Rack', src: '/images/category-images/Hard Top Rack.webp', alt: 'Hard Top Rack' },
      { id: 6, categoryName: 'Headliner Air Vent', src: '/images/category-images/Headliner Air Vent.webp', alt: 'Headliner Air Vent' },
      { id: 7, categoryName: 'Sunroof Motor', src: '/images/category-images/Sunroof Motor.webp', alt: 'Sunroof Motor' },
    ],
    "Running Boards & Step Bars": [
      { id: 1, categoryName: 'Blind Spot Radar Sensor', src: '/images/category-images/Blind Spot Radar Sensor.webp', alt: 'Blind Spot Radar Sensor' },
      { id: 2, categoryName: 'Parking Assist Sensor', src: '/images/category-images/Parking Assist Sensor.webp', alt: 'Parking Assist Sensor' },
      
    ],
    "Truck Beds & Parts": [
      { id: 1, categoryName: 'Blind Spot Radar Sensor', src: '/images/category-images/Blind Spot Radar Sensor.webp', alt: 'Blind Spot Radar Sensor' },
      { id: 2, categoryName: 'Parking Assist Sensor', src: '/images/category-images/Parking Assist Sensor.webp', alt: 'Parking Assist Sensor' },
      
    ],
    "Windshield, Wipers, Washers, Accessories & Components": [
      { id: 1, categoryName: 'Blind Spot Radar Sensor', src: '/images/category-images/Blind Spot Radar Sensor.webp', alt: 'Blind Spot Radar Sensor' },
      { id: 2, categoryName: 'Parking Assist Sensor', src: '/images/category-images/Parking Assist Sensor.webp', alt: 'Parking Assist Sensor' },
      
    ],
  };

  const carousel7Data: CarouselData = {
    "Air Suspension & Components": [
      { id: 1, categoryName: 'Headlight', src: '/images/category-images/Headlight.webp', alt: 'Headlight' },
      { id: 2, categoryName: 'Headlight control module', src: '/images/category-images/Headlight control module.webp', alt: 'Headlight control module' },
      { id: 3, categoryName: 'Headlight Level Sensor', src: '/images/category-images/Headlight Level Sensor.png', alt: 'Headlight Level Sensor' },
      { id: 4, categoryName: 'Headlight Motor', src: '/images/category-images/Headlight Motor.png', alt: 'Headlight Motor' },
    ],
    "Control Arms, Ball Joints & Assemblies": [
      { id: 1, categoryName: 'Bed Lighting Kit', src: '/images/category-images/Bed Lighting Kit.png', alt: 'Bed Lighting Kit' },
      { id: 2, categoryName: 'Tailgate Step Light', src: '/images/category-images/Tailgate Step Light.webp', alt: 'Tailgate Step Light' },
      { id: 3, categoryName: 'Turn Signal Light Lens', src: '/images/category-images/Turn Signal Light Lens.webp', alt: 'Turn Signal Light Lens' },
    ],
    "Other Steering & Suspension Parts": [
      { id: 1, categoryName: 'Mirror', src: '/images/category-images/Mirror.webp', alt: 'Mirror' },
     
    ],
    "Shocks, Struts & Springs": [
      { id: 1, categoryName: 'Blind Spot Radar Sensor', src: '/images/category-images/Blind Spot Radar Sensor.webp', alt: 'Blind Spot Radar Sensor' },
      { id: 2, categoryName: 'Parking Assist Sensor', src: '/images/category-images/Parking Assist Sensor.webp', alt: 'Parking Assist Sensor' },
      
    ],
    "Steering Systems & Components": [
      { id: 1, categoryName: 'Blind Spot Radar Sensor', src: '/images/category-images/Blind Spot Radar Sensor.webp', alt: 'Blind Spot Radar Sensor' },
      { id: 2, categoryName: 'Parking Assist Sensor', src: '/images/category-images/Parking Assist Sensor.webp', alt: 'Parking Assist Sensor' },
      
    ],
    "Tie Rods, Steering Racks, Gearboxes & Components": [
      { id: 1, categoryName: 'Blind Spot Radar Sensor', src: '/images/category-images/Blind Spot Radar Sensor.webp', alt: 'Blind Spot Radar Sensor' },
      { id: 2, categoryName: 'Parking Assist Sensor', src: '/images/category-images/Parking Assist Sensor.webp', alt: 'Parking Assist Sensor' },
      
    ],
  };

const itemsPerPage = 6;

  const tabs = [
    "Air Filters & Intake Systems",
    "Cams, Timing & Valvetrain",
    "Cranks, Pistons, Oil & Components",
    "Electronic Control Modules, Ignition & Distributors",
    "Engine Cooling",
    "Engine Mounts",
    "Exhaust & Emission Systems",
    "Fuel Systems & Components",
    "Starters, Alternators, Batteries & Components"
  ];

  const tabs2 = [
    "Headlight Assemblies & Components",
    "Light Bulbs & LEDs",
    "Mirrors & Components",
    "Parking Assistance"
  ];

  const tabs3 = [
    "Brake Discs, Pads & Calipers",
    "Brake Drums, Shoes & Components",
    "Brake Master Cylinders, Boosters & Components",
    "Parking Brake, ABS & Other Components",
    "Wheel & Tire Accessories",
    "Wheel Hubs, Bearings, and Components"
  ];

  const tabs4 = [
    "Automatic Transmission Parts",
    "Axles, Driveshaft & 4WD",
    "Clutches & Components",
    "Differentials, Assemblies & Parts",
    "Manual Transmission Parts",
    "Other Transmission Parts"
  ];

  const tabs5 = [
    "Heating, Air Conditioning & Components",
    "Radiators, Fans, Cooling Systems & Components"
  ];

  const tabs6 = [
    "Body Moldings & Trims",
    "Bumpers & Components",
    "Doors, Trunk Lids & Hatches",
    "Fender Flares, Vents & Accessories",
    "Grilles & Components",
    "Guards & Protection",
    "Hitches, Winches & Trailers",
    "Plastic Tooling Box & Components",
    "Roofs, Tops & Sunroofs",
    "Running Boards & Step Bars",
    "Truck Beds & Parts",
    "Windshield, Wipers, Washers, Accessories & Components"
  ];

  const tabs7 = [
    "Air Suspension & Components",
    "Control Arms, Ball Joints & Assemblies",
    "Other Steering & Suspension Parts",
    "Shocks, Struts & Springs",
    "Steering Systems & Components",
    "Tie Rods, Steering Racks, Gearboxes & Components"
  ];

  const handleNavMouseEnter = (item: string) => {
    setHoveredItem(item);
    if (tabs.includes(item)) {
      setActiveTab(tabs.indexOf(item));
      setStartIndex(0);
    } else if (tabs2.includes(item)) {
      setActiveTab2(tabs2.indexOf(item));
      setStartIndex(0);
    } else if (tabs3.includes(item)) {
      setActiveTab3(tabs3.indexOf(item));
      setStartIndex(0);
    } else if (tabs4.includes(item)) {
      setActiveTab4(tabs4.indexOf(item));
      setStartIndex(0);
    } else if (tabs5.includes(item)) {
      setActiveTab5(tabs5.indexOf(item));
      setStartIndex(0);
    } else if (tabs6.includes(item)) {
      setActiveTab6(tabs6.indexOf(item));
      setStartIndex(0);
    } else if (tabs7.includes(item)) {
      setActiveTab7(tabs7.indexOf(item));
      setStartIndex(0);
    }
    setShowNavBox(true);
  };

  const handleNavMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const relatedTarget = e.relatedTarget as HTMLElement | null;
  
    if (
      !relatedTarget ||
      !(relatedTarget instanceof Element) ||
      (!relatedTarget.closest('.nav-bg-div') && !relatedTarget.closest('.navigation'))
    ) {
      setShowNavBox(false);
    }
  };
  
  const handleNavBgMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const relatedTarget = e.relatedTarget as HTMLElement | null;
  
    if (
      !relatedTarget ||
      !(relatedTarget instanceof Element) ||
      (!relatedTarget.closest('.navigation') && !relatedTarget.closest('.nav-bg-div'))
    ) {
      setShowNavBox(false);
    }
  };
  
  

  useEffect(() => {
    let items;
    if (hoveredItem === "Body & Lamp Assembly") {
      items = activeTab2 !== undefined
        ? carousel2Data[tabs2[activeTab2]].slice(startIndex, startIndex + itemsPerPage)
        : [];
    } else if (hoveredItem === "Brake & Wheel Parts") { // Adjust condition as needed
      items = activeTab3 !== undefined
        ? carousel3Data[tabs3[activeTab3]].slice(startIndex, startIndex + itemsPerPage)
        : [];
    } 
    else if (hoveredItem === "Drivetrain") { // Adjust condition as needed
      items = activeTab4 !== undefined
        ? carousel4Data[tabs4[activeTab4]].slice(startIndex, startIndex + itemsPerPage)
        : [];
    }
    else if (hoveredItem === "Heating & Cooling") { // Adjust condition as needed
      items = activeTab5 !== undefined
        ? carousel5Data[tabs5[activeTab5]].slice(startIndex, startIndex + itemsPerPage)
        : [];
    }
    else if (hoveredItem === "Exterior") { // Adjust condition as needed
      items = activeTab6 !== undefined
        ? carousel6Data[tabs6[activeTab6]].slice(startIndex, startIndex + itemsPerPage)
        : [];
    }
    else if (hoveredItem === "Suspension & Steering") { // Adjust condition as needed
      items = activeTab7 !== undefined
        ? carousel7Data[tabs7[activeTab7]].slice(startIndex, startIndex + itemsPerPage)
        : [];
    } else {
      items = activeTab !== undefined
        ? carouselData[tabs[activeTab]].slice(startIndex, startIndex + itemsPerPage)
        : [];
    }
  
    setCurrentItems(items);
  }, [activeTab, activeTab2, activeTab3, activeTab4, activeTab5, activeTab6, activeTab7, startIndex, hoveredItem, tabs, tabs2, tabs3, tabs4, tabs5, tabs6, tabs7]);
  


  const handleTabChange = (index: number, tabType: 'tabs' | 'tabs2' | 'tabs3' | 'tabs4' | 'tabs5' | 'tabs6' | 'tabs7') => {
    switch (tabType) {
      case 'tabs':
        if (tabs[index]) setActiveTab(index);
        break;
      case 'tabs2':
        if (tabs2[index]) setActiveTab2(index);
        break;
      case 'tabs3':
        if (tabs3[index]) setActiveTab3(index);
        break;
      case 'tabs4':
        if (tabs4[index]) setActiveTab4(index);
        break;
      case 'tabs5':
        if (tabs5[index]) setActiveTab5(index);
        break;
      case 'tabs6':
        if (tabs6[index]) setActiveTab6(index);
        break;
      case 'tabs7':
        if (tabs7[index]) setActiveTab7(index);
        break;
    }
    setStartIndex(0);
  };
  

  const handlePrevClick = () => {
    const totalItems = activeTab !== undefined
      ? carouselData[tabs[activeTab]].length
      : activeTab2 !== undefined
      ? carousel2Data[tabs2[activeTab2]].length
      : activeTab3 !== undefined
      ? carousel3Data[tabs3[activeTab3]].length
      : activeTab4 !== undefined
      ? carousel4Data[tabs4[activeTab4]].length
      : activeTab5 !== undefined
      ? carousel5Data[tabs5[activeTab5]].length
      : activeTab6 !== undefined
      ? carousel6Data[tabs6[activeTab6]].length
      : activeTab7 !== undefined
      ? carousel7Data[tabs7[activeTab7]].length
      : 0;
  
    setStartIndex(prevStartIndex => Math.max(prevStartIndex - itemsPerPage, 0));
  };
  
  const handleNextClick = () => {
    const totalItems = activeTab !== undefined
      ? carouselData[tabs[activeTab]].length
      : activeTab2 !== undefined
      ? carousel2Data[tabs2[activeTab2]].length
      : activeTab3 !== undefined
      ? carousel3Data[tabs3[activeTab3]].length
      : activeTab4 !== undefined
      ? carousel4Data[tabs4[activeTab4]].length
      : activeTab5 !== undefined
      ? carousel5Data[tabs5[activeTab5]].length
      : activeTab6 !== undefined
      ? carousel6Data[tabs6[activeTab6]].length
      : activeTab7 !== undefined
      ? carousel7Data[tabs7[activeTab7]].length
      : 0;
  
    setStartIndex(prevStartIndex => Math.min(prevStartIndex + itemsPerPage, totalItems - itemsPerPage));
  };
  
  const totalSlides = activeTab !== undefined
    ? Math.ceil(carouselData[tabs[activeTab]].length / itemsPerPage)
    : activeTab2 !== undefined
    ? Math.ceil(carousel2Data[tabs2[activeTab2]].length / itemsPerPage)
    : activeTab3 !== undefined
    ? Math.ceil(carousel3Data[tabs3[activeTab3]].length / itemsPerPage)
    : activeTab4 !== undefined
    ? Math.ceil(carousel4Data[tabs4[activeTab4]].length / itemsPerPage)
    : activeTab5 !== undefined
    ? Math.ceil(carousel5Data[tabs5[activeTab5]].length / itemsPerPage)
    : activeTab6 !== undefined
    ? Math.ceil(carousel6Data[tabs6[activeTab6]].length / itemsPerPage)
    : activeTab6 !== undefined
    ? Math.ceil(carousel7Data[tabs7[activeTab7]].length / itemsPerPage)
    : 0;

    

const handleDotClick = (index: number) => {
    setActiveIndex(index);
    carouselRef.current?.goToSlide(index);
  };


  return (
    <main>
      <div className="header-menus-bar">
        <nav 
        className="navigation"
        onMouseLeave={handleNavMouseLeave}
        >
          <ul>
          {["Engine", "Body & Lamp Assembly", "Brake & Wheel Parts", "Drivetrain", "Heating & Cooling", "Exterior", "Suspension & Steering"].map((item, index) => (
              <li key={index} onMouseEnter={() => handleNavMouseEnter(item)}>
                {/* <Link href={`/services${index === 0 ? '' : `/${item.toLowerCase().replace(/ /g, '-')}`}`}> */}
                {/* <Link href="#"> */}
                  <p className='nav-link'>{item}</p>
                {/* </Link> */}
              </li>
            ))}
            <li>
              <a href="/about">
                <p className='nav-link'>About Us</p>
              </a>
            </li>
            <li>
              <a href="/BlogPage">
                <p className='nav-link'>Blog</p>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {(hoveredItem === "Engine") && (
        <div className={`nav-bg-div ${showNavBox ? "show" : "hide"}`}
          onMouseEnter={() => setShowNavBox(true)}
          onMouseLeave={() => setShowNavBox(false)}
        >
        <div className="navbar-content">
          <div className="nav-tabs">
            <ul>
            {tabs.map((tab, index) => (
                <li
                  key={index}
                  className={activeTab === index ? 'active' : ''}
                  onMouseEnter={() => handleTabChange(index, 'tabs')}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>
         
          <div className="nav-tabs-content">
            <h2>{tabs[activeTab]}</h2>
            <div className="carousel-controls">
              <div className='carousel-navigation'>
              <button className="carousel-control prev prev-button" onClick={handlePrevClick}>
              <img className='arrows-svg' src="/images/left-arrow.svg" alt="" />
                </button>
                <button className="carousel-control next next-button" onClick={handleNextClick}>
              <img className='arrows-svg' src="/images/right-arrow.svg" alt="" />
              </button>
              </div>

              <Carousel
                responsive={responsive}
                ref={carouselRef}
                afterChange={(previousIndex, { currentSlide }) => setActiveIndex(currentSlide)}
                customTransition="transform 0.5s ease-in-out"
                transitionDuration={500}
              >
                {currentItems.map(item => (
                  <div key={item.id} className="carousel-item">
                    <Image className='cate-imgs' src={item.src} alt={item.alt} width={100} height={100} />
                    <Link href='/'>
                      <p className="category-name">{truncateText(item.categoryName, 5)}</p>
                    </Link>
                  </div>
                ))}
              </Carousel>
              <CustomDots
                  dots={dotArray}
                  activeIndex={activeIndex}
                  onClick={handleDotClick}
                />
            </div>
          </div>
        </div>
      </div>
)}

{/*-------------------- Second Menu Content "Body & Lamp Assembly" ---------------------------*/}

{hoveredItem === "Body & Lamp Assembly" && (
  <div className={`nav-bg-div ${showNavBox ? "show" : "hide"}`}
    onMouseEnter={() => setShowNavBox(true)}
    onMouseLeave={(e) => handleNavBgMouseLeave(e)}
  >
    <div className="navbar-content">
      <div className="nav-tabs">
        <ul>
            {tabs2.map((tab, index) => (
              <li
                key={index}
                className={activeTab2 === index ? 'active' : ''}
                onMouseEnter={() => handleTabChange(index, 'tabs2')} // Change this to 'tabs7'
              >
                {tab}
              </li>
           ))}
        </ul>
      </div>

      <div className="nav-tabs-content">
        <h2>{tabs2[activeTab2]}</h2>
        <div className="carousel-controls">
          <div className="carousel-navigation">
            <button className="carousel-control prev prev-button" onClick={handlePrevClick}>
              <img className="arrows-svg" src="/images/left-arrow.svg" alt="Previous" />
            </button>
            <button className="carousel-control next next-button" onClick={handleNextClick}>
              <img className="arrows-svg" src="/images/right-arrow.svg" alt="Next" />
            </button>
          </div>

          <Carousel
            responsive={responsive}
            ref={carouselRef}
            afterChange={(previousIndex, { currentSlide }) => setActiveIndex(currentSlide)}
            customTransition="transform 0.5s ease-in-out"
            transitionDuration={500}
          >
            {currentItems.map((item) => (
              <div key={item.id} className="carousel-item">
                <Image className="cate-imgs" src={item.src} alt={item.alt} width={100} height={100} />
                <Link href="/">
                  <p className="category-name">{truncateText(item.categoryName, 5)}</p>
                </Link>
              </div>
            ))}
          </Carousel>

          <CustomDots
            dots={dotArray}
            activeIndex={activeIndex}
            onClick={handleDotClick}
          />
        </div>
      </div>
    </div>
  </div>
)}

{/*-------------------- Third Menu Content "Brake & Wheel Parts" ---------------------------*/}

{hoveredItem === "Brake & Wheel Parts" && (
  <div className={`nav-bg-div ${showNavBox ? "show" : "hide"}`}
    onMouseEnter={() => setShowNavBox(true)}
    onMouseLeave={(e) => handleNavBgMouseLeave(e)}
  >
    <div className="navbar-content">
      <div className="nav-tabs">
        <ul>
          {tabs3.map((tab, index) => (
          <li
            key={index}
            className={activeTab3 === index ? 'active' : ''}
            onMouseEnter={() => handleTabChange(index, 'tabs3')} // Change this to 'tabs7'
          >
            {tab}
          </li>
          ))}
        </ul>
      </div>

      <div className="nav-tabs-content">
        <h2>{tabs3[activeTab3]}</h2>
        <div className="carousel-controls">
          <div className="carousel-navigation">
            <button className="carousel-control prev prev-button" onClick={handlePrevClick}>
              <img className="arrows-svg" src="/images/left-arrow.svg" alt="Previous" />
            </button>
            <button className="carousel-control next next-button" onClick={handleNextClick}>
              <img className="arrows-svg" src="/images/right-arrow.svg" alt="Next" />
            </button>
          </div>

          <Carousel
            responsive={responsive}
            ref={carouselRef}
            afterChange={(previousIndex, { currentSlide }) => setActiveIndex(currentSlide)}
            customTransition="transform 0.5s ease-in-out"
            transitionDuration={500}
          >
            {currentItems.map((item) => (
              <div key={item.id} className="carousel-item">
                <Image className="cate-imgs" src={item.src} alt={item.alt} width={100} height={100} />
                <Link href="/">
                  <p className="category-name">{truncateText(item.categoryName, 5)}</p>
                </Link>
              </div>
            ))}
          </Carousel>

          <CustomDots
            dots={dotArray}
            activeIndex={activeIndex}
            onClick={handleDotClick}
          />
        </div>
      </div>
    </div>
  </div>
)}


{/*-------------------- Fourth Menu Content "Drivetrain" ---------------------------*/}

{hoveredItem === "Drivetrain" && (
  <div className={`nav-bg-div ${showNavBox ? "show" : "hide"}`}
    onMouseEnter={() => setShowNavBox(true)}
    onMouseLeave={(e) => handleNavBgMouseLeave(e)}
  >
    <div className="navbar-content">
      <div className="nav-tabs">
        <ul>
            {tabs4.map((tab, index) => (
            <li
              key={index}
              className={activeTab4 === index ? 'active' : ''}
              onMouseEnter={() => handleTabChange(index, 'tabs4')} // Change this to 'tabs7'
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-tabs-content">
        <h2>{tabs4[activeTab4]}</h2>
        <div className="carousel-controls">
          <div className="carousel-navigation">
            <button className="carousel-control prev prev-button" onClick={handlePrevClick}>
              <img className="arrows-svg" src="/images/left-arrow.svg" alt="Previous" />
            </button>
            <button className="carousel-control next next-button" onClick={handleNextClick}>
              <img className="arrows-svg" src="/images/right-arrow.svg" alt="Next" />
            </button>
          </div>

          <Carousel
            responsive={responsive}
            ref={carouselRef}
            afterChange={(previousIndex, { currentSlide }) => setActiveIndex(currentSlide)}
            customTransition="transform 0.5s ease-in-out"
            transitionDuration={500}
          >
            {currentItems.map((item) => (
              <div key={item.id} className="carousel-item">
                <Image className="cate-imgs" src={item.src} alt={item.alt} width={100} height={100} />
                <Link href="/">
                  <p className="category-name">{truncateText(item.categoryName, 5)}</p>
                </Link>
              </div>
            ))}
          </Carousel>

          <CustomDots
            dots={dotArray}
            activeIndex={activeIndex}
            onClick={handleDotClick}
          />
        </div>
      </div>
    </div>
  </div>
)}

{/*-------------------- Fifth Menu Content "Heating & Cooling" ---------------------------*/}

{hoveredItem === "Heating & Cooling" && (
  <div className={`nav-bg-div ${showNavBox ? "show" : "hide"}`}
    onMouseEnter={() => setShowNavBox(true)}
    onMouseLeave={(e) => handleNavBgMouseLeave(e)}
  >
    <div className="navbar-content">
      <div className="nav-tabs">
        <ul>
          {tabs5.map((tab, index) => (
            <li
              key={index}
              className={activeTab5 === index ? 'active' : ''}
              onMouseEnter={() => handleTabChange(index, 'tabs5')} // Change this to 'tabs7'
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-tabs-content">
        <h2>{tabs5[activeTab5]}</h2>
        <div className="carousel-controls">
          <div className="carousel-navigation">
            <button className="carousel-control prev prev-button" onClick={handlePrevClick}>
              <img className="arrows-svg" src="/images/left-arrow.svg" alt="Previous" />
            </button>
            <button className="carousel-control next next-button" onClick={handleNextClick}>
              <img className="arrows-svg" src="/images/right-arrow.svg" alt="Next" />
            </button>
          </div>

          <Carousel
            responsive={responsive}
            ref={carouselRef}
            afterChange={(previousIndex, { currentSlide }) => setActiveIndex(currentSlide)}
            customTransition="transform 0.5s ease-in-out"
            transitionDuration={500}
          >
            {currentItems.map((item) => (
              <div key={item.id} className="carousel-item">
                <Image className="cate-imgs" src={item.src} alt={item.alt} width={100} height={100} />
                <Link href="#">
                  <p className="category-name">{truncateText(item.categoryName, 5)}</p>
                </Link>
              </div>
            ))}
          </Carousel>

          <CustomDots
            dots={dotArray}
            activeIndex={activeIndex}
            onClick={handleDotClick}
          />
        </div>
      </div>
    </div>
  </div>
)}

{/*-------------------- Sixth Menu Content "Exterior" ---------------------------*/}

{hoveredItem === "Exterior" && (
  <div className={`nav-bg-div ${showNavBox ? "show" : "hide"}`}
    onMouseEnter={() => setShowNavBox(true)}
    onMouseLeave={(e) => handleNavBgMouseLeave(e)}
  >
    <div className="navbar-content">
      <div className="nav-tabs">
        <ul>
        {tabs6.map((tab, index) => (
          <li
            key={index}
            className={activeTab6 === index ? 'active' : ''}
            onMouseEnter={() => handleTabChange(index, 'tabs6')} // Change this to 'tabs7'
          >
            {tab}
          </li>
      ))}
        </ul>
      </div>

      <div className="nav-tabs-content">
        <h2>{tabs6[activeTab6]}</h2>
        <div className="carousel-controls">
          <div className="carousel-navigation">
            <button className="carousel-control prev prev-button" onClick={handlePrevClick}>
              <img className="arrows-svg" src="/images/left-arrow.svg" alt="Previous" />
            </button>
            <button className="carousel-control next next-button" onClick={handleNextClick}>
              <img className="arrows-svg" src="/images/right-arrow.svg" alt="Next" />
            </button>
          </div>

          <Carousel
            responsive={responsive}
            ref={carouselRef}
            afterChange={(previousIndex, { currentSlide }) => setActiveIndex(currentSlide)}
            customTransition="transform 0.5s ease-in-out"
            transitionDuration={500}
          >
            {currentItems.map((item) => (
              <div key={item.id} className="carousel-item">
                <Image className="cate-imgs" src={item.src} alt={item.alt} width={100} height={100} />
                <Link href="#">
                  <p className="category-name">{truncateText(item.categoryName, 5)}</p>
                </Link>
              </div>
            ))}
          </Carousel>

          <CustomDots
            dots={dotArray}
            activeIndex={activeIndex}
            onClick={handleDotClick}
          />
        </div>
      </div>
    </div>
  </div>
)}

{/*-------------------- Seventh Menu Content "Suspension & Steering" ---------------------------*/}

{hoveredItem === "Suspension & Steering" && (
  <div className={`nav-bg-div ${showNavBox ? "show" : "hide"}`}
    onMouseEnter={() => setShowNavBox(true)}
    onMouseLeave={(e) => handleNavBgMouseLeave(e)}
  >
    <div className="navbar-content">
      <div className="nav-tabs">
        <ul>
        {tabs7.map((tab, index) => (
        <li
          key={index}
          className={activeTab7 === index ? 'active' : ''}
          onMouseEnter={() => handleTabChange(index, 'tabs7')} // Change this to 'tabs7'
        >
          {tab}
        </li>
      ))}
        </ul>
      </div>

      <div className="nav-tabs-content">
        <h2>{tabs7[activeTab7]}</h2>
        <div className="carousel-controls">
          <div className="carousel-navigation">
            <button className="carousel-control prev prev-button" onClick={handlePrevClick}>
              <img className="arrows-svg" src="/images/left-arrow.svg" alt="Previous" />
            </button>
            <button className="carousel-control next next-button" onClick={handleNextClick}>
              <img className="arrows-svg" src="/images/right-arrow.svg" alt="Next" />
            </button>
          </div>

          <Carousel
            responsive={responsive}
            ref={carouselRef}
            afterChange={(previousIndex, { currentSlide }) => setActiveIndex(currentSlide)}
            customTransition="transform 0.5s ease-in-out"
            transitionDuration={500}
          >
            {currentItems.map((item) => (
              <div key={item.id} className="carousel-item">
                <Image className="cate-imgs" src={item.src} alt={item.alt} width={100} height={100} />
                <Link href="#">
                  <p className="category-name">{truncateText(item.categoryName, 5)}</p>
                </Link>
              </div>
            ))}
          </Carousel>

          <CustomDots
            dots={dotArray}
            activeIndex={activeIndex}
            onClick={handleDotClick}
          />
        </div>
      </div>
    </div>
  </div>
)}

    </main>
  );
}

export default Navigation;