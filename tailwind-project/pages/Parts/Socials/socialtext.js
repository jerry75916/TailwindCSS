import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faFacebookF,
  faGooglePlusG,
  faReact,
  faVuejs,
  faAmazon,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
faLinkedinIn;
const Socialtext = () => {
  return (
    <div className=" bg-white shadow-sm shadow-white rounded-xl  w-full p-4 ">
      <h3 className=" text-xl text-gray-700 uppercase font-semibold font-roboto">
        Social Plugin
      </h3>
      <div className="flex mt-3 gap-3">
        <Link
          href="#"
          className=" border w-8 h-8 flex justify-center items-center  border-gray-400 rounded-sm"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <Link
          href="#"
          className=" border w-8 h-8 flex justify-center items-center border-gray-400 rounded-sm"
        >
          <FontAwesomeIcon icon={faReact} />
        </Link>
        <Link
          href="#"
          className=" border w-8 h-8  flex justify-center items-center border-gray-400 rounded-sm"
        >
          <FontAwesomeIcon icon={faApple} />
        </Link>
        <Link
          href="#"
          className=" border w-8 h-8 flex justify-center items-center border-gray-400 rounded-sm"
        >
          <FontAwesomeIcon icon={faVuejs} />
        </Link>
        <Link
          href="#"
          className=" border w-8 h-8 flex justify-center items-center border-gray-400 rounded-sm"
        >
          <FontAwesomeIcon icon={faAmazon} />
        </Link>
      </div>
    </div>
  );
};

export default Socialtext;
