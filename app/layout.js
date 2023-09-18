"use client";
import { useEffect } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { metadata } from "./Components/Metadata.jsx";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  });

  return (
    <html lang="en">
      <body className="dark:bg-Bg">{children}</body>
    </html>
  );
}
