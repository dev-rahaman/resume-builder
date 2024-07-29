"use client";
import React, { useState } from "react";

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {image ? (
        <div>
          <img
            src={image}
            alt="Uploaded"
            className="mt-2 h-[200px] w-[200px] rounded-full"
          />
        </div>
      ) : (
        <div>
          <img
            src="https://placehold.co/400"
            alt="Default"
            className="mt-2 h-[200px] w-[200px] rounded-full"
          />
        </div>
      )}
      <label htmlFor="image-upload" className="relative cursor-pointer">
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute bottom-8 left-[10.25rem] rounded-full bg-[#858585] p-1 text-4xl text-[#C2C2C2]"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 20h-7a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5"></path>
          <path d="M16 19h6"></path>
          <path d="M19 16v6"></path>
          <path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
        </svg>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
};

export default ImageUploader;
