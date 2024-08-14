import React, { useState, useEffect } from 'react';
import { Instagram, Twitter, Menu, X } from 'lucide-react';

const TikTokIcon = ({ size = 24, color = 'currentColor', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" fill={color} />
  </svg>
);

const BarberShopWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const backgroundStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1510574037072-45ff3b67f3e9?q=80&w=1867&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'EB Garamond, serif',
  };

  const headerStyle = {
    padding: '1rem',
    position: 'relative',
    zIndex: 1000,
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white',
    textDecoration: 'none',
  };

  const navItemsStyle = {
    display: isMobile ? 'none' : 'flex',
    flexDirection: 'row',
    gap: '1.5rem',
  };

  const mobileMenuStyle = {
    position: 'fixed',
    top: 0,
    right: isMobileMenuOpen ? 0 : '-100%',
    bottom: 0,
    width: '250px',
    backgroundColor: 'black',
    transition: 'right 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    zIndex: 1000,
  };

  const navItemStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    padding: '0.5rem',
    transition: 'color 0.3s ease',
  };

  const mainStyle = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
    color: 'white',
  };

  const h1Style = {
    fontSize: '3rem',
    margin: '0 0 1rem 0',
    fontWeight: 'bold',
    color: 'white',
  };

  const taglineStyle = {
    fontSize: '1.2rem',
    margin: '0 0 1rem 0',
    color: 'white',
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    textTransform: 'uppercase',
    background: 'transparent',
    border: '2px solid white',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontFamily: 'EB Garamond, serif',
  };

  const footerStyle = {
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  };

  const socialIconStyle = {
    color: 'white',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
  };

  const serviceBannerStyle = {
    backgroundColor: 'white',
    color: 'black',
    padding: '1rem',
    margin: '1rem 0',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px',
  };

  const productCardStyle = {
    backgroundColor: 'white',
    color: 'black',
    padding: '1rem',
    margin: '1rem',
    borderRadius: '8px',
    width: '250px',
    textAlign: 'center',
  };

  const productGridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  };

  const services = [
    { name: 'Haircut', price: '$30' },
    { name: 'Shave', price: '$20' },
    { name: 'Beard Trim', price: '$15' },
    { name: 'Hair Styling', price: '$25' },
  ];

  const products = [
    { name: 'Shampoo', price: '$15', image: 'https://via.placeholder.com/150' },
    { name: 'Conditioner', price: '$15', image: 'https://via.placeholder.com/150' },
    { name: 'Styling Gel', price: '$12', image: 'https://via.placeholder.com/150' },
    { name: 'Beard Oil', price: '$18', image: 'https://via.placeholder.com/150' },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return (
          <div>
            <h2 style={{marginBottom: '2rem', color: 'white'}}>Our Services</h2>
            {services.map((service, index) => (
              <div key={index} style={serviceBannerStyle}>
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.price}</p>
                </div>
                <button style={buttonStyle}>Book Now</button>
              </div>
            ))}
          </div>
        );
      case 'products':
        return (
          <div>
            <h2 style={{marginBottom: '2rem', color: 'white'}}>Our Products</h2>
            <div style={productGridStyle}>
              {products.map((product, index) => (
                <div key={index} style={productCardStyle}>
                  <img src={product.image} alt={product.name} style={{width: '100%', marginBottom: '1rem'}} />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <button style={{...buttonStyle, backgroundColor: 'black', color: 'white', marginTop: '1rem'}}>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <>
            <h1 style={h1Style}>BARBERSALON</h1>
            <p style={taglineStyle}>Quality & Precision</p>
            <p style={{...taglineStyle, fontSize: '1rem', marginBottom: '2rem'}}>EST. 2016</p>
            <button style={buttonStyle}>BOOK YOUR APPOINTMENT</button>
          </>
        );
    }
  };

  return (
    <div style={backgroundStyle}>
      <header style={headerStyle}>
        <nav style={navStyle}>
          <a href="#" style={logoStyle} onClick={() => setCurrentPage('home')}>BARBERSALON</a>
          {isMobile ? (
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{background: 'none', border: 'none', color: 'white'}}>
              <Menu size={24} />
            </button>
          ) : (
            <div style={navItemsStyle}>
              <a href="#" style={navItemStyle} onClick={() => setCurrentPage('home')}>HOME</a>
              <a href="#" style={navItemStyle} onClick={() => setCurrentPage('services')}>SERVICES</a>
              <a href="#" style={navItemStyle} onClick={() => setCurrentPage('products')}>PRODUCTS</a>
              <a href="#" style={navItemStyle}>FAQ</a>
            </div>
          )}
        </nav>
      </header>
      
      {isMobile && (
        <div style={mobileMenuStyle}>
          <button onClick={() => setIsMobileMenuOpen(false)} style={{alignSelf: 'flex-end', background: 'none', border: 'none', color: 'white', marginBottom: '2rem'}}>
            <X size={24} />
          </button>
          <a href="#" style={navItemStyle} onClick={() => { setCurrentPage('home'); setIsMobileMenuOpen(false); }}>HOME</a>
          <a href="#" style={navItemStyle} onClick={() => { setCurrentPage('services'); setIsMobileMenuOpen(false); }}>SERVICES</a>
          <a href="#" style={navItemStyle} onClick={() => { setCurrentPage('products'); setIsMobileMenuOpen(false); }}>PRODUCTS</a>
          <a href="#" style={navItemStyle} onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
        </div>
      )}
      
      <main style={mainStyle}>
        {renderPage()}
      </main>
      
      <footer style={footerStyle}>
        <Instagram style={socialIconStyle} size={24} />
        <Twitter style={socialIconStyle} size={24} />
        <TikTokIcon style={socialIconStyle} size={24} />
      </footer>
    </div>
  );
};

export default BarberShopWebsite;