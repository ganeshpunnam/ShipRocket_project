import React from "react";

export default function ReverseVerticalMarquee() {
  const images = [
    {
      src: "https://sr-website.shiprocket.in/wp-content/uploads/2023/07/cl-logo-8.png",
      width: "250px",
    },
    {
      src: "https://sr-website.shiprocket.in/wp-content/uploads/2023/07/cl-logo-7.png",
      width: "250px",
    },
    {
      src: "https://sr-website.shiprocket.in/wp-content/uploads/2023/07/cl-logo-5.png",
      width: "250px",
    },
    {
      src: "https://sr-website.shiprocket.in/wp-content/uploads/2023/07/cl-logo-7.png",
      width: "250px",
    },
    {
      src: "https://sr-website.shiprocket.in/wp-content/uploads/2023/07/cl-logo-2.png",
      width: "250px",
    },
    {
      src: "https://sr-website.shiprocket.in/wp-content/uploads/2023/07/cl-logo-2.png",
      width: "250px",
    },
  ];

  return (
    <div className="h-[500px] w-full overflow-hidden bg-transparent flex flex-col items-end">
      <div className="animate-marquee-vertical-reverse max-w-[700px] w-full">
        {[...images, ...images].map((image, index) => (
          <div key={index} className="flex items-end justify-center py-4">
            <img
              src={image.src}
              alt={`Company Logo ${index + 1}`}
              className={`w-[${image.width}] h-auto mr-8`}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee-vertical-reverse {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-marquee-vertical-reverse {
          animation: marquee-vertical-reverse 30s linear infinite;
        }
      `}</style>
    </div>
  );
}