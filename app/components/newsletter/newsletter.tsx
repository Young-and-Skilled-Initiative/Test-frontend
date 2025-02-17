"use client";
import React, { useState, FormEvent } from "react";
import "./newsletter.css";

const Newsletter = () => {
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

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      setStatus({
        type: "error",
        message: "Please enter your name"
      });
      return;
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address"
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/subscribe`, {
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
        throw new Error(`Subscription failed: ${responseData}`);
      }

      setStatus({
        type: "success",
        message: "Successfully subscribed!"
      });
      setFormData({ name: "", email: "" });
    } catch (error: any) {
      console.error('Error details:', error);
      setStatus({
        type: "error",
        message: error.message || "Failed to subscribe. Please try again later."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="newsletter flex flex-col lg:h-full h-[749px] rounded-3xl lg:p-[5em] pt-[3em] p-[2em] pb-[1em] md:p-[3em] justify-between">
      <div className="flex flex-col items-center lg:items-start lg:gap-[2em] gap-[1em]">
        <h1 className="font-cocon text-white text-[40px] lg:text-[50px] text-center lg:text-left">
          Join the Movement Now
        </h1>
        <p className="font-[400] text-[20px] text-white lg:w-[570px] text-wrap text-center lg:text-left">
          Are you ready to take the next step in your learning journey? Sign up
          now and start exploring a world of opportunities with Young and
          Skilled Initiative. Your future begins here!
        </p>
      </div>
      <form onSubmit={handleSubscribe} className="flex flex-col gap-[2em] items-center lg:items-start mt-[2em]">
        <div className="flex flex-col lg:flex-row gap-[2em] w-full">
          <input
            type="text"
            name="name"
            className="bg-white p-[1em] pl-10 rounded-full lg:w-[15%] w-full"
            placeholder="Firstname"
            value={formData.name}
            onChange={handleChange}
            disabled={loading}
          />
          <input
            type="email"
            name="email"
            className="bg-white p-[1em] pl-10 rounded-full lg:w-[15%] w-full"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
          />
        </div>
        
        {status.message && (
          <p className={`text-sm ${status.type === "error" ? "text-red-500" : "text-green-500"}`}>
            {status.message}
          </p>
        )}

        <div className="flex flex-col lg:flex-row gap-[2em] w-full">
          <button
            type="submit"
            className="bg-black py-[1em] px-[1.5em] text-white text-manrope text-[20px] rounded-full w-full lg:w-[32%]"
            disabled={loading}
          >
            {loading ? "Subscribing..." : "Join Waitlist"}
          </button>
          {/* <button 
            type="button"
            className="bg-white bg-opacity-20 p-[1.5em] xl:px-[2.5em] rounded-full text-white text-[16px] w-full lg:w-[15em]"
          >
            Browse Courses
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default Newsletter;