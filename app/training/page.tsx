import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import DashboardLayout from "@/layouts/dashboard";
import DefaultLayout from "@/layouts/default";
import { getSession } from "@/util/actions";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function TrainingPage() {
  const session = await getSession();

  return (
    <DefaultLayout>
      <section className="text-center flex flex-col items-center">
        <div className="max-w-[500px] flex flex-col gap-5">
          <h1 className={title()}>Welcome to {siteConfig.name} Training </h1>
          {!session.isLoggedIn && (
            <Link href={`${siteConfig.pathLinks.signin}`}>
              <button className="main-btn">Get Started</button>
            </Link>
          )}
          {session.isLoggedIn && (
            <Link href={`${siteConfig.pathLinks.trainingDashboard}`}>
              <button className="main-btn">Proceed</button>
            </Link>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}
