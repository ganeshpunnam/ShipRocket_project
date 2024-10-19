import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

// If ExploreLink is in the same file
const ExploreLink = ({ children }) => (
  <a href="#" className="text-purple-600 flex items-center hover:underline">
    {children} <ArrowUpRight className="ml-1 w-4 h-4" />
  </a>
);

// Your CarouselImage component
const CarouselImage = ({ src, alt, style }) => (
  <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={style}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-contain max-w-[400px] max-h-[400px] mx-auto"
    />
  </div>
);

export default function FulfillmentService() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://sr-website.shiprocket.in/wp-content/uploads/2023/07/fufillment-images-srH2ome-.webp',
    'https://sr-website.shiprocket.in/wp-content/uploads/2023/07/fufillment-images-srH3ome-.webp',
    'https://sr-website.shiprocket.in/wp-content/uploads/2023/07/fulfillment-64ad1a6a8dabf.webp',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
            <span className=" text-3xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Fulfillment
        </span>
      
      <h2 className="text-2xl text-gray-700 mb-8">Fulfill every need</h2>
      <div className="flex flex-col lg:flex-row">
        
        <div className="lg:w-1/2 pr-8">
    
          <div className="mb-12">
            
         
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold  text-gray-700 mb-2 ">
            B2C fulfillment
            </h2>
            <p className="text-lg text-gray-600 mb-4 opacity-80">
            Store inventory closest to your customers & deliver their packages on the same or the next day
            </p>
            <ExploreLink>Explore</ExploreLink>
            <div className="relative w-full my-8">

                        <div className="h-[2px]bg-gray-300 w-full"></div>

                        <div className="absolute top-0 left-0 h-[1px] w-full overflow-hidden">
                            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 h-full w-full animate-move-gradient"></div>
                        </div>
                    </div>
          </div>

          <div className="mb-12">
          <h2 className="text-2xl font-semibold  text-gray-700 mb-2 ">
            B2B shipping
            </h2>
            <p className="text-lg text-gray-600 mb-4 opacity-80">
            Fulfill and ship your B2B orders in bulk and on time with our end-to-end solution
            </p>
            <ExploreLink>Explore</ExploreLink>
            <div className="relative w-full my-8">

                        <div className="h-[2px]bg-gray-300 w-full"></div>

                        <div className="absolute top-0 left-0 h-[1px] w-full overflow-hidden">
                            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 h-full w-full animate-move-gradient"></div>
                        </div>
                    </div>
          </div>

          <div>
          <h2 className="text-2xl font-semibold  text-gray-700 mb-2 ">
            Omnichannel enablement
            </h2>
            <p className="text-lg text-gray-600 mb-4 opacity-80">
             
            Connect your warehouses, stores, marketplaces, and website to provide a unified experience
            </p>
            <ExploreLink>Explore</ExploreLink>
            <div className="relative w-full my-8">

                        <div className="h-[2px]bg-gray-300 w-full"></div>

                        <div className="absolute top-0 left-0 h-[1px] w-full overflow-hidden">
                            <div className="bg-gradient-to-r from-purple-500 via-bule-500 to-yellow-500 h-full w-full animate-move-gradient"></div>
                        </div>
                    </div>
          </div>
        </div>


        <div className="lg:w-1/2 mt-8 lg:mt-0 relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 bg-opacity-80 flex justify-center items-center rounded-lg h-[400px] sm:h-[400px] lg:h-[500px] xl:h-[500px]">

    {images.map((src, index) => (
        <CarouselImage
            key={index}
            src={src}
            alt={`Carousel image ${index + 1}`}
            style={{
                opacity: currentImage === index ? 1 : 0,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                maxHeight: '95%', // Increased height
                maxWidth: '95%',  // Increased width
                objectFit: 'contain',
            }}
        />
    ))}
</div>


      </div>
    </div>
  );
}
