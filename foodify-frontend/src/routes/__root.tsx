import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Logo from "../assets/logo";
import { useState } from "react";

function Layout() {
  const [isNavbarOpen, setNavbar] = useState(false);
  return (
    <>
      <header className="">
        <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
          <Link className="" to="/">
            <Logo className="h-10 w-10" />
          </Link>
          <span className="text-xl text-primary font-semibold lg:pl-5">
            Foodify
          </span>
          <div className="lg:hidden">
            <button
              className="flex items-center text-primary p-3"
              onClick={() => setNavbar(!isNavbarOpen)}
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-12">
            <li>
              <Link
                className="text-sm text-gray-400 hover:text-gray-500 [&.active]:text-primary [&.active]:font-bold"
                to="/"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className="text-sm text-gray-400 hover:text-gray-500 [&.active]:text-primary [&.active]:font-bold"
                to="/about"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                className="text-sm text-gray-400 hover:text-gray-500 [&.active]:text-primary [&.active]:font-bold"
                to="/about"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                className="text-sm text-gray-400 hover:text-gray-500 [&.active]:text-primary [&.active]:font-bold"
                to="/about"
              >
                Pricing
              </Link>
            </li>

            <li>
              <Link
                className="text-sm text-gray-400 hover:text-gray-500 [&.active]:text-primary [&.active]:font-bold"
                to="/about"
              >
                Contact
              </Link>
            </li>
          </ul>
          <a
            className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
            href="#"
          >
            Sign In
          </a>
          <a
            className="hidden lg:inline-block py-2 px-6 bg-primary-light hover:bg-primary text-sm text-white font-bold rounded-xl transition duration-200"
            href="#"
          >
            Sign up
          </a>
        </nav>

        <div className={"relative z-50 " + (isNavbarOpen ? "" : "hidden")}>
          <div
            className="fixed inset-0 bg-gray-800 opacity-25 z-10"
            onClick={() => setNavbar(!isNavbarOpen)}
          ></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto  z-10">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <Logo className="h-12 w-12" />
              </a>
              <button
                className="navbar-close"
                onClick={() => setNavbar(!isNavbarOpen)}
              >
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-primary rounded"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-primary rounded"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-primary rounded"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-primary rounded"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-primary rounded"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="pt-6">
                <a
                  className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-xl"
                  href="#"
                >
                  Sign in
                </a>
                <a
                  className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-primary hover:bg-blue-700  rounded-xl"
                  href="#"
                >
                  Sign Up
                </a>
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span>Copyright © 2021</span>
              </p>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <TanStackRouterDevtools />
      </footer>
    </>
  );
}

export const Route = createRootRoute({
  component: Layout,
});
