import React from "react";
import Link from "next/link";
const SocialTags = () => {
  return (
    <div class="w-full bg-white shadow-sm rounded-xl p-4 mt-4 ">
      <h3 class="text-xl font-semibold text-gray-700 font-roboto "> Tags </h3>
      <div class="flex items-center flex-wrap gap-2 mt-4 ">
        <Link
          href="#"
          class="px-3 py-1 text-sm border border-gray-300 rounded-sm transition hover:bg-blue-500 hover:text-white"
        >
          Beauti
        </Link>

        <Link
          href="#"
          class="px-3 py-1 text-sm border border-gray-300 rounded-sm transition hover:bg-blue-500 hover:text-white"
        >
          Sports
        </Link>
        <Link
          href="#"
          class="px-3 py-1 text-sm border border-gray-300 rounded-sm transition hover:bg-blue-500 hover:text-white"
        >
          Business
        </Link>
        <Link
          href="#"
          class="px-3 py-1 text-sm border border-gray-300 rounded-sm transition hover:bg-blue-500 hover:text-white"
        >
          Programming
        </Link>
        <Link
          href="#"
          class="px-3 py-1 text-sm border border-gray-300 rounded-sm transition hover:bg-blue-500 hover:text-white"
        >
          Jave
        </Link>
        <Link
          href="#"
          class="px-3 py-1 text-sm border border-gray-300 rounded-sm transition hover:bg-blue-500 hover:text-white"
        >
          Laravel
        </Link>
        <Link
          href="#"
          class="px-3 py-1 text-sm border border-gray-300 rounded-sm transition hover:bg-blue-500 hover:text-white"
        >
          Computer
        </Link>
        <Link
          href="#"
          class="px-3 py-1 text-sm border border-gray-300 rounded-sm transition hover:bg-blue-500 hover:text-white"
        >
          php
        </Link>
      </div>
    </div>
  );
};

export default SocialTags;
