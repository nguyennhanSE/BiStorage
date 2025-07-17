'use client'
import React, {useRef} from "react";
import { FaGoogle, FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./adjust.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Page = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/signUp");
  };
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return (
    <div className="grid grid-cols-10 h-screen">
      <section className="col-span-6 h-full overflow-hidden ">
        <div className="h-[100px]">
          <div className="h-[50px] mt-5 ml-5 flex items-center space-x-2 ">
            <div className="border-teal-600 border-[2px] rounded-full w-[40px] h-[40px] ">
              <button onClick={() => {
                router.push("/landingPage");
              }}><Image src="/brandAvt.png" height={40} width={40} alt="pic" className="rounded-full" ></Image></button>

            </div>
            <div
              className="text-gray-600 text-lg font-medium"
            >
              BiBox
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center min-h-screen">
          {/* Header */}
          <div className="items-center">
            <h2 className="text-7xl  font-semibold text-center text-gray-900">
              Login to Your Account
            </h2>
            <p className="text-gray-500 text-center mt-2">
              Login using social networks
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <button
                className="p-3 bg-gray-700 text-white rounded-full"
              >
                <FaGithub />
              </button>
              <button
                className="p-3 bg-red-500 text-white rounded-full "
              >
                <FaGoogle />
              </button>
              <button className="p-3 bg-gray-700 text-white rounded-full">
                <FaLinkedinIn />
              </button>
            </div>
          </div>
          <div className="flex items-center w-[60%] my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          {/* Content */}
          <div className="flex-col flex w-[60%] gap-5">
            <div>
              <input
                type="text"
                placeholder="Email"
                autoComplete="off"
                className="w-full px-4 py-3 rounded-full bg-teal-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                ref={email}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                className="w-full px-4 py-3 rounded-full bg-teal-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                ref={password}
              />
            </div>
          </div>
          {/* Footer */}
          <div className="flex items-center justify-center mt-5 w-[50%]">
            <button
              className="border px-20 py-3 bg-teal-700 text-white rounded-full hover:text-black hover:shadow-md"
            >
              Sign in
            </button>
          </div>
        </div>
      </section>
      <section className="col-span-4 background-auth flex items-center justify-center h-full overflow-hidden  ">
        <div className=" flex-col items-center gap-3">
          <div className="text-white items-center justify-center flex text-[70px] font">
            New Here?
          </div>
          <div className="items-center justify-center flex ">
            <div className="text-gray-200 items-center justify-center flex font-semibold">
              Sign up and discover a great amount of new opportunities!
            </div>
          </div>
          <div className=" items-center justify-center flex h-[50px] font-semibold mt-10">
            <button
              className="bg-white text-gray-800 font-semibold py-2 px-20 rounded-full shadow-md hover:shadow-lg transition"
              onClick={handleNavigate}
            >
              {" "}
              Sign Up{" "}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
