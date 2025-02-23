import React from 'react';
import Slider from 'react-slick';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import FeaturedProducts from '../components/Featured';
import { Link } from 'react-router-dom';

const carouselItems = [
  {
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    title: 'Summer Collection',
    subtitle: 'Up to 50% off on selected items',
  },
  {
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04',
    title: 'New Arrivals',
    subtitle: 'Check out our latest products',
  },
  {
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    title: 'Electronics Sale',
    subtitle: 'Get the best deals on electronics',
  },
];

const featuredProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 199.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 299.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
  },
  {
    id: 3,
    name: 'Premium Backpack',
    price: 79.99,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
  },
  {
    id: 4,
    name: 'Leather Wallet',
    price: 49.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93',
  },
];

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const categories = [
    { 
      id: 'sofas', 
      name: 'Sofas & Couches',
      description: 'Comfortable seating for your living room',
      itemCount: 124,
      // In your actual implementation, replace with real Unsplash URL
      imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
      imageAlt: 'Modern gray sofa in a minimalist living room',
      imageCredit: 'Photo by Phillip Goldsberry on Unsplash'
    },
    { 
      id: 'tables', 
      name: 'Tables & Desks',
      description: 'Dining, coffee, and work tables',
      itemCount: 98,
      imageUrl: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88',
      imageAlt: 'Wooden dining table with modern chairs',
      imageCredit: 'Photo by Nathan Fertig on Unsplash'
    },
    { 
      id: 'beds', 
      name: 'Beds & Mattresses',
      description: 'Quality sleep essentials',
      itemCount: 76,
      imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      imageAlt: 'Cozy bedroom with white bedding',
      imageCredit: 'Photo by Toa Heftiba on Unsplash'
    },
    { 
      id: 'storage', 
      name: 'Storage & Organization',
      description: 'Cabinets, shelves, and organizers',
      itemCount: 156,
      imageUrl: 'https://images.unsplash.com/photo-1558997519-83c9716b1b07',
      imageAlt: 'Modern storage cabinet with minimalist design',
      imageCredit: 'Photo by Sidekix Media on Unsplash'
    },
    { 
      id: 'lighting', 
      name: 'Lighting',
      description: 'Lamps, chandeliers, and sconces',
      itemCount: 89,
      imageUrl: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f',
      imageAlt: 'Modern pendant lights in contemporary setting',
      imageCredit: 'Photo by Naletu on Unsplash'
    },
    { 
      id: 'decor', 
      name: 'Home Decor',
      description: 'Finishing touches for your space',
      itemCount: 243,
      imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38',
      imageAlt: 'Stylish home decor arrangement',
      imageCredit: 'Photo by Rebecca Peterson-Hall on Unsplash'
    }
  ];
  
  const CategorySection = () => {
    return (
      <section className="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">Browse Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of furniture and home decor pieces
          </p>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                {/* For demonstration, using placeholder. In production, use category.imageUrl */}
                <img
                  src={category.imageUrl}
                  alt={category.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-white/80">{category.imageCredit}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.name}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {category.itemCount} items
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  Shop Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  };
  

  return (
    <div>
        <Carousel />
        <CategorySection />
        <FeaturedProducts />
     </div>
  );
}

export default Home;