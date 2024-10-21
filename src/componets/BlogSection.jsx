import { ArrowUpRight } from "lucide-react"

export default function BlogSection() {
  const blogPosts = [
    {
      title: "Product Category Marketing: Boost Sales & Customer...",
      image: "https://sr-website.shiprocket.in/wp-content/uploads/2024/10/Product-Category.webp",
      categories: ["ECOMMERCE"],
      link: "#"
    },
    {
      title: "How to Deal With Underperforming Products?",
      image: "https://sr-website.shiprocket.in/wp-content/uploads/2024/10/underperforming-products.webp",
      categories: ["ECOMMERCE", "ECOMMERCE MARKETING"],
      link: "#"
    },
    {
      title: "Amazon Brand Registry: What is It & How It Protects Your Brand?",
      image: "https://sr-website.shiprocket.in/wp-content/uploads/2024/10/Amazon-Brand-Registry.webp",
      categories: ["AMAZON", "ECOMMERCE"],
      link: "#"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 mt-4">
      <h2 className="text-4xl font-bold mb-8">
        Check out our <span className="text-purple-500">blog</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-0">
              <img src={post.image} alt={post.title} className="w-full object-cover" />
            </div>
            <div className="p-4">
            <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category, i) => (
                  <span key={i} className="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                    {category}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold font-semibold mb-2">{post.title}</h3>
       
              
              <a href={post.link} className="text-purple-500 hover:underline flex items-center">
                Know more <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}