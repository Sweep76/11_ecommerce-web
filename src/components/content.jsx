import React from 'react';

const Content = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 via-white to-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 tracking-wide mb-12">
          Explore Our Exclusive Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {Array(8).fill().map((_, index) => (
            <div
              key={index}
              className="group relative bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={`https://picsum.photos/300/300?random=${index + 1}`} 
                  alt={`Product ${index + 1}`}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  New
                </div>
              </div>
              {/* Product Info */}
              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Elegant Product {index + 1}
                </h2>
                <p className="text-sm text-gray-500 mb-4">Category: Luxury</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">$149.99</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
