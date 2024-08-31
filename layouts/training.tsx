import { Link } from "@nextui-org/link";

import { Head } from "./head";
import { Navbar } from "@/components/training/navbar";

export default function TrainingDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="mt-3">{children}</main>
    </div>
  );
}
