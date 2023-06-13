import React from "react";
import ShoppingCart from "../ShoppingCart";

const Home = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Welcome To Smart Home
              <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
                Best E-commerce platform for buying high quality Smart Home
                Appliances at extremely affordable Price.
              </p>
            </h1>
            {/* <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
			<p className="hidden md:inline lg:hidden">turpis pulvinar, est scelerisque ligula sem
			</p>
            <p/> */}
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="com"
                className="px-8 py-3 m-2 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-400 bg-cyan-200"
              >
                Shop Now
              </a>

              <a
                rel="noopener noreferrer"
                href="com"
                className="px-8 py-3 m-2 text-lg font-semibold rounded-full  text-gray-900 hover:bg-cyan-200 border border-cyan-400 "
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="https://shome-shop.netlify.app/static/media/hero.6865951df6ceab277647.jpg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
      <section>
        <ShoppingCart></ShoppingCart>
      </section>
    </div>
  );
};

export default Home;
