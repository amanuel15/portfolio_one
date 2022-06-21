import React from "react";

export default function ExperienceDetail({ detail, place }) {
  return (
    <div className=" my-2">
      <h2 className=" md:text-3xl text-xl font-medium mb-3 inline-flex">
        {detail.title} at <p className=" text-orange-500 ml-1">{place}</p>
      </h2>
      <p className=" text-gray-400 md:mb-5 mb-3">{detail.span}</p>
      <ul className="list-disc ml-8 text-gray-200">
        {detail.roles.map((elem, index) => {
          return (
            <li className=" mb-2" key={index.toString()}>
              {elem}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
