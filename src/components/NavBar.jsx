import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Store } from 'lucide-react';
import { useAuth } from '../Context/AuthContext';
import { useCart } from '../Context/CartContext';

const categories = [
  'All Categories',
  'Electronics',
  'Fashion',
  'Home & Living',
  'Books',
  'Sports',
];

function Navbar({products}) {
    const { user, signInWithGoogle, logout } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { cart } = useCart(); 

  const handleSearch = (query) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setFilteredProducts([]);
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  const handleSelectProduct = (product) => {
    setSearchTerm(product.name);
    setFilteredProducts([]);
    setShowResults(false); // Hide results after selection
    // Navigate to the product page
    window.location.href = `/product/${product.id}`;
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-primary" />
            <span className="font-display text-2xl font-bold">ShopHub</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 rounded-lg bg-white p-2">
          <div className="flex items-center border rounded-lg overflow-hidden">
            {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-gray-100 border-r outline-none hover:bg-gray-200 transition"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search for products..."
                className="w-full px-4 py-2 focus:outline-none text-gray-800"
              />

              {/* Search Results Dropdown */}
              {filteredProducts.length > 0 && (
                <ul className="absolute w-full bg-white shadow-lg rounded-md mt-2 max-h-40 overflow-auto z-10 border">
                  {filteredProducts.map((product) => (
                    <li key={product.id} className="border-b last:border-none">
                      <Link
                        to={`/product/${product.id}`}
                        className="block px-4 py-2 hover:bg-primary text-gray-700 hover:text-white transition"
                        onClick={() => handleSelectProduct(product)}
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>


          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <Link to="/dashboard" className="text-gray-600 hover:text-primary">
              <User className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-primary relative">
            <div className="relative">
                <ShoppingCart className="h-6 w-6" />

                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
                    {cart.length}
                  </span>
                )}
              </div>
              
            </Link>
            <div>
        {user ? (
          <div className="flex items-center gap-4">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-10 h-10 rounded-full border"
            />
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to={{ pathname: '/login', state: { from: window.location.pathname
            } }}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </Link>
        )}
      </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;