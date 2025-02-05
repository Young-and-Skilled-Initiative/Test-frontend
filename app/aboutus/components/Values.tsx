import React from "react";
import { coreValues } from "@/data";
import { CoreValue } from "@/types";
import Image from "next/image"; 

const Values: React.FC = () => {
  return (
    <section className="font-cocon px-[2em] md:px-[5em] lg:px-[5.5em] py-[4em] bg-white w-full">
      <h1 className="text-[40px] mb-[1em]">Core Values</h1>
      <div className="flex flex-wrap lg:flex-nowrap gap-[2em] lg:justify-between justify-center items-center w-full">
        {coreValues.map((value: CoreValue) => (
          <div
            key={value.id}
            className={`relative w-full h-[215px] xl:w-[295px] xl:h-[265px] px-6 ${value.backgroundColor} ${value.padding} flex items-end justify-center text-white font-medium text-3xl xl:text-[40px] xl:leading-[48px] rounded-[10px]`}
          >
            <p>{value.title}</p>
            <Image
              src={value.sticker}
              alt="sticker"
              width={100}  
              height={100}  
              className="absolute top-[-27px] right-[-15px] w-[100px] h-[100px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
