"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

import apple from "@/app/assets/icons/apple.svg";
import searchBtn from "@/app/assets/icons/searchBtn.svg";
import shopBtn from "@/app/assets/icons/shopBtn.svg";
import watch_1 from "@/app/assets/icons/watch_1.svg";
import watch_2 from "@/app/assets/icons/watch_2.svg";
import watch_3 from "@/app/assets/icons/watch_3.svg";
import watch_4 from "@/app/assets/icons/watch_4.svg";
import watch_5 from "@/app/assets/icons/watch_5.svg";
import watch_6 from "@/app/assets/icons/watch_6.svg";
import watch_7 from "@/app/assets/icons/watch_7.svg";
import watch_8 from "@/app/assets/icons/watch_8.svg";
import watch_9 from "@/app/assets/icons/watch_9.svg";
import watch_10 from "@/app/assets/icons/watch_10.svg";
import watch_11 from "@/app/assets/icons/watch_11.svg";
import watch_12 from "@/app/assets/icons/watch_12.svg";
import Menu from "@/app/assets/icons/Menu.svg";
import Button from "@/app/assets/icons/Button.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const scrollRef = useRef(null);

  const handleToggle = () => {
    if (menuOpen) {
      setAnimateOut(true);
    } else {
      setMenuOpen(true);
    }
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 10);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -130, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 130, behavior: "smooth" });
  };

  useEffect(() => {
    handleScroll();
  }, []);

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

  const watchIcons = [
    { id: 1, src: watch_1 },
    { id: 2, src: watch_2 },
    { id: 3, src: watch_3 },
    { id: 4, src: watch_4 },
    { id: 5, src: watch_5 },
    { id: 6, src: watch_6 },
    { id: 7, src: watch_7 },
    { id: 8, src: watch_8 },
    { id: 9, src: watch_9 },
    { id: 10, src: watch_10 },
    { id: 11, src: watch_11 },
    { id: 12, src: watch_12 },
  ];

  return (
    <div className="relative">
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

      {/* Watch icons */}
      <div className="w-full h-32 relative flex items-center">
        {showLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 z-10 bg-gray-50 px-2 h-full"
          >
            <Image src={Button} className="rotate-180" alt="Button" />
          </button>
        )}
        <div
          className="w-full overflow-x-auto hide-scrollbar"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          <div className="mx-auto flex gap-5 flex-nowrap w-max px-3.5">
            {watchIcons.map((watch) => (
              <div
                key={watch.id}
                className="flex flex-col items-center min-w-[100px]"
              >
                <Image
                  src={watch.src}
                  alt={`watch ${watch.id}`}
                  className="cursor-pointer"
                />
                <p></p>
              </div>
            ))}
          </div>
        </div>
        {showRight && (
          <button
            onClick={scrollRight}
            className="absolute right-0 z-10 bg-gray-50 px-2 h-full xl:hidden"
          >
            <Image src={Button} alt="Button" />
          </button>
        )}
      </div>

      {/* Animations */}
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
    </div>
  );
}
