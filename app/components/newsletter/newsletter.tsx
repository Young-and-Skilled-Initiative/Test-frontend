"use client";

import React from "react";

import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter flex flex-col lg:h-full h-[749px] rounded-3xl lg:p-[5em] pt-[3em] p-[2em] pb-[1em] md:p-[3em] justify-between ">
      <div className=" flex flex-col  items-center lg:items-start lg:gap-[2em] gap-[1em] ">
        <h1 className="font-cocon text-white text-[40px] lg:text-[50px] text-center lg:text-left">
          Join the Movement Now
        </h1>
        <p className="font-[400] text-[20px] text-white lg:w-[570px] text-wrap text-center lg:text-left">
          Are you ready to take the next step in your learning journey? Sign up
          now and start exploring a world of opportunities with Young and
          Skilled Initiative. Your future begins here!
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-[2em] items-center lg:items-start mt-[2em]">
        <input
          type="text"
          className="bg-white p-[1em] pl-10 rounded-full  lg:w-[30em] w-full"
          placeholder="Enter your Email"
        />
        <button
          type="submit"
          className="bg-black py-[1em] px-[1.5em] text-white text-manrope text-[20px] rounded-full w-full lg:w-[15em] "
        >
          Join Waitlist
        </button>
        <button className="bg-white bg-opacity-20 p-[1.5em] xl:px-[2.5em] rounded-full text-white text-[16px] w-full lg:w-[15em]">
          Browse Courses
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
