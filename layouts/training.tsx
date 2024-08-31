import { Link } from "@nextui-org/link";

import { Head } from "./head";
import { Navbar } from "@/components/training/navbar";

export default function TrainingDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Head />
      <div className=" sticky top-0 bg-card flex flex-col items-center">
        <Navbar />
      </div>
      <div className="flex flex-col items-center">
        <main className="mt-3 max-w-[1300px] px-5">{children}</main>
      </div>
    </div>
  );
}
