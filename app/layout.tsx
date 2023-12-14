import type { Metadata } from "next";
import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";

import { Navbar } from "@/app/components/navbar";
import AuthContext from "./context/AuthContext";

export const metadata: Metadata = {
  title: "Ease Book",
  description: "Booking Restaurant Easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="app_main font-[poppins]">
        <AuthContext>
          <Navbar />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
