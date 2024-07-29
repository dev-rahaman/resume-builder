"use client";
import Link from "next/link";
import "../globals.css";
import { usePathname } from "next/navigation";

export default function PreviewLayout({ children }) {
  const url = usePathname();
  const plistURL = url.split("/")[2];

  return (
    <html lang="en">
      <body>
        <nav className="flex h-[60px] items-center justify-between bg-gray-800 shadow">
          <div className="flex items-center gap-3">
            <a href="/" className="text-2xl font-bold text-white">
              <img
                src="/logo.png"
                alt=""
                className="w-[100px]"
                draggable="false"
              />
            </a>
          </div>
          <div className="flex items-center gap-5 pe-10">
            <button className="font-bold text-white">Save</button>
            <Link
              href={`/${plistURL}-pdf-preview`}
              className="font-bold text-white"
            >
              Preview
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
