"use client";

import { cn } from "@/lib/utils";
import { companyName, dialPhone, sendMessage } from "@/libs/data";
import { phoneSvg } from "../icons";
import { PhoneCall } from "lucide-react";

const CallAndWhatsappButton = ({ className, company = companyName }) => {
  return (
    <div className={cn("flex items-center gap-3 text-nowrap", className)}>
      <button className="border border-black/30 hover:border-black transition-all ease-in duration-100 hover:bg-black/5 pl-2 pr-4 h-9 rounded flex items-center gap-2 justify-between">
        <PhoneCall className="size-4" />
        <span className="text-">Call us</span>
      </button>
      <button className="border border-black bg-black text-white transition-all ease-in duration-100 hover:bg-black/85 pl-2 pr-4 h-9 rounded flex items-center gap-2 justify-between">
        {whatsappIcon}
        <span className="text-">Whatsapp</span>
      </button>
    </div>
  );
};

export default CallAndWhatsappButton;

const whatsappIcon = (
  <svg
    width="54"
    height="55"
    viewBox="0 0 54 55"
    className="size-5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M52.3998 20.4C49.9998 11.2 42.5998 3.79997 33.2998 1.49997C23.9998 -0.800034 13.8998 2.19997 7.49983 9.39997C-0.400175 18.2 -1.40018 31.4 4.99983 41.4C4.49983 45 4.09983 48.6 3.59983 52.2C3.39983 53.5 4.99983 54.4 6.09983 54.1C9.59983 53.1 13.1998 52.2 16.6998 51.2C26.1998 55.1 37.1998 53.3 44.7998 46.3C51.8998 39.8 54.7998 29.6 52.3998 20.4ZM45.3998 39.7C39.3998 48.5 27.5998 51.8 17.8998 47.4C17.8998 47.4 17.8998 47.4 17.7998 47.4C17.3998 47.2 16.8998 47.1 16.2998 47.2C13.4998 48 10.6998 48.7 7.89982 49.5C8.19982 47.1 8.49983 44.8 8.79983 42.4C8.89983 41.6 9.09982 40.7 8.69982 39.9C8.39982 39.4 7.99982 38.9 7.69982 38.3C6.99982 37.1 6.39982 35.8 5.89982 34.5C4.29982 29.9 4.19982 24.8 5.69982 20.2C8.29982 12.1 15.6998 5.99997 24.0998 4.99997C32.7998 3.79997 41.4998 7.99996 45.9998 15.3C50.5998 22.8 50.2998 32.4 45.3998 39.7Z"
      fill="currentColor"
    />
    <path
      d="M40.8997 30.3L36.3997 26.8C34.9997 25.7 33.0997 25.9 31.8997 27.1L30.5997 28.4C29.5997 27.8 28.6997 27.1 27.7997 26.3C26.9997 25.5 26.2997 24.5 25.6997 23.5L26.9997 22.2C28.1997 21 28.2997 19.1 27.2997 17.7L23.7997 13.1C23.0997 12.1 21.9997 11.5 20.7997 11.5C19.5997 11.4 18.3997 11.9 17.5997 12.7L13.6997 16.6C11.4997 18.8 10.9997 22.2 12.3997 25C14.2997 28.6 16.6997 31.8 19.4997 34.6C22.2997 37.4 25.5997 39.8 29.0997 41.7C30.1997 42.3 31.2997 42.5 32.3997 42.5C34.1997 42.5 36.0997 41.8 37.3997 40.4L41.2997 36.5C42.0997 35.7 42.5997 34.5 42.4997 33.3C42.4997 32.1 41.8997 31 40.8997 30.3ZM38.4997 33.7L34.5997 37.6C33.5997 38.6 32.0997 38.8 30.8997 38.2C27.6997 36.5 24.7997 34.4 22.1997 31.8C19.5997 29.2 17.4997 26.3 15.7997 23.1C15.1997 21.9 15.3997 20.4 16.3997 19.4L20.2997 15.5C20.2997 15.5 20.2997 15.5 20.3997 15.5C20.4997 15.5 20.4997 15.5 20.4997 15.6L23.6997 19.8L22.3997 21C21.3997 22 21.0997 23.6 21.7997 24.9C22.5997 26.5 23.6997 27.9 24.8997 29.1C26.0997 30.3 27.4997 31.4 29.0997 32.2C30.3997 32.9 31.8997 32.6 32.8997 31.6L34.2997 30.2L38.3997 33.4C38.3997 33.4 38.4997 33.4 38.4997 33.5C38.4997 33.6 38.4997 33.7 38.4997 33.7Z"
      fill="currentColor"
    />
  </svg>
);
