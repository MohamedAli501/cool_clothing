import React from "react";
import Image from "next/image";

//Import social icon from react-icons
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";

const OurTeam = ({ team }) => {
  return (
    <div className="border transition duration-200 our-team">
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-0 invisible z-10  social-link transition duration-300">
          <div className="flex justify-center items-center space-x-4 h-full text-black">
            <span className="p-4 bg-gray-100 hover:text-red-500 transition duration-200 cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="p-4 bg-gray-100 hover:text-red-500 transition duration-200 cursor-pointer">
              <FaTwitter />
            </span>
            <span className="p-4 bg-gray-100 hover:text-red-500 transition duration-200 cursor-pointer">
              <FaLinkedinIn />
            </span>
            <span className="p-4 bg-gray-100 hover:text-red-500 transition duration-200 cursor-pointer">
              <FaBehance />
            </span>
          </div>
        </div>
        <Image
          src={team.userImg}
          width={100}
          height={60}
          layout="responsive"
          objectFit="cover"
          loading="eager"
          blurDataURL={team.userImg}
          placeholder="blur"
          alt="team"
        />
      </div>

      <div className="flex flex-col justify-between items-center p-6">
        <h3 className="text-blue-500 font-medium capitalize text-2xl">
          {team.name}
        </h3>
        <h5 className="text-xl font-normal text-red-500 py-3"> {team.job}</h5>

        <p className="text-lg my-6 text-gray-600 text-center">{team.info}</p>
      </div>
    </div>
  );
};

export default OurTeam;
