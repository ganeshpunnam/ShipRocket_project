import { ArrowUpRight } from "lucide-react";

const ShippingCard = ({ title, description, imageSrc, explore }) => (
  <div className="flex flex-col justify-between bg-blue-50 rounded-lg overflow-hidden shadow-md p-5">
    <div className="mb-4">
      <img src={imageSrc} alt={`${title} image`} className="w-full h-full object-cover" />
    </div>
    <div>
      <h3 className="text-xl text-purple-900 font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
    <a href="#" className="text-purple-600 flex items-center hover:underline">
      {explore} <ArrowUpRight className="ml-1 w-4 h-4" />
    </a>
  </div>
);

export default function ShippingOptions() {
  return (
    <div className="max-w-7xl mx-auto px-4 ">
       <span className="text-4xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Shipping
            </span>

            <h2 className="text-3xl text-gray-700 mb-8">Keep things simple</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ShippingCard
          title="Domestic shipping"
          description="Manage all channels in a single view and reach nationwide efficiently with AI-based courier selection"
          imageSrc="https://sr-website.shiprocket.in/wp-content/uploads/2023/07/courier-selection-sr-home-64b8d7e19d8f9.webp"
          explore="Explore"
        />
        <ShippingCard
          title="B2B shipping"
          description="Lower your B2B and cargo shipping costs by upto 40%"
          imageSrc="https://sr-website.shiprocket.in/wp-content/uploads/2023/07/shipping-rv-2.webp"
          explore="Explore"
        />
        <ShippingCard
          title="Hyperlocal delivery"
          description="Make intra-city deliveries in hours with our experienced courier partners"
          imageSrc="https://sr-website.shiprocket.in/wp-content/uploads/2023/07/shipping-rv-1.webp"
          explore="Explore"
        />
      </div>
       {/* Announcement Section */}
    <div className="flex items-center justify-center gap-4 p-4 border border-blue-200 rounded-lg bg-blue-50 mt-6">
      <div className="flex items-center space-x-3">
        <span className="text-3xl">📢</span>
        <p className="text-sm text-blue-900">
          Experience Shiprocket in real-time with our live demo.
          <strong> Sign-up not required for demo</strong>
        </p>
      </div>
      <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center">
        Check Live Demo <span className="ml-2">→</span>
      </a>
    </div>
    </div>
  );
}
