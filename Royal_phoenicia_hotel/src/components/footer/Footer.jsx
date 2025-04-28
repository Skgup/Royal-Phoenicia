import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row bg-[#33658A] text-white">
      {/* Left Section */}
    
      <div className="flex-1 flex  font-serif flex-col justify-center items-start p-10 space-y-6 text-2xl md:text-3xl ">
        <a href="#">I   Rooms</a>
        <a href="#">II   Wellness</a>
        <a href="#">III Gastro</a>
        <a href="#">IV  Hotel</a>
        <a href="#">V   Events</a>
      </div>

      {/* Center Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-10 space-y-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">More about rooms</h2>
        <ul className="space-y-2 text-base text-gray-300">
          <li>120 comfortable rooms</li>
          <li>Dinings</li>
          <li>Packages</li>
          <li>Pools</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-10 space-y-4 bg-[#2B4A6F] text-center">
        {/* Logo */}
        <div className="text-4xl font-bold mb-2">ROYAL</div>

        {/* Hotel Details */}
        <h2 className="text-xl md:text-2xl font-semibold mb-2">Wellness & Pools <br />Hotel Royal Phoenicia</h2>

        <p className="text-sm text-gray-300">
          Building 1288<br />
          Road 3931, Block 339<br />
          Umm Al Hasam – Manama<br />
          Bahrain
        </p>

        <p className="mt-2 text-sm text-gray-300">
          +973 1730 7307<br />
          info@royalphoeniciahotel.com
        </p>

        <a href="#" className="underline text-gray-300 text-sm mt-2">
          Contacts →
        </a>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4 text-lg">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
