import React from "react";
import Image from "next/image";
const Comment = () => {
  return (
    <div className=" bg-white shadow-sm shadow-white rounded-xl  px-3 py-4 mt-4">
      <h4 className="  font-semibold font-roboto text-base mb-4">
        Post A Comment
      </h4>
      <p className=" text-sm  text-gray-500 font-roboto">12 comments</p>
      <div className=" space-y-4">
        <div className=" border-b flex pb-5  border-gray-300 items-center ">
          <div className=" h-12 w-12 flex flex-shrink-0">
            <Image
              src="/images/ariyan.jpg"
              width={50}
              height={30}
              className=" w-full rounded-full"
            />
          </div>
          <div className=" flex-grow pl-4">
            <h4 className=" text-base font-roboto">Jerry Hsieh</h4>
            <p className=" text-sm text-gray-400">9 May, 2022 at 12:30</p>
            <p class="text-sm font-600 mt-1 ">This is very nice post </p>
            <div class="flex gap-2 mt-2 ">
              <button class="text-gray-500 px-2 py-1 text-xs border border-gray-200 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition ">
                Reply
              </button>

              <button class="text-gray-500 px-2 py-1 text-xs border border-gray-200 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition ">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" space-y-4">
        <div className=" border-b flex pb-5  border-gray-300 items-center ">
          <div className=" h-12 w-12 flex flex-shrink-0">
            <Image
              src="/images/ariyan.jpg"
              width={50}
              height={30}
              className=" w-full rounded-full"
            />
          </div>
          <div className=" flex-grow pl-4">
            <h4 className=" text-base font-roboto">Jerry Hsieh</h4>
            <p className=" text-sm text-gray-400">9 May, 2022 at 12:30</p>
            <p class="text-sm font-600 mt-1 ">This is very nice post </p>
            <div class="flex gap-2 mt-2 ">
              <button class="text-gray-500 px-2 py-1 text-xs border border-gray-200 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition ">
                Reply
              </button>

              <button class="text-gray-500 px-2 py-1 text-xs border border-gray-200 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition ">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" space-y-4">
        <div className=" border-b flex pb-5  border-gray-300 items-center ">
          <div className=" h-12 w-12 flex flex-shrink-0">
            <Image
              src="/images/ariyan.jpg"
              width={50}
              height={30}
              className=" w-full rounded-full"
            />
          </div>
          <div className=" flex-grow pl-4">
            <h4 className=" text-base font-roboto">Jerry Hsieh</h4>
            <p className=" text-sm text-gray-400">9 May, 2022 at 12:30</p>
            <p class="text-sm font-600 mt-1 ">This is very nice post </p>
            <div class="flex gap-2 mt-2 ">
              <button class="text-gray-500 px-2 py-1 text-xs border border-gray-200 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition ">
                Reply
              </button>

              <button class="text-gray-500 px-2 py-1 text-xs border border-gray-200 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition ">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" space-y-4">
        <div className=" border-b flex pb-5  border-gray-300 items-center ">
          <div className=" h-12 w-12 flex flex-shrink-0">
            <Image
              src="/images/ariyan.jpg"
              width={50}
              height={30}
              className=" w-full rounded-full"
            />
          </div>
          <div className=" flex-grow pl-4">
            <h4 className=" text-base font-roboto">Jerry Hsieh</h4>
            <p className=" text-sm text-gray-400">9 May, 2022 at 12:30</p>
            <p class="text-sm font-600 mt-1 ">This is very nice post </p>
            <div class="flex gap-2 mt-2 ">
              <button class="text-gray-500 px-2 py-1 text-xs border border-gray-200 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition ">
                Reply
              </button>

              <button class="text-gray-500 px-2 py-1 text-xs border border-gray-200 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition ">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" space-y-4">
        <div className=" border-b flex pb-5  border-gray-300 items-center ">
          <div className=" h-12 w-12 flex flex-shrink-0">
            <Image
              src="/images/ariyan.jpg"
              width={50}
              height={30}
              className=" w-full rounded-full"
            />
          </div>
          <div className=" flex-grow pl-4">
            <h4 className=" text-base font-roboto">Jerry Hsieh</h4>
            <p className=" text-sm text-gray-400">9 May, 2022 at 12:30</p>
            <p class="text-sm font-600 mt-1 ">This is very nice post </p>
            <div class="flex gap-2 mt-2 ">
              <button class="text-gray-500 px-2 py-1 text-xs border border-gray-200 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition ">
                Reply
              </button>

              <button class="text-gray-500 px-2 py-1 text-xs border border-gray-200 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition ">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <form action="#" class="mt-8">
        <h5 class="text-base mb-1 ">Comment:</h5>
        <textarea
          type="text"
          class="w-full border border-gray-500 py-3 px-5 text-sm rounded-xl h-32 focus:outline-none focus:border-gray-800 "
        ></textarea>
        <div class="mt-2 ">
          <button
            type="submit"
            class="text-white py-2 px-3  uppercase text-sm bg-blue-500 border border-blue-900 hover:text-blue-500 hover:bg-transparent transition rounded-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Comment;
