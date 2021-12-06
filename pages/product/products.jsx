import Head from "next/head";
import React, { useState } from "react";
import Product from "../../Components/Products/Product";

import HeadSlider from "../../Components/Slider/HeadSlider";

import data from "../../public/dbs/db.json";

//Fetch products
export const getStaticProps = async () => {
  return {
    props: { products: data },
  };
};

const Products = ({ products }) => {
  const [shopProduct, setWebProduct] = useState(products);

  // Active filter link
  const activeLink = (e) => {
    let childs = e.target.parentElement.children;
    for (let x = 0; x < childs.length; x++) {
      childs[x].className =
        "cursor-pointer hover:text-red-500 transition duration-200";
    }
    e.target.className =
      "active_item cursor-pointer hover:text-red-500 transition duration-200";
  };

  // Filter product items
  const productFilter = (e, catagory) => {
    activeLink(e);
    const itemFilter = products.filter((currntItem) => {
      return currntItem.catagory === catagory;
    });

    setWebProduct(itemFilter);
  };

  return (
    <div>
      <Head>
        <title>Products</title>
      </Head>

      <HeadSlider />
      <div className="container px-4 sm:px-0 mx-auto  2xl:px-24 mt-20">
        <div className="w-full py-6 mb-6 border-b">
          <ul className="flex justify-center items-center uppercase space-x-6 px-2 font-bold">
            <li
              onClick={(e) => {
                activeLink(e), setWebProduct(products);
              }}
              className="active_item cursor-pointer hover:text-red-500 transition duration-200"
            >
              All product
            </li>
            <li
              onClick={(e) => productFilter(e, "shirt")}
              className="cursor-pointer hover:text-red-500 transition duration-200"
            >
              T-shirt
            </li>
            <li
              onClick={(e) => productFilter(e, "jaket")}
              className="cursor-pointer hover:text-red-500 transition duration-200"
            >
              Jaket
            </li>
            <li
              onClick={(e) => productFilter(e, "pants")}
              className="cursor-pointer hover:text-red-500 transition duration-200"
            >
              Pants
            </li>
            <li
              onClick={(e) => productFilter(e, "shose")}
              className="cursor-pointer hover:text-red-500 transition duration-200"
            >
              shose
            </li>
          </ul>
        </div>
        <div
          id="shop_products"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14"
        >
          {shopProduct.map((pro) => (
            <Product key={pro.id} product={pro} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
