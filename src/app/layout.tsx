


"use client"; // Required for client-side features
import React, { useState } from "react";
import Link from "next/link";

import { 
  FaPhone, 
  FaEnvelope, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube, 
  FaSearch, 
  FaCartPlus, 
  FaHeart, 
  FaUser, 
  FaBars, 
  FaTimes 
} from "react-icons/fa";

import "./globals.css"; // Import global CSS

const Layout = ({ children }: { children: React.ReactNode }) => {
  // Add state for managing the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>E-commerce Bandage</title>
      </head>
      <body>
        {/* Header Section */}
        <header>
          {/* Top Info Section */}
          <section className="bg-blue-900 text-white text-sm px-4 py-2 flex flex-col sm:flex-row sm:justify-between items-center">
            <div className="flex flex-wrap justify-center sm:justify-start space-x-4 items-center">
              <span className="flex items-center">
                <FaPhone className="mr-2" /> (225) 343242343
              </span>
              <span className="flex items-center">
                <FaEnvelope className="mr-2" /> tausifkhanrehmani@gmail.com
              </span>
            </div>
            <p className="text-center sm:ml-auto">
              Follow Us and get a chance to win <span className="font-bold">80% off!</span>
            </p>
            <div className="flex space-x-4">
              <FaFacebook className="hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-600 cursor-pointer" />
              <FaYoutube className="hover:text-red-600 cursor-pointer" />
            </div>
          </section>

          {/* Navbar Section */}
          <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
              {/* Logo */}
              <h1 className="text-2xl font-bold">
                <Link href="/" className="text-gray-800 hover:text-gray-600">
                  Bandage
                </Link>
              </h1>

              {/* Hamburger Menu (Small Screens) */}
              <button
                className="md:hidden text-2xl text-gray-800 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>

              {/* Desktop Navigation Links */}
              <ul className="hidden md:flex space-x-6 text-gray-700">
                <li>
                  <Link href="/" className="hover:text-gray-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/product" className="hover:text-gray-500">
                    Product
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-500">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-500">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-gray-500">
                    Pricing
                  </Link>
                </li>
              </ul>

              {/* Icons Section */}
              <div className="hidden md:flex items-center space-x-4">
                <Link href="/login" className="text-blue-500 hover:text-blue-600 flex items-center">
                  <FaUser className="mr-1" /> Login/Register
                </Link>
                <button className="text-gray-600 hover:text-gray-800">
                  <FaSearch />
                </button>
                <Link href="/cart" className="relative text-gray-600 hover:text-gray-800">
                  <FaCartPlus />
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                    1
                  </span>
                </Link>
                <Link href="/favorites" className="relative text-gray-600 hover:text-gray-800">
                  <FaHeart />
                  <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                    1
                  </span>
                </Link>
              </div>
            </div>

            {/* Mobile Navigation (Collapsible) */}
            {menuOpen && (
              <ul className="md:hidden bg-white text-gray-700 flex flex-col space-y-4 p-6">
                <li>
                  <Link
                    href="/"
                    className="block hover:text-gray-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/product"
                    className="block hover:text-gray-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="block hover:text-gray-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block hover:text-gray-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="block hover:text-gray-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="block hover:text-blue-500 flex items-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaUser className="mr-2" /> Login/Register
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </header>

        {/* Main Content */}
        <main className="mx-auto">{children}</main>

        <footer className="bg-white-800 text-grey-800">
      {/* Social Network Section */}
      <section className="py-6">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Bandage</h2>
          <div className="flex justify-center space-x-4">
          <div className="flex space-x-4">
              <FaFacebook className="hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-600 cursor-pointer" />
              </div>
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
      </section>

      {/* Footer Links Section */}
      <section className="py-6">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-6">
          {/* Company Info */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Company Info</h5>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Carrier
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  We are hiring
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Legal</h5>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Features</h5>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Business Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  User Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Live Chat
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Unlimited Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Resources</h5>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  iOS & Android
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Watch a Demo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Customers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white">
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscription Form */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Get in Touch</h5>
            <form className="space-y-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-gray-700 text-white rounded"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-400 mt-2">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Bottom Section */}
      <section className="bg-gray-700 py-4">
        <p className="text-center text-sm text-gray-400">
          Made BY HAFIZ TAUSIF
        </p>
      </section>
    </footer>
      </body>
    </html>
  );
};

export default Layout;
