import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-[#F3FAF2]">
      {/* About Hero Section */}
      <section className="bg-green-700 text-white py-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Natural Farms</h1>
          <p className="mt-4 text-lg">
            Dedicated to providing the freshest and healthiest products,
            straight from nature to your home.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Mission</h2>
          <p className="text-gray-600 leading-loose max-w-3xl mx-auto">
            At Nature Farms, our mission is to bring the best natural and
            organic products from the farm directly to your table. We believe in
            providing sustainable, healthy food options that promote well-being
            and respect the environment. Our focus is on quality, freshness, and
            transparency in all our practices.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-12 bg-[#E8F9E9]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Vision</h2>
          <p className="text-gray-600 leading-loose max-w-3xl mx-auto">
            We envision a world where everyone has access to natural and healthy
            food choices. Nature Farms strives to become a leader in sustainable
            farming and organic food production, ensuring that our practices
            benefit both consumers and the planet. We aim to build a community
            that values natural, eco-friendly products.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Sustainability
              </h3>
              <p className="text-gray-600">
                We prioritize sustainable farming methods that preserve the
                environment and protect the health of our consumers.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="font-bold text-xl text-gray-800 mb-4">Quality</h3>
              <p className="text-gray-600">
                Our products are carefully grown and harvested to ensure maximum
                freshness, taste, and nutritional value.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="font-bold text-xl text-gray-800 mb-4">
                Community
              </h3>
              <p className="text-gray-600">
                We are committed to supporting local farmers and building a
                strong community of eco-conscious consumers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-12 bg-green-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Join Our Journey</h2>
          <p className="mt-4 text-lg">
            Discover the benefits of natural living and sustainable food
            practices. Together, we can make a difference.
          </p>
          <button className="bg-white text-green-700 px-6 py-2 mt-6 font-semibold rounded-lg">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
