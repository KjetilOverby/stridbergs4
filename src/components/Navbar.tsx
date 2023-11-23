import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://lh3.googleusercontent.com/pw/ADCreHceI-7bjLIMwc6ZPJOD1d5Bn1EtryI4teKfDemasJfDfFeDlWgQKNyikz01ljXb6Zvgee0QIuP3S0iM-jAxd3Si2bmehNifGeV0pTKM8bXzLzfjuIUGtgoRXobgZhcnT8UVjZvOwgaD1qgI9VyhTLXR=w1477-h325-s-no?authuser=0"
              className="h-8"
              alt="Flowbite Logo"
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-600 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-gray-600 md:dark:text-blue-500"
                  aria-current="page">
                  Hjem
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-600 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-600 md:dark:hover:bg-transparent">
                  Bruktbiler
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-600 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-600 md:dark:hover:bg-transparent">
                  Verksted
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-600 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-600 md:dark:hover:bg-transparent">
                  Bilxtra
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-600 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-600 md:dark:hover:bg-transparent">
                  Om oss
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-600 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray-600 md:dark:hover:bg-transparent">
                  Kontakt oss
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
