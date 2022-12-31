import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";
const Common = () => {
  return (
    <div className=" grid grid-col-1 md:grid-cols-2 mt-4  gap-4 ">
      <div className=" bg-white shadow-sm shadow-white rounded-xl  px-3 py-4">
        <div className=" overflow-hidden rounded-lg mt-4 ">
          <Image
            src="/images/pic6.png"
            width={700}
            height={750}
            alt="casstle"
            className=" overflow-hidden rounded-lg object-cover hover:scale-110 transform transition duration-500 "
          />
          <div className=" pb-5 mt-3 ">
            <h2 className=" text-gray-700 font-semibold block text-xl hover:text-blue-500 transition font-roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              aspernatur impedit.
            </h2>
            <p className=" text-sm text-gray-500 mt-4 block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui
              architecto reprehenderit ullam, voluptatem deserunt, nulla sed
              odit quo dolorum incidunt ipsa quibusdam ut officiis, aperiam quis
              eius repudiandae blanditiis.
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
      <div className=" bg-white shadow-sm shadow-white rounded-xl  px-3 py-4">
        <div className=" overflow-hidden rounded-lg mt-4 ">
          <Image
            src="/images/pic3.png"
            width={700}
            height={750}
            alt="casstle"
            className=" overflow-hidden rounded-lg object-cover hover:scale-110 transform transition duration-500 "
          />
          <div className=" pb-5 mt-3 ">
            <h2 className=" text-gray-700 font-semibold block text-xl hover:text-blue-500 transition font-roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              aspernatur impedit.
            </h2>
            <p className=" text-sm text-gray-500 mt-4 block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui
              architecto reprehenderit ullam, voluptatem deserunt, nulla sed
              odit quo dolorum incidunt ipsa quibusdam ut officiis, aperiam quis
              eius repudiandae blanditiis.
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
      </div>{" "}
      <div className=" bg-white shadow-sm shadow-white rounded-xl  px-3 py-4">
        <div className=" overflow-hidden rounded-lg mt-4 ">
          <Image
            src="/images/pic5.png"
            width={700}
            height={750}
            alt="casstle"
            className=" overflow-hidden rounded-lg object-cover hover:scale-110 transform transition duration-500 "
          />
          <div className=" pb-5 mt-3 ">
            <h2 className=" text-gray-700 font-semibold block text-xl hover:text-blue-500 transition font-roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              aspernatur impedit.
            </h2>
            <p className=" text-sm text-gray-500 mt-4 block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui
              architecto reprehenderit ullam, voluptatem deserunt, nulla sed
              odit quo dolorum incidunt ipsa quibusdam ut officiis, aperiam quis
              eius repudiandae blanditiis.
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
      </div>{" "}
      <div className=" bg-white shadow-sm shadow-white rounded-xl  px-3 py-4">
        <div className=" overflow-hidden rounded-lg mt-4 ">
          <Image
            src="/images/pic4.png"
            width={700}
            height={750}
            alt="casstle"
            className=" overflow-hidden rounded-lg object-cover hover:scale-110 transform transition duration-500 "
          />
          <div className=" pb-5 mt-3 ">
            <h2 className=" text-gray-700 font-semibold block text-xl hover:text-blue-500 transition font-roboto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              aspernatur impedit.
            </h2>
            <p className=" text-sm text-gray-500 mt-4 block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui
              architecto reprehenderit ullam, voluptatem deserunt, nulla sed
              odit quo dolorum incidunt ipsa quibusdam ut officiis, aperiam quis
              eius repudiandae blanditiis.
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
    </div>
  );
};

export default Common;
