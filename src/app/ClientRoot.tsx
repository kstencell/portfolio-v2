"use client";
import { ViewportProvider } from "@/context/ViewportContext";

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  return <ViewportProvider>{children}</ViewportProvider>;
}