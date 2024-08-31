import { title } from "@/components/primitives";
import DashboardLayout from "@/layouts/dashboard";

export default function IndexPage() {
  return (
    <DashboardLayout>
      <section className="text-center">
        <div>
          <h1 className={title()}>Transaction Page</h1>
        </div>
      </section>
    </DashboardLayout>
  );
}
