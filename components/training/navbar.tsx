"use client";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { IoMdNotifications, IoMdNotificationsOutline } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";

export const Navbar = () => {
  const pathname = usePathname();

  // Function to check if the link is active
  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className="
        h-[60px]
        px-6
        flex
        justify-between
        items-center
        bg-card border-t-2
        "
    >
      <ul className="flex h-full items-center gap-4">
        <li className="flex items-center gap-4">
          <FiMenu size={24} className="flex md:hidden cursor-pointer" />
          <Link href={siteConfig.pathLinks.landingPage}>
            <Image
              alt="logo"
              width={35}
              height={35}
              quality={40}
              src="/assets/logod.png"
            />
          </Link>
          <p className="flex md:hidden">
            {pathname == "/training/dashboard"
              ? "My space"
              : pathname == "/training/dashboard/messages"
                ? "Messages"
                : pathname == "/training/dashboard/courses"
                  ? "My courses"
                  : pathname == "/training/dashboard/tools"
                    ? "Tools"
                    : pathname == "/training/dashboard/purchase"
                      ? "Purchase"
                      : pathname == "/training/dashboard/notification"
                        ? "Notification"
                        : pathname == "/training/dashboard/profile"
                          ? "Profile"
                          : null}
          </p>
        </li>

        <li
          className={`h-full hidden md:flex flex-col justify-center ${
            isActive(siteConfig.pathLinks.trainingDashboard)
              ? "border-b-2 border-[#0982ff]"
              : ""
          }`}
        >
          <Link
            className={`text-[15px] font-medium ${
              isActive(siteConfig.pathLinks.trainingDashboard)
                ? "text-primary"
                : "opacity-70"
            }`}
            href={siteConfig.pathLinks.trainingDashboard}
          >
            My space
          </Link>
        </li>

        <li
          className={`h-full hidden md:flex flex-col justify-center ${
            isActive(siteConfig.pathLinks.trainingCourses)
              ? "border-b-2 border-[#0982ff]"
              : ""
          }`}
        >
          <Link
            className={`text-[15px] font-medium ${
              isActive(siteConfig.pathLinks.trainingCourses)
                ? "text-primary"
                : "opacity-70"
            }`}
            href={siteConfig.pathLinks.trainingCourses}
          >
            My courses
          </Link>
        </li>

        <li
          className={`h-full hidden md:flex flex-col justify-center ${
            isActive(siteConfig.pathLinks.trainingTools)
              ? "border-b-2 border-[#0982ff]"
              : ""
          }`}
        >
          <Link
            className={`text-[15px] font-medium ${
              isActive(siteConfig.pathLinks.trainingTools)
                ? "text-primary"
                : "opacity-70"
            }`}
            href={siteConfig.pathLinks.trainingTools}
          >
            Tools
          </Link>
        </li>
      </ul>

      <ul className="flex h-full items-center gap-4">
        <li
          className={`h-full hidden md:flex flex-col justify-center ${
            isActive(siteConfig.pathLinks.trainingPurchase)
              ? "border-b-2 border-[#0982ff]"
              : ""
          }`}
        >
          <Link
            className={`text-[15px] font-medium ${
              isActive(siteConfig.pathLinks.trainingPurchase)
                ? "text-primary"
                : "opacity-70"
            }`}
            href={siteConfig.pathLinks.trainingPurchase}
          >
            Buy Course
          </Link>
        </li>
        <li
          className={`h-full flex flex-col justify-center ${
            isActive(siteConfig.pathLinks.trainingNotificaiton)
              ? "border-b-2 border-[#0982ff]"
              : ""
          }`}
        >
          <Link
            className={`text-[15px] font-medium ${
              isActive(siteConfig.pathLinks.trainingNotificaiton)
                ? "text-primary"
                : "opacity-70"
            }`}
            href={siteConfig.pathLinks.trainingNotificaiton}
          >
            <div className="relative">
              <IoMdNotifications size={22} />
              <div className="h-3 border-2 border-white w-3 top-[-3] right-[-2] absolute rounded-full bg-danger"></div>
            </div>
          </Link>
        </li>
        <li
          className={`h-full flex flex-col justify-center ${
            isActive(siteConfig.pathLinks.trainingProfile)
              ? "border-b-2 border-[#0982ff]"
              : ""
          }`}
        >
          <Link href={siteConfig.pathLinks.trainingProfile}>
            <Image
              alt="logo"
              width={30}
              height={30}
              className={`rounded-full object-cover ${
                isActive(siteConfig.pathLinks.trainingProfile)
                  ? "border-2 border-[#0982ff]"
                  : ""
              }`}
              quality={40}
              src="/assets/avater.jpeg"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
