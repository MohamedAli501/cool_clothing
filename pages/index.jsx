import Head from "next/head";
import Link from "next/link";
import AboutHome from "../Components/About/AboutHome";
import Product from "../Components/Products/Product";
import HeadSlider from "../Components/Slider/HeadSlider";

//Import product Items
import data from "../public/dbs/db.json";

//Fetch product item
export const getStaticProps = async () => {
  return {
    props: { products: data },
  };
};

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>clothing Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeadSlider />
      <div className="container px-4 sm:px-0 mx-auto  2xl:px-24 mt-20">
        <div className="w-full flex justify-between items-center py-6 mb-6 border-b">
          <h3 className="text-3xl capitalize">Latest Products</h3>
          <Link href="/product/products">
            <a className="text-sm text-red-500 font-bold uppercase">
              view all products
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {products.slice(1, 7).map((pro) => (
            <Product key={pro.id} product={pro} />
          ))}
        </div>
        <AboutHome />
        <div className="border-b">
          <div className="grid grid-cols-4 gap-6 items-center bg-gray-100 p-6 rounded-lg">
            <div className="md:col-span-3 col-span-4 text-center md:text-left">
              <h4 className="text-xl font-semibold text-blue-900 mb-6">
                Creative & Unique One Products
              </h4>
              <p className="text-gray-600 leading-8 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                rerum praesentium, illum, modi, inventore itaque culpa
                voluptates
              </p>
            </div>
            <button
              className="md:justify-self-end md:col-start-4 md:col-span-1 col-span-4 md:w-max w-auto bg-red-500 px-6 py-2 ring-0 rounded-lg capitalize
           text-white hover:bg-gray-900 transition duration-200"
            >
              Purchase Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
