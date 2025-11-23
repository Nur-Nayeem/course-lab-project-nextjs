import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaLaptopCode,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-100">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 text-primary">
              <FaLaptopCode className="text-3xl" />
              <h2 className="text-2xl font-bold">Course Lab</h2>
            </div>
            <p className="mt-4 text-sm text-gray-500 ">
              Empowering minds through accessible, quality online education for
              everyone, everywhere.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[#333333]">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  className="text-sm text-gray-500  hover:text-primary "
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-500  hover:text-primary "
                  href="#"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-500  hover:text-primary "
                  href="#"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-500  hover:text-primary "
                  href="#"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#333333] ">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  className="text-sm text-gray-500 hover:text-primary "
                  href="#"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-500  hover:text-primary "
                  href="#"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#333333] ">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <Link className="text-gray-500  hover:text-primary " href="#">
                <FaFacebook className="text-2xl" />
              </Link>
              <Link className="text-gray-500  hover:text-primary " href="#">
                <FaTwitter className="text-2xl" />
              </Link>
              <Link className="text-gray-500  hover:text-primary " href="#">
                <FaLinkedin className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200  pt-8 text-center text-sm text-gray-500 ">
          <p>© 2024 LearnHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
