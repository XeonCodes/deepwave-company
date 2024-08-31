import { title } from "@/components/primitives";
import DashboardLayout from "@/layouts/dashboard";
import { getSession } from "@/util/actions";
import { redirect } from "next/navigation";

export default async function IndexPage() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/signin");
  }

  return (
    <DashboardLayout>
      <section className="text-center">
        <div>
          <h1 className={title()}>Dashboard Home</h1>
        </div>
      </section>
    </DashboardLayout>
  );
}
