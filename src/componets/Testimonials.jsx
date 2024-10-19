import React, { useState, useEffect } from "react";
import { ArrowRight, MoveUpRight, Quote } from "lucide-react";
import Marquee from "react-marquee-slider";

const images = [
  {
    src: "https://sr-website.shiprocket.in/wp-content/uploads/2023/07/cllogo-2.png",
    alt: "Image 1",
  },
  {
    src: "https://sr-website.shiprocket.in/wp-content/uploads/2023/07/cllogo-4.png",
    alt: "Image 2",
  },
  {
    src: "https://sr-website.shiprocket.in/wp-content/uploads/2024/03/partner-1.webp",
    alt: "Image 3",
  },
  {
    src: "https://sr-website.shiprocket.in/wp-content/uploads/2024/03/partner-2.webp",
    alt: "Image 4",
  },
  {
    src: "https://sr-website.shiprocket.in/wp-content/uploads/2024/03/partner-3.webp",
    alt: "Image 5",
  },
  {
    src: "https://sr-website.shiprocket.in/wp-content/uploads/2023/07/cllogo-1.png",
    alt: "Image 6",
  },
  {
    src: "https://sr-website.shiprocket.in/wp-content/uploads/2024/03/partner-4.webp",
    alt: "Image 7",
  },
];

function Testimonials() {
  const testimonials = [
    {
      text: "Flowbite is just awesome. It contains tons of pre-designed components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
      author: "Bonnie Green",
      role: "Web developer at Google",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    },
    {
      text: "As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with Flowbite, my mind was blown, and I became so productive.",
      author: "Helene Engels",
      role: "Creative designer at Adobe",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png",
    },
    {
      text: "Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customize it, and integrate it within a Laravel + Vue application.",
      author: "Neil Sims",
      role: "CTO at Microsoft",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000); // Automatically switch every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-10 w-full h-screen sm:px-15 py-15 leading-6 flex flex-col gap-8">
      {/* Section 1 */}
      <div>
        <h1 className="text-3xl md:text-5xl text-indigo-950 font-bold mb-4">
          What makes it all{" "}
          <span className="text-transparent bg-gradient-to-r from-amber-300 to-violet-700 bg-clip-text">
            work together
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Seamlessly connected components
        </h2>
        <p className="text-md sm:text-xl text-gray-600 mb-6">
          Use one platform to manage everything, including your sales channels,
          inventory, catalogues, carriers and customer data
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-600 px-5 py-2 rounded-md text-white mb-12">
          Sign up for free
        </button>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 flex flex-col gap-6 rounded-lg bg-sky-50">
            <img
              src="https://sr-website.shiprocket.in/wp-content/uploads/2023/07/work-together-1.webp"
              className="w-full"
              alt="nothing"
            />
            <h1 className="text-2xl font-bold text-indigo-950">
              Over 1 Trillion data points
            </h1>
            <p>
              Be it reducing RTO or improving conversions, utilize our AI-driven
              analytics to achieve it all smartly.
            </p>
            <a href="#" className="text-indigo-500 flex items-center mt-4">
              Explore <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="p-6 flex flex-col gap-6 rounded-lg bg-sky-50">
            <img
              src="https://sr-website.shiprocket.in/wp-content/uploads/2023/07/work-together-3.webp"
              className="w-full"
              alt="nothing"
            />
            <h1 className="text-2xl font-bold text-indigo-950">
              Over 1 Trillion data points
            </h1>
            <p>
              Be it reducing RTO or improving conversions, utilize our AI-driven
              analytics to achieve it all smartly.
            </p>
            <a href="#" className="text-indigo-500 flex items-center mt-4">
              Explore <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          <div className="p-6 flex flex-col rounded-lg gap-6 bg-sky-50">
            <img
              src="https://sr-website.shiprocket.in/wp-content/uploads/2023/07/work-together-4.webp"
              className="w-full mb-16"
              alt="nothing"
            />
            <h1 className="text-2xl font-bold text-indigo-950">
              Over 1 Trillion data points
            </h1>
            <p>
              Be it reducing RTO or improving conversions, utilize our AI-driven
              analytics to achieve it all smartly.
            </p>
            <a href="#" className="text-indigo-500 flex items-center mt-4">
              Explore <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl md:text-5xl text-indigo-950 font-bold mb-4">
          Manage multiple channels in{" "}
          <span className="text-transparent bg-gradient-to-r from-amber-300 to-violet-700 bg-clip-text">
            One Place
          </span>
        </h1>
        <p className="text-md sm:text-xl text-gray-600 mb-6">
          Integrate 12+ sales channels to easily manage your orders, inventory
          and more.
        </p>
        <a
          href="#"
          className="text-indigo-500 font-semibold text-xl flex items-center mt-4"
        >
          Explore integrations
          <MoveUpRight className="ml-2 h-4 w-4" />
        </a>
        <div className="p-6 bg-slate-100 rounded-md">
          <Marquee
            velocity={12}
            minScale={0.7}
            resetAfterTries={200}
            scatterRandomly={false}
          >
            {images.map((image, index) => (
              <div
                key={`child-${index}`}
                className="h-40 w-40 flex-shrink-0 mx-4"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Section 3 */}
      <div>
        <h1 className="text-3xl md:text-5xl text-indigo-950 font-bold mb-4">
          <span className="text-transparent bg-gradient-to-r from-amber-300 to-violet-700 bg-clip-text">
            Why we do
          </span>{" "}
          What we do
        </h1>
        <section className="bg-white dark:bg-gray-900">
          <div className="flex justify-end items-center mt-4">
            <button onClick={handlePrev} className="mr-4">
              <ArrowRight className="w-6 h-6" />
            </button>
            <button onClick={handleNext}>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div className="relative mx-auto max-w-screen-lg">
              <figure className="w-full h-60 flex flex-col justify-center items-center gap-5 rounded-lg">
                <img
                  src="https://sr-website.shiprocket.in/wp-content/uploads/2023/02/quoteLeft.svg"
                  alt=""
                />
                <blockquote>
                  <p className="text-lg font-medium text-gray-600 sm:text-2xl dark:text-white">
                    {testimonials[currentIndex].text}
                  </p>
                </blockquote>
                <figcaption className="flex justify-center items-center mt-6 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src={testimonials[currentIndex].image}
                    alt="profile"
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Testimonials;
