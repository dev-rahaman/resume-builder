"use client";
import Alert from "@/app/components/Alert";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useEffect, useState } from "react";
import { FaLocationPin } from "react-icons/fa6";
import {
  FiPhone,
  FiMapPin,
  FiMail,
  FiLinkedin,
  FiCalendar,
} from "react-icons/fi";

export const Title = ({ value }) => {
  return (
    <>
      <div className="mt-5 flex items-center border-b-4 border-black pb-4">
        <p className="w-full  text-4xl font-bold  uppercase">{value}</p>
      </div>
    </>
  );
};

export const NameInput = ({ value }) => {
  return (
    <>
      <div className="flex items-center">
        <p className="w-full text-4xl font-bold ">{value}</p>
      </div>
    </>
  );
};

export const TitleInput = ({ value }) => {
  return (
    <>
      <p className="text-md mt-1 w-full  font-bold text-blue-600 ">{value}</p>
    </>
  );
};

export const SkillInput = ({ value }) => {
  return (
    <>
      <span className="mx-10 border-b-2 border-dashed border-gray-400 pb-3">
        <p className="w-[150px] text-center  ">{value}</p>
      </span>
    </>
  );
};

export const ListInput = ({ value }) => {
  return (
    <>
      <ul className="list-disc">
        <li>
          <p className="w-full  ">{value}</p>
        </li>
      </ul>
    </>
  );
};

export const DateLocationInput = ({ icon: Icon, value }) => {
  return (
    <div className="flex items-center">
      <div className="mt-4">
        {Icon && <Icon className="mr-2 text-blue-500" />}
      </div>
      <p className="w-full  ">{value}</p>
    </div>
  );
};

export const Achievement = ({ icon: Icon, value }) => {
  return (
    <>
      <div className="mt-4 flex items-center">
        <div className="mt-4">
          {Icon && <Icon className="mr-2 text-blue-500" />}
        </div>
        <p className="w-full  border-2 border-transparent font-bold">{value}</p>
      </div>
    </>
  );
};

export const LanguagesInput = ({ value, label }) => {
  return (
    <>
      <div className="flex items-center justify-center gap-5 rounded-md border-b-4 border-blue-800 pb-3">
        <p>{value}</p>
        <p>{label}</p>
      </div>
    </>
  );
};

export const HeadingInput = ({ value }) => {
  return (
    <>
      <p className="w-full  text-2xl  ">{value}</p>
    </>
  );
};

export const Textarea = ({ value }) => {
  return <p className="w-full pb-1 text-lg">{value}</p>;
};

const Form = () => {
  const [formData, setFormData] = useState({
    name: "Abdur Rahaman Sultany (Dev Rahaman)",
    title: "Account Manager",
    phone: "01601313258",
    location: "Dhaka, Bangladesh",
    linkedin: "dev-rahaman.com/",
    email: "sultany2@gmail.com",

    expertise1_title: "Software Engineer",
    companyName1: "Company Name",
    expertise1_date: "2014-2016 ",
    expertise1_location: "New Work",
    expertise1_description:
      "WLauzon is a leading worldwide manufacturer, designer, and supplier of bearings, linear motion products, precision bearings, spindles, seals, and services. Responsible for business development with Key Accounts with main focus in ENERGY, POWER UTILITIES and HEAVY industries",
    expertise1_list1:
      "Achieved 12% growth in the account's revenue and 7% profitability improvement.",
    expertise1_list2:
      "Achieved 12% growth in the account's revenue and 7% profitability improvement.",
    expertise1_list3:
      "Achieved 12% growth in the account's revenue and 7% profitability improvement.",
    expertise1_list4:
      "Achieved 12% growth in the account's revenue and 7% profitability improvement.",

    expertise2_title: "JR Account Manager",
    companyName2: "Upwork Hire INC",
    expertise2_date: "2014-2016",
    expertise2_location: "Dhaka, Bangladesh",
    expertise2_description:
      "Lauzon is a leading worldwide manufacturer, designer, and supplier of bearings, linear motion products, precision bearings, spindles, seals, and services. Responsible for business development with Key Accounts with main focus in ENERGY, POWER UTILITIES and HEAVY industries",
    expertise2_list1:
      "Achieved 12% growth in the account's revenue and 7% profitability improvement.",
    expertise2_list2:
      "Achieved 12% growth in the account's revenue and 7% profitability improvement.",
    expertise2_list3:
      "Achieved 12% growth in the account's revenue and 7% profitability improvement.",
    expertise2_list4:
      "Achieved 12% growth in the account's revenue and 7% profitability improvement.",

    expertise3_title: "Senior Account Manager",
    companyName3: "Fiverr Hire INC",
    expertise3_date: "2014-2016 ",
    expertise3_location: "Brazil, ",
    expertise3_description:
      "Lauzon is a leading worldwide manufacturer, designer, and supplier of bearings, linear motion products, precision bearings, spindles, seals, and services. Responsible for business development with Key Accounts with main focus in ENERGY, POWER UTILITIES and HEAVY industries",
    expertise3_list1:
      "Achieved 12% growth in the account's revenue and 7% profitability improvement.",
    expertise3_list2:
      "Achieved 12% growth in the account's revenue and 7% profitability improvement.",
    expertise3_list3:
      "Achieved 12% growth in the account's revenue and 7% profitability improvement.",
    expertise3_list4:
      "Achieved 12% growth in the account's revenue and 7% profitability improvement.",

    education_title: "Master of Marketing Manager (MMM)",
    universityName: "Comilla University",
    education_date: "2017-2024",
    education_location: "Kotbary, Comilla, Bangladesh",

    keyAchievement1_title: "keyAchievement 1_title",
    keyAchievement1_description:
      "Lauzon is a leading worldwide manufacturer, designer, and supplier of bearings, linear motion products, precision bearings, spindles, seals, and services. Responsible for business development with Key Accounts with main focus in ENERGY, POWER UTILITIES and HEAVY industries",
    keyAchievement2_title: "keyAchievement 2 _title",
    keyAchievement2_description:
      "Lauzon is a leading worldwide manufacturer, designer, and supplier of bearings, linear motion products, precision bearings, spindles, seals, and services. Responsible for business development with Key Accounts with main focus in ENERGY, POWER UTILITIES and HEAVY industries",
    keyAchievement3_title: "keyAchievement 3_title",
    keyAchievement3_description:
      "Lauzon is a leading worldwide manufacturer, designer, and supplier of bearings, linear motion products, precision bearings, spindles, seals, and services. Responsible for business development with Key Accounts with main focus in ENERGY, POWER UTILITIES and HEAVY industries",
    keyAchievement4_title: "keyAchievement 4_title",
    keyAchievement4_description:
      "Lauzon is a leading worldwide manufacturer, designer, and supplier of bearings, linear motion products, precision bearings, spindles, seals, and services. Responsible for business development with Key Accounts with main focus in ENERGY, POWER UTILITIES and HEAVY industries",

    skill1: "HTML",
    skill2: "CSS",
    skill3: "JavaScript",
    skill4: "React",
    skill5: "Next",
    skill6: "MongoDb",
    skill7: "TailwindCSS",
    skill8: "CSS",
    skill9: "bootstrap",
    skill10: "Firebase",
    skill11: "Redux",
    skill12: "Python",

    language1: "English",
    language2: "Bengali",
    language3: "Hindi",
  });

  // Fetch data from localStorage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("denver-dahl");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData.formData);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const generatePDF = async () => {
    const form = document.getElementById("denver-dahl");
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
        id="denver-dahl"
        className="mx-auto my-10 w-[1051px] bg-gray-200 p-8 "
      >
        <form onSubmit={handleSubmit}>
          <NameInput value={formData?.name} />
          <TitleInput value={formData?.title} />
          <div className="flex items-center gap-3">
            <DateLocationInput icon={FiPhone} value={formData?.phone} />
            <DateLocationInput icon={FiMapPin} value={formData?.location} />
            <DateLocationInput icon={FiLinkedin} value={formData?.linkedin} />
          </div>
          <DateLocationInput icon={FiMail} value={formData?.email} />

          {/* Expertise */}
          <Title value={"Expertise"} />
          <HeadingInput value={formData?.expertise1_title} />
          <TitleInput name={"companyName1"} value={formData?.companyName1} />
          <div className="flex">
            <DateLocationInput
              icon={FiCalendar}
              value={formData?.expertise1_date}
            />
            <DateLocationInput
              icon={FaLocationPin}
              value={formData?.expertise1_location}
            />
          </div>
          <Textarea value={formData?.expertise1_description} />
          <div className="ms-8">
            <ul className="list-disc">
              <ListInput value={formData?.expertise1_list1} />
              <ListInput value={formData?.expertise1_list2} />
              <ListInput value={formData?.expertise1_list3} />
              <ListInput value={formData?.expertise1_list4} />
            </ul>
          </div>

          {/* second expertise */}
          <HeadingInput value={formData?.expertise2_title} />
          <TitleInput value={formData?.companyName2} />
          <div className="flex">
            <DateLocationInput
              icon={FiCalendar}
              value={formData?.expertise2_date}
            />
            <DateLocationInput
              icon={FaLocationPin}
              value={formData?.expertise2_location}
            />
          </div>
          <Textarea value={formData?.expertise2_description} />
          <div className="ms-8">
            <ul className="list-disc">
              <ListInput value={formData?.expertise2_list1} />
              <ListInput value={formData?.expertise2_list2} />
              <ListInput value={formData?.expertise2_list3} />
              <ListInput value={formData?.expertise2_list4} />
            </ul>
          </div>

          {/* Third expertise */}
          <HeadingInput value={formData?.expertise3_title} />
          <TitleInput name={"companyName3"} value={formData?.companyName3} />
          <div className="flex">
            <DateLocationInput
              icon={FiCalendar}
              name="expertise3_date"
              value={formData?.expertise3_date}
            />
            <DateLocationInput
              icon={FaLocationPin}
              name="expertise3_location"
              value={formData?.expertise3_location}
            />
          </div>
          <Textarea value={formData?.expertise3_description} />
          <div className="ms-8">
            <ul className="list-disc">
              <ListInput value={formData?.expertise3_list1} />
              <ListInput value={formData?.expertise3_list2} />
              <ListInput value={formData?.expertise3_list3} />
              <ListInput value={formData?.expertise3_list4} />
            </ul>
          </div>

          {/* Education */}
          <Title value={"Education"} />
          <HeadingInput value={formData?.education_title} />
          <TitleInput value={formData?.universityName} />
          <div className="flex">
            <DateLocationInput
              icon={FiCalendar}
              value={formData?.education_date}
            />
            <DateLocationInput
              icon={FaLocationPin}
              value={formData?.education_location}
            />
          </div>

          {/* Key Achievements */}
          <Title value={"Key Achievements"} />
          <div className="flex gap-2">
            <div>
              <Achievement
                icon={FiCalendar}
                value={formData?.keyAchievement1_title}
              />
              <Textarea value={formData?.keyAchievement1_description} />
              <Achievement
                icon={FiCalendar}
                value={formData?.keyAchievement2_title}
              />
              <Textarea value={formData?.keyAchievement2_description} />
            </div>
            <div>
              <Achievement
                icon={FiCalendar}
                value={formData?.keyAchievement3_title}
              />
              <Textarea value={formData?.keyAchievement3_description} />
              <Achievement
                icon={FiCalendar}
                value={formData?.keyAchievement4_title}
              />
              <Textarea value={formData?.keyAchievement4_description} />
            </div>
          </div>

          {/* Skills */}
          <Title value={"Skills"} />
          <div className="flex">
            <SkillInput value={formData?.skill1} />
            <SkillInput value={formData?.skill2} />
            <SkillInput value={formData?.skill3} />
            <SkillInput value={formData?.skill4} />
          </div>
          <div className="flex">
            <SkillInput value={formData?.skill5} />
            <SkillInput value={formData?.skill6} />
            <SkillInput value={formData?.skill7} />
            <SkillInput value={formData?.skill8} />
          </div>
          <div className="flex">
            <SkillInput value={formData?.skill9} />
            <SkillInput value={formData?.skill10} />
            <SkillInput value={formData?.skill11} />
            <SkillInput value={formData?.skill12} />
          </div>

          {/* Languages */}
          <Title value={"Languages"} />
          <div className="mt-5 flex justify-between">
            <LanguagesInput value={formData?.language1} label={"Fluent"} />
            <LanguagesInput value={formData?.language2} label={"Fluent"} />
            <LanguagesInput value={formData?.language3} label={"Fluent"} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
