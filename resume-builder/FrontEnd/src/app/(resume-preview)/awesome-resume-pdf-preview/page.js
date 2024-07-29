"use client";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ImageUploader from "@/app/components/ImageUploader";

export const Title = ({ text }) => {
  return (
    <h2 className="mt-10 bg-[#27384C] pb-4 text-center text-2xl font-semibold uppercase text-white">
      {text}
    </h2>
  );
};

export const TitleRight = ({ text }) => {
  return (
    <h2 className="mb-2 mt-5 bg-[#27384C] p-1 pb-5 text-xl font-bold uppercase">
      {text}
    </h2>
  );
};

const AwesomeResume = () => {
  // Left side state
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quod dignissimos facere maiores soluta fugiat explicabo eum laudantium obcaecati error blanditiis minima placeat aut, at quisquam ratione perspiciatis ipsum labore deserunt nesciunt",
  );

  const [contacts, setContacts] = useState([
    { type: "email", value: "devrahaman@gmail.com" },
    { type: "email", value: "example@gmail.com" },
    { type: "phone", value: "01601313258" },
    { type: "phone", value: "01701313258" },
  ]);

  const [languages, setLanguages] = useState(["English", "Bangla", "Hindi"]);

  const [expertise, setExpertise] = useState([
    "MERN Stack",
    "React.js",
    "Next.js",
    "MongoDB",
    "Express.js",
    "Node.js",
    "JavaScript",
    "Firebase",
    "React-Router-Dom",
  ]);

  // Right side state
  const [name, setName] = useState("Abdur Rahaman Sultany");
  const [title, setTitle] = useState("Web Developer");
  const [summary, setSummary] = useState(
    "Hello! My name is Abdur Rahaman Sultany and I enjoy creating things that live on the internet. My interest in web development started in 2021 when I decided to try to explore computer science.",
  );

  const [experience, setExperience] = useState([
    {
      company: "Goatmoves.Inc",
      position: "Front-End Web Developer",
      date: "20-10-2023",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quod dignissimos facere maiores soluta fugiat explicabo eum laudantium obcaecati error blanditiis minima placeat aut, at quisquam ratione perspiciatis ipsum labore deserunt nesciunt",
    },
    {
      company: "Another Company",
      position: "Full-Stack Developer",
      date: "10-05-2022 - 15-12-2022",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quod dignissimos facere maiores soluta fugiat explicabo eum laudantium obcaecati error blanditiis minima placeat aut, at quisquam ratione perspiciatis ipsum labore deserunt nesciunt.",
    },
  ]);

  const [projects, setProjects] = useState([
    {
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quod dignissimos facere maiores soluta fugiat explicabo eum laudantium obcaecati error blanditiis minima placeat aut, at quisquam ratione perspiciatis ipsum labore deserunt nesciunt.",
      date: "2015 - 2017",
    },
    {
      name: "Project 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quod dignissimos facere maiores soluta fugiat explicabo eum laudantium obcaecati error blanditiis minima placeat aut, at quisquam ratione perspiciatis ipsum labore deserunt nesciunt.",
      date: "2015 - 2024",
    },
  ]);

  const [educations, setEducations] = useState([
    {
      degree: "Bachelor of Business Management",
      date: "2014-2018",
    },
    {
      degree: "Master of Computer Science",
      date: "2019-2021",
    },
  ]);

  // Fetch data from localStorage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("awesomeResumeData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setBio(parsedData.bio);
      setContacts(parsedData.contacts);
      setLanguages(parsedData.languages);
      setExpertise(parsedData.expertise);
      setName(parsedData.name);
      setTitle(parsedData.title);
      setSummary(parsedData.summary);
      setExperience(parsedData.experience);
      setProjects(parsedData.projects);
      setEducations(parsedData.educations);
    }
  }, []);

  const generatePDF = async () => {
    const form = document.getElementById("awesome-resume");
    const canvas = await html2canvas(form);
    const imageData = canvas.toDataURL("image/png");
    const elementWidth = form.offsetWidth;
    const elementHeight = form.offsetHeight;
    const orientation = elementWidth > elementHeight ? "l" : "p";
    const pdf = new jsPDF(orientation, "mm", [elementWidth, elementHeight]);
    pdf.addImage(imageData, "PNG", 0, 0, elementWidth, elementHeight);
    pdf.save("your-resume.pdf");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div>
          <button
            onClick={generatePDF}
            type="button"
            className="bg-green-600 px-4 py-2 text-center text-white  hover:bg-green-700"
          >
            Download PDF
          </button>
        </div>
      </div>

      <div
        id="awesome-resume"
        className="mx-auto my-10 flex w-[1051px] items-center justify-center"
      >
        <div className="h-[1550px] w-[350px] bg-[#0A0707] p-8 text-white">
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <ImageUploader />
            </div>
            <Title text={"About Me"} />
            <div>
              <p className="custom-field mt-2 h-[200px] w-full  resize-none bg-transparent  text-justify">
                {bio}
              </p>

              <Title text={"Contact"} />
              <div className="mt-2 space-y-2">
                {contacts.map((contact, index) => (
                  <div className="flex items-center gap-1" key={index}>
                    {contact.type === "email" ? (
                      <IoMdMail size={20} className="mt-1" />
                    ) : (
                      <FaPhone size={18} className="" />
                    )}
                    <p className="-mt-1 pb-1">{contact.value}</p>
                  </div>
                ))}
              </div>

              <ul className="mt-2 space-y-2">
                {languages.map((language, index) => (
                  <p key={index} className="pb-1">
                    {language}
                  </p>
                ))}
              </ul>

              <Title text={"Expertise"} />
              <ul className="mt-2 space-y-2">
                {expertise.map((expertise, index) => (
                  <p key={index} className="custom-field pb-1 ">
                    {expertise}
                  </p>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="h-[1550px] w-[700px] bg-gray-600 p-10 text-white">
          <h2 className="w-full pb-4 text-center text-4xl font-bold ">
            {name}
          </h2>
          <h3 className="w-full pb-4 text-center text-2xl font-bold ">
            {title}
          </h3>
          <TitleRight text={"Summary"} />
          <p className="-mt-3">{summary}</p>
          <TitleRight text={"Experience"} />
          {experience.map((exp, index) => (
            <>
              <p key={index} className="-mt-3 p-0 pb-1 font-bold">
                {exp.company}
              </p>
              <p className="w-full p-0 pb-1 ">{exp.position}</p>
              <p className="w-full p-0  pb-1">{exp.date}</p>
              <p className="mb-5 h-[80px] w-full pb-1">{exp.description}</p>
            </>
          ))}
          <TitleRight text={"Projects"} />
          {projects.map((project, index) => (
            <>
              <p key={index} className="-mt-4 w-full pb-1 text-2xl font-bold ">
                {project.name}
              </p>
              <p className="h-[80px] w-full pb-1 ">{project.description}</p>
              <p className="-mt-2 mb-5 w-full pb-1">{project.date}</p>
            </>
          ))}
          <TitleRight text={"Education"} />
          {educations.map((education, index) => (
            <div key={index}>
              <p className="w-full pb-1">{education.degree}</p>
              <p className="w-full pb-1">{education.date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AwesomeResume;
