"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
      <Image
        src={logo}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  const logoSrc = logoDark && resolvedTheme === "dark" ? logoDark : logo;

  return (
    <Image
      src={logoSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}

