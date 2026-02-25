import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              DK Gypsum for{' '}
              <span className="text-blue-600">Perfect Finishes</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Industry-trusted formula delivering crack-resistant walls with 
              exceptional smoothness. Ideal for residential and commercial projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get a Quote
              </button>
              <button className="bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-4 rounded-lg border-2 border-gray-300 transition-all duration-300">
                Learn More
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-8 justify-center lg:justify-start text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>10,000+ Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="flex-1 w-full">
            <div className="relative">
              <div className="aspect-square max-w-lg mx-auto bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                {/* Placeholder for product image */}
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <p className="text-blue-800 font-semibold text-lg">DK Gypsum</p>
                  <p className="text-blue-600 text-sm mt-2">25kg / 40kg Bags Available</p>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-full shadow-lg transform rotate-12">
                <span className="text-sm">Best Seller</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
