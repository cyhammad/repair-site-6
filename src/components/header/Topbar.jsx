"use client";

import { companyName, dialPhone, phoneNumber, sendMessage } from "@/libs/data";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Adjusted import path as requested

const Topbar = ({ company }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-full",
        company === "Lg"
          ? "bg-lgPrimary"
          : company === "Samsung"
          ? "bg-samsungPrimary"
          : company === "Bosch"
          ? "bg-boschPrimary"
          : company === "Siemens"
          ? "bg-siemensPrimary"
          : "bg-primary",
        company !== companyName && "text-white" // Apply text-white for Lg, Samsung, and Siemens
      )}
    >
      <div className="grid grid-cols-[1fr_1px_1fr] gap-2 w-full max-w-7xl">
        <div
          onClick={dialPhone}
          className="flex items-center justify-center gap-1 px-5 py-2 text-sm"
        >
          {phoneSvg}
          Call us
          <Link className="group relative hidden sm:block" href="/">
            <span>{phoneNumber}</span>
            <span className="w-0 absolute bottom-0 left-0 transition-all ease-in duration-200 group-hover:w-full h-[1px] bg-black"></span>
          </Link>
        </div>
        <span className="border-[0.5px] border-black/50 h-8 mt-0.5"></span>
        <div
          onClick={sendMessage}
          className="flex items-center justify-center gap-1 px-5 py-2 text-sm"
        >
          {whatsappSvg}
          Whatsapp
          <Link className="group relative hidden sm:block" href="/">
            <span>{phoneNumber}</span>
            <span className="w-0 absolute bottom-0 left-0 transition-all ease-in duration-200 group-hover:w-full h-[1px] bg-black"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const phoneSvg = (
  <svg
    width="12"
    height="20"
    viewBox="0 0 58 88"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M47.75 0.25H10.25C5.0938 0.25 0.875 4.4688 0.875 9.625V69H57.125V9.625C57.125 4.4688 52.9062 0.25 47.75 0.25ZM32.125 15.875H25.875C24.1562 15.875 22.75 14.4688 22.75 12.75C22.75 11.0312 24.1562 9.625 25.875 9.625H32.125C33.8438 9.625 35.25 11.0312 35.25 12.75C35.25 14.4688 33.8438 15.875 32.125 15.875ZM0.875 75.25H57.125V78.375C57.125 83.5312 52.9062 87.75 47.75 87.75H10.25C5.0938 87.75 0.875 83.5312 0.875 78.375V75.25Z"
      fill="currentColor"
    />
  </svg>
);

const whatsappSvg = (
  <svg
    width="16"
    height="20"
    viewBox="0 0 66 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M65.5 33C65.5 15.078 50.922 0.5 33 0.5C15.078 0.5 0.5 15.078 0.5 33C0.5 38.25 1.7812 43.461 4.2109 48.078L2.0312 63.316L15.3012 60.2574C20.5707 63.6871 26.6802 65.4957 33.0002 65.4957C50.9222 65.4996 65.5 50.922 65.5 33ZM15.352 27.0508C13.7114 18.8399 18.3012 16.0508 21.1918 15.1208C22.3832 14.7419 23.6918 15.3513 24.1918 16.5192L27.1215 23.359C27.6918 24.6871 27.3715 26.2574 26.3207 27.2574L24.1605 29.3277C26.4222 36.7769 34.6095 41.0777 36.0905 41.7967L38.2702 39.6365C39.2116 38.6951 40.6296 38.3748 41.8913 38.8162L49.3327 41.406C50.4108 41.7849 51.1139 42.8474 50.9929 43.9451C50.6335 47.2459 48.3015 49.0935 46.4148 50.074C45.2429 50.6755 43.9265 50.9842 42.5867 50.9842C42.0672 50.9842 41.5555 50.9334 41.0359 50.8435C19.1409 46.9216 15.38 27.2498 15.352 27.0508Z"
      fill="currentColor"
    />
  </svg>
);

export default Topbar;
