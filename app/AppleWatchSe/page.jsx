"use client";
import { useState } from "react";

import Image from "next/image";
import apple from "@/app/assets/icons/apple.svg";
import searchBtn from "@/app/assets/icons/searchBtn.svg";
import shopBtn from "@/app/assets/icons/shopBtn.svg";
import Menu from "@/app/assets/icons/Menu.svg";
import waches from "@/app/assets/icons/waches.svg";
import Figure from "@/app/assets/icons/Figure.svg";
import se1 from "@/app/assets/icons/se1.svg";
import CarbonN from "@/app/assets/icons/CarbonN.svg";
import se2 from "@/app/assets/icons/se2.svg";
import se3 from "@/app/assets/icons/se3.svg";
import se4 from "@/app/assets/icons/se4.svg";
import se5 from "@/app/assets/icons/se5.svg";
import se6 from "@/app/assets/icons/se6.svg";
import se7 from "@/app/assets/icons/se7.svg";
import se8 from "@/app/assets/icons/se8.svg";
import se9 from "@/app/assets/icons/se9.svg";
import Section1 from "@/app/assets/icons/Section1.svg";
import Section2 from "@/app/assets/icons/Section2.svg";
import Section3 from "@/app/assets/icons/Section3.svg";
import Section4 from "@/app/assets/icons/Section4.svg";
import Section5 from "@/app/assets/icons/Section5.svg";
import Vector from "@/app/assets/icons/Vector.svg";
import Icon from "@/app/assets/icons/Icon.svg";
import WatchCard from "../components/WatchCard";
import Figure0 from "@/app/assets/icons/Figure0.svg";
import Figure1 from "@/app/assets/icons/Figure1.svg";
import Figure2 from "@/app/assets/icons/Figure2.svg";
import circel1 from "@/app/assets/icons/circel1.svg";
import circel3 from "@/app/assets/icons/circel3.svg";
import circel7 from "@/app/assets/icons/circel7.svg";
import case1 from "@/app/assets/icons/case1.svg";
import case2 from "@/app/assets/icons/case2.svg";
import display from "@/app/assets/icons/display.svg";
import s8 from "@/app/assets/icons/s8.svg";
import s9 from "@/app/assets/icons/s9.svg";
import hurt from "@/app/assets/icons/hurt.svg";
import battery from "@/app/assets/icons/battery.svg";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const watches = [
    {
      image: Figure0,
      circle: circel1,
      title: "Apple Watch SE",
      description: "All the essentials.\nLight on price.",
      price: "From $249 or $20.75/mo. for 12 mo.*",
      features: [
        { icon: case2, text: "44mm or 40mm\naluminum case" },
        { icon: display, text: "Always-On Retina display\nup to 3000 nits" },
        { icon: s8, text: "S8 SiP\nNo Double Tap\nNo Precision Finding" },
        { icon: hurt, text: "Heart rate notifications\n(no ECG)" },
        { icon: battery, text: "Up to 36h\nNo fast charging" },
      ],
    },
    {
      image: Figure1,
      circle: circel3,
      title: "Apple Watch Series 9",
      description: "Powerful sensors,\nadvanced health features.",
      price: "From $399 or $33.25/mo. for 12 mo.*",
      features: [
        { icon: case2, text: "45mm or 41mm\naluminum or stainless steel case" },
        { icon: display, text: "Always-On Retina display\nup to 3000 nits" },
        {
          icon: s9,
          text: "S9 SiP\nDouble tap gesture\nPrecision Finding for iPhone13",
        },
        {
          icon: hurt,
          text: "ECG, Heart rate, Irregular rhythm\nnotifications",
        },
        { icon: battery, text: "Up to 36h\n72h in Low Power\nFast charging" },
      ],
    },
    {
      image: Figure2,
      circle: circel7,
      title: "Apple Watch Ultra 2",
      description: "The most rugged\nand capable.",
      price: "From $799 or $66.58/mo. for 12 mo.*",
      features: [
        {
          icon: case1,
          text: "49mm titanium case\naluminum or stainless steel case",
        },
        { icon: display, text: "Always-On Retina display\nup to 3000 nits" },
        {
          icon: s9,
          text: "S9 SiP\nDouble tap gesture\nPrecision Finding for iPhone13",
        },
        {
          icon: hurt,
          text: "Advanced ECG, Heart rate,\nIrregular rhythm, Fitness",
        },
        { icon: battery, text: "Up to 36h\n72h in Low Power\nFast charging" },
      ],
    },
  ];

  const texts = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "Vision",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];
  const handleToggle = () => {
    if (menuOpen) {
      setAnimateOut(true);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <>
      <div className="w-full bg-gray-50 border-b-2 border-b-gray-200">
        {/* Header bar */}
        <div className="flex flex-row max-w-5xl mx-auto items-center justify-between px-3.5">
          <Image src={apple} alt="apple" />
          {texts.map((item, index) => (
            <p
              key={index}
              className="cursor-pointer text-sm hidden lg:flex gap-4"
            >
              {item}
            </p>
          ))}
          <div className="flex flex-row items-center gap-4">
            <Image src={searchBtn} alt="searchBtn" className="cursor-pointer" />
            <Image src={shopBtn} alt="shopBtn" className="cursor-pointer" />
            <Image
              src={Menu}
              alt="Menu"
              className="cursor-pointer w-[32px] block lg:hidden h-[45px]"
              onClick={handleToggle}
            />
          </div>
        </div>

        {/* Mobile menu */}
        {(menuOpen || animateOut) && (
          <div
            className={`lg:hidden absolute top-[45px] left-0 w-full bg-white shadow-md z-50 
                    ${
                      menuOpen && !animateOut
                        ? "animate-slide-down"
                        : "animate-slide-up"
                    }
                  `}
            onAnimationEnd={() => {
              if (animateOut) {
                setMenuOpen(false);
                setAnimateOut(false);
              }
            }}
          >
            <div className="px-4 py-3 space-y-2">
              {texts.map((text, index) => (
                <p key={index} className="text-sm cursor-pointer">
                  {text}
                </p>
              ))}
            </div>
          </div>
        )}
        <style jsx>{`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideUp {
            from {
              opacity: 1;
              transform: translateY(0);
            }
            to {
              opacity: 0;
              transform: translateY(-20px);
            }
          }

          .animate-slide-down {
            animation: slideDown 0.3s ease-out forwards;
          }

          .animate-slide-up {
            animation: slideUp 0.3s ease-in forwards;
          }
        `}</style>

        <div className="py-5 flex flex-row justify-between max-w-[1024px] mx-auto px-3.5">
          <h1 className="text-2xl font-bold px-2">Apple Watch SE</h1>
          <button className="text-xs px-4 py-0 rounded-3xl text-white bg-blue-600 mx-2 cursor-pointer">
            Buy
          </button>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col ">
          <Image src={waches} alt="waches" className="mx-auto py-15 px-10" />
          <Image
            src={Figure}
            alt="Figure"
            className="w-[150px] md:w-auto mx-auto pb-8"
          />
          <div className="flex flex-col text-center max-w-[980px] mx-auto pb-28 px-3">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold pb-8">
              A great deal to love.
            </h1>
            <p className="text-gray-300 font-bold pb-8 text-xl md:text-2xl max-w-[680px]">
              Easy ways to stay connected. Motivating fitness metrics.
              Innovative health and safety features. And carbon neutral case and
              band combinations. Apple Watch SE offers totally lovable features
              at a feel‑good price.
            </p>
            <p className="pb-8 text-[18px] md:text-[21px] font-bold">
              Starting at $249
            </p>
            <button className="w-fit text-[14px] md:text-base px-4 py-2 md:px-6 md:py-4 rounded-full text-white bg-blue-600 cursor-pointer mx-auto">
              Buy
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[15px] sm:gap-[20px] md:gap-[25px] mx-auto">
          <div className="relative inline-block mx-auto">
            <Image src={CarbonN} alt="CarbonN" className="" />
            <button className=" absolute top-[65%] left-1/35 w-fit px-3 py-2 text-xs md:px-4 md:py-2.5 md:text-[14px] lg:px-5 lg:text-[17px] lg:py-3 rounded-full text-black bg-green-500 cursor-pointer mx-auto">
              Learn how
            </button>
          </div>
          <div className="flex flex-row gap-[15px] sm:gap-[20px] md:gap-[25px] justify-center">
            {/* Блок с se1 */}
            <div className="relative">
              <Image src={se1} alt="se1" className="w-full h-auto" />
              <Image
                src={Vector}
                alt="Vector"
                className="absolute bottom-2.5 sm:bottom-5 cursor-pointer right-2.5 sm:right-5 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" // отрегулируй размеры при необходимости
              />
            </div>

            {/* Блок с se2 */}
            <div className="relative">
              <Image src={se2} alt="se2" className="w-full h-auto" />
              <Image
                src={Vector}
                alt="Vector"
                className="absolute bottom-2.5 sm:bottom-5 cursor-pointer right-2.5 sm:right-5 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" // отрегулируй размеры при необходимости
              />
            </div>
          </div>{" "}
          <div className="flex flex-row gap-[15px] sm:gap-[20px] md:gap-[25px] justify-center">
            {/* Блок с se1 */}
            <div className="relative">
              <Image src={se3} alt="se3" className="w-full h-auto" />
              <Image
                src={Vector}
                alt="Vector"
                className="absolute bottom-2.5 sm:bottom-5 cursor-pointer right-2.5 sm:right-5 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" // отрегулируй размеры при необходимости
              />
            </div>

            {/* Блок с se2 */}
            <div className="relative">
              <Image src={se4} alt="se4" className="w-full h-auto" />
              <Image
                src={Vector}
                alt="Vector"
                className="absolute bottom-2.5 sm:bottom-5 cursor-pointer right-2.5 sm:right-5 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" // отрегулируй размеры при необходимости
              />
            </div>
          </div>
          <div className="flex flex-row gap-[15px] sm:gap-[20px] md:gap-[25px] justify-center">
            {/* Блок с se1 */}
            <div className="relative">
              <Image src={se5} alt="se5" className="w-full h-auto" />
              <Image
                src={Vector}
                alt="Vector"
                className="absolute bottom-2.5 sm:bottom-5 cursor-pointer right-2.5 sm:right-5 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" // отрегулируй размеры при необходимости
              />
            </div>
          </div>
          <div className="flex flex-row gap-[15px] sm:gap-[20px] md:gap-[25px] justify-center">
            {/* Блок с se1 */}
            <div className="relative">
              <Image src={se6} alt="se6" className="w-full h-auto" />
              <Image
                src={Vector}
                alt="Vector"
                className="absolute bottom-2.5 sm:bottom-5 cursor-pointer right-2.5 sm:right-5 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" // отрегулируй размеры при необходимости
              />
            </div>

            {/* Блок с se2 */}
            <div className="relative">
              <Image src={se7} alt="se7" className="w-full h-auto" />
              <Image
                src={Vector}
                alt="Vector"
                className="absolute bottom-2.5 sm:bottom-5 cursor-pointer right-2.5 sm:right-5 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" // отрегулируй размеры при необходимости
              />
            </div>
          </div>
          <div className="flex flex-row gap-[15px] sm:gap-[20px] md:gap-[25px] justify-center">
            {/* Блок с se1 */}
            <div className="relative">
              <Image src={se8} alt="se8" className="w-full h-auto" />
              <Image
                src={Vector}
                alt="Vector"
                className="absolute bottom-2.5 sm:bottom-5 cursor-pointer right-2.5 sm:right-5 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" // отрегулируй размеры при необходимости
              />
            </div>
          </div>
          <div className="flex flex-row gap-[15px] sm:gap-[20px] md:gap-[25px] justify-center pb-10">
            {/* Блок с se1 */}
            <div className="relative">
              <Image src={se9} alt="se9" className="w-full h-auto" />
              <Image
                src={Vector}
                alt="Vector"
                className="absolute bottom-2.5 sm:bottom-5 cursor-pointer right-2.5 sm:right-5 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" // отрегулируй размеры при необходимости
              />
            </div>
          </div>
          <div className="flex flex-row gap-[25px] justify-center">
            {/* Блок с se1 */}
            <div className="relative">
              <Image src={Section1} alt="Section1" className="w-full h-auto" />
              <a
                href="#"
                className="absolute text-[7px] sm:text-[10px] md:text-base right-[22%] top-[60%] text-blue-600 flex flex-row ml-2 flex-nowrap"
              >
                Learn more
                <Image src={Icon} alt="Icon" className="ml-1 w-1" />
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-[25px] justify-center">
            {/* Блок с se1 */}
            <div className="relative">
              <Image src={Section2} alt="Section2" className="w-full h-auto" />
            </div>
          </div>
          <div className="flex flex-row gap-[25px] justify-center">
            {/* Блок с se1 */}
            <div className="relative">
              <Image src={Section3} alt="Section3" className="w-full h-auto" />
            </div>
          </div>
          <div className="flex flex-row gap-[25px] justify-center">
            {/* Блок с se1 */}
            <div className="relative">
              <Image src={Section4} alt="Section4" className="w-full h-auto" />
            </div>
          </div>
          <div className="flex flex-row gap-[25px] justify-center pb-10">
            {/* Блок с se1 */}
            <div className="relative">
              <Image src={Section5} alt="Section5" className="w-full h-auto" />
              <button
                className="absolute top-[37%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  p-[2px] cursor-pointer rounded-full border-2 border-transparent 
  bg-clip-padding bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400"
              >
                <span
                  className="block bg-white rounded-full px-2 py-1 md:px-4 md:py-2 
    text-black text-[7px] sm:text-[10px] md:text-base"
                >
                  Create your style
                </span>
              </button>
            </div>
          </div>
        </div>
        <h1 className="text-5xl font-bold text-center pb-10">
          Which Apple Watch is right for you?
        </h1>
        <div className="max-w-[1348px] mx-auto flex px-0 sm:px-[5%] overflow-x-auto xl:overflow-x-hidden">
          {watches.map((watch, i) => (
            <WatchCard key={i} {...watch} />
          ))}
        </div>
      </div>
    </>
  );
}
