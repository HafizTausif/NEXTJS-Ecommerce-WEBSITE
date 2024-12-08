import React from "react";

const ProductPage = ({ params }: { params: { id: string } }) => (
  <div className="container mx-auto py-12 px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <img src={`/product-${params.id}.jpg`} alt={`Product ${params.id}`} className="w-full h-auto" />
      <div>
        <h1 className="text-4xl font-bold">Product {params.id}</h1>
        <p className="text-lg text-gray-600 my-4">Detailed description of the product.</p>
        <p className="text-2xl font-bold">$20.00</p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 mt-4">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

export default ProductPage;
