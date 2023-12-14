"use client";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";

import { HomeIcon, ServiceIcon, AboutIcon } from "./icon";

export function Navbar() {
  const { data } = useContext(AuthenticationContext);
  const { signOut } = useAuth();

  // console.log(data);
  return (
    <div className="navbar bg-transparent fixed z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <button className="btn mt-4 mb-2 btn-primary btn-sm md:btn-md">
              Log In
            </button>
            <button className="btn mb-2 btn-outline btn-primary btn-sm md:btn-md">
              Sign Up
            </button>
          </ul>
        </div>
        <Link
          href="/"
          className="
          btn btn-ghost normal-case text-xl
          mx-12 md:mx-0 text-white"
        >
          {" "}
          <div>
            <Image
              src="/icons/ease_book.png"
              alt="icon"
              height={30}
              width={30}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          Ease Book
        </Link>
      </div>
      <div className="navbar-center  hidden md:mr-56 lg:flex">
        <ul
          className="
          menu menu-horizontal px-1 rounded-box
          mt-3 text-white "
        >
          <li>
            <Link
              href={"/"}
              className="
              tooltip tooltip-bottom
            hover:text-blue-600 hover:bg-white"
              data-tip="Home"
            >
              <HomeIcon />
            </Link>
          </li>
          <li>
            <a
              className="
              tooltip tooltip-bottom
            hover:text-blue-600 hover:bg-white"
              data-tip="Features"
            >
              <ServiceIcon />
            </a>
          </li>
          <li>
            <a
              className="
              tooltip tooltip-bottom
            hover:text-blue-600 hover:bg-white"
              data-tip="About"
            >
              <AboutIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {data ? (
          <div className="dropdown dropdown-bottom dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-transparent rounded-full border-transparent p-2"
            >
              <div className="avatar placeholder">
                <div className="w-8 rounded-full ring bg-blue-600 ring-blue-200 ring-offset-base-100 ring-offset-2">
                  <div className="text-white rounded-full w-8 p-2">
                    <span className="text-md uppercase">
                      {data?.firstName[0]}
                      {data?.lastName[0]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <ul className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52">
              <button
                onClick={signOut}
                className="btn btn-md text-white bg-blue-600 p-2"
              >
                Sign Out
              </button>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
