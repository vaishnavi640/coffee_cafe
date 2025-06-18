import { useState } from 'react';
import './homepage.css';

// Menu Data
const coffeeMenu = [
  {
    id: 1,
    name: 'Espresso',
    description: 'A concentrated form of coffee served in small, strong shots.',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'Cappuccino',
    description: 'Espresso with steamed milk foam, perfect balance of strong coffee and creamy milk.',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'Latte',
    description: 'Espresso with steamed milk and a light layer of foam, smooth and mild.',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: 'Americano',
    description: 'Espresso diluted with hot water, similar strength to regular coffee but different flavor.',
    price: 3.75,
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    name: 'Mocha',
    description: 'Espresso with chocolate and steamed milk, topped with whipped cream.',
    price: 5.25,
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    name: 'Cold Brew',
    description: 'Coffee steeped in cold water for 12+ hours, resulting in a smooth, less acidic flavor.',
    price: 4.95,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
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
          <a href="#menu" className="relative group">Menu</a>
          <a href="#about" className="relative group">About</a>
          <a href="#contact" className="relative group">Contact</a>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-amber-600 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <a href="#" className="text-white">Home</a>
            <a href="#menu" className="text-white">Menu</a>
            <a href="#about" className="text-white">About</a>
            <a href="#contact" className="text-white">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <div className="bg-amber-900 text-white py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to The Bennitos Cafe</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Everything You Love. Wrapped, Bowled & Brewed.</p>
      </div>
    </div>
  );
};

// Menu Component
const Menu = () => {
  return (
    <section id="menu" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-900">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeMenu.map(coffee => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Coffee Card Component
const CoffeeCard = ({ coffee }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
      <div className="h-56 overflow-hidden">
        <img 
          src={coffee.image} 
          alt={coffee.name} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-amber-900">{coffee.name}</h3>
          <span className="font-bold text-amber-800">${coffee.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 mb-6">{coffee.description}</p>
      </div>
    </div>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="py-16 bg-amber-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">About Us</h2>
          <p className="text-lg mb-6 text-white">
            Founded in 2020, Bennitos Cafe is committed to serving the highest quality coffee sourced from sustainable farms. 
            Our expert baristas are passionate about crafting the perfect cup of coffee. 
            We believe in building community through coffee, creating a warm and welcoming space for all.
          </p>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-900">Visit Us</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-800">Location</h3>
            <p className="mb-2 text-gray-700">199 St John’s Road, Corstorphine,</p>
            <p className="mb-6 text-gray-700">London</p>
            <h3 className="text-xl font-bold mb-4 text-amber-800"> Hours</h3>
            <p className="mb-2 text-gray-700">Monday - Saturday : 8:00am - 5:00pm</p>
            <p className="text-gray-700">Sunday: 9:00am - 4:00pm</p>
          </div>
          <div>
            <p className="mb-4 text-xl font-bold text-amber-800">Have questions? Reach out to us!</p>
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
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">The Village Cafe</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/bennitoscafe" className="hover:text-amber-200 transition">Instagram</a>
              <a href="https://www.facebook.com/BennitosDeli" className="hover:text-amber-200 transition">Facebook</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">+44 123 567 890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Email Us On</h3>
            <p>udaybennitoscafe@gmail.com</p>
          </div>
        </div>
        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p>&copy; 2025 Bennitos Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const CoffeeShopApp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="pt-16">
        <Hero />
        <Menu />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default CoffeeShopApp;
