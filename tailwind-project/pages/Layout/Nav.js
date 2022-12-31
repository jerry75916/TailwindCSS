import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFileAlt,
  faPhone,
  faMagnifyingGlass,
  faUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Category from "../Parts/categories/category";
const Nav = () => {
  const [show, setShow] = useState(false);
  const handleSideBar = () => {
    setShow(!show);
  };
  const closeSideBar = () => {
    setShow(false);
  };

  return (
    <div>
      {/* overlap */}
      <div
        className={`fixed w-full h-full bg-black bg-opacity-25 top-0 left-0 z-10 ${
          show ? `` : `invisible`
        } transition-all  lg:hidden`}
        onClick={closeSideBar}
      ></div>
      <div
        className={`fixed  top-0 w-72 h-full bg-white flex flex-col shadow-sm z-10  transition duration-500 ease-in-out  lg:hidden  ${
          show ? ` translate-x-0` : `-translate-x-80`
        }  `}
      >
        <div className=" mx-3 my-3 relative lg:hidden">
          <span className=" absolute left-3 top-2 text-sm text-gray-600">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input
            type="text"
            placeholder="Search..."
            className=" block w-full rounded-3xl  pl-11 pr-11 py-2 outline-none bg-gray-200 text-sm text-gray-600 shadow-sm  shadow-slate-300"
          ></input>
        </div>
        <h3 className=" font-roboto  font-semibold text-xl text-gray-700 ml-4">
          Menu
        </h3>
        <ul className=" ml-4 list-none flex-col flex  space-y-5  border-b mt-3 mb-1">
          <li>
            <Link
              href="#"
              className=" font-semibold flex  text-sm items-center hover:text-blue-700 transition "
            >
              <span className="mr-2">
                <FontAwesomeIcon icon={faHouse} />
              </span>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className=" font-semibold flex  text-sm items-center hover:text-blue-700 transition "
            >
              <span className="mr-2">
                <FontAwesomeIcon icon={faFileAlt} />
              </span>
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className=" font-semibold flex  text-sm items-center hover:text-blue-700 transition "
            >
              <span className="mr-2">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <p>Contact</p>
            </Link>
          </li>
        </ul>

        <Category />
      </div>
      <nav className=" bg-slate-300 shadow-md shadow-slate-300 ">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <Link href="/">
            <Image
              src="/images/easyshop.png"
              alt="Company Logo"
              width={200}
              height={55}
            />
          </Link>
          <ul className=" ml-12 hidden  list-none lg:flex  space-x-5  ">
            <li>
              <Link
                href="#"
                className=" font-semibold flex  text-sm items-center hover:text-blue-700 transition "
              >
                <span className="mr-2">
                  <FontAwesomeIcon icon={faHouse} />
                </span>
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=" font-semibold flex  text-sm items-center hover:text-blue-700 transition "
              >
                <span className="mr-2">
                  <FontAwesomeIcon icon={faFileAlt} />
                </span>
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className=" font-semibold flex  text-sm items-center hover:text-blue-700 transition "
              >
                <span className="mr-2">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <p>Contact</p>
              </Link>
            </li>
          </ul>
          <div className=" ml-auto hidden relative lg:block">
            <span className=" absolute left-3 top-2 text-sm text-gray-600">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className=" block w-full rounded-3xl  pl-11 pr-11 py-2 outline-none bg-gray-200 text-sm text-gray-600 shadow-sm  shadow-slate-300"
            ></input>
          </div>
          <div className="ml-5">
            <Link
              href="#"
              className=" text-gray-900 font-semibold flex items-center text-lg  hover:text-blue-700 transition mr-5"
            >
              <span className="mr-2">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <p>Login/Register</p>
            </Link>
          </div>
          <div
            className=" ml-5 text-xl text-gray-700 cursor-pointer lg:hidden block  hover:text-blue-700 transition"
            onClick={handleSideBar}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
