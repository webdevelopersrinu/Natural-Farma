import React from 'react';

const Home = () => {
  return (
    <div className="bg-[#F3FAF2]">
      {/* Hero Section */}
      <section className="bg-green-700 text-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to Natural Farms</h1>
          <p className="mt-4 text-lg">
            Experience the purity of nature with our farm-fresh and natural products.
          </p>
          <button className="bg-white text-green-700 px-6 py-2 mt-6 font-semibold rounded-lg">
            Shop Now
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/183255683/photo/indian-marketplace-showing-different-kinds-of-vegetables.jpg?s=612x612&w=0&k=20&c=H-IPkcOFE2fWzRSeCEhFgOc0HZletDTL_fQrVxyq37E="
                alt="Product 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800">Organic Vegetables</h3>
                <p className="text-gray-600 mt-2">Fresh and natural veggies from our farms.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/493687048/photo/healthy-soft-paneer-cheese-with-rosemary-and-black-olives.webp?a=1&b=1&s=612x612&w=0&k=20&c=z6XbVkdHoMSlvgAt1G9ZLZdS0XlLYaSbZ8acv_zEJ_c="
                alt="Product 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800">Fresh Dairy Products</h3>
                <p className="text-gray-600 mt-2">Pure and fresh dairy for a healthy lifestyle.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1726869749833-c62085346719?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8T3JnYW5pYyUyME1lYXQlMjAlMjYlMjBTZWFmb29kfGVufDB8fDB8fHww"
                alt="Product 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800">Organic Meat & Seafood</h3>
                <p className="text-gray-600 mt-2">Sustainably sourced meat and seafood.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-[#E8F9E9]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Natural Farms?</h2>
          <p className="text-gray-600 leading-loose mx-auto max-w-3xl">
            At Natural Farms, we are committed to providing fresh, natural, and organic products
            sourced directly from our farms. We follow sustainable farming practices that respect
            both the environment and the health of our consumers. From fresh vegetables to dairy
            products, we ensure that everything we offer is of the highest quality, chemical-free,
            and naturally grown.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-green-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Join the Natural Farms Community</h2>
          <p className="mt-4 text-lg">
            Discover the benefits of healthy and sustainable food with our wide range of natural products.
          </p>
          <button className="bg-white text-green-700 px-6 py-2 mt-6 font-semibold rounded-lg">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
