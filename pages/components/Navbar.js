import Link from "next/link";
import React from "react";
import Theme from "./Theme";


const Navbar = (props) => {

  return (
    <div className="relative z-50">
      <header className="text-gray-600 body-font bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 dark:text-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="ml-3 text-xl ">ClueLess</span>
            </a>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          
            <Link href="/allcontributors">
              <a className="mr-5 hover:text-gray-900 cursor-pointer link link-underline link-underline-black transition-all underline-offset-4 decoration-2 text-lg font-semibold decoration-blue-600 hover:dark:text-gray-300 dark:decoration-blue-300">
                All Contributors
              </a>
            </Link>
            <Link href="/whattodo">
            <a className="mr-5 hover:text-gray-900 cursor-pointer link link-underline link-underline-black transition-all underline-offset-4 decoration-2 text-lg font-semibold decoration-blue-600 hover:dark:text-gray-300 dark:decoration-blue-300">
              What to do?
            </a>
            </Link>
            <Link href="/">
              <a target="_blank" className="mr-5 hover:text-gray-900 cursor-pointer link link-underline link-underline-black transition-all underline-offset-4 decoration-2 text-lg font-semibold decoration-blue-600 hover:dark:text-gray-300 dark:decoration-blue-300">
                Visit main website
              </a>
            </Link>
          </nav>
          <a href="https://github.com/HITK-2025/first-contribution" target="_blank">
          <button className="font-bold inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-xl mt-4 md:mt-0 text-lg transition-all dark:bg-gray-600">
            Contibute Now
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          </a>
          <Theme 
            hero = {props.herotheme}
          />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
