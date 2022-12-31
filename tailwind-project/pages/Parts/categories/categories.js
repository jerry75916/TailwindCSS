import React from "react";
import Category from "./category";
import Services from "./services";

const Categories = () => {
  return (
    <div className="mr-4 hidden lg:w-3/12 w-full mt-8 lg:mt-0 lg:block  ">
      <Category />
      <Services />
    </div>
  );
};

export default Categories;
