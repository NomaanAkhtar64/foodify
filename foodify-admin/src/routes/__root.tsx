// import * as React from "react";
import {
  Link,
  Outlet,
  createRootRoute,
  useLocation,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useEffect, useState, useLayoutEffect } from "react";
import sidebarNavigation from "../navigation";
import CancelIcon from "../icons/cancel";
import UserIcon from "../icons/user";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [isNavbarOpen, setNavbar] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const fnTimer = setTimeout(function () {
      if (window.innerWidth < 1024) setNavbar(false);
    }, 300);

    return () => clearTimeout(fnTimer);
  }, [pathname]);

  useLayoutEffect(() => {
    if (window.innerWidth >= 1024) setNavbar(true);
  }, []);

  return (
    <div className="h-full flex flex-row relative min-h-[100dvh]">
      <aside
        className={
          "absolute top-0 bottom-0 w-[350px] transition-all bg-primary-light h-full z-10 duration-300 max-w-full " +
          (isNavbarOpen ? "left-0" : "left-[-350px]")
        }
      >
        <div className="relative">
          <h1 className="text-xl text-white w-full text-center left-0 right-0 font-bold tracking-[8px] font-mono bg-primary py-8">
            CONTROL PANEL
          </h1>
          <button
            className="absolute top-0 right-0 block lg:hidden"
            onClick={() => setNavbar(false)}
          >
            <CancelIcon className="h-8 w-8 text-white" />
          </button>
          <nav className="pt-4 flex flex-col ">
            {sidebarNavigation.map((nav, i) => (
              <Link
                key={i}
                to={nav.to}
                className="flex flex-row items-center rounded-sm pl-8 pr-2 py-3 transition-all duration-150 tracking-widest "
                activeProps={{
                  className:
                    "text-primary bg-white first:text-primary focus:outline-primary-light",
                }}
                inactiveProps={{
                  className:
                    "text-white bg-primary-light focus:text-primary focus:bg-orange-300 focus:outline-none",
                }}
              >
                <nav.Icon className="h-8 w-8  bg-none p-1.5 "></nav.Icon>
                <span className="font-semibold  tracking-[5px] pl-12 pr-8 mr-0">
                  {nav.text}
                </span>
              </Link>
            ))}
          </nav>
        </div>
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
          (isNavbarOpen ? "lg:ml-[350px]" : "lg:ml-0")
        }
      >
        <header className="flex justify-between items-center shadow-md py-2 px-4 lg:px-10 ">
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
              <UserIcon className="h-7 w-7 text-primary mx-2" />
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
