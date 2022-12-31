import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Categories from "../Parts/categories/categories";
const Layout = ({ children, flex }) => {
  return (
    <div className=" font-poppins text-gray-600 ">
      <Nav />
      <div className=" py-12 bg-gray-200">
        <div className={`container mx-auto px-4 ${flex}`}>
          <Categories />
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
