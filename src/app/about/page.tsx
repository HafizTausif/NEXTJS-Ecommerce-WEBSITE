import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  const team = [
    { name: "TAUSIF", role: "CEO", image: "/images/editor-pick_photo1.webp" },
    { name: "ALi", role: "CTO", image: "/images/editor-pick_photo2.webp" },
    { name: "ohnson", role: "Designer", image: "/images/editor-pick_photo3.webp" },
  ];
  const brandsData: { id: string; srcUrl: string }[] = [
    { id: "versace", srcUrl: "/icons/versace-logo.svg" },
    { id: "zara", srcUrl: "/icons/zara-logo.svg" },
    { id: "gucci", srcUrl: "/icons/gucci-logo.svg" },
    { id: "prada", srcUrl: "/icons/prada-logo.svg" },
    { id: "calvin-klein", srcUrl: "/icons/calvin-klein-logo.svg" },
  ];

  return (
    <div>
      {/* About Us Banner */}
      <section className="banner relative pt-[1px]">
        <div className="carousel relative w-full">
          <div className="carousel-inner relative bg-white h-[120vh] overflow-hidden">
            <div className="carousel-item w-full flex items-center">
              {/* Image */}
              <div className="w-full lg:w-1/2 flex justify-end pr-8">
                <Image
                  src="/images/tecnology.png"
                  alt="About us technology"
                  layout="fill"
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Text */}
              <div className="banner-carousel text-black flex flex-col items-start justify-center absolute top-0 left-0 h-full w-full px-8 lg:w-1/2">
                <hgroup className="banner-carousel-header space-y-6">
                  <h1 className="text-4xl uppercase text-gray-500">ABOUT COMPANY</h1>
                  <h2 className="text-5xl md:text-5xl uppercase font-bold">ABOUT US</h2>
                  <p className="text-sm text-gray-700">
                    We know how large objects will act, but things on a small scale.
                  </p>
                </hgroup>
                <Link
                  href="#"
                  className="carousel-button bg-blue-600 hover:bg-blue-700 text-white text-lg uppercase px-8 py-4 rounded-lg mt-6 transition duration-300"
                >
                  GET QUOTE NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-gray-100 mt-4">
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { label: "Happy Customers", value: "15K+" },
            { label: "Visitors", value: "1500+" },
            { label: "Branches", value: "15+" },
            { label: "Partners", value: "100+" },
          ].map((stat, index) => (
            <div key={index} className="text-gray-800">
              <h3 className="text-4xl font-bold">{stat.value}</h3>
              <p className="text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Full-Width Image Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <Image
            src="/images/Video card.png"
            alt="Full-width about us"
            width={1200}
            height={600}
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
          <p className="text-gray-600 mt-2">Dedicated professionals at your service.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg hover:scale-105 transition-transform"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="rounded-t-lg w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-gray-600 mt-2">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

           {/* Brands Section */}
           <div className="text-center mb-10 mt-4">
          <h2 className="text-3xl font-bold">BIG COMPANIES</h2>
          <p className="text-gray-600 mt-2">Dedicated Problem solving skills on the Line</p>
        </div>
           <div className="bg-black py-5">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-center md:justify-between sm:px-4 xl:px-0 space-x-7">
          {brandsData.map((brand) => (
            <Image
              key={brand.id}
              priority
              src={brand.srcUrl}
              height={40} // Set a valid height
              width={100} // Set a valid width
              alt={brand.id}
              className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11"
            />
          ))}
        </div>
      </div>

      <section className="py-12 mt-4">
        <div className="mx-auto">
          <Image
            src="/images/desktop-testimonials-4.png"
            alt="Full-width about us"
            width={1200}
            height={600}
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>
      </section>


    </div>
  );
};

export default About;
