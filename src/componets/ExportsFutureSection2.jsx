import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

// If ExploreLink is in the same file
const ExploreLink = ({ children }) => (
    <a href="#" className="text-purple-600 flex items-center hover:underline">
        {children} <ArrowUpRight className="ml-1 w-4 h-4" />
    </a>
);

// CarouselImage component
const CarouselImage = ({ src, alt, style }) => (
    <div
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        style={style}
    >
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain max-w-[300px] max-h-[300px] sm:max-w-[400px] sm:max-h-[400px] mx-auto"
        />
    </div>
);

export default function ShiprocketCrossBorder() {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        'https://sr-website.shiprocket.in/wp-content/uploads/2024/03/launchx.webp',
        'https://sr-website.shiprocket.in/wp-content/uploads/2024/03/shipx.webp',
        'https://sr-website.shiprocket.in/wp-content/uploads/2023/11/cX.png',
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <span className="text-5xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Exports
            </span>

            <h2 className="text-3xl text-gray-700 mt-3 mb-8">Grow beyond boundaries</h2>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 pr-8">
                    <div className="mb-12">
                        <img
                            src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2024/05/SRX-1.svg"
                            alt="ShipX Logo"
                            className="w-[160px] h-[42px] object-contain"
                        />
                    </div>

                    <div className="mb-12">
                        <img
                            src="https://sr-website.shiprocket.in/wp-content/uploads/2024/02/shipX.svg"
                            alt="ShipX Logo"
                            className="w-[70px] h-[23px] object-contain"
                        />
                        <p className="text-lg text-gray-600 mb-4 opacity-80">
                            Ship your orders to over 220+ countries and territories with India's leading cross-border shipping solution.
                        </p>
                        <ExploreLink>Explore</ExploreLink>
                        <div className="relative w-full my-8">
                            <div className="h-[2px] bg-gray-300 w-full"></div>
                            <div className="absolute top-0 left-0 h-[1px] w-full overflow-hidden">
                                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 h-full w-full animate-move-gradient"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <img
                            src="https://sr-website.shiprocket.in/wp-content/uploads/2024/02/cargoX.svg"
                            alt="CargoX Logo"
                            className="w-[85px] h-[30px] object-contain"
                        />
                        <p className="text-lg text-gray-600 mb-4 opacity-80">
                            Access transparent door-to-door B2B deliveries via air from India to anywhere with no weight restrictions.
                        </p>
                        <ExploreLink>Explore</ExploreLink>
                        <div className="relative w-full my-8">
                            <div className="h-[2px] bg-gray-300 w-full"></div>
                            <div className="absolute top-0 left-0 h-[1px] w-full overflow-hidden">
                                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 h-full w-full animate-move-gradient"></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <img
                            src="https://sr-website.shiprocket.in/wp-content/uploads/2024/02/launchX.svg"
                            alt="LaunchX Logo"
                            className="w-[100px] h-[32px] object-contain"
                        />
                        <p className="text-lg text-gray-600 mb-4 opacity-80">
                            Take your brand global and start selling to international customers with minimum investment risk.
                        </p>
                        <ExploreLink>Explore</ExploreLink>
                        <div className="relative w-full my-8">
                            <div className="h-[2px] bg-gray-300 w-full"></div>
                            <div className="absolute top-0 left-0 h-[2px] w-full overflow-hidden">
                                <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 h-full w-full animate-move-gradient"></div>
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
                maxHeight: '100%',
                maxWidth: '100%',
                objectFit: 'contain', // Ensures that images are fully visible while maintaining aspect ratio
            }}
        />
    ))}
</div>

            </div>
        </div>
    );
}
