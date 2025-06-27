"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <header className="h-16" />;

  const isDark = theme === "dark";

  return (
    <header className="bg-white dark:bg-[#090D1F] max-w-7xl mx-auto border-b border-gray-300 dark:border-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo/Brand */}
          <Link
            className="text-xl font-semibold text-gray-900 dark:text-white"
            href="/"
          >
            Your Name
          </Link>

          {/* Theme Toggle */}
          <div className="flex items-center">
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className={cn(
                "relative w-16 h-8 rounded-full flex items-center px-1 transition-colors duration-300 cursor-pointer",
                isDark ? "bg-white" : "bg-gray-900"
              )}
            >
              {/* Sun Icon */}
              <Sun
                className={cn(
                  "w-4 h-4 absolute left-2 z-10 transition-opacity duration-300",
                  isDark ? "opacity-0" : "opacity-100 text-white"
                )}
              />

              {/* Moon Icon */}
              <Moon
                className={cn(
                  "w-4 h-4 absolute right-2 z-10 transition-opacity duration-300",
                  isDark ? "opacity-100 text-gray-900" : "opacity-0"
                )}
              />

              {/* Toggle Circle */}
              <div
                className={cn(
                  "w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-md transition-transform duration-300",
                  isDark ? "translate-x-0" : "translate-x-8"
                )}
              ></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
