"use client";
import { siteConfig } from "@/config/site";
import { login } from "@/util/actions";
import { Link } from "@nextui-org/link";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";

export const SignInForm = () => {
  const [state, formAction] = useFormState<any, FormData>(login, undefined);

  useEffect(() => {
    state?.error && state.error != "" && toast(state.error, { toastId: "sck" });
  }, [state]);

  return (
    <form action={formAction} className="flex flex-col gap-6">
      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email">
          <p className="label1">Your email</p>
        </label>
        <input
          type="email"
          required
          className="input1 bg-white text-black"
          name="email"
          placeholder="eg, example@xyz.com"
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
          placeholder="•••••••"
          className="input1 bg-white text-black"
          name="password"
          id="password"
        />
      </div>

      <div className="flex flex-col gap-3">
        <button className="main-btn mt-1">Log in</button>
        <Link href={`${siteConfig.pathLinks.trainingDashboard}`}>
          <p className="text-black font-semibold underline underline-offset-4">
            Forgot password?
          </p>
        </Link>
      </div>
    </form>
  );
};
