import { useRouter } from "next/router";
import Link from "next/link";

const NavLinks = ({ link, action }) => {
  const router = useRouter();

  return (
    <>
      <li
        className={`${
          router.asPath === link.path
            ? "text-red-500 hover:text-red-500"
            : "text-white"
        } md:w-max`}
      >
        <Link href={link.path}>
          <a
            className={`block p-4 hover:bg-gray-800 md:hover:bg-transparent ${
              router.asPath === link.path
                ? "md:hover:text-red-500"
                : "md:hover:text-blue-800"
            } font-bold capitalize`}
            onClick={() => action()}
          >
            {link.title}
          </a>
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
