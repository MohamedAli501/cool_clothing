import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="min_heights">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
