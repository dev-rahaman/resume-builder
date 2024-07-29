"use client";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";
import AuthProvider from "../provider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
