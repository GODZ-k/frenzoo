// Card.js
import React from "react";

const BusinessAnalyticsCard = ({ image, title, value }) => {
  return (
    <div className="shadow-md border flex flex-col gap-4 w-full p-5 border-gray-200 rounded-2xl">
      <div className=" w-full flex justify-start">
      <div className=" w-7 sm:w-8">
        <img src={image} alt="" className="w-full" />
      </div>
      </div>
      <div className=" flex flex-col gap-3">
        <p className="font-semibold text-xl">{title}</p>
        <h1 className="font-bold text-2xl"> {value}</h1>
      </div>
    </div>
  );
};

export default BusinessAnalyticsCard;
