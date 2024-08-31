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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
            magnam omnis explicabo rerum est illo fuga, sapiente ad laboriosam
            voluptates, possimus dolorem repudiandae asperiores harum fugit.
            magnam omnis explicabo rerum est illo fuga, sapiente ad laboriosam
            voluptates, possimus dolorem repudiandae asperiores harum fugit.
            Laboriosam expedita fuga quia!
          </p>
        </div>
      </section>
    </TrainingDashboardLayout>
  );
}
