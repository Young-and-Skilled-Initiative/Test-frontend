"use client";

import React, { useState, useEffect, memo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import inStar1 from "@/public/images/inStar1.svg";
import inStar2 from "@/public/images/inStar2.svg";
import inStar3 from "@/public/images/inStar3.svg";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";

interface InterestCardProps {
  title: string;
  description: string;
  starImage: StaticImageData;
  bgColor: string;
}

const InterestCard = memo(({ title, description, starImage, bgColor }: InterestCardProps) => (
  <div className={cn("w-[300px] h-[377px] relative rounded-[10px]", bgColor)}>
    <div className="px-8 py-10 flex flex-col gap-9">
      <h2 className="font-bold text-4xl leading-[44px] font-cocon text-white">
        {title}
      </h2>
      <p className="text-base text-white font-normal leading-8 font-manrope">
        {description}
      </p>
      <Image
        src={starImage}
        width={76}
        height={76}
        alt="decorative star"
        className="absolute right-4 bottom-14"
      />
    </div>
  </div>
));

InterestCard.displayName = 'InterestCard';

const INTEREST_CARDS: InterestCardProps[] = [
  {
    title: "Gaining new skills",
    description: "Whether you're looking to upskill for your current job or start a new career, we can help.",
    starImage: inStar1,
    bgColor: "bg-[#114F3C]"
  },
  {
    title: "Networking with like minds",
    description: "Connect with professionals who share your goals and open doors for career growth and opportunities.",
    starImage: inStar2,
    bgColor: "bg-[#98BC6D]"
  },
  {
    title: "Gaining new skills",
    description: "Whether you're looking to upskill for your current job or start a new career, we can help.",
    starImage: inStar3,
    bgColor: "bg-[#EF4C0D]"
  },
  {
    title: "Networking with like minds",
    description: "Connect with professionals who share your goals and open doors for career growth and opportunities.",
    starImage: inStar2,
    bgColor: "bg-[#98BC6D]"
  }
];

const mobileVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 25 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 25 },
      opacity: { duration: 0.2 },
    },
  }),
};

const MobileInterestGallery = memo(() => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      paginate(1);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isMobile, page]);

  const paginate = (newDirection: number) => {
    setPage(([prevPage, prevDirection]) => [
      (prevPage + newDirection + INTEREST_CARDS.length) % INTEREST_CARDS.length,
      newDirection
    ]);
  };

  const wrap = (index: number, length: number) => {
    return ((index % length) + length) % length;
  };

  if (!isMobile) return null;

  const currentCard = INTEREST_CARDS[wrap(page, INTEREST_CARDS.length)];

  return (
    <div className="md:hidden flex flex-col items-center gap-8 ">
      <div className="relative h-[450px] mt-8 w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={mobileVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000) {
                paginate(1);
              } else if (swipe > 10000) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 flex justify-center items-center"
          >
            <div className={cn("w-full max-w-[300px] h-[377px] relative rounded-[10px]", currentCard.bgColor)}>
              <div className="px-8 py-10 flex flex-col gap-9">
                <h2 className="font-bold text-4xl leading-[44px] font-cocon text-white">
                  {currentCard.title}
                </h2>
                <p className="text-base text-white font-normal leading-8 font-manrope">
                  {currentCard.description}
                </p>
                <Image
                  src={currentCard.starImage}
                  width={76}
                  height={76}
                  alt="decorative star"
                  className="absolute right-5 bottom-5 animate-spin-slow"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicator Tabs */}
      <div className="flex gap-2 pb-8">
        {INTEREST_CARDS.map((_, index) => (
          <motion.div
            key={index}
            className="h-1 rounded-full cursor-pointer"
            onClick={() => {
              const direction = index > page ? 1 : -1;
              setPage([index, direction]);
            }}
            animate={{
              width: index === page ? 48 : 32,
              backgroundColor: index === page ? '#15803d' : '#d1d5db'
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
});

MobileInterestGallery.displayName = 'MobileInterestGallery';

const WhoIsInterested = () => {
  return (
    <div className="w-full h-full bg-white">
      <div className="pt-10 flex flex-col gap-8 md:px-[2em]">
        <div className="w-full md:max-w-[803px] flex flex-col gap-5">
          <h1 className="font-cocon text-[30px] md:text-4xl">
            Who we are interested in?
          </h1>
          <p className="font-manrope leading-8 text-base font-normal">
            We're looking for curious, motivated individuals who are passionate about learning and growth. If you're interested in
          </p>
        </div>
        
        {/* Desktop view */}
        <div className="hidden md:flex flex-col justify-center gap-[3em] items-center md:flex-row">
          {INTEREST_CARDS.map((card, index) => (
            <InterestCard key={index} {...card} />
          ))}
        </div>
        
        {/* Mobile carousel */}
        <MobileInterestGallery />
      </div>
    </div>
  );
};

export default WhoIsInterested;