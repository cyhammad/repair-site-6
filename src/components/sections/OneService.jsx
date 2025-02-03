import React from "react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { companyName } from "@/libs/data";

const OneService = ({
  title,
  description,
  commonProblems = [],
  bgColor = "white",
  slug,
  imgUrl,
  company = companyName,
}) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-3 border-y-8 text-center text-balance border-x rounded-2xl relative",
        `bg-${bgColor}`,
        company === "Lg"
          ? "border-lgPrimary"
          : company === "Samsung"
          ? "border-samsungPrimary"
          : company === "Siemens"
          ? "border-siemensPrimary"
          : company === "Bosch"
          ? "border-boschPrimary"
          : "border-primary"
      )}
      id={slug}
    >
      <div
        className="bg-center rounded-t-sm bg-cover flex items-end bg-no-repeat w-full h-[200px]"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        <div className="text-xl px-5 bg-black/70 w-full text-white py-5 flex justify-center flex-col gap-2 font-semibold">
          {title}
        </div>
      </div>
      <p className="px-5">{description}</p>
      <CallAndWhatsappButton
        company={company}
        className="px-5 pb-10 absolute bottom-0 w-full justify-center"
      />
      <h3 className="text-xl font-semibold px-5">Common Problems:</h3>
      <ul className="list-disc px-7 text-start list-inside">
        {commonProblems.map((problem, index) => (
          <li key={index}>{problem}</li>
        ))}
      </ul>
      <p className="px-5 pb-28">
        If you're facing any of these issues, don't hesitate to reach out. Our
        prompt and professional repair services will help restore your appliance
        quickly.
      </p>
    </div>
  );
};

export default OneService;
