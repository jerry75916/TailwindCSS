import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
const Category = () => {
  return (
    <div className=" bg-white shadow-sm shadow-white rounded-xl p-4">
      <h3 className=" font-roboto  font-semibold text-xl text-gray-700 ">
        Categories
      </h3>
      <div className=" space-y-3 mt-4 text-gray-700 ">
        <Link
          href="#"
          className=" flex  leading-4 items-center font-semibold hover:text-blue-700 transition uppercase"
        >
          <span className=" mr-2">
            <FontAwesomeIcon icon={faFolderOpen} />
          </span>
          <span>Beautify</span>
          <span className=" font-normal ml-auto">(10)</span>
        </Link>
        <Link
          href="#"
          className=" flex  leading-4 items-center font-semibold hover:text-blue-700 transition uppercase"
        >
          <span className=" mr-2">
            <FontAwesomeIcon icon={faFolderOpen} />
          </span>
          <span>Business</span>
          <span className=" font-normal ml-auto">(12)</span>
        </Link>
        <Link
          href="#"
          className=" flex  leading-4 items-center font-semibold hover:text-blue-700 transition uppercase"
        >
          <span className=" mr-2">
            <FontAwesomeIcon icon={faFolderOpen} />
          </span>
          <span>Fashion</span>
          <span className=" font-normal ml-auto">(17)</span>
        </Link>
        <Link
          href="#"
          className=" flex  leading-4 items-center font-semibold hover:text-blue-700 transition uppercase"
        >
          <span className=" mr-2">
            <FontAwesomeIcon icon={faFolderOpen} />
          </span>
          <span>Nature</span>
          <span className=" font-normal ml-auto">(7)</span>
        </Link>
        <Link
          href="#"
          className=" flex  leading-4 items-center font-semibold hover:text-blue-700 transition uppercase"
        >
          <span className=" mr-2">
            <FontAwesomeIcon icon={faFolderOpen} />
          </span>
          <span>Food</span>
          <span className=" font-normal ml-auto">(1)</span>
        </Link>
        <Link
          href="#"
          className=" flex  leading-4 items-center font-semibold hover:text-blue-700 transition uppercase"
        >
          <span className=" mr-2">
            <FontAwesomeIcon icon={faFolderOpen} />
          </span>
          <span>Music</span>
          <span className=" font-normal ml-auto">(7)</span>
        </Link>
        <Link
          href="#"
          className=" flex  leading-4 items-center font-semibold hover:text-blue-700 transition uppercase"
        >
          <span className=" mr-2">
            <FontAwesomeIcon icon={faFolderOpen} />
          </span>
          <span>News</span>
          <span className=" font-normal ml-auto">(0)</span>
        </Link>
        <Link
          href="#"
          className=" flex  leading-4 items-center font-semibold hover:text-blue-700 transition uppercase"
        >
          <span className=" mr-2">
            <FontAwesomeIcon icon={faFolderOpen} />
          </span>
          <span>People</span>
          <span className=" font-normal ml-auto">(11)</span>
        </Link>
        <Link
          href="#"
          className=" flex  leading-4 items-center font-semibold hover:text-blue-700 transition uppercase"
        >
          <span className=" mr-2">
            <FontAwesomeIcon icon={faFolderOpen} />
          </span>
          <span>Sports </span>
          <span className=" font-normal ml-auto">(15)</span>
        </Link>
        <Link
          href="#"
          className=" flex  leading-4 items-center font-semibold hover:text-blue-700 transition uppercase"
        >
          <span className=" mr-2">
            <FontAwesomeIcon icon={faFolderOpen} />
          </span>
          <span>Techonology</span>
          <span className=" font-normal ml-auto">(8)</span>
        </Link>
      </div>
    </div>
  );
};

export default Category;
