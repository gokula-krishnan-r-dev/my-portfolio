"use client";

import { CurserProvider } from "@/components/provider/curserProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="overflow-hidden">
      <CurserProvider>{children}</CurserProvider>
    </div>
  );
}
