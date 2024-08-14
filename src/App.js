import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => (
  <nav className="bg-white py-4 shadow-md">
    <div className="container mx-auto text-center">
      <h1 className="text-2xl font-bold text-black">Barber Salon</h1>
    </div>
  </nav>
);

const ServiceBanner = ({ title, imageUrl, price, description }) => (
  <div className="relative h-screen">
    <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-start">
      <div className="container mx-auto px-8">
        <h3 className="text-white text-5xl font-bold mb-4">{title}</h3>
        <p className="text-white text-2xl mb-2">Price: ${price}</p>
        <p className="text-white text-xl mb-6 max-w-2xl">{description}</p>
        <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">Book Now</button>
      </div>
    </div>
  </div>
);

const ImageModal = ({ src, alt, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
    <div className="max-w-3xl max-h-full p-4 bg-white rounded-lg" onClick={e => e.stopPropagation()}>
      <img src={src} alt={alt} className="max-w-full max-h-[80vh] object-contain" />
      <button onClick={onClose} className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition duration-300">Close</button>
    </div>
  </div>
);

const App = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src, alt) => setModalImage({ src, alt });
  const closeModal = () => setModalImage(null);

  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'apple-mobile-web-app-status-bar-style';
    meta.content = 'white';
    document.getElementsByTagName('head')[0].appendChild(meta);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <Navbar />
      
      {/* Header */}
      <header className="h-screen bg-cover bg-center flex flex-col items-center justify-between relative" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'}}>
        <div className="container mx-auto text-white p-8 flex-grow flex items-center">
          <h2 className="text-5xl font-bold mb-4 text-left leading-tight">
            Best Barbershop<br />in the entire<br />Middle Eastern<br />Hemisphere
          </h2>
        </div>
        <div className="mb-8 animate-bounce">
          <ChevronDown size={48} color="white" onClick={scrollToContent} className="cursor-pointer" />
        </div>
      </header>

      {/* Full-width Banners */}
      <section>
        <ServiceBanner 
          title="Precision Haircuts" 
          imageUrl="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          price="35"
          description="Get a perfectly tailored haircut that suits your style and face shape. Our expert barbers use precision techniques to ensure you leave looking sharp."
        />
        <ServiceBanner 
          title="Beard Grooming" 
          imageUrl="https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          price="25"
          description="Transform your beard with our expert grooming service. We'll shape, trim, and style your beard to perfection, enhancing your facial features."
        />
        <ServiceBanner 
          title="Hot Towel Shave" 
          imageUrl="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          price="30"
          description="Experience the ultimate in relaxation and grooming with our hot towel shave. Enjoy a close, smooth shave that leaves your skin feeling refreshed."
        />
        <ServiceBanner 
          title="Styling & Finishing" 
          imageUrl="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          price="20"
          description="Complete your look with our professional styling service. We'll use premium products to ensure your hair looks its best all day long."
        />
        <ServiceBanner 
          title="Kid's Haircuts" 
          imageUrl="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          price="25"
          description="Bring your little ones for a fun and friendly haircut experience. Our barbers are great with kids and ensure they leave with a smile and a great look."
        />
      </section>

      {/* Gallery */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-left mb-16 text-black">Our Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <img 
                key={item} 
                src={`https://source.unsplash.com/featured/300x300?barbershop${item}`}
                alt={`Hairstyle ${item}`} 
                className="w-full h-64 object-cover rounded-lg shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
                onClick={() => openModal(`https://source.unsplash.com/featured/800x600?barbershop${item}`, `Hairstyle ${item}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Opening Hours</h3>
            <p>Daily: 01PM to 10PM</p>
            <p>Closed on Sundays</p>
            <button className="mt-4 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition duration-300">Location</button>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <p>For customer care, text us!</p>
            <button className="mt-4 bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition duration-300">WhatsApp Us</button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Barbershop. All rights reserved.</p>
        </div>
      </footer>

      {modalImage && <ImageModal src={modalImage.src} alt={modalImage.alt} onClose={closeModal} />}
    </div>
  );
};

export default App;