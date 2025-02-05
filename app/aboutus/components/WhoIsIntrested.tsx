import React from "react";
import inStar1 from "@/public/images/inStar1.svg";
import inStar2 from "@/public/images/inStar2.svg";
import inStar3 from "@/public/images/inStar3.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";

const WhoIsIntrested = () => {
  return (
    <div className="w-full h-full bg-white">
      <div className="pt-10 flex flex-col gap-8">
        <div className="w-full md:max-w-[803px] flex flex-col gap-5">
          <h1 className="font-cocon text-[30px] md:text-[40px]">
            Who we are interested in?
          </h1>
          <p className="font-manrope leading-[32px] text-[16px] font-normal">
            We&apos;re looking for curious, motivated individuals who are
            passionate about learning and growth. If you&apos;re interested in
          </p>
        </div>
        <div className="flex flex-col justify-between items-center md:flex-row gap-5">
          <div className="w-[400px] h-[377px] relative rounded-[10px] bg-[#114F3C]">
            <div className="px-8 py-10 flex flex-col gap-9">
              <h1 className="font-bold text-[40px] leading-[44px] font-cocon text-white">
                Gaining new skills
              </h1>
              <p className="text-[16px] text-white font-normal leading-[32px] font-manrope">
                Whether you&apos;re looking to upskill for your current job or
                start a new career, we can help.
              </p>
              <Image
                src={inStar1}
                width={76}
                height={76}
                alt="star image"
                className="absolute right-4 bottom-14 "
              />
            </div>
          </div>
          <div className="w-[400px] h-[377px] relative rounded-[10px] bg-[#98BC6D]">
            <div className="px-8 py-10 flex flex-col gap-9">
              <h1 className="font-bold text-[40px] leading-[44px] font-cocon text-white">
                Networking with like minds
              </h1>
              <p className="text-[16px] text-white font-normal leading-[32px] font-manrope">
                Connect with professionals who share your goals and open doors
                for career growth and opportunities.
              </p>
              <Image
                src={inStar2}
                width={76}
                height={76}
                alt="star image"
                className="absolute right-4 bottom-14"
              />
            </div>
          </div>
          <div className="w-[400px] h-[377px] relative rounded-[10px] bg-[#EF4C0D]">
            <div className="px-8 py-10 flex flex-col gap-9">
              <h1 className="font-bold text-[40px] leading-[44px] font-cocon text-white">
                Gaining new skills
              </h1>
              <p className="text-[16px] text-white font-normal leading-[32px] font-manrope">
                Whether you&apos;re looking to upskill for your current job or
                start a new career, we can help.
              </p>
              <Image
                src={inStar3}
                width={76}
                height={76}
                alt="star image"
                className="absolute right-4 bottom-14"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoIsIntrested;
