import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';



const cities = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Chennai',
  'Kolkata',
  'Hyderabad',
];

function LocationModal({isOpen, onLocationSelect}) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg- bg-opacity-30 z-50 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-xl p-8 max-w-md w-full mx-4"
        >
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <MapPin className="h-12 w-12 text-primary" />
            </div>
            <h2 className="text-2xl font-display font-bold mb-2">
              Choose Your Location
            </h2>
            <p className="text-gray-600">
              Select your city to see products available in your area
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => onLocationSelect(city)}
                className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200 font-medium cursor-pointer"
              >
                {city}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default LocationModal;