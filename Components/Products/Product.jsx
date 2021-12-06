import Image from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";

//Product component
const Product = ({ product }) => {
  return (
    <div
      className="pb-6 border hover:shadow-md md:hover:scale-105 transition duration-200 transform"
      data-catagory={product.catagory}
    >
      <Link href={`/product/${product.id}`}>
        <a>
          <div>
            <Image
              src={product.imgSrc}
              width={100}
              height={50}
              layout="responsive"
              objectFit="cover"
              loading="lazy"
              blurDataURL={product.imgSrc}
              placeholder="blur"
              alt={product.name}
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h3 className="text-blue-500 font-bold capitalize">
                {product.name}
              </h3>
              <h5 className="text-xl font-bold">$ {product.prise}</h5>
            </div>
            <p className="text-xl my-6 text-gray-600">{product.description}</p>
            <div className="flex justify-between items-center text-red-500">
              <div className="flex items-center">
                <span className="mr-1 text-xl text-black font-bold">
                  {product.rate}
                </span>
                <span className="text-gray-700 text-xl">
                  <IoIosStar />
                </span>
              </div>
              <h5>Reviews {`(${product.reviews})`}</h5>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Product;
