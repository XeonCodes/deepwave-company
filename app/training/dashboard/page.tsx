import { title } from "@/components/primitives";
import TrainingDashboardLayout from "@/layouts/training";
import { getSession } from "@/util/actions";
import { redirect } from "next/navigation";

export default async function IndexPage() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/signin");
  }

  return (
    <TrainingDashboardLayout>
      <section className="text-center">
        <div>
          <h1 className={title()}>Dashboard Home</h1>
        </div>
      </section>
    </TrainingDashboardLayout>
  );
}
