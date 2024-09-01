import HeaderText from "@/components/onboard/header";
import { SignInForm } from "@/components/onboard/signinComp";
import { siteConfig } from "@/config/site";
import OnboardLayout from "@/layouts/onboard";
import { getSession, login } from "@/util/actions";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export default async function SigninPage() {
  const session = await getSession();
  session.isLoggedIn && redirect(siteConfig.pathLinks.trainingDashboard);

  return (
    <OnboardLayout>
      <section className="flex flex-col gap-10">
        {/* Header Text */}
        <HeaderText
          title="Welcome back"
          subtitle={`New to ${siteConfig.name}?`}
          actionText="Sign up"
          path="register"
        />
        <SignInForm />
      </section>
    </OnboardLayout>
  );
}
