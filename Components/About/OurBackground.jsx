import Image from "next/image";

//Import social icon from react-icons
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";

const OurBackground = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full flex justify-between items-center px-6 pb-6 pt-16 mb-6 border-b">
        <h3 className="text-3xl capitalize">our background</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-4">
          <Image
            src="/images/feature-image.jpg"
            width={100}
            height={70}
            layout="responsive"
            objectFit="scale-down"
            loading="eager"
            alt="feature-image"
          />
        </div>
        <div className="p-4 flex flex-col justify-center space-y-8 ">
          <h3 className="text-blue-600 text-xl font-medium">
            Who we are & What we do?
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
            voluptate nihil eum consectetur similique? Consectetur, quod,
            incidunt, harum nisi dolores delectus reprehenderit voluptatem
            perferendis dicta dolorem non blanditiis ex fugiat. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
            consequuntur, modi mollitia corporis ipsa voluptate corrupti eum
            ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti
            necessitatibus perspiciatis quis.
          </p>
          <hr />
          <div className="flex justify-center md:justify-start items-center space-x-4 text-black">
            <span className="p-4 bg-gray-300 hover:bg-red-500 hover:text-white transition duration-200 cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="p-4 bg-gray-300 hover:bg-red-500 hover:text-white transition duration-200 cursor-pointer">
              <FaTwitter />
            </span>
            <span className="p-4 bg-gray-300 hover:bg-red-500 hover:text-white transition duration-200 cursor-pointer">
              <FaLinkedinIn />
            </span>
            <span className="p-4 bg-gray-300 hover:bg-red-500 hover:text-white transition duration-200 cursor-pointer">
              <FaBehance />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBackground;
