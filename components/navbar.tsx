import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="p-4">
      <div>
        <Link
          className="text-lg"
          href={`${siteConfig.pathLinks.dashboardHome}`}
        >
          Dashboard
        </Link>
      </div>
      <div>
        <Link className="text-lg" href={`${siteConfig.pathLinks.signin}`}>
          Sign In
        </Link>
      </div>
      <div>
        <Link className="text-lg" href={`${siteConfig.pathLinks.register}`}>
          Register
        </Link>
      </div>
    </div>
  );
}
