"use client";
import { companyName, dialPhone, phoneNumber } from "@/libs/data";
import Link from "next/link";
import Sidebar from "./Sidebar";
import NavLink from "./NavLink";
import ServicesDropdown from "./ServicesDropdown";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { phoneSvg } from "../icons";
import { PhoneCall } from "lucide-react";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";

const Header = ({ company = companyName }) => {
  const pathname = usePathname();

  const dynamicCompany =
    pathname === "/companies/water-heater" ? "Repair Site 5" : company;

  return (
    <header
      className={cn(
        "flex flex-col w-full items-center justify-center pt-5 md:pt-7",
        companyName !== company ? "bg-white" : "bg-white"
      )}
    >
      <div className="flex w-full justify-between px-5 py-5 max-w-7xl items-center gap-5">
        {dynamicCompany === "Siemens" ? (
          <Link href="/companies/siemens">
            <Image
              src="/static/siemens.svg"
              width={150}
              height={50}
              alt="Siemens"
            />
          </Link>
        ) : dynamicCompany === "Bosch" ? (
          <Link href="/companies/bosch">
            <Image
              src="/static/bosch.svg"
              width={150}
              height={50}
              alt="Bosch"
            />
          </Link>
        ) : dynamicCompany === "Samsung" ? (
          <Link href="/companies/samsung">
            <Image
              src="/static/samsung.svg"
              width={120}
              height={50}
              alt="Samsung"
            />
          </Link>
        ) : dynamicCompany === "Lg" ? (
          <Link href="/companies/lg">
            <Image src="/static/lg.svg" width={100} height={50} alt="LG" />
          </Link>
        ) : dynamicCompany === "Repair Site 5" ? (
          <Link href="/companies/water-heater" className="text-xl font-bold">
            {dynamicCompany}
          </Link>
        ) : (
          <Link href="/" className="text-xl font-bold">
            {dynamicCompany}
          </Link>
        )}
        <div
          className={cn(company !== companyName ? "text-black" : "text-black")}
        >
          <Sidebar company={dynamicCompany} />
        </div>
        <div className="items-center hidden md:flex text-nowrap gap-3 lg:gap-5">
          <NavLink title="Home" href="/" />
          <NavLink title="About" href="#about" />
          <ServicesDropdown company={dynamicCompany} />
          <NavLink title="Contact" href="#contact" />
          <CallAndWhatsappButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
