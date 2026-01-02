import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div>
      <div className=" mt-2 p-2">
        <ul className="flex justify-center gap-9 pr-5">
          <div className="border-1 flex gap-7 py-3 px-2 rounded-full">
          <li className="border rounded-full px-5 py-2 bg-gray-700 hover:bg-gray-600 transition duration-300 ease-in-out ">
            <Link href="/User" className="text-white" > Name</Link>
          </li>
          <li className="border rounded-full px-5 py-2 bg-gray-700 hover:bg-gray-600 transition duration-300 ease-in-out ">
            <Link href="/User" className="text-white"> Name</Link>
          </li>
          <li className="border rounded-full px-5 py-2 bg-gray-700 hover:bg-gray-600  transition duration-300 ease-in-out">
            <Link href="/User" className="text-white"> Name</Link>
          </li>
                    <li className="border rounded-full px-5 py-2 bg-white transition duration-300 ease-in-out ">
            <Link href="/User" className="text-white"> </Link>
          </li>
          </div>
        </ul>
      </div>


      <div className="h-screen  flex justify-center p-3">
        <div className="bg-gray-200 h-2/3 rounded-2xl shadow-2xl shadow-gray-800 w-[480px]">
          <form action="get">
          <h1 className="text-center pt-3 text-2xl font-bold text-gray-700">Contact</h1>
          <div className=" grid grid-cols-2 gap-6 p-5">
            <div>
              <label>
                Name
                <input
                className="border rounded-lg py-2 pl-2 w-full "
                  type="text"
                  id="text "
                  name="text"
                  placeholder="enter your name"
                />
              </label>
            </div>

            <div>
              <label>
                Last 
                <input
                 className="border rounded-lg py-2 pl-2 w-full"
                  type="text"
                  id="text "
                  name="text"
                  placeholder="enter your name"
                />
              </label>
            </div>

            <div>
              <label>
                Name
                <input
                 className="border rounded-lg pl-2 py-2 w-full"
                  type="text"
                  id="text "
                  name="text"
                  placeholder="enter your name"
                />
              </label>
            </div>

            <div>
              <label>
                Name
                <input
                 className="border rounded-lg pl-2 py-2 w-full"
                  type="text"
                  id="text "
                  name="text"
                  placeholder="enter your name"
                />
              </label>
            </div>

            <div>
              <label>
                Name
                <input
                 className="border rounded-lg pl-2 py-2 w-full"
                  type="text"
                  id="text "
                  name="text"
                  placeholder="enter your name"
                />
              </label>
            </div>

            <div>
              <label>
                Name
                <input
                 className="border rounded-lg pl-2 py-2 w-full"
                  type="text"
                  id="text "
                  name="text"
                  placeholder="enter your name"
                />
              </label>
            </div>
             <div>
              <label>
                Name
                <input
                 className="border rounded-lg pl-2 py-2 w-full"
                  type="text"
                  id="text "
                  name="text"
                  placeholder="enter your name"
                />
              </label>
            </div>
             <div>
              <label>
                Name
                <input
                 className="border rounded-lg pl-2 py-2 w-full"
                  type="text"
                  id="text "
                  name="text"
                  placeholder="enter your name"
                />
              </label>
            </div>
          </div>
           <div className="  text-center mt-2 ">
              <button
                className="bg-gray-700 text-white px-6 py-2  rounded-lg cursor-pointer font-semibold hover:bg-gray-600 hover:text-white transition"
                type="submit"
              >
                Create
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
