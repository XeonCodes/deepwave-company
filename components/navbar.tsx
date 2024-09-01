import React from "react";
import { siteConfig } from "@/config/site";
import { getSession } from "@/util/actions";
import Link from "next/link";

async function Navbar() {
  const session = await getSession();

  return (
    <div className="p-4">
      {session?.isLoggedIn && (
        <div>
          <Link
            className="text-lg"
            href={`${siteConfig.pathLinks.trainingDashboard}`}
          >
            Dashboard
          </Link>
        </div>
      )}
      {!session?.isLoggedIn && (
        <div>
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
      )}
    </div>
  );
}

export default Navbar;
