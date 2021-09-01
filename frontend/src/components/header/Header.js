import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return (
      <div>
        <header className="text-gray-500 body-font bg-purple-100">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
              <img src="https://img.icons8.com/office/40/000000/year-of-ox.png" alt="logo"/>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg> */}
              <span className="ml-3 text-xl">ComEmp</span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link className="mr-5 hover:text-gray-900" to="/about">About</Link>
              <Link className="mr-5 hover:text-gray-900" to="/signup">Sign up</Link>

            </nav>
            <Link className="inline-flex items-center bg-green-300 border-0 py-2 px-3 hover:px-4 hover:py-3 animate-pulse focus:outline-none hover:bg-green-500 rounded text-white mt-4 md:mt-0" to="/login">
              Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </header>
      </div>
    );
}
