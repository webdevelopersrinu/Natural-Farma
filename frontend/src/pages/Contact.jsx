import React from 'react';

const Contact = () => {
  return (
    <div className="bg-[#F3FAF2] min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contact Form Section */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              Have any questions? We'd love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
            </p>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div>
            <img
            src='https://media.istockphoto.com/id/1273484275/photo/business-people-wearing-headset-working-in-office.jpg?s=612x612&w=0&k=20&c=VC6BB0zi9Bs6456-NCfR-35oJV_Kjb1faUfPcs2iqzk='
              alt="Contact Nature Farms"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
