import React from "react";

export default function SkillCard({ title, subTitle, desc }) {
  return (
    <div className="md:p-5 p-3 bg-gray-800 shadow-md md:w-72 w-60 hover:shadow-xl hover:bg-gray-900 transition-all duration-300 ease-in md:hover:-translate-y-3 hover:-translate-y-2">
      <h2 className=" font-mono font-semibold md:text-3xl text-2xl mb-3">
        {title}
      </h2>
      {subTitle ? (
        <h4 className=" text-gray-500 md:text-lg text-base mb-1">{subTitle}</h4>
      ) : null}
      <p className="text-gray-400 md:text-base text-sm">{desc}</p>
    </div>
  );
}
