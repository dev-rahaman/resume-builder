"use client";
import Link from "next/link";

const Resume = () => {
  return (
    <div className="mx-10 flex h-[500px] items-center justify-center">
      <div className="">
        <h2 className="text-[60px] font-extrabold">Awesome Resume Builder</h2>
        <p className="text-[17px] text-gray-500">
          With the Resume Builder app, you can create your resume very easily.
          And you can download that resume for free. You can set the color of
          your choice for the font add photos if you want and remove them if you
          don't want. So why delay try the app now. With the Resume Builder app,
          you can create your resume very easily. And you can download that
          resume for free. You can set the color of your choice for the font add
          photos if you want and remove them if you don't want. So why delay try
          the app now.
        </p>
        <div className="inline-block">
          <Link
            href="/templates"
            className="mt-4 flex items-center gap-1 bg-black p-2 text-white"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="15"
              width="15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7-2h2v-3h3V9h-3V6h-2v3h-3v2h3z"></path>
            </svg>
            CREATE RESUME
          </Link>
        </div>
      </div>
      <img src="/resume-templage.png" className="main-image w-[600px] " />
    </div>
  );
};

export default Resume;
