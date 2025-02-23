import React from 'react';
import { useParams } from 'react-router-dom';

const featuredProducts = [
  {
    id: 1,
    name: 'Modern Sofa',
    price: 499.99,
    rating: 4.5,
    reviewCount: 128,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop',
    category: 'Living Room',
    description: 'Elegant modern sofa with premium comfort.',
  },
  {
    id: 2,
    name: 'Wooden Dining Table',
    price: 799.99,
    rating: 4.8,
    reviewCount: 95,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&auto=format&fit=crop',
    category: 'Dining Room',
    description: 'Handcrafted wooden dining table for 6.',
  },
  {
    id: 3,
    name: 'Luxury Bed',
    price: 999.99,
    rating: 4.3,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&auto=format&fit=crop',
    category: 'Bedroom',
    description: 'Premium luxury bed with memory foam.',
  },
  {
    id: 4,
    name: 'Accent Chair',
    price: 299.99,
    rating: 4.6,
    reviewCount: 84,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&auto=format&fit=crop',
    category: 'Living Room',
    description: 'Contemporary accent chair with ergonomic design.',
  },
  {
    id: 5,
    name: 'Modern Bookshelf',
    price: 399.99,
    rating: 4.4,
    reviewCount: 73,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&auto=format&fit=crop',
    category: 'Storage',
    description: 'Minimalist bookshelf with adjustable shelves.',
  },
  {
    id: 6,
    name: 'Coffee Table',
    price: 249.99,
    rating: 4.7,
    reviewCount: 112,
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&auto=format&fit=crop',
    category: 'Living Room',
    description: 'Modern coffee table with storage compartment.',
  }
];

const ProductPage = () => {
  const { productId } = useParams();
  const product = featuredProducts.find(p => p.id.toString() === productId);

  if (!product) {
    return <div className="text-center text-gray-600 py-20 text-xl">Product not found.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img
            src={product.image || 'https://via.placeholder.com/800'}
            alt={product.name }
            className="w-full h-96 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-lg text-gray-500 mt-2">{product.category}</p>

            {/* Price & Rating */}
            <div className="flex items-center mt-3">
              <p className="text-2xl font-semibold text-primary">${product.price}</p>
              <span className="ml-4 flex items-center text-yellow-500">
                {'⭐'.repeat(Math.round(product.rating))}
                <span className="ml-2 text-gray-600 text-sm">({product.reviewCount} reviews)</span>
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-700">{product.description}</p>
          </div>

          {/* Buttons */}
          <div className="flex mt-6 space-x-4">
            <button className="bg-primary px-6 py-3 rounded-lg hover:bg-primary-dark transition">
              Add to Cart 🛒
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
