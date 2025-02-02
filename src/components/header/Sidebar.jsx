"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { companyName, dialPhone, getData, phoneNumber } from "@/libs/data";
import { Menu } from "lucide-react";
import NavLink from "./NavLink";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";
import { phoneSvg } from "../icons";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";

const Sidebar = ({ company = companyName }) => {
  const [servicesDropdown, setServicesDropdown] = useState();

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="w-6 h-6" />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-[#f7f7f7] border-b w-[80%] border-primary"
        >
          <SheetHeader>
            <SheetTitle className="py-5 text-left">{company}</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col justify-center bg-gray-300/30 rounded-xl mb-5 p-3 gap-3">
            <SheetClose asChild>
              <NavLink title="Home" href="/" />
            </SheetClose>
            <SheetClose asChild>
              <NavLink title="About" href="/#about" />
            </SheetClose>
            <div className="relative flex flex-col">
              <button
                className="text-start"
                onClick={() => setServicesDropdown(!servicesDropdown)}
              >
                Services
              </button>
              <div
                className={cn(
                  "flex flex-col gap-2 transition-all text-sm font-light ease-linear duration-200",
                  servicesDropdown
                    ? "my-1 py-2 border-y border-white/20 h-full"
                    : "h-0 overflow-hidden"
                )}
              >
                {getData().map((service, index) => (
                  <Link key={index} href={`/#${service.slug}`}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            <SheetClose asChild>
              <NavLink title="Contact" href="/#contact" />
            </SheetClose>
          </div>
          <CallAndWhatsappButton />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
