// import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useState } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [isNavbarOpen, setNavbar] = useState(false);
  return (
    <div className="h-full flex flex-row relative min-h-[100dvh]">
      <aside
        className={
          "absolute top-0 bottom-0 w-[400px] transition-all bg-primary h-full z-10 duration-300 max-w-full " +
          (isNavbarOpen ? "left-0" : "left-[-400px]")
        }
      >
        Sidebar
      </aside>
      <div
        className={
          "absolute top-0 left-0 right-0 bottom-0 bg-black opacity-5 h-full lg:static transition-all duration-300 " +
          (isNavbarOpen ? "opacity-5 right-0" : "opacity-0 right-full")
        }
        onClick={() => setNavbar(!isNavbarOpen)}
      />
      <div
        className={
          "flex flex-col w-full transition-all duration-300 " +
          (isNavbarOpen ? "lg:ml-[400px]" : "lg:ml-0")
        }
      >
        <header className="flex justify-between items-center shadow-md py-2">
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
          <h1 className="text-lg text-primary font-semibold tracking-widest">
            Foodify Admin
          </h1>
          <div className="">
            <Link to="/">
              <svg
                className="h-7 w-7 text-primary mx-2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </Link>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
        <footer className="mt-auto bg-neutral-800 p-10">
          footer
          <TanStackRouterDevtools position="bottom-right" />
        </footer>
      </div>
    </div>
  );
}
