import Head from "next/head";
import Image from "next/image";
import Accordion from "../Components/Contact/Accordion";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div className="w-full h-96 relative">
        <Image
          src="/images/about-heading.jpg"
          layout="fill"
          alt="contact-heading"
        />
        <div className="uppercase absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10 text-center">
          <h3 className="text-red-500 text-2xl font-bold p-6">contact us</h3>
          <h1 className="text-white text-6xl font-medium">
            let’s get in touch
          </h1>
        </div>
      </div>

      <div className="bg-white mb-24">
        <div className="container mx-auto">
          <div className="w-full flex justify-between items-center py-10 px-6 mt-12 mb-6 border-b">
            <h3 className="text-3xl capitalize">Contact us</h3>
          </div>
          <div className="px-6 grid grid-cols-1 md:grid-cols-3 gap-10 pt-12">
            <div className="col-span-1 md:col-span-2 h-80 mb-24">
              <form onSubmit={(e) => e.preventDefault()} className="w-full">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-2 rounded-sm border outline-none mb-6"
                />
                <input
                  type="text"
                  placeholder="E-mail Address"
                  className="w-full p-2 rounded-sm border outline-none mb-6"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-2 rounded-sm border outline-none mb-6"
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Your Masseage"
                  className="w-full p-2 rounded-sm border outline-none mb-6 resize-none"
                />
                <button className="bg-red-500 w-max px-6 py-2 ring-0 rounded-lg capitalize text-white hover:bg-gray-900 transition duration-200">
                  Send Message
                </button>
              </form>
            </div>
            {/* Accordion component */}
            <div className="">
              <Accordion />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto"></div>
    </div>
  );
};

export default Contact;
