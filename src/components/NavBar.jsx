import { useState } from "react";
import logo from "../assets/logo-2.png";

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 h-14 bg-gradient-to-r from-blue-100 to-purple-200 fixed  z-20 w-full shadow-md">
      <div className="px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className=" flex items-center">
            <a className="flex-shrink-0" href="/">
              <img
                className="w-12 h-12"
                src={logo}
                alt="pink and purple moon"
              />
            </a>

            {isNavOpen ? (
              <svg
                onClick={() => setIsNavOpen(false)}
                className="h-6 w-6 text-gray-600 absolute inset-y-4 right-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <div
                onClick={() => setIsNavOpen((prev) => !prev)}
                className="md:hidden absolute inset-y-4 right-8"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="grey"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </div>
            )}

            <div
              className={
                isNavOpen
                  ? "absolute flex flex-col right-0 p-4 border-0 bg-white bg-gradient-to-r from-blue-100 to-purple-200 rounded shadow hover:text-gray-800 top-14 w-1/2"
                  : "hidden w-full md:block md:w-auto"
              }
            >
              <a
                className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                href="/"
              >
                Home
              </a>
              <a
                className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                href="/projects"
              >
                Projects
              </a>
              <a
                className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                href="/resume"
              >
                Resume
              </a>
              <a
                className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                href="/contact"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
