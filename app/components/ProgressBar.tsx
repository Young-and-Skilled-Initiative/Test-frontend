// components/ProgressBar.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use from next/navigation
import nProgress from "nprogress";
import "nprogress/nprogress.css";

export default function ProgressBar() {
  const route = useRouter()
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => nProgress.start();
    const handleComplete = () => nProgress.done();
    const handleError = () => nProgress.done();

    // // Using router.events for navigation events
    // route.events.on("routeChangeStart", handleStart);
    // route.events.on("routeChangeComplete", handleComplete);
    // route.events.on("routeChangeError", handleError);

    // return () => {
    //   route.events.off("routeChangeStart", handleStart);
    //   route.events.off("routeChangeComplete", handleComplete);
    //   route.events.off("routeChangeError", handleError);
    
  });

  return null; // This component only triggers nprogress logic
}
