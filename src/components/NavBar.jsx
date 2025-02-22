import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Store } from 'lucide-react';
import { useAuth } from '../Context/AuthContext';

const categories = [
  'All Categories',
  'Electronics',
  'Fashion',
  'Home & Living',
  'Books',
  'Sports',
];

function Navbar() {
    const { user, signInWithGoogle, logout } = useAuth();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-primary" />
            <span className="font-display text-2xl font-bold">ShopHub</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="flex">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border-2 border-r-0 border-gray-200 rounded-l-lg focus:outline-none focus:border-primary"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <div className="relative flex-1 flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="w-full px-4 py-2 border-2 border-l-0 border-gray-200 focus:outline-none focus:border-primary"
                />
                <button className="absolute right-2 text-gray-400 hover:text-primary">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <Link to="/account" className="text-gray-600 hover:text-primary">
              <User className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-primary relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
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