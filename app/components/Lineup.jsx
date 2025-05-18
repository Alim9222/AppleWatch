"use client";
import Image from "next/image";
import WatchCard from "@/app/components/WatchCard";
import { useRef, useState, useEffect } from "react";

import Icon from "@/app/assets/icons/Icon.svg";
import watch1 from "@/app/assets/icons/watch1.svg";
import watch2 from "@/app/assets/icons/watch2.svg";
import watch3 from "@/app/assets/icons/watch3.svg";
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
import bannerW from "@/app/assets/images/bannerW.png";
import Background from "@/app/assets/icons/Background.svg";
import Background2 from "@/app/assets/icons/Background2.svg";
import Background3 from "@/app/assets/icons/Background3.svg";
import Background4 from "@/app/assets/icons/Background4.svg";
import Background5 from "@/app/assets/icons/Background5.svg";
import Background6 from "@/app/assets/icons/Background6.svg";
import Buttonnn from "@/app/assets/icons/Buttonnn.png"; // ← новый

import Buttonn from "@/app/assets/icons/Buttonn.png"; // ← новый

import Button_plus from "@/app/assets/icons/Button_plus.svg";
import ButtonNext from "@/app/assets/icons/ButtonNext.svg";
import ButtonPrevious from "@/app/assets/icons/ButtonPrevious.svg";
import Background_2 from "@/app/assets/icons/Background_2.svg";

export default function Lineup() {
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

  const watches = [
    {
      image: watch1,
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
      image: watch2,
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
      image: watch3,
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

  return (
    <div className="bg-[#F5F5F7] w-full">
      <div className="flex flex-col sm:flex-row sm:justify-between py-20 sm:py-30 md:py-40 px-[5%] sm:items-end">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-5 sm:pb-0">
          Explore the lineup.
        </h1>
        <div className="flex gap-1 cursor-pointer">
          <p className="text-blue-600">Compare all models</p>
          <Image src={Icon} alt="Icon" />
        </div>
      </div>

      <div className="max-w-[1348px] flex px-0 sm:px-[5%] overflow-x-auto xl:overflow-x-hidden">
        {watches.map((watch, i) => (
          <WatchCard key={i} {...watch} />
        ))}
      </div>
      <div className="flex flex-col pt-20 sm:pt-30 md:pt-40 pb-10 sm:pb-15 md:pb-20 px-[5%] ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-10 sm:pb-15 md:pb-20">
          Apple Watch Studio
        </h1>
        <div className="relative rounded-2xl overflow-hidden w-full">
          <Image
            src={bannerW}
            alt="bannerW"
            className="w-full min-h-[480px] hidden lg:block object-cover"
          />
          <div className="relative w-full min-h-[480px] lg:hidden">
            <Image
              src={Background_2}
              alt="Background_2"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 flex lg:items-center text-center">
            <div className="w-full lg:w-[40%] flex items-center lg:justify-center flex-col px-5">
              <h1 className="text-black text-xl py-7 lg:py-0 sm:text-3xl font-semibold">
                Mix. Match. Make it yours.
              </h1>
              <p className="text[14px] sm:font-[18px] py-4">
                Choose a case. Pick a band. <br /> Configure your perfect <br />{" "}
                watch.
              </p>
              <button className="p-[2px] cursor-pointer rounded-full border-2 border-transparent bg-clip-padding bg-gradient-to-r from-yellow-400 via-pink-500 to-green-400 inline-block">
                <span className="block bg-white rounded-full px-6 py-2 text-black text-lg text-[12px] sm:font-medium">
                  Create your style
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col pl-[5%]">
        <div className="py-10 sm:py-15 md:py-20 ">
          <div className="flex sm:items-center sm:justify-between flex-col sm:flex-row pr-[5%] pb-10 sm:pb-15 md:pb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-5 sm:pb-0">
              Why Apple is the best <br /> place to buy Apple Watch.
            </h1>
            <div className="flex flex-row cursor-pointer items-center">
              <p className="text-blue-600 pr-1">Shop Apple Watch</p>
              <Image src={Icon} alt="Icon" />
            </div>
          </div>
          <div
            ref={scrollRef}
            className="flex flex-row flex-nowrap gap-6 overflow-x-auto scroll-smooth scrollbar-hide hide-scrollbar pr-[6%]"
          >
            {[
              Background,
              Background2,
              Background3,
              Background4,
              Background5,
              Background6,
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 lg:w-[405px] w-[300px] sm:w-[350px]"
              >
                <Image src={item} alt={`Background${index + 1}`} />
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
              className="cursor-pointer"
              onClick={() => handleScroll("left")}
            />
            <Image
              src={isEnd ? Buttonnn : ButtonNext}
              alt="ButtonNext"
              className="cursor-pointer"
              onClick={() => handleScroll("right")}
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
