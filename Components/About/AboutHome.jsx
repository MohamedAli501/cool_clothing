import Image from "next/image";
import Link from "next/link";

const AboutHome = () => {
  return (
    <div className="my-20 pb-16 border-b">
      <div className="w-full flex justify-between items-center py-6 mb-6 border-b">
        <h3 className="text-3xl capitalize">About One Clothing</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <div>
          <h4 className="text-xl font-semibold text-blue-900 mb-6">
            Looking for the best products?
          </h4>
          <p className="text-gray-600 leading-8 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea rerum
            praesentium, illum, modi, inventore itaque culpa voluptates
            excepturi natus possimus eum exercitationem deserunt assumenda
            veniam!
          </p>
          <ul className="list-square space-y-4 mb-8 pl-4">
            <li className="cursor-pointer hover:text-red-500 transition duration-200">
              Lorem ipsum dolor sit amet
            </li>
            <li className="cursor-pointer hover:text-red-500 transition duration-200">
              consectetur adipisicing elit
            </li>
            <li className="cursor-pointer hover:text-red-500 transition duration-200">
              It aquecorporis nulla aspernatur
            </li>
            <li className="cursor-pointer hover:text-red-500 transition duration-200">
              Corporis, omnis doloremque
            </li>
            <li className="cursor-pointer hover:text-red-500 transition duration-200">
              Non cum id reprehenderit
            </li>
          </ul>
          <Link href="/about">
            <a className="bg-red-500 px-6 py-2 ring-0 rounded-lg capitalize text-white hover:bg-gray-900 transition duration-200">
              read more
            </a>
          </Link>
        </div>
        <div>
          <Image
            src="/images/feature-image.jpg"
            width={100}
            height={70}
            layout="responsive"
            objectFit="contain"
            alt="feature-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
