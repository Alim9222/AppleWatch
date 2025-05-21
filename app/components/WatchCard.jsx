import Image from "next/image";
import Icon from "@/app/assets/icons/Icon.svg";
import Link from "next/link";
import AppleWatchSe from "../AppleWatchSe/page";

export default function WatchCard({
  image,
  circle,
  title,
  description,
  price,
  features,
}) {
  return (
    <div className="min-w-[390px] py-5 sm:text-center">
      <Image
        src={image}
        alt={title}
        className="pb-10 sm:mx-auto w-[170px] sm:w-[200px] lg:w-[270px] h-[280px] sm:h-[310px] lg:h-[380px] px-5 sm:px-0"
      />
      <Image src={circle} alt="circle" className="sm:mx-auto mx-5" />
      <h2 className="font-semibold text-3xl py-10 px-5 sm:px-0">{title}</h2>
      <p className="text-[17px] pb-10 whitespace-pre-line px-5 sm:px-0">
        {description}
      </p>
      <p className="text-[17px] font-bold flex sm:mx-auto sm:justify-center px-5 sm:px-0">
        {price}
      </p>

      <div className="flex items-center sm:px-20 py-10 sm:justify-center border-b-2 border-gray-300 px-5 ">
        <button className="text-gray-200 bg-blue-600 py-2.5 px-4 rounded-full mr-2.5 cursor-pointer">
          Learn more
        </button>
        <Link
          href="/AppleWatchSe"
          className="text-blue-600 pr-1 cursor-pointer"
        >
          Buy
        </Link>
        <Image src={Icon} alt="Icon" className="cursor-pointer" />
      </div>

      {features.map(({ icon, text }, index) => (
        <div className="py-5 px-5 sm:px-0" key={index}>
          <Image
            src={icon}
            alt={`feature-${index}`}
            className="sm:mx-auto pt-10 pb-5"
          />
          <p className="mx-auto text-sm whitespace-pre-line">{text}</p>
        </div>
      ))}
    </div>
  );
}
