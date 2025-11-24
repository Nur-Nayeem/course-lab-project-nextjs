"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { BiLock } from "react-icons/bi";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { BsPerson } from "react-icons/bs";

export default function Register() {
  const [showPass, setShowPass] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const signup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      alert(result.message);

      if (res.ok) {
        window.location.href = "/login"; // redirect after signup
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="flex h-full grow flex-col py-16">
      <div className="flex flex-1 items-center justify-center p-4 lg:p-8">
        <div className="flex w-full max-w-6xl overflow-hidden rounded-xl bg-white shadow-xl shadow-slate-200/50">
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
                <h1 className="text-3xl font-bold text-[#333333]">
                  Create Account
                </h1>
                <p className="mt-2 text-base text-gray-500">
                  Welcome! Please enter your details.
                </p>
              </div>

              {/* Form */}
              <form className="flex flex-col gap-6" onSubmit={signup}>
                {/* Name */}
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium pb-2 text-[#333333]">
                    Name
                  </p>
                  <div className="relative flex w-full flex-1 items-stretch">
                    <div className="text-gray-500 absolute left-0 flex items-center justify-center pl-3.5 h-full">
                      <BsPerson />
                    </div>
                    <input
                      required
                      placeholder="Your Name"
                      className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#333333] border border-slate-300 bg-white h-11 pl-11 pr-11 py-2 placeholder:text-gray-500 focus:outline-primary"
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
                    />
                  </div>
                </label>

                {/* Email */}
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium pb-2 text-[#333333]">
                    Email Address
                  </p>
                  <div className="relative flex w-full flex-1 items-stretch">
                    <div className="text-gray-500 absolute left-0 flex items-center justify-center pl-3.5 h-full">
                      <MdOutlineEmail />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="nur@gmail.com"
                      className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#333333] border border-slate-300 bg-white h-11 pl-11 pr-11 py-2 placeholder:text-gray-500 focus:outline-primary"
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                    />
                  </div>
                </label>

                {/* Password */}
                <label className="flex flex-col w-full">
                  <p className="text-sm font-medium pb-2 text-[#333333]">
                    Password
                  </p>
                  <div className="relative flex w-full flex-1 items-stretch">
                    <div className="text-gray-500 absolute left-0 flex items-center justify-center pl-3.5 h-full pointer-events-none">
                      <BiLock />
                    </div>
                    <input
                      required
                      type={showPass ? "text" : "password"}
                      placeholder="Enter your password"
                      className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#333333] border border-slate-300 bg-white h-11 pl-11 pr-11 py-2 placeholder:text-gray-500 focus:outline-primary"
                      onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="text-gray-500 absolute right-0 flex items-center justify-center pr-3.5 h-full cursor-pointer hover:text-text-primary"
                    >
                      {showPass ? <IoEye /> : <IoEyeOff />}
                    </button>
                  </div>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] items-center justify-center rounded-lg h-11 px-5 w-full bg-primary hover:bg-primary/90 text-white gap-2 text-sm font-bold transition-colors shadow-sm shadow-primary/40"
                >
                  Register
                </button>
              </form>

              {/* OR Divider */}
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
                className="flex w-full items-center justify-center rounded-lg h-11 px-5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 gap-3 text-sm font-medium transition-colors"
              >
                <FcGoogle />
                <span className="truncate">Continue with Google</span>
              </button>

              {/* Login Link */}
              <div className="mt-8 text-center">
                <p className="text-sm text-text-secondary dark:text-slate-400">
                  Already have an account?
                  <Link
                    className="font-medium text-primary hover:underline ml-1"
                    href="/login"
                  >
                    Login
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
