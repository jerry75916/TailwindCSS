import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  return (
    <div className=" bg-white shadow-sm shadow-white rounded-xl p-4 mt-6">
      <h3 className=" font-roboto  font-semibold text-xl text-gray-700 ">
        Random Posts
      </h3>
      <Link href="#" className="mt-4 flex group ">
        <div className="flex-shrink-0">
          <Image
            className="object-cover rounded-lg hover:brightness-200"
            src="/images/computer.jpg"
            height={80}
            width={80}
            alt="compter"
          ></Image>{" "}
        </div>
        <div className="flex-grow pl-3">
          <h5 className=" leading-5  text-xl font-semibold  font-roboto block transition group-hover:text-blue-500">
            Team Bitbose geared up to attend
          </h5>{" "}
          <div className=" flex text-sm text-gray-400 items-center">
            <span className="mr-1 text-xs">
              <FontAwesomeIcon icon={faClock} />
            </span>
            May,29 2022
          </div>
        </div>
      </Link>
      <Link href="#" className="mt-4 flex group ">
        <div className="flex-shrink-0">
          <Image
            className="object-cover rounded-lg hover:brightness-200"
            src="/images/pic1.png"
            height={80}
            width={80}
            alt="compter"
          ></Image>{" "}
        </div>
        <div className="flex-grow pl-3">
          <h5 className=" leading-5  text-xl font-semibold  font-roboto block transition group-hover:text-blue-500">
            Team Bitbose geared up to attend
          </h5>{" "}
          <div className=" flex text-sm text-gray-400 items-center">
            <span className="mr-1 text-xs">
              <FontAwesomeIcon icon={faClock} />
            </span>
            May,29 2022
          </div>
        </div>
      </Link>
      <Link href="#" className="mt-4 flex group ">
        <div className="flex-shrink-0">
          <Image
            className="object-cover rounded-lg hover:brightness-200"
            src="/images/pic2.png"
            height={80}
            width={80}
            alt="compter"
          ></Image>{" "}
        </div>
        <div className="flex-grow pl-3">
          <h5 className=" leading-5  text-xl font-semibold  font-roboto block transition group-hover:text-blue-500">
            Team Bitbose geared up to attend
          </h5>{" "}
          <div className=" flex text-sm text-gray-400 items-center">
            <span className="mr-1 text-xs">
              <FontAwesomeIcon icon={faClock} />
            </span>
            May,29 2022
          </div>
        </div>
      </Link>
      <Link href="#" className="mt-4 flex group ">
        <div className="flex-shrink-0">
          <Image
            className="object-cover rounded-lg hover:brightness-200"
            src="/images/pic3.png"
            height={80}
            width={80}
            alt="compter"
          ></Image>{" "}
        </div>
        <div className="flex-grow pl-3">
          <h5 className=" leading-5  text-xl font-semibold  font-roboto block transition group-hover:text-blue-500">
            Team Bitbose geared up to attend
          </h5>{" "}
          <div className=" flex text-sm text-gray-400 items-center">
            <span className="mr-1 text-xs">
              <FontAwesomeIcon icon={faClock} />
            </span>
            May,29 2022
          </div>
        </div>
      </Link>
      <Link href="#" className="mt-4 flex group ">
        <div className="flex-shrink-0">
          <Image
            className="object-cover rounded-lg hover:brightness-200"
            src="/images/pic4.png"
            height={80}
            width={80}
            alt="compter"
          ></Image>{" "}
        </div>
        <div className="flex-grow pl-3">
          <h5 className=" leading-5  text-xl font-semibold  font-roboto block transition group-hover:text-blue-500">
            Team Bitbose geared up to attend
          </h5>{" "}
          <div className=" flex text-sm text-gray-400 items-center">
            <span className="mr-1 text-xs">
              <FontAwesomeIcon icon={faClock} />
            </span>
            May,29 2022
          </div>
        </div>
      </Link>
      <Link href="#" className="mt-4 flex group ">
        <div className="flex-shrink-0">
          <Image
            className="object-cover rounded-lg hover:brightness-200"
            src="/images/pic5.png"
            height={80}
            width={80}
            alt="compter"
          ></Image>{" "}
        </div>
        <div className="flex-grow pl-3">
          <h5 className=" leading-5  text-xl font-semibold  font-roboto block transition group-hover:text-blue-500">
            Team Bitbose geared up to attend
          </h5>{" "}
          <div className=" flex text-sm text-gray-400 items-center">
            <span className="mr-1 text-xs">
              <FontAwesomeIcon icon={faClock} />
            </span>
            May,29 2022
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Services;
