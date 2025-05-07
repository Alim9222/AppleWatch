"use client";
import { useRef } from "react";
import mainphoto from "@/app/assets/images/mainphoto.png";
import Image from "next/image";
import Container from "@/app/assets/icons/Container.svg";
import Container2 from "@/app/assets/icons/Container2.svg";
import Container3 from "@/app/assets/icons/Container3.svg";
import Container4 from "@/app/assets/icons/Container4.svg";
import Container5 from "@/app/assets/icons/Container5.svg";
import Container6 from "@/app/assets/icons/Container6.svg";
import Container7 from "@/app/assets/icons/Container7.svg";
import ButtonNext from "@/app/assets/icons/ButtonNext.svg";
import Button_plus from "@/app/assets/icons/Button_plus.svg";
import ButtonPrevious from "@/app/assets/icons/ButtonPrevious.svg";
import Icon from "@/app/assets/icons/Icon.svg";

export default function Main() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="w-full h-11 bg-[#F5F5F7] flex justify-center items-center">
        Celebrate Mom with the perfect gift this Mother’s Day.
        <a href="#" className="text-blue-600 flex flex-row ml-2">
          Shop
          <Image src={Icon} alt="Icon" className="ml-1" />
        </a>
      </div>

      <div className="w-full flex flex-col">
        <div className="pt-20 px-20">
          <div className="flex justify-between items-end pb-20 flex-wrap gap-4">
            <h1 className="text-6xl font-semibold">Apple Watch</h1>
            <p className="text-2xl font-semibold">To wear it is to love it.</p>
          </div>
        </div>

        <Image src={mainphoto} alt="mainphoto" className="py-3 px-6 w-full" />

        <div className="py-30 pl-[5%]">
          <h1 className="text-5xl font-semibold pb-10">
            Get to know Apple Watch.
          </h1>

          <div
            ref={scrollRef}
            className="flex flex-row flex-nowrap gap-5 overflow-x-auto scroll-smooth scrollbar-hide hide-scrollbar pr-[6%]"
          >
            {[
              Container,
              Container2,
              Container3,
              Container4,
              Container5,
              Container6,
              Container7,
            ].map((item, index) => (
              <div key={index} className="relative flex-shrink-0 w-[405px]">
                <Image src={item} alt={`Container${index + 1}`} />
                <Image
                  src={Button_plus}
                  alt="Button_plus"
                  className="absolute bottom-5 right-5 cursor-pointer"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-row gap-2.5 py-10 pr-[6%] justify-end">
            <Image
              src={ButtonPrevious}
              alt="ButtonPrevious"
              className="cursor-pointer"
              onClick={() => handleScroll("left")}
            />
            <Image
              src={ButtonNext}
              alt="ButtonNext"
              className="cursor-pointer"
              onClick={() => handleScroll("right")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
