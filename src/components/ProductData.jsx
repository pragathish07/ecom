import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, Info, ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

// Shared Product Database
export const productData = {
  "1": {
    id: "1",
    name: 'Modern Sofa',
    category: 'Living Room',
    description: 'Elegant modern sofa with premium comfort',
    shortDescription: 'Elegant modern sofa with premium comfort',
    price: 499.99,
    rating: 4.5,
    reviewCount: 128,
    deposit: 999,
    specifications: {
      material: "Premium Fabric",
      seating: "3 Seater",
      color: "Gray",
      style: "Contemporary"
    },
    features: [
      "Free relocation",
      "Free upgrades",
      "Easy returns",
      "Free maintenance"
    ],
    tenureOptions: [
      { months: "3+", price: 499.99, originalPrice: 699.99 },
      { months: "6+", price: 469.99, originalPrice: 669.99 },
      { months: "12+", price: 449.99, originalPrice: 649.99 },
      { months: "24+", price: 429.99, originalPrice: 629.99 },
      { months: "36+", price: 399.99, originalPrice: 599.99 }
    ],
    images: [
      { url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop", alt: "Modern gray sofa" },
      { url: "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&auto=format&fit=crop", alt: "Sofa side view" },
      { url: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&auto=format&fit=crop", alt: "Sofa in room setting" },
      { url: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&auto=format&fit=crop", alt: "Sofa detail" }
    ]
  },
  // Add more products following the same structure...
};