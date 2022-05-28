import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full px-2 text-gray-300 bg-slate-900 py-y">
      <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-16 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="pt-2 font-bold uppercase">Seller Information</h6>
          <br />
          <ul>
            <li className="py-1">Tips on how to Sell Internationally</li>
            <li className="py-1">Why Sellers use Our Services</li>
            <li className="py-1">Find Buyers for Your Products</li>
            <li className="py-1">Selling Seafood into China Services</li>
            <li className="py-1">Seller Guide</li>
            <li className="py-1">Seller Video</li>
          </ul>
        </div>
        <div>
          <h6 className="pt-2 font-bold uppercase">Buyer Information</h6>
          <br />
          <ul>
            <li className="py-1">Tips on how to Buy Internationally</li>
            <li className="py-1">Why do I need Quality Control Inspections</li>
            <li className="py-1">Exchange Rate US Dollar</li>
            <li className="py-1">
              USA Customs Import and Export Duty Calculator
            </li>
            <li className="py-1">Freight Insurance Cover</li>
          </ul>
        </div>
        <div>
          <h6 className="pt-2 font-bold uppercase">Trade Services</h6>
          <ul>
            <li className="py-1">Research & Insight</li>
            <li className="py-1">Payments from Canada</li>
            <li className="py-1">Ireland Food & Beverage Products</li>
            <li className="py-1">Bulgaria Furniture</li>
            <li className="py-1">China Chemical Products</li>
            <li className="py-1">Turkey Furniture</li>
            <li className="py-1">China Chemical Products</li>
            <li className="py-1">China Construction Material Products</li>
          </ul>
        </div>
        <div>
          <h6 className="pt-2 font-bold uppercase">About Us</h6>
          <ul>
            <li className="py-1">About Goodies</li>
            <li className="py-1">Privacy Policy</li>
            <li className="py-1">Terms of Use</li>
            <li className="py-1">Freight Insurance FAQ</li>
            <li className="py-1">Global Import Tariff Calculation</li>
          </ul>
        </div>
        <div className="col-span-2 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our Website</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mb-4 mr-4 rounded-md"
              type="email"
              placeholder="Enter email.."
            />
            <button
              className="p-2 button mb-4 btn bg-primary ;
}"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">Create By Muhammad Asif &copy; 2022</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <a href="https://www.facebook.com/MuhammadOOAsif/" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/secret_asif/" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/MuhammadOAsif" target="_blank">
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-asif-114777229/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/MuhammadOAsif" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
