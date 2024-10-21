export default function Stats() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-sans">
      <p className="text-sm text-purple-600 mb-4">A trusted growth partner</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ lineHeight: '1.5' }}>
        <span className="text-navy-blue">Lakhs of eCommerce businesses chose</span>
        <br />
        <span className="text-orange-400">Shiprocket</span>{" "}
        <span className="text-purple-400">to streamline their customer</span>
        <br />
        <span className="text-orange-300">journey—from shipping to returns and beyond</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "2.5 Lakh+", subtitle: "merchants nationwide" },
            { title: "20 Crore", subtitle: "transactions every year" },
            { title: "₹ 30K Crore", subtitle: "annual GMV powered" },
            { title: "25 Crore", subtitle: "shipments delivered" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-2xl md:text-3xl font-bold text-indigo-900">{stat.title}</span>
              <span className="text-lg text-gray-600">{stat.subtitle}</span>
              <div className="h-1 w-[80%] bg-gradient-to-r from-purple-400 to-blue-500 mt-2"></div>
            </div>
          ))}
        </div>

        <div className="relative">
          <img 
            width="1137" 
            height="647" 
            decoding="async" 
            src="https://sr-website.shiprocket.in/wp-content/uploads/2023/07/home-A-trusted-growth-partner-rv.webp" 
            alt="Growth statistics for Shiprocket eCommerce services" 
            className="w-full h-auto object-cover" 
          />
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-2">
        Enhance your customer experience
      </h2>
      <p className="text-2xl md:text-4xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
        at every touch point
      </p>
    </div>
  );
}
