"use client";
import HeaderText from "@/components/onboard/header";
import { siteConfig } from "@/config/site";
import OnboardLayout from "@/layouts/onboard";
import { login, testRedirect } from "@/util/actions";
import Link from "next/link";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SigninPage() {
  const [state, formAction] = useFormState<any, FormData>(login, undefined);

  const nav = () => {};

  useEffect(() => {
    state?.error && state.error != "" && toast(state.error, { toastId: "sck" });
  }, [state]);

  return (
    <OnboardLayout>
      <section className="flex flex-col gap-10">
        {/* Header Text */}
        <HeaderText
          title="Welcome back"
          subtitle={`New to ${siteConfig.name}?`}
          action={nav}
          actionText="Sign up"
          path="register"
        />

        <form action={formAction} className="flex flex-col gap-6">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label htmlFor="email">
              <p className="label1">Your email</p>
            </label>
            <input
              type="email"
              required
              className="input1 bg-white"
              name="email"
              id="email"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password">
              <p className="label1">Your password</p>
            </label>
            <input
              type="password"
              required
              className="input1 bg-white"
              name="password"
              id="password"
            />
          </div>

          <div className="flex flex-col gap-3">
            <button className="main-btn mt-1">Log in</button>
            <Link href={`${siteConfig.pathLinks.dashboardHome}`}>
              <p className="text-black font-semibold underline underline-offset-4">
                Forgot password?
              </p>
            </Link>
          </div>
        </form>
      </section>
    </OnboardLayout>
  );
}
