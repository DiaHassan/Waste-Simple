import React from "react"
export default function Card({ image, title, text, link }) {
    <div className="bg-white rounded-3xl shadow-md overflow-hidden w-full sm:w-1/3 m-3">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-600 mt-2">{text}</p>
        </div>
        <a href={link} className="text-blue-500 hover:underline self-start mt-4">
          Read More
        </a>
      </div>
    </div>
  };
