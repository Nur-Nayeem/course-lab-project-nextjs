"use client";
import Link from "next/link";
import React, { use } from "react";
import { BiSearch } from "react-icons/bi";
import { FaBars, FaLaptopCode, FaPlus } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { AuthContext } from "@/context/AuthContext";
import { IoPersonCircleOutline } from "react-icons/io5";
const Navbar = () => {
  const { user, status, logout } = use(AuthContext);

  return (
    <nav className="fixed top-0 z-50 w-full border border-white/20 bg-white/30 px-2.5 sm:px-0 py-3 backdrop-blur-lg">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex flex-1 items-center gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <FaBars className="text-primary text-2xl hover:scale-105 cursor-pointer transition-all duration-300" />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-color bg-white rounded-box z-1 mt-3 w-52 p-4 space-y-3.5 shadow"
            >
              <Link
                href={"/"}
                className=" font-medium text-[#333333] hover:text-primary"
              >
                Home
              </Link>
              <Link
                className="font-medium leading-normal text-[#333333] hover:text-primary"
                href={"/courses"}
              >
                Courses
              </Link>
              <Link
                className="font-medium leading-normal text-[#333333] hover:text-primary"
                href={"/add-course"}
              >
                Add Course
              </Link>
              <Link
                className="font-medium leading-normal text-[#333333] hover:text-primary"
                href={"/manage-courses"}
              >
                Manage Course
              </Link>
            </ul>
          </div>
          <div className="flex items-center gap-3 text-primary">
            <FaLaptopCode className="text-3xl" />
            <h2 className="text-2xl font-bold hidden sm:block">Course Lab</h2>
          </div>
        </div>
        <div className="hidden flex-1  lg:flex items-center justify-center gap-9 ">
          <Link
            href={"/"}
            className=" font-medium text-[#333333] hover:text-primary"
          >
            Home
          </Link>
          <Link
            className="font-medium leading-normal text-[#333333] hover:text-primary"
            href={"/courses"}
          >
            Courses
          </Link>
          <Link
            className="font-medium leading-normal text-[#333333] hover:text-primary"
            href={"/add-course"}
          >
            Add Course
          </Link>
          <Link
            className="font-medium leading-normal text-[#333333] hover:text-primary"
            href={"/manage-courses"}
          >
            Manage Course
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-4">
          <label className=" flex-col h-10 max-w-64">
            <div className="text-gray-500 flex border-none bg-gray-300/30 items-center justify-center px-3 rounded-lg border-r-0 py-3">
              <BiSearch />
              <input
                className="flex form-input w-full min-w-0 flex-1 overflow-hidden rounded-lg text-[#333333] focus:outline-0  h-full placeholder:text-gray-500 px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal"
                placeholder="Search"
              />
            </div>
          </label>

          {user ? (
            <>
              <div className="flex items-center gap-2.5">
                <IoPersonCircleOutline className="size-12 text-gray-500" />
                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Logout
                </button>
              </div>
            </>
          ) : status === "loading" ? (
            <h2 className="text-black">Loading...</h2>
          ) : (
            <div className="space-x-2.5 flex ">
              <Link
                href="/login"
                className="hidden sm:flex py-2.5 h-10 px-3 cursor-pointer items-center justify-center overflow-hidden rounded-lg  bg-gray-300 text-[#333333]  text-sm font-bold transition-transform hover:scale-101"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-primary py-2.5 h-10 px-3 cursor-pointer items-center justify-center overflow-hidden rounded-lg  text-white text-sm font-bold transition-transform hover:scale-101"
              >
                <span className="hidden sm:flex"> Signup</span>

                <BsFillPersonPlusFill className="sm:hidden" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
