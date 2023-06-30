import React from "react";
import Categories from "../components/Categories";

const Mansionette = () => {
  return (
    <div className="bg-slate-800 md:p-16 p-7 text-white font-poppins flex flex-col items-center justify-center">
      <h1 className="mt-16 md:font-extrabold font-bold md:text-4xl text-3xl md:mb-16 mb-0">
        Mansionette
      </h1>
      <Categories />
    </div>
  );
};

export default Mansionette;
