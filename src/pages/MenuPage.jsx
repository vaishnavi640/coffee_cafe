import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// CoffeeCard Component
const CoffeeCard = ({ coffee }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
    <div className="p-6">
      <h4 className="text-xl font-bold text-amber-900 mb-2">{coffee.name}</h4>
      <p className="text-gray-600 mb-4">{coffee.description}</p>
      <span className="font-bold text-amber-800">£{coffee.price.toFixed(2)}</span>
    </div>
  </div>
);

// Navbar Component
const Navbar = () => (
  <nav className="bg-amber-800 text-white py-4 px-6 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Bennitos Cafe</h1>
    <div>
      <Link to="/" className="hover:text-amber-400">Back</Link>
    </div>
  </nav>
);

const menuSections = [
  {
    category: "Artisan Coffee",
    items: [
      { id: 1, name: 'Espresso', description: 'Strong and bold single shot of coffee.', price: 2.6 },
      { id: 2, name: 'Cortado', description: 'Espresso balanced with a small amount of warm milk', price: 2.8 },
      { id: 3, name: 'Americano', description: 'Diluted espresso for a smooth, long coffee.', price: 2.6 },
      { id: 4, name: 'Flat White', description: 'Velvety steamed milk over a double shot of espresso.', price: 3.5 },
      { id: 5, name: 'Latte', description: 'Creamy coffee with streamed milk and a touch of foam', price: 3.5 },
      { id: 6, name: 'Iced Latte', description: 'Chilled version of the classic latte.', price: 3.5 },
      { id: 7, name: 'Cappuccino', description: 'Frothy coffee with equal parts espresso, steamed milk, and foam.', price: 3.5 },
      { id: 8, name: 'Mocha', description: 'Rich coffee blended with chocolate and milk.', price: 3.6 }
    ]
  },
  {
    category: "Speciality Coffee",
    items: [
      { id: 9, name: 'Chai', description: 'Spiced Indian tea with milk.', price: 4 },
      { id: 10, name: 'Dirty Chai', description: 'Chai latte with a shot of espresso.', price: 4.5 },
      { id: 11, name: 'Biscoff Latte', description: 'Creamy latte infused with Biscoff flavor.', price: 4.5 },
      { id: 12, name: 'Affogato', description: 'Ice cream “drowned” in hot espresso.', price: 4.5 },
      { id: 13, name: 'Spanish Pistachio Latte', description: 'Nutty pistachio latte with a caramel twist.',price: 5 },
      { id: 14, name: 'Caramel Macchiato', description: 'Espresso layered with milk and caramel.', price: 5 }
    ]
  },
  {
    category: "Tea",
    items: [
      { id: 15, name: 'Breakfast Tea', description: 'Classic strong black tea.', price: 2.5 },
      { id: 16, name: 'Decaf', description: 'Non-caffeinated tea for a light sip.', price: 2.5 },
      { id: 17, name: 'Earl Grey', description: 'Fragrant black tea with bergamot notes.', price: 2.5 },
      { id: 18, name: 'Peppermint', description: 'Cool and refreshing herbal tea.', price: 2.5 },
      { id: 19, name: 'Fruit', description: 'Sweet and tangy fruit-infused tea.', price: 2.5 },
      { id: 20, name: 'Chamomile', description: 'Calming floral herbal tea.', price: 2.5 }
    ]
  },
  {
    category: "Soft Drinks",
    items: [
      { id: 21, name: 'Coke/Diet Coke', description: 'Classic fizzy cola drinks.', price: 2.5 },
      { id: 22, name: 'Peach/Lemon Iced Tea', description: 'Chilled fruity iced tea.', price: 2.5 },
      { id: 23, name: 'San Pellegrino', description: 'Premium Italian sparkling drink.', price: 2.2 },
      { id: 24, name: 'Sparkling Water', description: 'Refreshing carbonated water.', price: 2.2 },
      { id: 25, name: 'Apple/Orange/Water', description: 'Classic fruit juices and still water.', price: 1.5 }
    ]
  },
  {
    category: "Milkshake Menu",
    items: [
      { id: 26, name: 'Chocolate Milkshake', description: '', price: 4.99 },
      { id: 27, name: 'Choco-Brownie Milkshake', description: '', price: 4.99 },
      { id: 28, name: 'Choco-Nutella Milkshake', description: '', price: 4.99 },
      { id: 29, name: 'Mango Milkshake', description: '', price: 4.99 },
      { id: 30, name: 'Strawberry Milkshake', description: '', price: 4.99 },
      { id: 31, name: 'Raspberry Milkshake', description: '', price: 4.99 },
      { id: 32, name: 'Banana Milkshake', description: '', price: 4.99 },
      { id: 33, name: 'Oreo Milkshake', description: '', price: 4.99 },
      { id: 34, name: 'Biscoff Milkshake', description: '', price: 4.99 }
    ]
  },
  {
    category: "Chocolate Bar Milkshake Menu",
    items: [
      { id: 35, name: 'Maltesers', description: '', price: 5.99 },
      { id: 36, name: 'Kinder Bueno', description: '', price: 5.99 },
      { id: 37, name: 'Kinder Bueno White', description: '', price: 5.99 },
      { id: 38, name: 'Galaxy', description: '', price: 5.99 },
      { id: 39, name: 'Ferrero Rocher', description: '', price: 5.99 },
      { id: 40, name: 'Daim', description: '', price: 5.99 }
    ]
  },
  {
    category: "Smoothies",
    items: [
      { id: 41, name: 'Small Smoothie', description: '', price: 4.99 },
      { id: 42, name: 'Large Smoothie', description: '', price: 5.99 }
    ]
  },
  {
    category: "Hot Food",
    items: [
      { id: 43, name: 'Hot Filled Rolls', description: 'Only served until 11:30 AM.', price: 2.75 },
      { id: 44, name: 'French Toast', description: 'Served with syrup, Nutella, or honey.', price: 8 },
      { id: 45, name: 'Avocado Toast', description: 'Served with bacon or eggs.', price: 8 },
      { id: 46, name: 'Toasted Croissant', description: 'Served with Nutella, butter, or jam.', price: 4 }
    ]
  },
  {
    category: "Paninis/Sandwiches",
    items: [
      { id: 47, name: 'Hey Pesto!', description: 'Creamy brie, parma ham, basil pesto and caramelised red onion chutney.', price: 9.5 },
      { id: 48, name: 'Pollo Panini', description: 'Chicken breast, mozzarella, and red pesto.', price: 9.5 },
      { id: 49, name: 'Super Salami!', description: 'Salami, mozzarella, green pesto and jalapenos.', price: 9.5 },
      { id: 50, name: 'Tuna Melt', description: 'Tuna, crunchy peppers, onion, and cheddar cheese.', price: 9.5 },
      { id: 51, name: 'The Vegan One', description: 'Red pesto, cheese, and sundried tomatoes.', price: 9.5 }
    ]
  },
  {
    category: "Wraps",
    items: [
      { id: 52, name: 'The Greek', description: 'Chicken breast, grilled halloumi, tzatziki, olives, and salad.', price: 9.5 },
      { id: 53, name: 'The Italian', description: 'Spiced marinated chicken, mozzarella, and salad.', price: 9.5 },
      { id: 54, name: 'Roots', description: 'Roasted sweet potato, peppers, and falafel with mint sauce.', price: 9.5 }
    ]
  },
  {
    category: "Kids Menu",
    items: [
      { id: 55, name: 'Cheese + Ham Toast', description: '', price: 3.49 },
      { id: 56, name: 'Toasted Bagel with Nutella', description: '', price: 4 },
      { id: 57, name: 'Nutella Toast', description: '', price: 3 }
    ]
  },
  {
    category: "Extras & Sides",
    items: [
      { id: 58, name: 'French Fries - Small', description: '', price: 2.99 },
      { id: 59, name: 'French Fries - Large', description: '', price: 3.99 },
      { id: 60, name: 'Fresh Scones', description: 'Freshly baked scones.', price: 3.3 }
    ]
  }
];

const Menu = ({ searchQuery, setSearchQuery }) => {
  const filteredSections = menuSections.map((section) => ({
    ...section,
    items: section.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(section => section.items.length > 0);

  return (
    <section id="menu" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 text-center flex-grow">Our Menu</h2>
          <input
            type="text"
            className="py-2 px-4 rounded-lg border-2 border-black focus:ring-2 focus:ring-amber-500 text-black w-60"
            placeholder="Search an item "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {filteredSections.length > 0 ? (
          filteredSections.map((section, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-semibold text-amber-800 mb-6 border-b border-amber-300 pb-2">
                {section.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map(item => (
                  <CoffeeCard key={item.id} coffee={item} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No items match your search query.</p>
        )}
      </div>
    </section>
  );
};

const MenuPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-20">
        <Menu searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </div>
  );
};

export default MenuPage;
