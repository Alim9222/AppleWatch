import Image from "next/image";
import apple from "@/app/assets/icons/apple.svg";
import burgerBtn from "@/app/assets/icons/burgerBtn.svg";
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

export default function Header() {
  const watchIcons = [
    { id: 1, src: watch_1, name: "", className: "cursor-pointer relative" },
    { id: 2, src: watch_2, name: "", className: "cursor-pointer relative" },
    { id: 3, src: watch_3, name: "", className: "cursor-pointer relative" },
    { id: 4, src: watch_4, name: "", className: "cursor-pointer relative" },
    { id: 5, src: watch_5, name: "", className: "cursor-pointer relative" },
    { id: 6, src: watch_6, name: "", className: "cursor-pointer relative" },
    { id: 7, src: watch_7, name: "", className: "cursor-pointer relative" },
    { id: 8, src: watch_8, name: "", className: "cursor-pointer relative" },
    { id: 9, src: watch_9, name: "", className: "cursor-pointer relative" },
    { id: 10, src: watch_10, name: "", className: "cursor-pointer relative" },
    { id: 11, src: watch_11, name: "", className: "cursor-pointer relative" },
    { id: 12, src: watch_12, name: "", className: "cursor-pointer relative" },
  ];

  className: "cursor-pointer absolute";
  const texts = [
    {
      text: "Store",
      className: "cursor-pointer relative",
    },
    {
      text: "Mac",
      className: "cursor-pointer absolute",
    },
    {
      text: "iPad",
      className: "cursor-pointer relative",
    },
    {
      text: "iPhone",
      className: "cursor-pointer absolute",
    },
    {
      text: "Watch",
      className: "cursor-pointer relative",
    },
    {
      text: "Vision",
      className: "cursor-pointer absolute",
    },
    {
      text: "AirPods",
      className: "cursor-pointer relative",
    },
    {
      text: "TV & Home",
      className: "cursor-pointer absolute",
    },
    {
      text: "Entertainment",
      className: "cursor-pointer relative",
    },
    {
      text: "Accessories",
      className: "cursor-pointer absolute",
    },
    {
      text: "Support",
      className: "cursor-pointer relative",
    },
  ];

  return (
    <>
      <div>
        <div className="flex flex-row max-w-5xl mx-auto items-center justify-between px-3.5">
          <Image src={apple} alt="apple" />
          {texts.map((item, index) => (
            <p className="cursor-pointer text-sm hidden lg:block" key={index}>
              {item.text}
            </p>
          ))}{" "}
          <div className="flex flex-row">
            <Image src={searchBtn} alt="searchBtn" className="cursor-pointer" />
            <Image src={shopBtn} alt="shopBtn" className="cursor-pointer" />
            <Image
              src={Menu}
              alt="Menu"
              className="cursor-pointer w-[32px] block lg:hidden"
            />
          </div>
        </div>
        <div className="w-full h-32 flex items-center">
          <div className="w-full overflow-x-auto hide-scrollbar">
            <div className="mx-auto flex gap-5 flex-nowrap w-max">
              {watchIcons.map((watch) => (
                <div
                  key={watch.id}
                  className="flex flex-col items-center min-w-[100px]"
                >
                  <Image
                    src={watch.src}
                    alt={watch.name}
                    className={watch.className}
                  />
                  <p>{watch.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
