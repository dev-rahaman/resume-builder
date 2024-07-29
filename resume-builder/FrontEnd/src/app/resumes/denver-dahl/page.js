"use client";
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
      <div className="mt-5 flex items-center border-b-4 border-black">
        <p className="w-full rounded-md border-2 border-transparent text-4xl font-bold uppercase">
          {value}
        </p>
      </div>
    </>
  );
};

export const NameInput = ({ name, value, fun }) => {
  return (
    <>
      <div className="flex items-center">
        <input
          type="text"
          name={name}
          value={value}
          onChange={fun}
          className="w-full rounded-md border-2 border-transparent text-4xl font-bold"
        />
      </div>
    </>
  );
};

export const TitleInput = ({ name, value, fun }) => {
  return (
    <>
      <input
        type="text"
        name={name}
        value={value}
        onChange={fun}
        className="text-md w-full rounded-md border-2 border-transparent font-bold text-blue-600"
      />
    </>
  );
};

export const SkillInput = ({ name, value, fun }) => {
  return (
    <>
      <span className="mx-10 border-b-2 border-dashed border-gray-400">
        <input
          type="text"
          name={name}
          value={value}
          onChange={fun}
          className="w-[150px] rounded-md border-2 border-transparent text-center "
        />
      </span>
    </>
  );
};

export const ListInput = ({ name, value, fun }) => {
  return (
    <>
      <ul className="list-disc">
        <li className="">
          <input
            type="text"
            name={name}
            value={value}
            onChange={fun}
            className="w-full rounded-md border-2 border-transparent "
          />
        </li>
      </ul>
    </>
  );
};

export const DateLocationInput = ({ icon: Icon, name, value, fun }) => {
  return (
    <div className="flex items-center">
      {Icon && <Icon className="mr-2 text-blue-500" />}
      <input
        type="text"
        name={name}
        value={value}
        onChange={fun}
        className="w-full rounded-md border-2 border-transparent"
      />
    </div>
  );
};

export const Achievement = ({ icon: Icon, name, value, fun }) => {
  return (
    <>
      <div className="mt-4 flex items-center">
        {Icon && <Icon className="mr-2 text-blue-500" />}
        <input
          type="text"
          name={name}
          value={value}
          onChange={fun}
          className="w-full rounded-md border-2 border-transparent font-bold"
        />
      </div>
    </>
  );
};

export const LanguagesInput = ({ name, value, fun, label }) => {
  return (
    <>
      <div className="rounded-md border-b-4 border-blue-800">
        <input
          type="text"
          name={name}
          value={value}
          onChange={fun}
          className="rounded-md border-2 border-transparent "
        />
        <span>{label}</span>
      </div>
    </>
  );
};

export const HeadingInput = ({ name, value, fun }) => {
  return (
    <>
      <input
        type="text"
        name={name}
        value={value}
        onChange={fun}
        className="w-full rounded-md border-2  border-transparent text-2xl"
      />
    </>
  );
};

export const Textarea = ({ name, value, fun }) => {
  useEffect(() => {
    adjustTextareaHeight();
  }, [value]);

  const adjustTextareaHeight = () => {
    const textarea = document.getElementById(name);
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  const handleTextareaInput = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  return (
    <textarea
      id={name}
      value={value}
      onChange={fun}
      onInput={handleTextareaInput}
      name={name}
      className="w-full resize-none overflow-hidden rounded-md border-2 border-transparent text-lg"
    />
  );
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const data = { formData };
      localStorage.setItem("denver-dahl", JSON.stringify(data));
    }, 2000);
    return () => clearInterval(interval);
  }, [formData]);

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

  return (
    <>
      <div
        id="denver-dahl"
        className="mx-auto my-10 w-[1051px] bg-gray-200 p-8 "
      >
        <form onSubmit={handleSubmit}>
          <NameInput name={"name"} value={formData?.name} fun={handleChange} />
          <TitleInput
            name={"title"}
            value={formData?.title}
            fun={handleChange}
          />
          <div className="flex items-center gap-3">
            <DateLocationInput
              icon={FiPhone}
              name="phone"
              value={formData?.phone}
              fun={handleChange}
            />
            <DateLocationInput
              icon={FiMapPin}
              name="location"
              value={formData?.location}
              fun={handleChange}
            />
            <DateLocationInput
              icon={FiLinkedin}
              name="linkedin"
              value={formData?.linkedin}
              fun={handleChange}
            />
          </div>
          <DateLocationInput
            icon={FiMail}
            name="email"
            value={formData?.email}
            fun={handleChange}
          />

          {/* Expertise */}
          <Title value={"Expertise"} />
          <HeadingInput
            name={"expertise1_title"}
            value={formData?.expertise1_title}
            fun={handleChange}
          />
          <TitleInput
            name={"companyName1"}
            value={formData?.companyName1}
            fun={handleChange}
          />
          <div className="flex">
            <DateLocationInput
              icon={FiCalendar}
              name="expertise1_date"
              value={formData?.expertise1_date}
              fun={handleChange}
            />
            <DateLocationInput
              icon={FaLocationPin}
              name="expertise1_location"
              value={formData?.expertise1_location}
              fun={handleChange}
            />
          </div>
          <Textarea
            fun={handleChange}
            name={"expertise1_description"}
            value={formData?.expertise1_description}
          />
          <div className="-mt-3 ms-8">
            <ul className="list-disc">
              <ListInput
                fun={handleChange}
                name={"expertise1_list1"}
                value={formData?.expertise1_list1}
              />
              <ListInput
                fun={handleChange}
                name={"expertise1_list2"}
                value={formData?.expertise1_list2}
              />
              <ListInput
                fun={handleChange}
                name={"expertise1_list3"}
                value={formData?.expertise1_list3}
              />
              <ListInput
                fun={handleChange}
                name={"expertise1_list4"}
                value={formData?.expertise1_list4}
              />
            </ul>
          </div>

          {/* second expertise */}
          <HeadingInput
            name={"expertise2_title"}
            value={formData?.expertise2_title}
            fun={handleChange}
          />
          <TitleInput
            name={"companyName2"}
            value={formData?.companyName2}
            fun={handleChange}
          />
          <div className="flex">
            <DateLocationInput
              icon={FiCalendar}
              name="expertise2_date"
              value={formData?.expertise2_date}
              fun={handleChange}
            />
            <DateLocationInput
              icon={FiCalendar}
              name="expertise2_location"
              value={formData?.expertise2_location}
              fun={handleChange}
            />
          </div>
          <Textarea
            fun={handleChange}
            name={"expertise2_description"}
            value={formData?.expertise2_description}
          />
          <div className="-mt-3 ms-8">
            <div>
              <ListInput
                fun={handleChange}
                name={"expertise2_list1"}
                value={formData?.expertise2_list1}
              />
              <ListInput
                fun={handleChange}
                name={"expertise1_list3"}
                value={formData?.expertise1_list3}
              />
              <ListInput
                fun={handleChange}
                name={"expertise2_list3"}
                value={formData?.expertise2_list3}
              />
              <ListInput
                fun={handleChange}
                name={"expertise2_list4"}
                value={formData?.expertise2_list4}
              />
            </div>
          </div>

          {/* last expertise */}
          <HeadingInput
            name={"expertise3_title"}
            value={formData?.expertise3_title}
            fun={handleChange}
          />
          <TitleInput
            name={"companyName3"}
            value={formData?.companyName3}
            fun={handleChange}
          />
          <div className="flex">
            <DateLocationInput
              icon={FiCalendar}
              name="expertise3_date"
              value={formData?.expertise3_date}
              fun={handleChange}
            />
            <DateLocationInput
              icon={FiCalendar}
              name="expertise3_location"
              value={formData?.expertise3_location}
              fun={handleChange}
            />
          </div>
          <Textarea
            fun={handleChange}
            name={"expertise3_description"}
            value={formData?.expertise3_description}
          />
          <div className="-mt-3 ms-8">
            <ul className="list-disc">
              <ListInput
                name={"expertise3_list1"}
                fun={handleChange}
                value={formData?.expertise3_list1}
              />
              <ListInput
                name={"expertise3_list2"}
                fun={handleChange}
                value={formData?.expertise3_list2}
              />
              <ListInput
                name={"expertise3_list3"}
                fun={handleChange}
                value={formData?.expertise3_list3}
              />
              <ListInput
                name={"expertise3_list4"}
                fun={handleChange}
                value={formData?.expertise3_list4}
              />
            </ul>
          </div>

          {/* Education */}
          <Title value={"Education"} />
          <div className="flex items-center">
            <HeadingInput
              name={"education_title"}
              fun={handleChange}
              value={formData?.education_title}
            />
          </div>
          <div className="flex items-center">
            <TitleInput
              fun={handleChange}
              name={"universityName"}
              value={formData?.universityName}
            />
          </div>
          <div className="flex">
            <div className="flex items-center">
              <DateLocationInput
                icon={FiCalendar}
                name="education_date"
                value={formData?.education_date}
                fun={handleChange}
              />
              <DateLocationInput
                icon={FiMapPin}
                name="education_location"
                value={formData?.education_location}
                fun={handleChange}
              />
            </div>
          </div>

          {/* key achievement  */}
          <Title value={"Key Achievement"} />
          <div className="flex">
            <div className="w-full">
              <Achievement
                icon={FiMapPin}
                name={"keyAchievement1_title"}
                fun={handleChange}
                value={formData?.keyAchievement1_title}
              />
              <Textarea
                fun={handleChange}
                name={"keyAchievement1_description"}
                value={formData?.keyAchievement1_description}
              />
              <Achievement
                icon={FiMapPin}
                name={"keyAchievement2_title"}
                fun={handleChange}
                value={formData?.keyAchievement2_title}
              />
              <Textarea
                fun={handleChange}
                name={"keyAchievement2_description"}
                value={formData?.keyAchievement2_description}
              />
            </div>
            <div className="w-full">
              <Achievement
                icon={FiMapPin}
                name={"keyAchievement3_title"}
                fun={handleChange}
                value={formData?.keyAchievement3_title}
                text={formData?.keyAchievement3_description}
              />
              <Textarea
                fun={handleChange}
                name={"keyAchievement3_description"}
                value={formData?.keyAchievement3_description}
              />
              <Achievement
                icon={FiMapPin}
                name={"keyAchievement4_title"}
                fun={handleChange}
                value={formData?.keyAchievement4_title}
              />
              <Textarea
                fun={handleChange}
                name={"keyAchievement4_description"}
                value={formData?.keyAchievement4_description}
              />
            </div>
          </div>

          {/* Skills  */}
          <Title value={"Skills"} />
          <div className="flex flex-wrap items-center">
            <SkillInput
              name={"skill1"}
              value={formData?.skill1}
              fun={handleChange}
            />
            <SkillInput
              name={"skill2"}
              value={formData?.skill2}
              fun={handleChange}
            />
            <SkillInput
              name={"skill3"}
              value={formData?.skill3}
              fun={handleChange}
            />
            <SkillInput
              name={"skill4"}
              value={formData?.skill4}
              fun={handleChange}
            />
            <SkillInput
              name={"skill5"}
              value={formData?.skill5}
              fun={handleChange}
            />
            <SkillInput
              name={"skill6"}
              value={formData?.skill6}
              fun={handleChange}
            />
            <SkillInput
              name={"skill7"}
              value={formData?.skill7}
              fun={handleChange}
            />
            <SkillInput
              name={"skill8"}
              value={formData?.skill8}
              fun={handleChange}
            />
            <SkillInput
              name={"skill9"}
              value={formData?.skill9}
              fun={handleChange}
            />
            <SkillInput
              name={"skill10"}
              value={formData?.skill10}
              fun={handleChange}
            />
            <SkillInput
              name={"skill11"}
              value={formData?.skill11}
              fun={handleChange}
            />
            <SkillInput
              name={"skill12"}
              value={formData?.skill12}
              fun={handleChange}
            />
          </div>

          {/* Language  */}
          <Title value={"Language"} />
          <div className="mt-5 flex justify-between">
            <LanguagesInput
              fun={handleChange}
              name={"language1"}
              value={formData?.language1}
              label={"Fluent"}
            />
            <LanguagesInput
              fun={handleChange}
              name={"language2"}
              value={formData?.language2}
              label={"Fluent"}
            />
            <LanguagesInput
              fun={handleChange}
              name={"language3"}
              label={"Native"}
              value={formData?.language3}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
