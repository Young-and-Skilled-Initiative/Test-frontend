"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LogoMain } from "@/public/images";

const navlinks = [
  { route: "Home", link: "/", id: "home" },
  { route: "About us", link: "/aboutus", id: "about" },
  { route: "Contact us", link: "/contact-us", id: "contact-us" },
  { route: "Join Movement", link: "/join-movement", id: "join-movement" },
];

const Navbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const underlineRef = useRef(null);
  const [hoverStyle, setHoverStyle] = useState({ width: 0, left: 0 });

  const pathname = usePathname();
  const activeRoute = navlinks.find((link) => link.link === pathname);

  // Handle mouse enter to update the hover style
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { offsetLeft, offsetWidth } = e.currentTarget;
    setHoverStyle({ width: offsetWidth, left: offsetLeft });
  };

  // Handle mouse leave to revert to active link style
  const handleMouseLeave = () => {
    if (activeRoute) {
      const activeLinkElement = document.getElementById(activeRoute.id);
      if (activeLinkElement) {
        const { offsetLeft, offsetWidth } = activeLinkElement;
        setHoverStyle({ width: offsetWidth, left: offsetLeft });
      }
    }
  };

  // Ensure the underline reflects the active link when the component mounts
  useEffect(() => {
    if (activeRoute) {
      const activeLinkElement = document.getElementById(activeRoute.id);
      if (activeLinkElement) {
        const { offsetLeft, offsetWidth } = activeLinkElement;
        setHoverStyle({ width: offsetWidth, left: offsetLeft });
      }
    }
  }, [pathname, activeRoute]);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      <div className="w-full bg-white lg:px-[3em] xl:px-[8em] px-4 py-6 flex justify-between gap-6 lg:py-12">
        <Link href="/">
          <Image src={LogoMain} alt="Logo" className="h-8 lg:h-auto mt-2"/>
        </Link>

        {/* Desktop menu */}
        <div
          className="relative hidden md:flex items-center justify-between gap-2 lg:gap-8 text-black"
          onMouseLeave={handleMouseLeave}
        >
          <span
            ref={underlineRef}
            className="absolute bottom-0 h-0.5 sm:h-[3px] bg-dark-green transition-all duration-300"
            style={hoverStyle}
          ></span>

          {navlinks.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              id={item.id} // Add id to each link for active link tracking
              className={`relative group text-sm lg:text-base font-semibold transition-all p-[6px] text-nowrap duration-200 ${
                pathname === item.link ? "text-black" : "text-ash"
              } hover:text-black`}
              onMouseEnter={handleMouseEnter}
            >
              {item.route}
            </Link>
          ))}
        </div>

        {/* Action buttons */}
        <div className="hidden md:flex items-center group">
          <Link href="/join-movement">
            <Button
              size={"lg"}
              className="rounded-3xl bg-dark-green transform transition-all duration-300 ease-in-out group-hover:scale-120 group-hover:text-base hover:bg-dark-green"
            >
              Get Started
            </Button>
          </Link>

          <Button
            size={"icon"}
            className="rounded-full hidden lg:inline-flex bg-dark-green ml-[-6px] transform transition-transform duration-500 ease-in-out group-hover:rotate-90"
          >
            <Image
              src="/arrow.svg"
              alt="Arrow"
              width={24}
              height={24}
              className="p-2"
            />
          </Button>
        </div>

        {/* Hamburger for mobile */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none"
        >
          <motion.img
            src={showMobileMenu ? "/hamburger-close.svg" : "/hamburger.svg"}
            alt="Menu"
            width={32}
            height={32}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-auto bg-black z-50 flex flex-col gap-8 items-center justify-between px-4 py-6"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMobileMenu}
          >
            {/* Logo inside the dropdown */}
            <div className="flex w-full justify-between">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={60}
                height={33}
                className="w-[60px] h-[33px]"
              />
              {/* Close button inside dropdown */}
              <button onClick={closeMobileMenu} className="">
                <motion.img
                  src="/hamburger-close.svg"
                  alt="Close"
                  width={32}
                  height={32}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </button>
            </div>

            <nav className="flex flex-col h-full justify-center items-center gap-8 w-full">
              {navlinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className={`text-lg font-semibold ${
                    pathname === item.link ? "text-[#98BC6D]" : "text-white"
                  } hover:text-gray-400`}
                  onClick={closeMobileMenu}
                >
                  {item.route}
                </Link>
              ))}
              <Button
                size={"lg"}
                className="rounded-[50px] border-2 border-white !py-2.5 !text-base bg-dark-green w-full"
              >
                Get Started
              </Button>
              <div className="flex justify-end w-full gap-[75px]">
                <div className="flex gap-4 items-center">
                  <Link href={""}>
                    <Image
                      src="/x-outlined.svg"
                      alt="X logo"
                      width={20}
                      height={20}
                    />
                  </Link>
                  <Link href={""}>
                    <Image
                      src="/facebook-outlined.svg"
                      alt="Facebook logo"
                      width={20}
                      height={20}
                    />
                  </Link>
                  <Link href={""}>
                    <Image
                      src="/linkedin-outlined.svg"
                      alt="LinkedIn logo"
                      width={20}
                      height={20}
                    />
                  </Link>
                </div>
                <button className="w-[4x] h-[47px]">
                  <Image
                    src="/Messenger.svg"
                    alt="Intercom Messenger"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </nav>
            <p className="text-xs font-normal text-gray-400">
              Copyright © 2024 Young & Skilled Initiative all rights reserved
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
