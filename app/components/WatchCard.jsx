import Image from "next/image";
import Icon from "@/app/assets/icons/Icon.svg";

export default function WatchCard({
  image,
  circle,
  title,
  description,
  price,
  features,
}) {
  return (
    <div className="min-w-[390px] py-5 text-center">
      <Image src={image} alt={title} className="pb-10 mx-auto" />
      <Image src={circle} alt="circle" className="mx-auto" />
      <h2 className="font-semibold text-3xl py-10">{title}</h2>
      <p className="text-[17px] pb-10 whitespace-pre-line">{description}</p>
      <p className="text-[17px] font-bold flex mx-auto justify-center">
        {price}
      </p>

      <div className="flex items-center px-20 py-10 justify-center border-b-2 border-gray-300">
        <button className="text-gray-200 bg-blue-600 py-2.5 px-4 rounded-full mr-2.5 cursor-pointer">
          Learn more
        </button>
        <p className="text-blue-600 pr-1 cursor-pointer">Buy</p>
        <Image src={Icon} alt="Icon" className="cursor-pointer" />
      </div>

      {features.map(({ icon, text }, index) => (
        <div className="py-5" key={index}>
          <Image
            src={icon}
            alt={`feature-${index}`}
            className="mx-auto pt-10 pb-5"
          />
          <p className="mx-auto text-sm whitespace-pre-line">{text}</p>
        </div>
      ))}
    </div>
  );
}
