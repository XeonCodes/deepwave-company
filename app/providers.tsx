"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import TopLoadingBar from "@/components/top-loading-bar";
import LoadingBar from "react-top-loading-bar";
import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  const ref = React.useRef<any>(null);
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const start = () => {
      ref.current?.complete();
    };
    start();
  }, []);

  return (
    <NextUIProvider navigate={router.push}>
      <LoadingBar
        ref={ref}
        color={siteConfig.appColors.primaryColor}
        // onLoaderFinished={() => setProgress(0)}
      />
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
}
