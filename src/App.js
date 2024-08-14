import React, { useState, useRef } from 'react';
import { Clock, Menu, X, ChevronDown } from 'lucide-react';

const GroomingForMen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const aboutUsRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const services = [
    { name: 'Haircut', image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=500&q=80' },
    { name: 'Beard Trim', image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&q=80' },
    { name: 'Beard Sculpting', image: 'https://images.unsplash.com/photo-1590159763121-7c9fd312190d?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Color Treatment', image: 'https://images.unsplash.com/photo-1649875019582-3902bc9cfe37?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <div className="h-screen bg-cover bg-center flex flex-col" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1635273052107-90bc358f3a6d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}>
        <header className="container mx-auto px-4 py-8 flex justify-between items-center">
          <div className="text-xl font-bold">BARBER SALON</div>
          <button className="hidden md:block bg-[#c9a77c] text-black px-4 py-2 rounded hover:bg-[#b08e6d] transition-colors">
            SCHEDULE AN APPOINTMENT
          </button>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>
        
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block container mx-auto px-4 mb-8 md:mb-0`}>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => scrollToSection(servicesRef)} className="hover:text-[#c9a77c] transition-colors">SERVICES</button></li>
            <li><button onClick={() => scrollToSection(galleryRef)} className="hover:text-[#c9a77c] transition-colors">GALLERY</button></li>
            <li><button onClick={() => scrollToSection(aboutUsRef)} className="hover:text-[#c9a77c] transition-colors">ABOUT US</button></li>
          </ul>
        </nav>
        
        <div className="flex-grow flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">GROOMING</h1>
          <h2 className="text-2xl md:text-4xl font-light mb-8">for MEN</h2>
          <ChevronDown size={40} className="animate-bounce" />
        </div>
      </div>

      <section ref={servicesRef} className="bg-white text-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <img src={service.image} alt={service.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <button className="bg-[#c9a77c] text-white font-semibold px-6 py-2 rounded-full w-full hover:bg-[#b08e6d] transition-all duration-300 transform hover:scale-105 shadow-md">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={galleryRef} className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                <img src={`/api/placeholder/300/300?text=Image ${index + 1}`} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={aboutUsRef} className="bg-[#c9a77c] text-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-center max-w-2xl mx-auto">
            At Barber Salon, we're passionate about providing top-notch grooming services for men. 
            Our experienced team of barbers and stylists are dedicated to helping you look and feel your best. 
            With a focus on quality, style, and client satisfaction, we've been serving our community for over a decade.
          </p>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 bg-[#c9a77c] rounded-full p-2">
        <Clock size={24} color="black" />
      </div>
    </div>
  );
};

export default GroomingForMen;