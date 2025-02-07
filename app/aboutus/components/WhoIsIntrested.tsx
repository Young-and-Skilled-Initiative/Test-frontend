import React from "react";
import Image from "next/image";
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

const InterestCard = ({ title, description, starImage, bgColor }: InterestCardProps) => (
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
);

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
  }
];

const WhoIsInterested = () => {
  return (
    <div className="w-full h-full bg-white">
      <div className="pt-10 flex flex-col gap-8">
        <div className="w-full md:max-w-[803px] flex flex-col gap-5">
          <h1 className="font-cocon text-[30px] md:text-4xl">
            Who we are interested in?
          </h1>
          <p className="font-manrope leading-8 text-base font-normal">
            We're looking for curious, motivated individuals who are passionate about learning and growth. If you're interested in
          </p>
        </div>
        <div className="flex flex-col justify-between items-center md:flex-row gap-5">
          {INTEREST_CARDS.map((card, index) => (
            <InterestCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoIsInterested;