import { useRouter } from "next/router";

//Error component
const PageError = () => {
  const router = useRouter();

  return (
    <div className="text-center">
      <h1 className="text-2xl my-20">Sorry this page not found</h1>

      <span
        className="mt-40 text-blue-400 cursor-pointer"
        onClick={() => router.back(-1)}
      >
        {" "}
        Go back ...
      </span>
    </div>
  );
};

export default PageError;
