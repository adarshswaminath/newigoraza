import React from "react";
import { productdata } from "./constants";
import { motion } from "framer-motion";



const ProductCard = ({image,title,caption,link}) => {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className=" w-full bg-white rounded-lg border shadow-lg overflow-hidden"
      >
        <img
          className="h-56 w-full object-cover"
          src={image}
          alt="Product Image"
        />
        <div className="p-4">
          <h2 className="text-gray-800 font-bold text-xl mb-2">
            {title}
          </h2>
          <p className="text-gray-600">
            {caption}
          </p>
          <a href={`${link}`}>
            <button className="p-3 w-full bg-[#1d3557] bottom-0 left-0 mt-2 rounded-lg font-bold text-white">Visit</button>
          </a>
        </div>
      </motion.div>
    );
  };
  
function Products() {
  return (
    <div className="p-4 md:p-8 lg:p-12 xl:p-16" id="products">
      <h3 className="text-center text-2xl md:text-3xl lg:text-5xl font-bold text-[#1d3557] ">
        Our Popular Products
      </h3>
      <div className="mt-3 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {productdata.map((value) => (
          <ProductCard 
            key={value.id}
            image={value.image}
            title={value.title}
            caption={value.caption}
            link={value.link}
            />
        ))}
      </div>
    </div>
  );
}

export default Products;
