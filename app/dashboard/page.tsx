import { title } from "@/components/primitives";
import TrainingDashboardLayout from "@/layouts/training";
import { getSession, logout } from "@/util/actions";
import { redirect } from "next/navigation";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import { FiSettings } from "react-icons/fi";

export default async function IndexPage() {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/signin");
  }

  return (
    <TrainingDashboardLayout>
      <section className="flex flex-col sm:flex-row w-full items-start justify-between">
        <div className="w-full basis-[29%] flex flex-col gap-4 p-3 md:p-5 rounded-lg shadow-md bg-card order-3 sm:order-1">
          {/* Profile Details */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2">
              {/* Image Div */}
              <div className="bg-background h-[45px] w-[45px] rounded-full">
                <Image
                  width={45}
                  height={45}
                  alt="dp"
                  className="h-[45px] w-[45px] rounded-full object-cover"
                  src={"/assets/lady.jpg"}
                />
              </div>
              {/* Text Div */}
              <div className=" leading-4">
                <h1 className="text-[15px] sm:text-[13px] lg:text-[15px] font-medium">
                  John Smith
                </h1>
                <p className="text-[13px] sm:text-[12px] lg:text-[13px] opacity-70">
                  Student
                </p>
              </div>
            </div>

            <FiSettings size={13} />
          </div>
          <Divider />
        </div>
        <div className="w-full basis-[34%] rounded-lg shadow-md bg-card p-3 md:p-5 order-1 sm:order-2">
          Center
        </div>
        <div className="w-full basis-[34%] rounded-lg shadow-md bg-card p-3 md:p-5 order-2 sm:order-3">
          Right
        </div>
      </section>
    </TrainingDashboardLayout>
  );
}
