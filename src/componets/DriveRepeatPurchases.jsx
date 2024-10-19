import { ArrowUpRight } from "lucide-react";
import VerticalMarqueeSlider from "./VerticalMarquee3";
import VerticalMarqueeSlider2 from "./VerticalMarquee4";

const PurchaseCard = ({ title, description, imageSrc, extraClass }) => (
  <div className={`bg-gradient-to-br from-purple-100 to-yellow-100 p-6 rounded-t-[10px] shadow-md  ${extraClass} h-[500px] flex flex-col justify-between`}>
    <div className="h-[300px] mb-4 relative">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-md" />
    </div>
    <div>
      <h3 className="text-xl  text-indigo-900 font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-purple-600 flex items-center hover:underline">
        Explore <ArrowUpRight className="ml-1 w-4 h-4" />
      </a>
    </div>
  </div>
);

export default function DriveRepeatPurchases() {
  const purchaseOptions = [
    {
      title: "Trust building",
      description: "Show Shiprocket's badge of trust throughout your website to boost credibility",
      imageSrc: "https://sr-website.shiprocket.in/wp-content/uploads/2023/07/Conversion-3-1.webp",
    },
    {
      title: "Customer engagement",
      description: "Automate your marketing campaigns and increase conversions by 40%",
      imageSrc: "https://sr-website.shiprocket.in/wp-content/uploads/2023/07/Conversion-4-1.webp",
    },
    {
      title: "Checkout optimisation",
      description: "Speed up checkout by 70% with pre-filled details and intelligent fraud detection",
      imageSrc: "https://sr-website.shiprocket.in/wp-content/uploads/2023/07/Conversion-2-1.webp",
    },
    {
      title: "Customer retention",
      description: "Re-engage with high-potential prospects and increase customer retention by 25%",
      imageSrc: "https://sr-website.shiprocket.in/wp-content/uploads/2023/07/Conversion-1-1.webp",
    },
  ];

  return (
    <div className=" px-4 py-12">
      <span className=" text-3xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
      Conversion
        </span>
      
      <h2 className="text-2xl text-gray-700 mb-8">Drive repeat purchases</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
        {purchaseOptions.map((option, index) => (
          <PurchaseCard
            key={index}
            {...option}
            extraClass={index === 1 || index === 3 ? "mt-20" : ""}
          />
        ))}
      </div>
      <div className="relative bg-purple-700 text-white w-full rounded-tr-6xl">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          From anywhere
          <br />
          <span className="text-yellow-300">to everywhere</span>
        </h2>
        <p className="text-lg mb-6">
          Our multi-courier network spread across 24000+ pin codes
          lets you say yes to every order, even from remote areas.
        </p>
        <a
          href="#"
          className="inline-flex items-center text-yellow-300 hover:text-yellow-100 transition-colors duration-200"
        >
          Explore integrations <ArrowUpRight className="ml-2 h-5 w-5" />
        </a>
      </div>
      <div className="flex">
       <VerticalMarqueeSlider/>
       <VerticalMarqueeSlider2/>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
