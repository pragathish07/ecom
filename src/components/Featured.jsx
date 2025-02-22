import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const featuredProducts = [
    {
      id: 1,
      name: 'Modern Sofa',
      price: 499.99,
      rating: 4.5,
      reviewCount: 128,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop',
      category: 'Living Room',
      description: 'Elegant modern sofa with premium comfort',
    },
    {
      id: 2,
      name: 'Wooden Dining Table',
      price: 799.99,
      rating: 4.8,
      reviewCount: 95,
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&auto=format&fit=crop',
      category: 'Dining Room',
      description: 'Handcrafted wooden dining table for 6',
    },
    {
      id: 3,
      name: 'Luxury Bed',
      price: 999.99,
      rating: 4.3,
      reviewCount: 156,
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop',
      category: 'Bedroom',
      description: 'Premium luxury bed with memory foam',
    },
    {
      id: 4,
      name: 'Accent Chair',
      price: 299.99,
      rating: 4.6,
      reviewCount: 84,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop',
      category: 'Living Room',
      description: 'Contemporary accent chair with ergonomic design',
    },
    {
      id: 5,
      name: 'Modern Bookshelf',
      price: 399.99,
      rating: 4.4,
      reviewCount: 73,
      image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&auto=format&fit=crop',
      category: 'Storage',
      description: 'Minimalist bookshelf with adjustable shelves',
    },
    {
      id: 6,
      name: 'Coffee Table',
      price: 249.99,
      rating: 4.7,
      reviewCount: 112,
      image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&auto=format&fit=crop',
      category: 'Living Room',
      description: 'Modern coffee table with storage compartment',
    }
  ];

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-display font-bold">Featured Products</h2>
        <button 
          className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
          onClick={() => navigate('/category/all')}
        >
          View All Products →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
              <button 
                className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  // Add to cart logic here
                }}
              >
                <ShoppingCart className="h-5 w-5 text-blue-600" />
              </button>
            </div>

            <div className="p-4">
              <div className="text-sm text-gray-500 mb-1">{product.category}</div>
              <h3 className="font-medium text-lg mb-2 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-gray-900">
                  ${product.price.toLocaleString()}
                </span>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-600">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">
                    ({product.reviewCount})
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;