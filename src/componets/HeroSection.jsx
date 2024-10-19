import React from "react";
import VerticalMarquee from "./VerticalMarquee";
import VerticalMarqueeSlider from "./VerticalMarquee2";

export default function Herosectionship() {
  return (
    <div className=" relative -z-50: px-[30px]">
    <main className=" header-ske container mx-auto px-4 py-8 md:pb-16 flex flex-col md:flex-row items-center md:justify-between ">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="gradient-text text-7xl">Ship your</span>
            <br />
            <span className="gradient-text text-7xl">dream</span>
          </h1>
          <h2 className="text-2xl text-gray-600 mb-8">
            Create a delightful online journey by optimizing your shipping process and everything
            surrounding it.
          </h2>
          <button className="px-8 py-4 bg-purple-400 text-white rounded-xl text-lg hover:bg-white hover:text-black hover:border-solid hover:border-2 hover:border-purple-600">
            Sign up for free
          </button>
        </div>
        <div className="md:w-1/2 overflow-hidden flex items-center  justify-end">
          <VerticalMarquee />
         <VerticalMarqueeSlider/>
        </div>
      </main>
    </div>
  );
}