import React, { Suspense ,useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import LocationModal from './components/LocationModal';
import { AuthProvider } from './Context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import CartPage from './pages/Cart';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const CategoryPage = React.lazy(() => import('./pages/CategoryPage'));
const ProductPage = React.lazy(() => import('./pages/ProductPage'));


// Loading component for suspense fallback
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);


const products = [
  { id: 1, name: "Fully Automatic Top Load Washing Machine", category: "Appliances", image: "washing-machine.jpg" },
  { id: 2, name: "Sofa Set", category: "Living Room", image: "sofa.jpg" },
  { id: 3, name: "Dining Table", category: "Dining", image: "dining.jpg" },
  { id: 4, name: "Bed Frame", category: "Bedroom", image: "bed.jpg" },
  { id: 5, name: "Refrigerator", category: "Appliances", image: "fridge.jpg" },
  { id: 6, name: "Microwave Oven", category: "Kitchen", image: "microwave.jpg" },
  { id: 7, name: "Bookshelf", category: "Storage", image: "bookshelf.jpg" },
  { id: 8, name: "Office Chair", category: "Office", image: "chair.jpg" },
  { id: 9, name: "Work Desk", category: "Office", image: "desk.jpg" },
  { id: 10, name: "Wardrobe", category: "Bedroom", image: "wardrobe.jpg" },
];

const App = () => {
  const [showLocationModal, setShowLocationModal] = useState(false);
  
  useEffect(() => {
    const hasSeenLocationModal = localStorage.getItem("hasSeenLocationModal");

    if (!hasSeenLocationModal) {
      setShowLocationModal(true);
      localStorage.setItem("hasSeenLocationModal", "true"); // Set flag in localStorage
    }
  }, []);
  
  const handleLocationSelect = (location) => {
    console.log('Selected Location:', location);
    setShowLocationModal(false); // Hide modal after selection
  };

  return (
    <AuthProvider>
        <Router>
        <div className="">
          <Navbar products={products}/>
          <LocationModal isOpen={showLocationModal} onLocationSelect={handleLocationSelect} />
          <main className="w-[92vw] px-4 sm:px-6 mt-2 flex flex-col justify-center mx-auto">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/category/:categoryId" element={<CategoryPage />} />
                <Route path="/product/:productId" element={<ProductPage />} />
                <Route path="/cart" element={<CartPage />} />

                <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                <Route path="*" element={
                  <div className="text-center py-12">
                    <h2 className="text-2xl font-bold text-gray-900">Page not found</h2>
                    <p className="mt-2 text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
                  </div>
                } />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
      
   
  );
};

export default App;