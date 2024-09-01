import React from "react";
import { siteConfig } from "@/config/site";
import { getSession } from "@/util/actions";
import Link from "next/link";

export async function Nav() {
  const session = await getSession();

  return (
    <div>
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
