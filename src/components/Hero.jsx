import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-white pt-24 pb-32 sm:pt-32 sm:pb-40 lg:pb-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-6">
          Premium HDMR Gypsum <br className="hidden sm:block" />
          <span className="text-indigo-600">for Flawless Walls</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Transform your spaces with advanced high-density moisture-resistant gypsum plaster. Ensure a seamless, crack-free finish that lasts a lifetime.
        </p>
        <div className="flex justify-center items-center space-x-2 mb-10 bg-indigo-50 rounded-full px-6 py-2 inline-flex border border-indigo-100 shadow-sm">
          <span className="flex h-3 w-3 rounded-full bg-green-500"></span>
          <span className="text-sm font-medium text-indigo-900">Trusted across 5,000+ sites all over Kerala</span>
        </div>
        <div className="flex justify-center flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transform hover:-translate-y-0.5"
          >
            Get a Quote Now
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 transition-all duration-200 bg-white border border-gray-300 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
