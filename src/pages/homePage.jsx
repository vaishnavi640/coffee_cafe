import { useState } from 'react';
import './homePage.css';

// Corrected Imports for Images
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';
import food3 from '../assets/food3.jpg';
import food4 from '../assets/food4.jpg';
import food5 from '../assets/food5.jpg';
import food6 from '../assets/food6.jpg';

// gallery images
const galleryImages = [
  { id: 1, src: food1, alt: 'food' },
  { id: 2, src: food2, alt: 'food' },
  { id: 3, src: food3, alt: 'food' },
  { id: 4, src: food4, alt: 'food' },
  { id: 5, src: food5, alt: 'food' },
  { id: 6, src: food6, alt: 'food' },
];


// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-amber-800 text-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Bennitos Cafe</h1>
        <button
          className="md:hidden text-white bg-amber-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="relative group">Home</a>
          <a href="menu" className="relative group">Menu</a>
          <a href="#about" className="relative group">About</a>
          <a href="#gallery" className="text-white">Gallery</a>
          <a href="#contact" className="relative group">Contact</a>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-amber-600 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <a href="#" className="text-white">Home</a>
            <a href="/menu" className="text-white">Menu</a>
            <a href="#about" className="text-white">About</a>
            <a href="#gallery" className="text-white">Gallery</a>
            <a href="#contact" className="text-white">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

// Hero Component
const Hero = () => (
  <div
    className="bg-cover bg-center bg-no-repeat py-20 md:py-28 relative"
    style={{ backgroundImage: `url('/bennetios.jpg')` }}
  >
    {/* Add a gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/25 to-black/25"></div>
    <div className="relative text-center text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to The Bennitos Cafe</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Everything You Love. Wrapped, Bowled & Brewed.
        </p>
      </div>
    </div>
  </div>
);


// Gallery Component
const Gallery = () => (
  <section id="gallery" className="py-16 bg-amber-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-900">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {galleryImages.map(image => (
          <div key={image.id} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-80 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Other components (About, Contact, Footer) remain the same

const About = () => (
  <section id="about" className="py-16 bg-amber-800">
    <div className="container mx-auto px-4 text-center text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">About Us</h2>
      <p className="text-lg max-w-3xl mx-auto">
        Founded in 2020, Bennitos Cafe is committed to serving the highest quality food and beverages.
        Our team is passionate about freshness, flavor, and community.
      </p>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-16 bg-amber-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-900">Visit Us</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-amber-800">Location</h3>
          <p className="text-gray-700">199 St John’s Road, Edinburgh, EH12 7UU, London</p>
          <h3 className="text-xl font-bold mt-6 mb-2 text-amber-800">Hours</h3>
          <p className="text-gray-700">Mon–Sat: 8:00am - 9:00pm</p>
          <p className="text-gray-700">Sunday: 9:00am - 11:00pm</p>
        </div>
        <div>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-md" />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-md" />
            <textarea placeholder="Your Message" rows="4" className="w-full p-3 border rounded-md"></textarea>
            <button type="submit" className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-6 rounded-md transition">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-amber-900 text-white py-8">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">Benitos Cafe</h3>
        <a href="https://www.instagram.com/bennitoscafe" className="block hover:text-amber-200">Instagram</a>
        <a href="https://www.facebook.com/BennitosDeli" className="block hover:text-amber-200">Facebook</a>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Contact</h3>
        <p>+44 123 567 890</p>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Email</h3>
        <p>bennitoscafe2024@gmail.com</p>
      </div>
    </div>
    <div className="text-center mt-6 border-t border-amber-700 pt-4">
      <p>&copy; 2025 Bennitos Cafe. All rights reserved.</p>
    </div>
  </footer>
);

// Main Component
const CoffeeShopApp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-16">
        <Hero />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default CoffeeShopApp;
