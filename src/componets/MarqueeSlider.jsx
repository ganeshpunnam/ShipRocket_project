
import { ConstantImage } from "./ConstantImage";
import React from "react";

export default function MarqueeSlider() {
  return (
    <div className="relative w-full overflow-hidden bg-white py-4">
      <div className="absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white to-transparent z-10"></div>
      <div className="flex animate-marquee">
        {[...ConstantImage, ...ConstantImage].map((company, index) => (
          <div key={`${company.name}-${index}`} className="flex-shrink-0 mx-8">
            <div className="py-4 px-10 w-64 bg-white rounded-xl  border-2 border-solid border-gray-300 overflow-hidden">
              <img
                src={company.logoUrl}
                alt={company.name}
                className="h-12 w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}