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
      <div className="w-full bg-white flex-col py-30 px-[5%]">
        <div className="w-full flex justify-between pb-20 items-center">
          <h1 className="text-5xl font-semibold">Apple Watch essentials.</h1>
          <div className="flex flex-row">
            <p className="pr-1 text-blue-600">All Apple Watch accessories</p>{" "}
            <Image src={Icon} alt="Icon" />
          </div>
        </div>
        <div className="flex flex-row justify-between mb-30">
          <Image className="max-w-[830px]" src={Listitem2} alt="Listitem2" />
          <Image className="max-w-[830px]" src={Listitem} alt="Listitem" />
        </div>
        <h1 className="text-5xl pb-20 font-semibold">Made for each other.</h1>
        <div className="w-full bg-[#F5F5F7] rounded-4xl h-[780px] flex justify-between">
          <div className="max-w-md mx-30 py-30">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <h2 className="text-3xl font-semibold">Apple Watch and iPhone</h2>
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
              <p className="text-[18px] pt-5">
                Combining Apple Watch and iPhone opens up a world of features
                that make each device better. You can do things like get
                directions on iPhone and receive a tap on your wrist when it’s
                time to turn. Or set up a group photo on iPhone, then use your
                watch to see and snap the shot.
              </p>
            </div>
          </div>{" "}
          <Image src={Picture} alt="Picture" className="mr-40" />
        </div>
      </div>
    </>
  );
}
