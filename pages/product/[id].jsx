import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

// Import products data
import data from "../../public/dbs/db.json";

//Fetch products
export const getStaticProps = async () => {
  return {
    props: { product: data },
  };
};

//Fetch products id
export const getStaticPaths = async () => {
  const paths = data.map((itemId) => ({
    params: { id: itemId.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

const ProductItems = ({ product }) => {
  const router = useRouter();

  const { id } = router.query;

  const paths = product[id - 1];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
        <div className="p-10 flex justify-center">
          <Image
            className="h-96 w-full md:w-3/4"
            src={paths.imgSrc}
            alt={paths.name}
            layout="fixed"
            width={500}
            height={450}
          />
        </div>
        <div className="min-h-full px-10 py-14 flex flex-col space-y-10 justify-center items-start">
          <h1 className="text-2xl font-bold">{paths.name}</h1>
          <div className="flex justify-center items-center font-bold text-red-500">
            <span className="text-black w-28"> Reviews </span>{" "}
            <span> {`( ${paths.reviews} )`} </span>
          </div>
          <div className="flex justify-center items-center font-bold text-red-500">
            <span className="text-black font-bold w-28">Rate</span>
            <span className="mr-1 text-xl">{paths.rate}</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>
          </div>
          <div className="flex justify-center items-start font-bold text-gray-500">
            <span className="text-black w-36">Description</span>
            <p className="font-normal px-4">{paths.description}</p>
          </div>
          <div className="font-bold w-full">
            <button className="bg-red-500 w-full md:w-max px-6 py-2 ring-0 rounded-lg uppercase text-white hover:bg-gray-900 transition duration-200">
              Buy product
            </button>
          </div>
        </div>
      </div>
      <Link href="/product/products">
        <a className="px-10 text-xl text-blue-500 hover:text-red-500">
          {" "}
          Back to products ...{" "}
        </a>
      </Link>
    </div>
  );
};

export default ProductItems;
