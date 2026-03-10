"use client";

import { ThemeProvider } from "@/lib/ThemeContext";
import React from "react";

export function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
