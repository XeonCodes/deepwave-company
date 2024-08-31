import React from "react";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navbarPadding } from "../primitives";
import Image from "next/image";

function Navbar() {
  return (
    <nav
      className={`${navbarPadding()} w-[100%] lg:w-[1300px] h-24 bg-white justify-between flex items-center`}
    >
      <Link
        href={`${siteConfig.pathLinks.landingPage}`}
        className="flex items-center gap-1"
      >
        <Image
          width={48}
          height={48}
          quality={40}
          className="w-12"
          src="/assets/logo1.png"
          alt="logo"
        />
        <h1 className={`text-[32px] flex text-black font-black italic`}>
          {siteConfig.name.toUpperCase()}
        </h1>
      </Link>
      <Link href={`${siteConfig.pathLinks.landingPage}`}>
        <MdClose color="black" size={28} />
      </Link>
    </nav>
  );
}

export default Navbar;
