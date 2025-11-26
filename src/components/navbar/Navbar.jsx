"use client";
import Link from "next/link";
import React, { use } from "react";
import { BiSearch } from "react-icons/bi";
import { FaBars, FaLaptopCode, FaPlus } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { AuthContext } from "@/context/AuthContext";
import { IoPersonCircleOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { MdLogout } from "react-icons/md";
import Image from "next/image";
const Navbar = () => {
  const { user, status, logout } = use(AuthContext);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border glass-blur px-2.5 sm:px-0 py-3">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex flex-1 items-center gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <FaBars className="primary-text text-2xl hover:scale-105 cursor-pointer transition-all duration-300" />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-color bg-white rounded-box z-1 mt-3 w-52 p-4 space-y-3.5 shadow"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium leading-normal ${
                    pathname === link.href ? "active" : "secondary-text"
                  } hover:text-primary`}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-3 ">
            <FaLaptopCode className="text-3xl primary-text" />
            <h2 className="text-2xl font-bold hidden sm:block primary-text">
              Course Lab
            </h2>
          </div>
        </div>
        <div className="hidden flex-1  lg:flex items-center justify-center gap-9 ">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium leading-normal ${
                pathname === link.href ? "active" : "secondary-text"
              } hover:text-primary`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-4">
          {user ? (
            <>
              <div className="flex items-center gap-2.5">
                <div className="dropdown dropdown-end z-50">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    {!user.image ? (
                      <IoPersonCircleOutline className="size-12 text-gray-500" />
                    ) : (
                      <Image
                        src={user.image}
                        alt={user.name}
                        width={200}
                        height={200}
                        className="rounded-full"
                      />
                    )}
                  </div>
                  <ul
                    tabIndex="-1"
                    className={`menu  menu-sm dropdown-content bg-[#e7e0f6] rounded-box z-50 mt-3 w-52 p-2 shadow`}
                  >
                    <li className="text-sm font-bold my-2 px-1">{user.name}</li>
                    <li className="text-sm font-bold mb-3 px-1">
                      {user.email}
                    </li>
                    <hr className="text-gray-400" />
                    <li className="text-sm secondary-text font-medium mt-3 px-1">
                      <Link href="/add-course">Add Course</Link>
                    </li>
                    <li className="text-sm secondary-text font-medium mt-3 px-1">
                      <Link href="/manage-courses">Manage Course</Link>
                    </li>
                  </ul>
                </div>
                <button
                  onClick={logout}
                  className="bg-red-400 text-white px-3.5 py-2.5 rounded-lg"
                >
                  <MdLogout />
                </button>
              </div>
            </>
          ) : status === "loading" ? (
            <h2 className="text-black">Loading...</h2>
          ) : (
            <div className="space-x-2.5 flex ">
              <Link
                href="/login"
                className="hidden sm:flex cursor-pointer items-center justify-center overflow-hidden rounded-lg py-2 px-3 border border-gray-400 secondary-text text-base font-bold transition-transform hover:scale-101"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg py-2 px-3 btn-primary text-white text-base font-bold transition-transform hover:scale-101"
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
