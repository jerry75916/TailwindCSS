import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";
const BusinessPic = () => {
  return (
    <div className=" bg-white shadow-sm shadow-white rounded-xl  px-3 py-4 ">
      <div className="flex justify-between items-center">
        <h5 className=" text-base uppercase font-semibold font-roboto">
          Business
        </h5>
        <Link
          href="/Comments"
          className=" rounded-lg bg-blue-500 text-white py-1 px-2 uppercase text-sm border border-blue-500 hover:text-blue-500 hover:bg-transparent transition "
        >
          See More
        </Link>
      </div>
      <div className=" overflow-hidden rounded-lg mt-4 ">
        <Image
          src="/images/pic6.png"
          width={1200}
          height={768}
          alt="casstle"
          className=" overflow-hidden rounded-lg object-cover hover:scale-110 lg:hover:scale-105 transform transition duration-500 "
        />
        <div className=" pb-5 mt-4 ">
          <Link href="/Comments">
            <h2 className=" text-gray-700 font-semibold block text-xl hover:text-blue-500 transition font-roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              aspernatur impedit.
            </h2>
          </Link>
          <p className=" text-sm text-gray-500 mt-4 block">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type...
          </p>
          <div className=" mt-3 flex space-x-4">
            <div className=" text-gray-400 text-sm items-center">
              <span className="mr-2">
                <FontAwesomeIcon icon={faUser} />
              </span>{" "}
              Bargin Tips
            </div>
            <div className=" text-gray-400 text-sm items-center">
              <span className="mr-2">
                <FontAwesomeIcon icon={faClock} />
              </span>{" "}
              July 15, 2022
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPic;
