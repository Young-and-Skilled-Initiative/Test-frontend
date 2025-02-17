"use client";
import React, { useState, FormEvent } from "react";
import Image from "next/image";
import { Group } from "@/public";

export const MovementHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus({
        type: "error",
        message: "Both name and email are required"
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address"
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/join-movement`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email
        })
      });

      const responseData = await response.text();
      console.log('Response:', responseData);

      if (!response.ok) {
        throw new Error(`Failed to join: ${responseData}`);
      }

      setStatus({
        type: "success",
        message: "Successfully joined the movement!"
      });
      setFormData({ name: "", email: "" });
    } catch (error: any) {
      console.error('Error details:', error);
      setStatus({
        type: "error",
        message: error.message || "Failed to join. Please try again later."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-7 sm:gap-12 items-center justify-center w-full sm:w-[742px] font-manrope pt-4">
      <div className="flex flex-col gap-4 w-full justify-center items-center">
        <span className="pb-2 flex gap-4 items-center font-lato font-semibold text-xs sm:text-lg">
          <Image
            src={Group}
            alt=""
            className="w-[92px] h-8 sm:w-auto sm:h-auto"
          />{" "}
          Join 600+ others
        </span>
        <h1 className="text-5xl sm:text-6xl lg:text-8xl text-center font-cocon font-medium">
          Join The Young and Skilled{" "}
          <span className="sm:bg-movement-gradient text-black sm:text-transparent bg-clip-text">
            Movement
          </span>
        </h1>
        <p className="w-[24em] text-center text-xs sm:text-base text-dark-ash leading-6 sm:leading-8">
          Take the next step in your learning journey, start exploring a world
          of opportunities!
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-[1em] w-full">
        <div className="flex flex-col gap-4 md:flex-row items-center w-full">
          <input
            type="text"
            name="name"
            className="bg-white px-[1.5em] sm:px-[2em] py-[1em] text-xs sm:text-base border border-gray-300 rounded-full placeholder:text-xs sm:placeholder:text-base placeholder:font-manrope placeholder:leading-8 md:w-full sm:w-[30em] w-full focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-700"
            placeholder="FullName"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
            required
          />
          <input
            type="email"
            name="email"
            className="bg-white px-[1.5em] sm:px-[2em] py-[1em] text-xs sm:text-base border border-gray-300 rounded-full placeholder:text-xs sm:placeholder:text-base placeholder:font-manrope placeholder:leading-8 md:w-full sm:w-[30em] w-full focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-700"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            required
          />
        </div>

        {status.message && (
          <p className={`text-sm text-center ${status.type === "error" ? "text-red-500" : "text-green-500"}`}>
            {status.message}
          </p>
        )}

        <button
          type="submit"
          className="bg-black py-[1em] px-[2.5em] text-white text-manrope text-sm sm:text-lg font-bold rounded-full hover:bg-black/80 duration-300"
          disabled={loading}
        >
          {loading ? "Joining..." : "Join Waitlist"}
        </button>
      </form>
    </div>
  );
};

export default MovementHero;