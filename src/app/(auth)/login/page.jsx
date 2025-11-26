"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { BiLock } from "react-icons/bi";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });

  const login = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success("Login successfull");
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
  };

  return (
    <div className="flex h-full grow flex-col py-16">
      <div className="flex flex-1 items-center justify-center p-4 lg:p-8">
        <div className="flex w-full max-w-6xl overflow-hidden rounded-xl glass-blur shadow-xl shadow-slate-200/50">
          {/* Left Image */}
          <div className="hidden w-1/2 flex-col items-center justify-center p-12 lg:flex">
            <Image
              src="/books.png"
              alt="Books"
              width={600}
              height={800}
              className="w-full h-full rounded-xl"
            />
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-1/2 p-8 sm:p-12">
            <div className="flex flex-col max-w-md mx-auto h-full justify-center">
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold secondary-text">
                  Sign in to Course Lab
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  Welcome back! Please enter your details.
                </p>
              </div>

              {/* Form */}
              <form className="flex flex-col gap-6" onSubmit={login}>
                {/* Email */}
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium pb-2 secondary-text">
                    Email Address
                  </p>
                  <div className="relative flex w-full flex-1 items-stretch">
                    <div className="text-gray-500 absolute left-0 flex items-center justify-center pl-3.5 h-full pointer-events-none">
                      <MdOutlineEmail />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="nur@gmail.com"
                      className="form-input flex w-full min-w-0 flex-1 rounded-lg secondary-text border border-slate-300 bg-white/60 px-10 py-3 placeholder:text-gray-500 focus:outline-primary"
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                    />
                  </div>
                </label>

                {/* Password */}
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium pb-2 secondary-text">
                    Password
                  </p>
                  <div className="relative flex w-full flex-1 items-stretch">
                    <div className="text-gray-500 absolute left-0 flex items-center justify-center pl-3.5 h-full pointer-events-none">
                      <BiLock />
                    </div>
                    <input
                      type={showPass ? "text" : "password"}
                      required
                      placeholder="Enter your password"
                      className="form-input flex w-full min-w-0 flex-1 rounded-lg secondary-text border border-slate-300 bg-white/60 px-10 py-3 placeholder:text-gray-500 focus:outline-primary"
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="text-gray-500 absolute right-0 flex items-center justify-center pr-3.5 h-full cursor-pointer hover:text=[#333333]"
                    >
                      {showPass ? <IoEye /> : <IoEyeOff />}
                    </button>
                  </div>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg py-3 px-6 btn-primary text-white text-base font-bold hover:scale-101 transition-transform duration-300"
                >
                  Login
                </button>
              </form>

              {/* OR divider */}
              <div className="flex items-center gap-3 my-4">
                <hr className="w-full border-t border-slate-200" />
                <p className="text-xs font-medium uppercase text-gray-500">
                  OR
                </p>
                <hr className="w-full border-t border-slate-200" />
              </div>

              {/* Google Login */}
              <button
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="flex w-full items-center justify-center rounded-lg h-11 px-5 bg-white/80 cursor-pointer hover:scale-101 transition-all duration-300 hover:bg-white text-slate-700 gap-3 text-sm font-medium"
              >
                <FcGoogle />
                <span className="truncate">Continue with Google</span>
              </button>

              {/* Sign up link */}
              <div className="mt-8 text-center">
                <p className="text-sm text-text-secondary dark:text-slate-400">
                  Don’t have an account?
                  <Link
                    className="font-medium primary-text hover:underline ml-1"
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
  );
}
