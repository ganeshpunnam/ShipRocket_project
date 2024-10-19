import React from "react";
import DynamicMetricDisplay from "./DynamicMetricDisplay";


export default function VerticalMarqueeSlider() {

  return (
    <div className="h-[500px] w-full overflow-hidden bg-transparent  flex flex-col items-end">
      <div className="animate-marquee-vertical max-w-[700px] w-full">
        <div className="flex flex-col gap-4 items-end justify-center py-4 ">
          <img
            src="https://sr-website.shiprocket.in/wp-content/uploads/2023/07/home-slider-image-21.webp"
            alt="Shiprocket Logo"
            className="w-[250px] h-auto mr-8"
          />
          <img
            src="https://sr-website.shiprocket.in/wp-content/uploads/2023/07/home-slider-image-10.webp"
            alt="Shiprocket Logo"
            className="w-[200px] h-auto mr-8"
          />
          <DynamicMetricDisplay/>
          <img
            src="https://sr-website.shiprocket.in/wp-content/uploads/2023/07/home-slider-image-20.webp"
            alt="Shiprocket Logo"
            className="w-[250px]h-auto mr-8"
          />
        </div>
        
        <div className="flex flex-col gap-4 py-4 items-end justify-center">
          <img
            src="https://sr-website.shiprocket.in/wp-content/uploads/2023/07/home-slider-image-7.webp"
            alt="Shiprocket Logo"
            className="w-[200px] h-auto mr-8"
          />
          <img
            src="https://sr-website.shiprocket.in/wp-content/uploads/2023/09/home-slider-image-12-1.webp"
            alt="Shiprocket Logo"
            className="w-[300px] h-[200px] mr-8"
          />
          <img
            src="https://sr-website.shiprocket.in/wp-content/uploads/2023/07/home-slider-image-21.webp"
            alt="Shiprocket Logo"
            className="w-[250px] h-auto mr-8"
          />
          <img
            src="https://sr-website.shiprocket.in/wp-content/uploads/2023/01/shiprocket_logo.svg"
            alt="Shiprocket Logo"
            className="w-[250px] h-auto mr-8"
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-marquee-vertical {
          animation: marquee-vertical 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
