import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50 ">
      {/* Contact Us Banner */}
      <section className="banner relative pt-[1px]">
        <div className="carousel relative w-full">
          <div className="carousel-inner relative bg-white h-[120vh] overflow-hidden">
            <div className="carousel-item w-full flex items-center">
              {/* Image */}
              <div className="w-full lg:w-1/2 flex justify-end pr-8">
                <Image
                  src="/images/background.png"
                  alt="Contact us technology"
                  layout="fill"
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Text */}
              <div className="banner-carousel text-black flex flex-col items-start justify-center absolute top-0 left-0 h-full w-full px-8 lg:w-1/2">
                <hgroup className="banner-carousel-header space-y-6">
                  <h1 className="text-md uppercase text-gray-500">CONTACT US NOW!</h1>
                  <h2 className="text-5xl md:text-5xl uppercase font-bold">CONTACT US</h2>
                  <p className="text-sm text-gray-700">
                    We know how large objects will act, but things on a small scale.
                  </p>
                  <h1 className="text-xl uppercase text-gray-700">PHONE: +44565777</h1>
                  <h1 className="text-xl uppercase text-gray-700">FAX: +445676777</h1>
                </hgroup>
                {/* Social Media Icons */}
                <div className="flex space-x-6 mt-6">
                  <FaFacebook className="text-blue-600 text-3xl hover:text-blue-800 cursor-pointer" />
                  <FaTwitter className="text-blue-400 text-3xl hover:text-blue-600 cursor-pointer" />
                  <FaInstagram className="text-pink-600 text-3xl hover:text-pink-800 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Office Section */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Visit Our Office</h2>
          <p className="text-gray-600 mt-2">We help small businesses grow</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-7">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <FaPhone className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-lg font-bold">Call Us</h3>
            <p className="text-gray-500 mt-2">+44565777</p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-950 text-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <FaMapMarkerAlt className="text-blue-300 text-5xl mb-4" />
            <h3 className="text-lg text-blue-300 font-bold">Our Location</h3>
            <p className="text-blue-300 mt-2">
              123 Main Street, <br />
              Cityville, USA
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <FaEnvelope className="text-blue-600 text-5xl mb-4" />
            <h3 className="text-lg font-bold">Email Us</h3>
            <p className="text-gray-500 mt-2">contact@company.com</p>
          </div>
        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Lets Talk and Connect Now!</h2>
        <p className="text-gray-600 mt-4">We are just a click away from connecting with you.</p>
        <div className="flex justify-center items-center mt-8">
          <button className="relative bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold uppercase px-8 py-4 rounded-lg transition duration-300">
            Connect Now
            {/* Arrow */}
            <span className="absolute top-1/2 -translate-y-1/2 right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
