"use client";
import { siteConfig } from "@/config/site";
import { getSession } from "@/util/actions";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [session, setSesstion] = useState<any>([]);

  async function GetSession() {
    const session = await getSession();
    setSesstion(session);
  }

  useEffect(() => {
    GetSession();
  }, []);

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
