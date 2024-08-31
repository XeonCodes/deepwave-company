import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { ThemeSwitch } from "@/components/theme-switch";

export default function Home() {
  return (
    <DefaultLayout>
      <section className="text-center">
        <div className="flex flex-col gap-4">
          <h1 className={title()}>Landing Page</h1>
          <div>
            <ThemeSwitch />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
