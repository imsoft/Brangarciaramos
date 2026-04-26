"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/app-theme-provider";

interface ThemeAwareLogoProps {
  logo: string;
  logoDark?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function ThemeAwareLogo({
  logo,
  logoDark,
  alt,
  width,
  height,
  className = "",
}: ThemeAwareLogoProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <img
        src={logo}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading="lazy"
      />
    );
  }

  const logoSrc = logoDark && resolvedTheme === "dark" ? logoDark : logo;

  return (
    <img
      src={logoSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
    />
  );
}

