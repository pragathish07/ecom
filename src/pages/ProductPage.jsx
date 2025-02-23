import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, HelpCircle, Info, ShoppingCart } from 'lucide-react';
import FAQ from '../components/Faq';
import { useCart } from '../Context/CartContext';
import { useParams } from 'react-router-dom';



const productData = [
  {
    id: 1,
    name: 'Fully Automatic Top Load Washing Machine',
    basePrice: 1189,
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ],
    category: 'Appliances',
    description: '100% Refundable deposit. Free relocation & upgrades.',
    tenureOptions: [
      { months: 3, price: 1300 },
      { months: 6, price: 1100 },
      { months: 12, price: 900 },
      { months: 24, price: 721 },
    ],
    refundableDeposit: 11189,
    operationType: "Automatic",
    loadType: "Top Load",
    tenureOptions: [
      { months: "3+", price: 1337 },
      { months: "6+", price: 1100 },
      { months: "11+", price: 899 },
      { months: "12+", price: 799 },
      { months: "24+", price: 721 },
      { months: "36+", price: 699 }
    ],
    benefits: [
      { icon: "🔄", text: "Free relocation" },
      { icon: "⬆️", text: "Free upgrades" }
    ]
  }
];

const ProductPage = () => {
  // ... previous state and handlers remain the same ...
  const { productId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedTenure, setSelectedTenure] = useState(4);
  const product = productData.find(p => p.id.toString() === productId);
  const { addToCart } = useCart();

  useEffect(() => {
  
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div className="text-center text-gray-500">Product not found</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleSliderChange = (e) => {
    setSelectedTenure(Number(e.target.value));
  };

  return (
    <div className="w-[92vw] p-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Image gallery */}
        <div className="md:w-[75%]">
          <div className="relative h-[600px] bg-gray-50 rounded-lg">
            <img
              src={product?.images[currentImageIndex]}
              alt={productData.name}
              className="w-full h-full object-contain"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button className="absolute top-4 right-4 bg-white rounded-full p-2">
              <Heart className="w-6 h-6" />
            </button>
          </div>
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 border-2 rounded-lg overflow-hidden
                  ${currentImageIndex === index ? 'border-blue-500' : 'border-gray-200'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right side - Product details */}
        <div className="md:w-[25%] min-w-[300px]">
          <div className="space-y-6">
            {/* Product Title */}
            <h1 className="text-2xl font-medium text-gray-900">{product.name}</h1>

            {/* Refundable Deposit */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-sm">100% Refundable deposit</span>
                <span className="text-gray-900 font-semibold">₹{product.refundableDeposit}</span>
                <Info className="w-4 h-4 text-gray-400 cursor-pointer" />
              </div>
            </div>

            {/* Operation Type and Load Type */}
            <div className="space-y-6 border-2 p-4 border-gray-100 rounded-lg">
              <div className="flex gap-6">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Operation type</p>
                  <span className="inline-block p-8 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium">
                    {product.operationType}
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Load Type</p>
                  <span className="inline-block p-8 py-1.5 bg-blue-50 text-blue-600 text-sm font-medium">
                    {product.loadType}
                  </span>
                </div>
              </div>
            </div>

            {/* Tenure Selector */}
            <div className="space-y-4 border-2 p-4 border-gray-100 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <h3 className="font-medium">Choose Tenure</h3>
                  <Info className="w-4 h-4 text-gray-400 cursor-pointer" />
                </div>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                  Compare All Tenures
                </button>
              </div>
              
              <div className="relative pt-6">
                <style>
                  {`
                    .custom-range {
                      -webkit-appearance: none;
                      width: 100%;
                      height: 6px;
                      background: #e5e7eb;
                      border-radius: 9999px;
                      outline: none;
                      padding: 0;
                      margin: 0;
                    }

                    .custom-range::-webkit-slider-thumb {
                      -webkit-appearance: none;
                      appearance: none;
                      width: 20px;
                      height: 20px;
                      border-radius: 50%;
                      background: #ef4444;
                      cursor: pointer;
                      border: 3px solid white;
                      box-shadow: 0 0 0 1px #ef4444;
                      margin-top: -7px;
                    }

                    .custom-range::-moz-range-thumb {
                      width: 20px;
                      height: 20px;
                      border-radius: 50%;
                      background: #ef4444;
                      cursor: pointer;
                      border: 3px solid white;
                      box-shadow: 0 0 0 1px #ef4444;
                      margin-top: -7px;
                    }

                    .custom-range::-webkit-slider-runnable-track {
                      width: 100%;
                      height: 6px;
                      background: linear-gradient(to right, #ef4444 0%, #ef4444 ${(selectedTenure / (product.tenureOptions.length - 1)) * 100}%, #e5e7eb ${(selectedTenure / (product.tenureOptions.length - 1)) * 100}%, #e5e7eb 100%);
                      border-radius: 9999px;
                    }

                    .custom-range::-moz-range-track {
                      width: 100%;
                      height: 6px;
                      background: linear-gradient(to right, #ef4444 0%, #ef4444 ${(selectedTenure / (product.tenureOptions.length - 1)) * 100}%, #e5e7eb ${(selectedTenure / (product.tenureOptions.length - 1)) * 100}%, #e5e7eb 100%);
                      border-radius: 9999px;
                    }
                  `}
                </style>
                <input
                  type="range"
                  min="0"
                  max={product.tenureOptions.length - 1}
                  value={selectedTenure}
                  step="1"
                  onChange={handleSliderChange}
                  className="custom-range"
                />
                <div className="flex justify-between mt-4">
                  {product.tenureOptions.map((option, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <span className="text-sm font-medium text-gray-600">{option.months}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price and Benefits */}
            <div className="bg-gray-50 rounded-lg p-5 border-2 border-gray-100">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-gray-900">₹{product.tenureOptions[selectedTenure].price}</span>
                    <span className="text-base text-gray-400 line-through">₹1337</span>
                  </div>
                  <p className="text-sm text-gray-500">Monthly Rent</p>
                </div>
                <div className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-base">{benefit.icon}</span>
                      <span>{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Book Button */}
            <div className="flex mt-6 space-x-4">
            <button
              className="bg-primary px-6 py-3 rounded-lg hover:bg-primary-dark transition cursor-pointer border-2 border-gray-200"
              onClick={() => addToCart(product, selectedTenure.months, selectedTenure.price)}
            >
              Add to Cart 🛒
            </button>
            </div>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors">
              <ShoppingCart className="w-5 h-5" />
              Book your plan
            </button>
          </div>
        </div>
      </div>

      {/* Bottom features */}
      <div className="grid grid-cols-4 gap-4 mt-12">
        {[
          { title: "Products as good as new" },
          { title: "Free repairs & maintenance" },
          { title: "Easy Returns, no questions asked" },
          { title: "Free upgrades & relocation" }
        ].map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg">
            <div className="w-12 h-12 bg-blue-50 rounded-full mb-2" />
            <p className="text-sm text-gray-600">{feature.title}</p>
          </div>
        ))}
      </div>


      <div className='grid grid-cols-3 gap-8 mt-12 w-11/12'>
        <div className='col-span-2'><FAQ/></div>
      <div className="bg-gray-100 p-4 rounded col-span-1">
      <h3 className="text-3xl font-medium mb-2">Product Details</h3>
      <ul className="list-none p-0 mb-4 space-y-1">
        <li>
          <strong>Brand:</strong> Sample Brand
        </li>
        <li>
          <strong>Dimensions:</strong> 120cm x 60cm
        </li>
        <li>
          <strong>Material:</strong> Solid Wood
        </li>
        <li>
          <strong>Color:</strong> Walnut Finish
        </li>
      </ul>
      <div>
        <h4 className="text-md font-semibold mb-1">Dimension</h4>
        <p className="text-gray-600 mb-2">
          Provide additional info about dimensions, weight, etc.
        </p>

        <h4 className="text-md font-semibold mb-1">Safety &amp; Usage</h4>
        <p className="text-gray-600">
          Provide details about usage guidelines and safety measures.
        </p>
      </div>
    </div>
      </div>


      
    </div>
  );
};

export default ProductPage;