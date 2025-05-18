"use client";
import { useState } from "react";
import Icon from "@/app/assets/icons/Icon.svg";
import Image from "next/image";
import Listitem from "@/app/assets/icons/Listitem.svg";
import Listitem2 from "@/app/assets/icons/Listitem2.svg";
import Picture from "@/app/assets/icons/Picture.svg";

export default function Essentials() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="w-full bg-white flex-col py-10 sm:py-20 md:py-30 px-[5%]">
        <div className="w-full flex flex-col sm:flex-row sm:justify-between pb-10 sm:pb-15 md:pb-20 sm:items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Apple Watch essentials.
          </h1>
          <div className="flex flex-row">
            <p className="pr-1 text-blue-600">All Apple Watch accessories</p>{" "}
            <Image src={Icon} alt="Icon" />
          </div>
        </div>
        <div className="w-full  overflow-x-auto scroll-smooth scrollbar-hide hide-scrollbar">
          <div className="flex flex-row justify-between pb-15 gap-5 min-w-[700px] flex-nowrap">
            <div className="relative w-full min-h-[480px]">
              <Image
                className="h-full rounded-3xl  md:pb-0 mx-auto md:mx-0 object-cover"
                src={Listitem2}
                alt="Listitem2"
              />
            </div>
            <div className="relative w-full min-h-[480px]">
              <Image
                className=" h-full rounded-3xl  md:pb-0  mx-auto md:mx-0 object-cover"
                src={Listitem}
                alt="Listitem"
              />
            </div>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl pb-10 sm:pb-15 md:pb-20 font-semibold">
          Made for each other.
        </h1>
        <div className="w-full bg-[#F5F5F7] rounded-4xl xl:h-[780px] flex flex-col xl:flex-row justify-between">
          <div className="max-w-3xl xl:max-w-md xl:mx-[6%] px-10 lg:px-0 mx-auto  py-20 sm:py-30">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <h2 className="text-xl sm:text-3xl font-semibold">
                Apple Watch and iPhone
              </h2>
              <div
                className={`
            w-3 h-3 border-t-2 border-r-2 border-black
            transition-all duration-300
            ${
              isOpen
                ? "rotate-[-45deg] translate-y-1.5"
                : "rotate-[135deg] translate-y-0"
            }
          `}
              />
            </div>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen
                  ? "opacity-100 translate-y-0 max-h-96 mt-2"
                  : "opacity-0 -translate-y-4 max-h-0"
              }`}
            >
              <p className="text-[14px] sm:text-[18px] pt-5">
                Combining Apple Watch and iPhone opens up a world of features
                that make each device better. You can do things like get
                directions on iPhone and receive a tap on your wrist when it’s
                time to turn. Or set up a group photo on iPhone, then use your
                watch to see and snap the shot.
              </p>
            </div>
          </div>{" "}
          <Image
            src={Picture}
            alt="Picture"
            className=" mx-auto pb-10 xl:pb-0 w-[300px] sm:w-[400px] lg:w-[500px]"
          />
        </div>
      </div>
    </>
  );
}
