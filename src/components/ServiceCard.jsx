import React from "react";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { companyName } from "@/libs/data";
import { cn } from "@/lib/utils";

const ServiceCard = ({ title, desc, imgUrl, company = companyName }) => {
  return (
    <div
      className={cn(
        "bg-center bg-cover bg-no-repeat",
        "shadow rounded-3xl cursor-pointer overflow-hidden text-white justify-center transition-all ease-in duration-200 flex flex-col w-full h-full min-h-[30rem] gap-5",
        company === "Lg"
          ? "bg-lgBlob hover:bg-lgPrimary hover:text-white"
          : company === "Samsung"
          ? "bg-samsungBlob hover:bg-samsungPrimary hover:text-white"
          : company === "Siemens"
          ? "bg-siemensBlob hover:bg-siemensPrimary hover:text-white"
          : company === "Bosch"
          ? "bg-boschBlob hover:bg-boschSecondary hover:text-white"
          : "bg-primary hover:bg-tertiary hover:text-white border-primary"
      )}
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className="flex flex-col bg-black/60 gap-3 py-6 px-6">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <span className="text-sm">{desc}</span>
        <CallAndWhatsappButton company={company} className="w-full justify-center" />
      </div>
    </div>
  );
};

export default ServiceCard;
