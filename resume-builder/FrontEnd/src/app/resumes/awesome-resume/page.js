"use client";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ImageUploader from "@/app/components/ImageUploader";

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

  // Update data in localStorage every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const data = {
        bio,
        contacts,
        languages,
        expertise,
        name,
        title,
        summary,
        experience,
        projects,
        educations,
      };
      localStorage.setItem("awesomeResumeData", JSON.stringify(data));
    }, 2000);

    return () => clearInterval(interval);
  }, [
    bio,
    contacts,
    languages,
    expertise,
    name,
    title,
    summary,
    experience,
    projects,
    educations,
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

  // Handle change for input fields
  const handleChange = (index, value, type) => {
    if (type === "contacts") {
      const updatedContacts = [...contacts];
      updatedContacts[index].value = value;
      setContacts(updatedContacts);
    } else if (type === "languages") {
      const updatedLanguages = [...languages];
      updatedLanguages[index] = value;
      setLanguages(updatedLanguages);
    } else if (type === "expertise") {
      const updatedExpertise = [...expertise];
      updatedExpertise[index] = value;
      setExpertise(updatedExpertise);
    }
  };

  const generatePDF = async () => {
    const form = document.querySelector(".form-container");
    const canvas = await html2canvas(form);
    const imageData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    pdf.addImage(imageData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("form.pdf");
  };

  return (
    <>
      <form className="form-container my-10 flex items-center justify-center">
        {/* left side */}
        <div className="h-[1550px] w-[350px] bg-[#0A0707] p-8 text-white">
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <ImageUploader />
            </div>
            <label className="mt-10 block bg-[#27384C] p-1 text-center text-2xl font-semibold uppercase text-white">
              About Me
            </label>
            <div>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                style={{ minHeight: "unset" }}
                className="custom-field custom-border mt-2 h-[200px] w-full resize-none overflow-hidden bg-transparent text-justify"
              ></textarea>
              <label className="mt-10 block bg-[#27384C] p-1 text-center text-2xl font-semibold uppercase text-white">
                Contact
              </label>
              <div className="mt-2 space-y-2">
                {contacts.map((contact, index) => (
                  <div className="flex items-center gap-1" key={index}>
                    {contact.type === "email" ? (
                      <IoMdMail size={20} />
                    ) : (
                      <FaPhone size={20} />
                    )}
                    <input
                      value={contact.value}
                      type="text"
                      className="custom-field custom-border"
                      onChange={(e) =>
                        handleChange(index, e.target.value, "contacts")
                      }
                    />
                  </div>
                ))}
              </div>

              <label className="mt-10 block bg-[#27384C] p-1 text-center text-2xl font-semibold uppercase text-white">
                Languages
              </label>
              <ul className="mt-2 space-y-2">
                {languages.map((language, index) => (
                  <input
                    key={index}
                    type="text"
                    value={language}
                    className="custom-field custom-border"
                    onChange={(e) =>
                      handleChange(index, e.target.value, "languages")
                    }
                  />
                ))}
              </ul>

              <label className="mt-10 block bg-[#27384C] p-1 text-center text-2xl font-semibold uppercase text-white">
                Expertise
              </label>
              <ul className="mt-2 space-y-2">
                {expertise.map((expertise, index) => (
                  <input
                    key={index}
                    type="text"
                    value={expertise}
                    className="custom-field custom-border"
                    onChange={(e) =>
                      handleChange(index, e.target.value, "expertise")
                    }
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="h-[1550px] w-[700px] bg-gray-600 p-10 text-white">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="custom-border w-full resize-none overflow-hidden text-center text-4xl font-bold"
          />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="custom-border w-full  resize-none overflow-hidden text-center text-2xl font-bold"
          />

          <label className="mb-2 mt-10 block bg-[#27384C] p-1 text-xl font-bold uppercase">
            Summary
          </label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="custom-border h-[80px] w-full resize-none overflow-hidden"
          ></textarea>

          <label className="mb-2 mt-5 block bg-[#27384C] p-1 text-xl font-bold uppercase">
            Experience
          </label>
          {experience.map((exp, index) => (
            <>
              <input
                type="text"
                key={index}
                value={exp.company}
                onChange={(e) => {
                  const updatedExperience = [...experience];
                  updatedExperience[index].company = e.target.value;
                  setExperience(updatedExperience);
                }}
                className="custom-border w-full resize-none overflow-hidden p-0 font-bold"
              />
              <input
                type="text"
                value={exp.position}
                onChange={(e) => {
                  const updatedExperience = [...experience];
                  updatedExperience[index].position = e.target.value;
                  setExperience(updatedExperience);
                }}
                className="custom-border w-full resize-none overflow-hidden p-0"
              />
              <input
                type="text"
                value={exp.date}
                onChange={(e) => {
                  const updatedExperience = [...experience];
                  updatedExperience[index].date = e.target.value;
                  setExperience(updatedExperience);
                }}
                className="custom-border w-full resize-none overflow-hidden p-0"
              />
              <textarea
                value={exp.description}
                onChange={(e) => {
                  const updatedExperience = [...experience];
                  updatedExperience[index].description = e.target.value;
                  setExperience(updatedExperience);
                }}
                className="custom-border h-[80px] w-full resize-none overflow-hidden"
              ></textarea>
            </>
          ))}

          <label className="mb-2 mt-5 block bg-[#27384C] p-1 text-xl font-bold uppercase">
            Projects
          </label>
          {projects.map((project, index) => (
            <>
              <input
                type="text"
                key={index}
                value={project.name}
                onChange={(e) => {
                  const updatedProjects = [...projects];
                  updatedProjects[index].name = e.target.value;
                  setProjects(updatedProjects);
                }}
                className="custom-border w-full resize-none overflow-hidden text-2xl font-bold"
              />
              <textarea
                value={project.description}
                onChange={(e) => {
                  const updatedProjects = [...projects];
                  updatedProjects[index].description = e.target.value;
                  setProjects(updatedProjects);
                }}
                className="custom-border h-[80px] w-full resize-none overflow-hidden"
              ></textarea>

              <input
                type="text"
                value={project.date}
                onChange={(e) => {
                  const updatedProjects = [...projects];
                  updatedProjects[index].date = e.target.value;
                  setProjects(updatedProjects);
                }}
                className="custom-border w-full resize-none overflow-hidden"
              />
            </>
          ))}

          <label className="mb-2 mt-5 block bg-[#27384C] p-1 text-xl font-bold uppercase">
            Education
          </label>
          {educations.map((education, index) => (
            <>
              <input
                type="text"
                key={index}
                value={education.degree}
                onChange={(e) => {
                  const updatedEducations = [...educations];
                  updatedEducations[index].degree = e.target.value;
                  setEducations(updatedEducations);
                }}
                className="custom-border w-full resize-none overflow-hidden"
              />

              <input
                type="text"
                value={education.date}
                onChange={(e) => {
                  const updatedEducations = [...educations];
                  updatedEducations[index].date = e.target.value;
                  setEducations(updatedEducations);
                }}
                className="custom-border w-full resize-none overflow-hidden"
              />
            </>
          ))}
          {/* <input type="submit" value={"Save"} /> */}
        </div>
      </form>
    </>
  );
};

export default AwesomeResume;
