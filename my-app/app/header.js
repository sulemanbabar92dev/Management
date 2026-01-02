import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className=" shadow-2xl shadow-gray-500">
        <header>
          <ul className="p-3 flex bg-gray-700  justify-end gap-10">
            <li>
              <Link href="/Home" className="font-semibold text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-semibold text-white hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-semibold text-white hover:text-gray-300">
                Contact
              </Link>
            </li>
            <li className="rounded-full bg-white">
              <Link
                href="/text"
                className="font-semibold text-black hover:text-purple-950"
              >
                Text
              </Link>
            </li>
          </ul>
        </header>
        {/* <h1 className="text-3xl text-cyan-950 font-bold text-center p-2 ">
            User Management
          </h1> */}
      </div>
    </div>
  );
};

export default Header;
