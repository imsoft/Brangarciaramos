"use client";

import { useEffect } from "react";

export function CacheReset() {
  useEffect(() => {
    const clearBrowserCaches = async () => {
      if (typeof window === "undefined") return;

      if ("serviceWorker" in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map((registration) => registration.unregister()));
      }

      if ("caches" in window) {
        const keys = await caches.keys();
        await Promise.all(keys.map((key) => caches.delete(key)));
      }
    };

    void clearBrowserCaches();
  }, []);

  return null;
}
