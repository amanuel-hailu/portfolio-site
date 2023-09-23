"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 text-center place-self-center sm:text-left">
          <h1 className="mb-4 text-4xl font-extrabold text-blue-500 sm:text-4xl lg:text-6xl lg:leading-normal">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-pink-900">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Amanuel",
                1000,
                "A Software Developer",
                1000,
                "A Web Developer",
                1000,
                "A DevOps Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a full-stack web developer. I have experience in React,
            Node.js,
          </p>
          <div>
            <button className="w-full px-6 py-3 mr-4 text-white rounded-full sm:w-fit hover:bg-slate-200 bg-gradient-to-r from-blue-900 via-violet-800 to-pink-800">
              Hire Me
            </button>

            <button className="w-full px-1 py-1 mt-3 mr-4 text-white rounded-full bg-gradient-to-br from-blue-700 to-pink-800 sm:w-fit hover:bg-slate-800">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 mt-4 place-self-center lg:mt-0">
          <div className=" rounded-full bg-[#181818] w-[250px] h-[250px]  lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
