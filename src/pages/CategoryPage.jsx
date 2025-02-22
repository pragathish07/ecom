// pages/CategoryPage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const products = {
  sofas: [
    { id: "1", name: 'Modern Sofa', price: 499.99, image: 'https://via.placeholder.com/300x200' },
    { id: "2", name: 'Classic Sofa', price: 599.99, image: 'https://via.placeholder.com/300x200' },
  ],
  tables: [
    { id: "3", name: 'Wooden Dining Table', price: 799.99, image: 'https://via.placeholder.com/300x200' },
    { id: "4", name: 'Glass Coffee Table', price: 299.99, image: 'https://via.placeholder.com/300x200' },
  ],
  beds: [
    { id: "5", name: 'Luxury Bed', price: 999.99, image: 'https://via.placeholder.com/300x200' },
    { id: "6", name: 'King Size Bed', price: 1199.99, image: 'https://via.placeholder.com/300x200' },
  ],
};

const CategoryPage = () => {
  const { categoryId } = useParams();
  const categoryProducts = products[categoryId] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6 capitalize">{categoryId} Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryProducts.length > 0 ? (
          categoryProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl font-medium">{product.name}</h3>
              <p className="text-primary font-semibold mt-2">${product.price}</p>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
