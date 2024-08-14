import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, ChevronDown } from 'lucide-react';

const GroomingForMen = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const navItems = ['Home', 'Services', 'Gallery', 'About'];

  const services = [
    { name: 'Classic Haircut', price: '$30', image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&q=80' },
    { name: 'Beard Trim', price: '$20', image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&q=80' },
    { name: 'Hot Towel Shave', price: '$25', image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&q=80' },
    { name: 'Hair Styling', price: '$35', image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=500&q=80' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'Home':
        return (
          <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center relative" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1520338499918-9c5390000c9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          }}>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-wide text-center px-4 mb-4 text-shadow-lg">Welcome to Template 5</h2>
            <p className="text-xl text-white text-center text-shadow-lg">Experience the art of refined grooming</p>
            <div className="absolute bottom-16 animate-bounce">
              <ChevronDown size={40} color="white" />
            </div>
          </div>
        );
      case 'Services':
        return (
          <div className="p-8 md:p-16 min-h-screen">
            <h2 className="text-3xl md:text-4xl font-light mb-8 md:mb-12 tracking-wide text-[#2c2c2c]">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="border border-gray-200 overflow-hidden">
                  <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-[#2c2c2c]">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.price}</p>
                    <button className="bg-[#2c2c2c] text-white px-4 py-2 font-light tracking-wide hover:bg-gray-800 transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Gallery':
        return (
          <div className="p-8 md:p-16 min-h-screen">
            <h2 className="text-3xl md:text-4xl font-light mb-8 md:mb-12 tracking-wide text-[#2c2c2c]">Our Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="aspect-square bg-gray-200 overflow-hidden">
                  <img src={`/api/placeholder/400/400?text=Image ${index + 1}`} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        );
      case 'About':
        return (
          <div className="p-8 md:p-16 min-h-screen">
            <h2 className="text-3xl md:text-4xl font-light mb-6 md:mb-8 tracking-wide text-[#2c2c2c]">About Us</h2>
            <p className="text-lg font-light leading-relaxed max-w-3xl text-gray-700">
              At Steven Tabach, we pride ourselves on delivering exceptional grooming experiences for the modern gentleman. 
              Our skilled barbers combine traditional techniques with contemporary styles to ensure you leave our establishment 
              looking and feeling your best. With a heritage spanning decades, we've become a cornerstone of refined grooming in our community.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-300 font-serif">
      {/* Header */}
      <header className="bg-[#2c2c2c] p-4">
        <h1 className="text-2xl font-light tracking-wide text-center">BARBER SALON</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        {renderContent()}
      </main>

      {/* Footer Navigation */}
      <footer className="bg-[#2c2c2c] text-gray-300 p-4">
        <nav className="mb-4">
          <ul className="flex justify-around items-center">
            {navItems.map((item) => (
              <li key={item}>
                <button 
                  onClick={() => setActiveSection(item)}
                  className={`text-sm font-light tracking-wide transition-colors ${activeSection === item ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-center mb-4">
          <button className="bg-white text-[#2c2c2c] px-8 py-2 font-light tracking-wide hover:bg-gray-100 transition-colors">
            BOOK APPOINTMENT
          </button>
        </div>
        <div className="flex justify-center space-x-4">
          <Instagram size={20} />
          <Facebook size={20} />
          <Twitter size={20} />
        </div>
      </footer>
    </div>
  );
};

export default GroomingForMen;