import Image from "next/image";
import React from "react";
import { BiLock } from "react-icons/bi";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex h-full grow flex-col py-16">
      <div className="flex flex-1 items-center justify-center p-4 lg:p-8">
        <div className="flex w-full max-w-6xl overflow-hidden rounded-xl bg-white shadow-xl shadow-slate-200/50 ">
          <div className="hidden w-1/2 flex-col items-center justify-center p-12 lg:flex">
            <Image
              src="/books.png"
              alt="Books"
              className="w-full h-full rounded-xl"
              width={600}
              height={800}
            />
          </div>
          <div className="w-full lg:w-1/2 p-8 sm:p-12">
            <div className="flex flex-col max-w-md mx-auto h-full justify-center">
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold text-[#333333]">
                  Sign in to Course Lab
                </h1>
                <p className="mt-2 text-base text-gray-500 ">
                  Welcome back! Please enter your details.
                </p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <form className="flex flex-col gap-4">
                    <label className="flex flex-col w-full">
                      <p className="text-sm font-medium  pb-2 text-[#333333] ">
                        Email Address
                      </p>
                      <div className="relative flex w-full flex-1 items-stretch">
                        <div className="text-gray-500 absolute left-0 flex items-center justify-center pl-3.5 h-full pointer-events-none">
                          <MdOutlineEmail />
                        </div>
                        <input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#333333] focus:outline-0 focus:ring-2 focus:ring-primary/50  border border-slate-300  bg-white  focus:border-primary  h-11 placeholder:text-gray-500 pl-11 pr-11 py-2 text-base font-normal "
                          placeholder="nur@gmail.com"
                        />
                      </div>
                    </label>
                    <label className="flex flex-col w-full">
                      <p className="text-sm font-medium leading-normal pb-2 text-[#333333] ">
                        Password
                      </p>
                      <div className="relative flex w-full flex-1 items-stretch">
                        <div className="text-gray-500 absolute left-0 flex items-center justify-center pl-3.5 h-full pointer-events-none">
                          <BiLock />
                        </div>
                        <input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#333333]  focus:outline-0 focus:ring-2 focus:ring-primary/50  border border-slate-300  bg-white  focus:border-primary  h-11 placeholder:text-gray-500 pl-11 pr-11 py-2 text-base font-normal "
                          placeholder="Enter your password"
                          type="password"
                        />
                        <button
                          className="text-text-secondary dark:text-slate-400 absolute right-0 flex items-center justify-center pr-3.5 h-full cursor-pointer hover:text-text-primary dark:hover:text-slate-200"
                          type="button"
                        >
                          {/* <IoEyeOff /> */}
                          <IoEye />
                          {/* <span className="material-symbols-outlined">
                            visibility_off
                          </span> */}
                        </button>
                      </div>
                    </label>
                    <div className="flex flex-col gap-3">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 w-full bg-primary hover:bg-primary/90 text-white gap-2 text-sm font-bold transition-colors shadow-sm shadow-primary/40">
                        Login
                      </button>
                    </div>
                  </form>
                  <div className="flex items-center gap-3">
                    <hr className="w-full border-t border-slate-200 " />
                    <p className="text-xs font-medium  uppercase text-gray-500">
                      OR
                    </p>
                    <hr className="w-full border-t border-slate-200 " />
                  </div>
                  <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-white  border border-slate-200  hover:bg-slate-50  text-slate-700 gap-3 text-sm font-medium   transition-colors">
                    <FcGoogle />
                    <span className="truncate">Continue with Google</span>
                  </button>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-sm text-text-secondary dark:text-slate-400">
                    Dont have an account?
                    <Link
                      className="font-medium text-primary hover:underline"
                      href="/register"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
