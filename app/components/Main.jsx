"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import mainphoto from "@/app/assets/images/mainphoto.png";
import Container from "@/app/assets/icons/Container.svg";
import Container2 from "@/app/assets/icons/Container2.svg";
import Container3 from "@/app/assets/icons/Container3.svg";
import Container4 from "@/app/assets/icons/Container4.svg";
import Container5 from "@/app/assets/icons/Container5.svg";
import Container6 from "@/app/assets/icons/Container6.svg";
import Container7 from "@/app/assets/icons/Container7.svg";
import ButtonNext from "@/app/assets/icons/ButtonNext.svg";
import Buttonnn from "@/app/assets/icons/Buttonnn.png"; // ← новый
import Button_plus from "@/app/assets/icons/Button_plus.svg";
import ButtonPrevious from "@/app/assets/icons/ButtonPrevious.svg";
import Buttonn from "@/app/assets/icons/Buttonn.png"; // ← новый
import Icon from "@/app/assets/icons/Icon.svg";
import mobileCon from "@/app/assets/icons/mobileCon.svg";

export default function Main() {
  const scrollRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const scrollAmount = 429;

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });

      if (direction === "right") {
        setIsScrolled(true); // show "Buttonn"
      }
    }
  };

  // Update scroll position flags
  const updateScrollState = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      setIsScrolled(scrollLeft > 0);
      setIsEnd(scrollLeft + clientWidth >= scrollWidth - 5); // minor margin for float error
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (!currentRef) return;

    currentRef.addEventListener("scroll", updateScrollState);

    return () => {
      currentRef.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  return (
    <>
      <div className="w-full h-11 bg-[#F5F5F7] text-[10px] sm:text-[16px] flex justify-center items-center">
        Celebrate Mom with the perfect gift this Mother’s Day.
        <a href="#" className="text-blue-600 flex flex-row ml-2">
          Shop
          <Image src={Icon} alt="Icon" className="ml-1 " />
        </a>
      </div>

      <div className="w-full flex flex-col">
        <div className="pt-10 sm:pt-15 md:pt-20 px-[5%]">
          <div className="flex justify-between items-end pb-10 sm:pb-15 md:pb-20 flex-wrap gap-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
              Apple Watch
            </h1>
            <p className="text-[18px] sm:text-xl md:text-2xl font-semibold">
              To wear it is to love it.
            </p>
          </div>
        </div>

        <Image
          src={mainphoto}
          alt="mainphoto"
          className="py-3 px-6 w-full hidden sm:block"
        />
        <Image
          src={mobileCon}
          alt="mobileCon"
          className="py-3 px-6 w-full block sm:hidden"
        />

        <div className="py-15 sm:py-20 md:py-30 pl-[5%]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold pb-10">
            Get to know Apple Watch.
          </h1>

          <div
            ref={scrollRef}
            className="flex flex-row flex-nowrap gap-6 overflow-x-auto scroll-smooth scrollbar-hide hide-scrollbar pr-[6%]"
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
              <div
                key={index}
                className="relative flex-shrink-0 lg:w-[405px] w-[300px] sm:w-[350px]"
              >
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
              src={isScrolled ? Buttonn : ButtonPrevious}
              alt="ButtonPrevious"
              className="cursor-pointer w-[30px] sm:w-[40px]"
              onClick={() => handleScroll("left")}
            />
            <Image
              src={isEnd ? Buttonnn : ButtonNext}
              alt="ButtonNext"
              className="cursor-pointer w-[30px] sm:w-[40px]"
              onClick={() => handleScroll("right")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
