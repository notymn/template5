import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const LoadingScreen = () => (
  <div id="loading-screen">
    <div className="loader"></div>
  </div>
);

const Header = () => (
  <header className="sticky-header">
    <div className="container">
      <div className="header-content">
        <div className="logo">HairSalon</div>
        <nav>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="https://hairsalonv2-c4b8bdea50c0.herokuapp.com/">Bookings</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section id="hero">
    <div className="container">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Welcome to HairSalon</h1>
        <p>Your premium barber experience</p>
        <a href="#services" className="btn discover-more">
          <span>Discover More</span>
        </a>
      </motion.div>
    </div>
  </section>
);

const Service = ({ title, description, price, image }) => (
  <motion.div 
    className="service"
    style={{ backgroundImage: `url(${image})` }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h3>{title}</h3>
    <p>{description}</p>
    <p className="price">${price}</p>
    <a href="https://hairsalonv2-c4b8bdea50c0.herokuapp.com/" className="btn book-now">Book Now</a>
  </motion.div>
);

const Services = () => (
  <section id="services">
    <div className="container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>
      <Service 
        title="Haircut" 
        description="Get a stylish haircut from our expert barbers." 
        price={25} 
        image="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
      />
      <Service 
        title="Shaving" 
        description="Enjoy a clean shave with our premium products." 
        price={15} 
        image="https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
      <Service 
        title="Beard Trim" 
        description="Keep your beard neat and tidy with our trimming service." 
        price={20} 
        image="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />
    </div>
  </section>
);

const About = () => (
  <section id="about">
    <div className="container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        We provide the best barber services in town, tailored to your unique style.
      </motion.p>
    </div>
    <div className="information-section">
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>OPENING HOURS</h3>
          <p>DAILY 01PM TO 10PM</p>
          <p>CLOSED ON SUNDAYS</p>
          <button className="btn">LOCATION</button>
        </div>
        <div className="footer-section">
          <h3>CONTACT</h3>
          <p>FOR CUSTOMER CARE</p>
          <p>TEXT US!</p>
          <button className="btn">WHATSAPP US</button>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 HairSalon. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <div id="content" className={loading ? 'hidden' : ''}>
        <Header />
        <Hero />
        <Services />
        <About />
        <Footer />
      </div>
    </>
  );
};

export default App;