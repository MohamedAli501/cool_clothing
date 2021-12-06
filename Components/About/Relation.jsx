import React from "react";
import { FaLayerGroup, FaCog, FaLocationArrow } from "react-icons/fa";

const Relation = () => {
  return (
    <div className="bg-transparent-300 py-20 px-4 grid grid-cols-1 md:grid-cols-3 gap-20">
      <div className="bg-white mb-8">
        <div className="bg-gray-100 p-8 flex justify-center text-3xl text-white">
          <span className="p-8 bg-red-500">
            <FaCog />
          </span>
        </div>
        <div className="p-10 flex flex-col justify-center items-center">
          <h2 className="text-blue-400 text-2xl py-4">Product Management</h2>
          <p className="text-center mb-6">
            Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque,
            corporis nulla at quia quaerat.
          </p>
          <button className="bg-red-500 w-max px-6 py-2 ring-0 rounded-lg capitalize text-white hover:bg-gray-900 transition duration-200">
            read more
          </button>
        </div>
      </div>
      <div className="bg-white mb-8">
        <div className="bg-gray-100 p-8 flex justify-center text-3xl text-white">
          <span className="p-8 bg-red-500">
            <FaLayerGroup />
          </span>
        </div>
        <div className="p-10 flex flex-col justify-center items-center">
          <h2 className="text-blue-400 text-2xl py-4">Customer Relations</h2>
          <p className="text-center mb-6">
            Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque,
            corporis nulla at quia quaerat.
          </p>
          <button className="bg-red-500 w-max px-6 py-2 ring-0 rounded-lg capitalize text-white hover:bg-gray-900 transition duration-200">
            details
          </button>
        </div>
      </div>
      <div className="bg-white mb-8">
        <div className="bg-gray-100 p-8 flex justify-center text-3xl text-white">
          <span className="p-8 bg-red-500">
            <FaLocationArrow />
          </span>
        </div>
        <div className="p-10 flex flex-col justify-center items-center">
          <h2 className="text-blue-400 text-2xl py-4">Global Collection</h2>
          <p className="text-center mb-6">
            Lorem ipsum dolor sit amet, consectetur an adipisicing elit. Itaque,
            corporis nulla at quia quaerat.
          </p>
          <button className="bg-red-500 w-max px-6 py-2 ring-0 rounded-lg capitalize text-white hover:bg-gray-900 transition duration-200">
            read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Relation;
