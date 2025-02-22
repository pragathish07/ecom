import React from 'react';
import Slider from 'react-slick';
import { Star } from 'lucide-react';
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
    { id: 'sofas', name: 'Sofas' },
    { id: 'tables', name: 'Tables' },
    { id: 'beds', name: 'Beds' },
  ];

  const CategorySection = () => {
    return (
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-display font-bold mb-8">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="text-xl font-medium">{category.name}</h3>
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