"use client";
import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const companyInfo = [
  {
    name: "About Us",
    link: "",
    description: "Learn new skills or gain knowledge on a wide range of topics",
  },
  {
    name: "YouTube",
    link: "",
    description: "Learn new skills or gain knowledge on a wide range of topics",
  },
  {
    name: "Work & products",
    link: "",
    description: "Learn new skills or gain knowledge on a wide range of topics",
  },
  {
    name: "Careers",
    link: "",
    description: "Learn new skills or gain knowledge on a wide range of topics",
  },
  {
    name: "Workplace",
    link: "",
    description: "Learn new skills or gain knowledge on a wide range of topics",
  },
  {
    name: "We and you",
    link: "",
    description: "Learn new skills or gain knowledge on a wide range of topics",
  },
];

const softwareItem = [
  {
    name: "ARB",
    link: "",
    description: "Learn new skills or gain knowledge on a wide range of topics",
  },
  {
    name: "YTDownloader",
    link: "",
    description: "Learn new skills or gain knowledge on a wide range of topics",
    title: "Upcoming",
  },
  {
    name: "Repel",
    link: "",
    title: "Upcoming",
    description: "Repel Repel is open social media where no one can stop you",
  },
  {
    name: "AnyDownloader",
    link: "",
    description: "Learn new skills or gain knowledge on a wide range of topics",
    title: "Upcoming",
  },
  {
    name: "SearchAI",
    link: "",
    description: "Learn new skills or gain knowledge on a wide range of topics",
    title: "Upcoming",
  },
  {
    name: "YTKeyFinder",
    link: "",
    description: "Learn new skills or gain knowledge on a wide range of topics",
    title: "Upcoming",
  },
];

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const router = usePathname();

  const handleSaveDataOnMongoDB = async (e) => {
    e.preventDefault();
    try {
      const storedData = localStorage.getItem("awesomeResumeData");
      if (!storedData) {
        throw new Error("No data found in localStorage");
      }
      const formData = JSON.parse(storedData);
      const response = await fetch("http://localhost:5000/awesome/resumes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex h-[60px] items-center justify-between bg-gray-800 shadow">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <a href="/" className="text-2xl font-bold text-white">
              <img
                src="/logo.png"
                alt=""
                className="w-[100px]"
                draggable="false"
              />
            </a>
            <span
              onClick={toggleMenu}
              className="flex cursor-pointer items-center gap-1 text-white"
            >
              Resources <IoIosArrowDown className="mt-1" />
            </span>
            <Link href={``} className="text-white">
              Pricing
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-5 pe-10">
          {user ? (
            <Link href={"/logout"} className="text-white">
              Logout
            </Link>
          ) : (
            <Link href={"/login"} className="text-white">
              Login
            </Link>
          )}
        </div>
      </nav>

      {isOpen && (
        <div className="absolute z-50 flex h-[400px] w-full bg-gray-300 px-10 shadow-2xl">
          <div className="mt-6 w-1/2">
            <h2 className="mb-6 ms-3 border-b-2 border-white pb-2 text-3xl font-bold">
              Company Info
            </h2>
            <div className="flex  flex-wrap gap-3">
              {companyInfo.map((item, idx) => (
                <div className="w-[250px]" key={idx}>
                  <a
                    href={`${item?.link}`}
                    target="_blank"
                    className="rounded-md px-3 py-2 text-[20px] font-semibold hover:text-gray-700"
                  >
                    {item?.name}
                  </a>
                  <p className="-mt-3 rounded-md px-3 py-2 text-sm font-medium">
                    {item?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 w-1/2">
            <h2 className="mb-6 ms-3 border-b-2 border-white pb-2 text-3xl font-bold">
              Software
            </h2>
            <div className="flex  flex-wrap gap-3">
              {softwareItem.map((item, idx) => (
                <div className="w-[250px]" key={idx}>
                  <a
                    href={`${item?.link}`}
                    target="_blank"
                    className="rounded-md px-3 py-2 text-[20px] font-semibold hover:text-gray-700"
                  >
                    {item?.name}
                  </a>
                  {item?.title && (
                    <span className="text -ms-2 bg-[#ffb189] p-1 text-[8px]">
                      {item?.title}
                    </span>
                  )}
                  <p className="-mt-3 rounded-md px-3 py-2 text-sm font-medium">
                    {item?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
