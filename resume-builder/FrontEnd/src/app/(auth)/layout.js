"use client";
import AuthProvider from "../provider/AuthProvider";
import "../globals.css";

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
