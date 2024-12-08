import React from "react";
import Image from "next/image";

const Products = () => {
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

  const brandsData: { id: string; srcUrl: string }[] = [
    { id: "versace", srcUrl: "/icons/versace-logo.svg" },
    { id: "zara", srcUrl: "/icons/zara-logo.svg" },
    { id: "gucci", srcUrl: "/icons/gucci-logo.svg" },
    { id: "prada", srcUrl: "/icons/prada-logo.svg" },
    { id: "calvin-klein", srcUrl: "/icons/calvin-klein-logo.svg" },
  ];

  const categories = [
    { title: "Men", image: "/images/editor-pick_photo3.webp" },
    { title: "Women", image: "/images/editor-pick_photo2.webp" },
    { title: "Accessories", image: "/images/editor-pick_photo1.webp" },
    { title: "Kids", image: "/images/editor-pick_photo4.webp" },
    { title: "Sale", image: "/images/editor-pick_photo3.webp" },
  ];

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto text-gray-600">
          <span>Home</span> &gt; <span className="font-bold">Shop</span>
        </div>
      </div>

 {/* Featured Categories Section */}
 <div className="container mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Clothing Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg hover:scale-105 transition-transform"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={400}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity rounded-t-lg">
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
 
      {/* Brands Section */}
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

     
      {/* Featured Products Section */}
      <section className="featured-products py-12">
        <div className="text-center mb-8">
          <h3 className="text-lg">Featured Products</h3>
          <h2 className="text-2xl font-bold">Bestseller Products</h2>
          <p className="text-gray-600 mt-2">Browse our collection of top products.</p>
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
    </div>
  );
};

export default Products;
