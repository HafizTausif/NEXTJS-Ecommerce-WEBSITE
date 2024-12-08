import React from "react";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  // Define variables outside JSX
  const picks = [
    { title: "Men", image: "/images/editor-pick_photo1.webp" },
    { title: "Women", image: "/images/editor-pick_photo2.webp" },
    { title: "Accessories", image: "/images/editor-pick_photo3.webp" },
    { title: "Kids", image: "/images/editor-pick_photo4.webp" },
  ];

  const products = [
    { title: "Graphic Design", price: "$16.48", image: "/images/product-cover1.jpg" },
    { title: "UI/UX Design", price: "$24.99", image: "/images/product-cover2.jpg" },
    { title: "Web Development", price: "$19.99", image: "/images/product-cover3.jpg" },
    { title: "SEO Optimization", price: "$12.49", image: "/images/product-cover4.jpg" },
    { title: "Graphic Design", price: "$16.48", image: "/images/product-cover1.jpg" },
    { title: "UI/UX Design", price: "$24.99", image: "/images/product-cover2.jpg" },
    { title: "Web Development", price: "$19.99", image: "/images/product-cover3.jpg" },
    { title: "SEO Optimization", price: "$12.49", image: "/images/product-cover4.jpg" },
  ];


  const posts = [
    {
      image: "/images/products-post1__mobile.jpg",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      image: "/images/products-post2__mobile.jpg",
      title: "Another Featured Product",
      description:
        "Focus on creating high-quality products that provide real value for our customers.",
      date: "10 May 2021",
      comments: 20,
    },
    {
      image: "/images/products-post1__mobile.jpg",
      title: "Loudest à la Madison #1 (L'integral)",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      image: "/images/products-post2__mobile.jpg",
      title: "Another Featured Product",
      description:
        "Focus on creating high-quality products that provide real value for our customers.",
      date: "10 May 2021",
      comments: 20,
    },
    // Add more posts as needed
  ];

  return (
    <div>
      {/* Banner Section */}
      <section className="banner relative pt-[1px]">
      {/* Carousel Container */}
      <div className="carousel relative w-full">
        {/* Carousel Indicators */}
        <div className="carousel-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          <button
            className="w-3 h-3 rounded-full bg-gray-500"
            aria-label="Slide 1"
            data-carousel="0"
          ></button>
          <button
            className="w-3 h-3 rounded-full bg-gray-300"
            aria-label="Slide 2"
            data-carousel="1"
          ></button>
        </div>

        {/* Carousel Slides */}
        <div className="carousel-inner relative  h-[120vh] overflow-hidden">
          {/* First Slide */}
          <div className="carousel-item active w-full">
            <Image
                src="/images/banner-carousel-image.jpg"
              alt="woman holding a purse"
              layout="fill"
              className="carousel-image object-cover object-center"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="banner-carousel text-center text-white">
                <hgroup className="banner-carousel-header space-y-6">
                  <h3 className="text-sm uppercase text-gray-300">Summer 2020</h3>
                  <h2 className="text-3xl md:text-5xl uppercase font-bold">
                    New Collection
                  </h2>
                  <p className="text-xl">
                    We know how large objects will act, but things on a small scale.
                  </p>
                </hgroup>
                <Link
                  href="#"
                  className="carousel-button bg-green-500 hover:bg-green-600 text-white font-bold text-lg uppercase px-8 py-4 rounded-lg mt-6 transition duration-300"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </div>

          {/* Second Slide */}
          <div className="carousel-item w-full">
            <Image
                src="/images/banner-carousel-image.jpg"
              alt="woman holding a purse"
              layout="fill"
              className="carousel-image object-cover object-center"
            />
            <div className="absolute inset-0  flex items-center justify-center">
            <div className="banner-carousel text-white flex flex-col items-start justify-center absolute top-0 left-0 h-full w-full px-8">
  <hgroup className="banner-carousel-header space-y-6">
    <h3 className="text-sm uppercase text-gray-300">Summer 2020</h3>
    <h2 className="text-3xl md:text-5xl uppercase font-bold">
      New Collection
    </h2>
    <p className="text-xl">
      We know how large objects will act, but things on a small scale.
    </p>
  </hgroup>
  <Link
    href="#"
    className="carousel-button bg-green-500 hover:bg-green-600 text-white font-bold text-lg uppercase px-8 py-4 rounded-lg mt-6 transition duration-300"
  >
    Shop now
  </Link>
</div>

            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          className="carousel-control-prev absolute top-1/2 left-4 transform -translate-y-1/2"
          aria-label="Previous Slide"
        >
          <span className="carousel-control-prev-icon bg-gray-400 w-6 h-6 rounded-full"></span>
        </button>
        <button
          className="carousel-control-next absolute top-1/2 right-4 transform -translate-y-1/2"
          aria-label="Next Slide"
        >
          <span className="carousel-control-next-icon bg-gray-400 w-6 h-6 rounded-full"></span>
        </button>
      </div>
    </section>

      {/* Editor's Pick Section */}
      <section className="editor-pick py-12">
  <div className="text-center mb-5">
    <h2 className="text-2xl font-bold">Editors Pick</h2>
    <p className="text-gray-600 mt-2">
      Problems trying to resolve the conflicts between
    </p>
  </div>

  {/* Grid Container */}
  <div className="grid grid-cols-2 gap-5 md:grid-cols-5 container mx-auto">
    {/* First Image (Spans Half Container) */}
    <div className="relative col-span-2 md:col-span-2 group">
      <Image
        src={picks[0].image}
        alt={picks[0].title}
        width={400}
        height={400}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <span>{picks[0].title}</span>
      </div>
    </div>

    {/* Second Image (Quarter of Container) */}
    <div className="relative col-span-1 md:col-span-1 group gap-4">
      <Image
        src={picks[1].image}
        alt={picks[1].title}
        width={400}
        height={400}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <span>{picks[1].title}</span>
      </div>
    </div>

    {/* Last Two Images (Stacked Vertically in Small Columns) */}
    <div className="md:col-span-1 flex flex-col gap-6">
    {/* The 3rd Image (Stacked on Top) */}
    <div className="group">
      <Image
        src={picks[2].image}
        alt={picks[2].title}
        width={400}
        height={400}
        className="w-full object-cover"
      />
     
    </div>
    <div className="group">
      <Image
        src={picks[3].image}
        alt={picks[3].title}
        width={400}
        height={400}
        className="w-full object-cover" 
      />
      
    </div>
    </div>
    
  </div>
</section>


      {/* Featured Products Section */}


    <section className="featured-products py-12">
      <div className="text-center mb-8">
        <h3 className="text-lg">Featured Products</h3>
        <h2 className="text-2xl font-bold">Bestseller Products</h2>
        <p className="text-gray-600 mt-2">
          Problems trying to resolve the conflicts between
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 container mx-auto">
        {products.map((product, index) => (
          <div key={index} className="relative bg-white shadow-lg rounded-lg">
            <Image
              src={product.image}
              alt={product.title}
              width={400}
              height={400}
              className="rounded-t-lg"
            />
            <div className="p-4">
              <h5 className="text-lg font-bold">{product.title}</h5>
              <p className="text-gray-600 mt-2">{product.price}</p>

              {/* Product prices */}
              <div className="product-prices flex gap-2 mt-2">
                <span className="text-sm text-gray-500 line-through">
                  {product.price}
                </span>
                <span className="text-lg font-bold text-green-500">
                  {product.price}
                </span>
              </div>

              {/* Product colors */}
              <div className="product-colors flex justify-center gap-2 mt-2">
                <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
                <span className="w-4 h-4 rounded-full bg-red-500"></span>
                <span className="w-4 h-4 rounded-full bg-gray-800"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>








    <section className="banner relative pt-[1px]">
      {/* Carousel Container */}
      <div className="carousel relative w-full">
        {/* Carousel Indicators */}
        <div className="carousel-indicators absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          <button
            className="w-3 h-3 rounded-full bg-gray-500"
            aria-label="Slide 1"
            data-carousel="0"
          ></button>
          <button
            className="w-3 h-3 rounded-full bg-gray-300"
            aria-label="Slide 2"
            data-carousel="1"
          ></button>
        </div>

        {/* Carousel Slides */}
        <div className="carousel-inner relative bg-green-800 h-[120vh] overflow-hidden">
  {/* Second Slide */}
  <div className="carousel-item w-full flex items-center">
    {/* Image on the right side with more space */}
    <div className="w-full lg:w-1/2 flex justify-end ml-auto pr-10  ">
      <Image
        src="/images/classic-carousel-image.png"
        alt="woman holding a purse"
        width={600}
        height={200}
        className="carousel-image object-cover object-center"
      />
    </div>

    {/* Text and content on the left */}
    <div className="banner-carousel text-white flex flex-col items-start justify-center absolute top-0 left-0 h-full w-full px-8 lg:w-1/2">
      <hgroup className="banner-carousel-header space-y-6">
        <h1 className="text-4xl uppercase text-gray-300">Summer 2020</h1>
        <h2 className="text-3xl md:text-5xl uppercase font-bold">
          New Collection
        </h2>
        <p className="text-xl">
          We know how large objects will act, but things on a small scale.
        </p>
      </hgroup>
      <Link
        href="#"
        className="carousel-button bg-green-500 hover:bg-green-600 text-white font-bold text-lg uppercase px-8 py-4 rounded-lg mt-6 transition duration-300"
      >
        Shop now
      </Link>
 

  



            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          className="carousel-control-prev absolute top-1/2 left-4 transform -translate-y-1/2"
          aria-label="Previous Slide"
        >
          <span className="carousel-control-prev-icon bg-gray-400 w-6 h-6 rounded-full"></span>
        </button>
        <button
          className="carousel-control-next absolute top-1/2 right-4 transform -translate-y-1/2"
          aria-label="Next Slide"
        >
          <span className="carousel-control-next-icon bg-gray-400 w-6 h-6 rounded-full"></span>
        </button>
      </div>
    </section>













    <section className="universe py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Image */}
        <div className="w-full flex justify-center md:justify-start">
          <Image
            src="/images/universe-image.jpg"
            alt="Asian woman and man with winter clothes"
            width={500}
            height={500}
            className="object-cover w-full max-w-xl"
          />
        </div>

        {/* Right Column - Text and Buttons */}
        <div className="text-white flex flex-col items-center md:items-start">
          <hgroup className="universe-header space-y-6 text-center md:text-left">
            <h3 className="text-3xl text-gray-600">Summer 2020</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-black">Part of the Neural Universe</h2>
            <p className="text-3xl text-gray-400">
              We know how large objects will act, but things on a small scale.
            </p>
          </hgroup>

          {/* Buttons */}
          <div className="universe-wrapper flex flex-col md:flex-row gap-6 items-center md:items-start">
            <Link
              href="#"
              className="carousel-button bg-green-500 hover:bg-green-600 text-white font-bold text-lg uppercase px-8 py-4 rounded-lg mt-6 transition duration-300"
            >
              Buy now
            </Link>
            <Link
              href="#"
              className="carousel-button border-2 border-green-500 text-green-500 hover:bg-gray-700 hover:text-white font-bold text-lg uppercase px-8 py-4 rounded-lg mt-6 transition duration-300"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
 



    
    












    <section className="featured-products py-20 px-6 md:px-16">
      <div className="text-center mb-12">
        <h3 className="text-xl text-blue-400">Practice Advice</h3>
        <h2 className="text-5xl md:text-5xl font-bold">Featured Posts</h2>
        <p className="text-md text-gray-400 mt-2">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics.
        </p>
      </div>

      <div className="posts-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto">
        {posts.map((post, index) => (
          <div key={index} className="post bg-white shadow-lg rounded-lg overflow-hidden relative">
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="post-image w-full h-64 object-cover"
            />
            <span className="new-post absolute top-4 left-4 text-sm font-bold text-white bg-red-500 px-4 py-1 uppercase">
              New
            </span>
            <div className="post-header p-4">
              <div className="tags-wrapper flex space-x-4">
                <span className="post-tag text-sm text-gray-400">Google</span>
                <span className="post-tag text-sm text-gray-400">Trending</span>
                <span className="post-tag text-sm text-gray-400">New</span>
              </div>
              <h2 className="post-title text-md font-medium mt-2 ">{post.title}</h2>
            </div>
            <p className="text-md__regular p-4 text-gray-600">{post.description}</p>
            <div className="post-informations flex justify-between p-4 border-t border-gray-200">
              <div className="information-wrapper flex items-center gap-2">
                <i className="bi bi-stopwatch text-primary"></i>
                <time className="text-sm">{post.date}</time>
              </div>
              <div className="information-wrapper flex items-center gap-2">
                <img src="/assets/icons/chart-icon.svg" alt="comments icon" className="h-4 w-4" />
                <span className="text-sm">{post.comments} comments</span>
              </div>
            </div>
            <div className="post-footer flex items-center gap-2 p-4">
              <Link href="#" className="post-link text-primary text-lg font-semibold hover:text-blue-500 transition-transform transform hover:translate-x-2">
                <span>Learn More</span>
                <i className="bi bi-chevron-right"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>


    
    </div>
  );
};

export default Home;
