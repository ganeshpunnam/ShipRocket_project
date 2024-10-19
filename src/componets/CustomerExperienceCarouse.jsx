import React, { useState, useCallback, memo } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

// Memoize the Card component to avoid unnecessary re-renders
const Card = memo(({ title, description, image }) => (
  <div className="bg-yellow-50 rounded-lg p-6 flex flex-col h-full">
    <div>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
    <a href="#" className="text-purple-600 flex items-center hover:underline">
      Explore <ArrowUpRight className="ml-1 w-4 h-4" />
    </a>
  </div>
));

export default function CustomerExperienceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: 'Tracking page',
      description: 'Build trust with your brand name, logo, offers, and support details on your order-tracking page.',
      image: 'https://sr-website.shiprocket.in/wp-content/uploads/2023/07/delight-2img.webp?height=200&width=400',
    },
    {
      title: 'Status alerts',
      description: 'Reassure your customers with real-time tracking alerts through WhatsApp, Email, and SMS.',
      image: 'https://sr-website.shiprocket.in/wp-content/uploads/2023/07/delight-2-1.webp?height=200&width=400',
    },
    {
      title: 'Customer feedback',
      description: 'Collect Net Promoter Score and make your customers feel valued.',
      image: 'https://sr-website.shiprocket.in/wp-content/uploads/2023/07/delight-4-1.webp?height=200&width=400',
    },
    {
      title: 'Returns management',
      description: 'Offer easy returns, send regular status updates, and provide instant refunds.',
      image: 'https://sr-website.shiprocket.in/wp-content/uploads/2023/07/delight-3-1.webp?height=200&width=400',
    },
  ];

  // Memoize the next and previous slide functions
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  }, [cards.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  }, [cards.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-3">
      <div className="flex justify-between">
        <div>
          <h1 className="text-2xl mb-2">
            <span className="bg-gradient-to-r from-gray-700 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Delight
            </span>
          </h1>
          <h2 className="text-2xl text-gray-700 mb-8">Elevat
            e customer experience</h2>
        </div>
        <div className="flex space-x-2 mb-4 h-max">
          <button onClick={prevSlide} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card {...cards[currentIndex]} />
        <Card {...cards[(currentIndex + 1) % cards.length]} />
      </div>
    </div>
  );
}
