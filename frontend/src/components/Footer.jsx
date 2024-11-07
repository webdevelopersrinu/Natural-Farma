import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#F3FAF2] p-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Column 1 */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-800">Information</h4>
          <ul className="text-gray-600">
            <li><Link href="/" className="hover:text-green-600">Become a Vendor</Link></li>
            <li><Link href="/" className="hover:text-green-600">Affiliate Program</Link></li>
            <li><Link href="/" className="hover:text-green-600">Privacy Policy</Link></li>
            <li><Link href="/" className="hover:text-green-600">Our Suppliers</Link></li>
            <li><Link href="/" className="hover:text-green-600">Extended Plan</Link></li>
          </ul>
        </div>
        
        {/* Column 2 */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-800">Community</h4>
          <ul className="text-gray-600">
            <li><Link href="/" className="hover:text-green-600">Customer Support</Link></li>
            <li><Link href="/" className="hover:text-green-600">Help Center</Link></li>
            <li><Link href="/" className="hover:text-green-600">Contact Us</Link></li>
            <li><Link href="/" className="hover:text-green-600">Report Abuse</Link></li>
            <li><Link href="/" className="hover:text-green-600">Submit and Dispute</Link></li>
          </ul>
        </div>
        
        {/* Column 3 */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-800">Online Shopping</h4>
          <ul className="text-gray-600">
            <li><Link href="/" className="hover:text-green-600">My Account</Link></li>
            <li><Link href="/" className="hover:text-green-600">Order History</Link></li>
            <li><Link href="/" className="hover:text-green-600">Shopping Cart</Link></li>
            <li><Link href="/" className="hover:text-green-600">Compare</Link></li>
            <li><Link href="/" className="hover:text-green-600">Help Ticket</Link></li>
            <li><Link href="/" className="hover:text-green-600">Wishlist</Link></li>
          </ul>
        </div>
        
        {/* Column 4 */}
        <div>
          <h4 className="font-bold text-lg mb-4 text-gray-800">Daily Groceries</h4>
          <ul className="text-gray-600">
            <li><Link href="/" className="hover:text-green-600">Dairy & Eggs</Link></li>
            <li><Link href="/" className="hover:text-green-600">Meat & Seafood</Link></li>
            <li><Link href="/" className="hover:text-green-600">Breakfast Food</Link></li>
            <li><Link href="/" className="hover:text-green-600">Household Supplies</Link></li>
            <li><Link href="/" className="hover:text-green-600">Bread & Bakery</Link></li>
            <li><Link href="/" className="hover:text-green-600">Pantry Staples</Link></li>
          </ul>
        </div>
      </div>

      <div className="bg-[#E8F9E9] p-4 mt-6 text-center text-gray-600">
        <p>© 2024 Nature Farms. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
