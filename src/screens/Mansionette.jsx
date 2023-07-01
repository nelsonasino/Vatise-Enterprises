import React from "react";
import Categories from "../components/Categories";

const Mansionette = () => {
  return (
    <div className="bg-slate-800 md:p-16 p-7 text-white font-poppins flex flex-col items-center justify-center">
      <h1 className="mt-16 md:font-extrabold font-bold md:text-4xl text-3xl md:mb-16 mb-0">
        Mansionette
      </h1>
      <div className="text-center py-4 px-8 rounded-full flex items-center justify-center">
        <p>1 bedroom</p>
      </div>

      <div className="w-full mb-8 grid md:grid-cols-3 grid-cols-2 md:gap-9 gap-5">
        <div className="bg-black/30 h-[30vh] rounded-md flex items-center justify-center">
          <p>image</p>
        </div>
        <div className="bg-black/30 h-[30vh] rounded-md flex items-center justify-center">
          <p>image</p>
        </div>
        <div className="bg-black/30 h-[30vh] rounded-md flex items-center justify-center">
          <p>image</p>
        </div>
        <div className="bg-black/30 h-[30vh] rounded-md flex items-center justify-center">
          <p>image</p>
        </div>
        <div className="bg-black/30 h-[30vh] rounded-md flex items-center justify-center">
          <p>image</p>
        </div>
      </div>
      <div className="text-center py-4 px-8 rounded-full flex items-center justify-center">
        <p>2 bedroom</p>
      </div>
      <div className="w-full mb-8 grid md:grid-cols-3 grid-cols-2 md:gap-9 gap-5">
        <div className="bg-black/30 h-[30vh] rounded-md flex items-center justify-center">
          <p>image</p>
        </div>
        <div className="bg-black/30 h-[30vh] rounded-md flex items-center justify-center">
          <p>image</p>
        </div>
        <div className="bg-black/30 h-[30vh] rounded-md flex items-center justify-center">
          <p>image</p>
        </div>
        <div className="bg-black/30 h-[30vh] rounded-md flex items-center justify-center">
          <p>image</p>
        </div>
        <div className="bg-black/30 h-[30vh] rounded-md flex items-center justify-center">
          <p>image</p>
        </div>
      </div>

      <div className="text-center py-4 px-8 rounded-full flex items-center justify-center">
        <p>3 bedroom</p>
      </div>

      <div className="w-full mb-8 grid md:grid-cols-3 grid-cols-2 md:gap-9 gap-5">
        <div className="bg-black/30 h-[30vh] rounded-md flex items-center justify-center">
          <p>image</p>
        </div>
        <div className="bg-black/30 h-[30vh] rounded-md flex items-center justify-center">
          <p>image</p>
        </div>
        <div className="bg-black/30 h-[30vh] rounded-md flex items-center justify-center">
          <p>image</p>
        </div>
        <div className="bg-black/30 h-[30vh] rounded-md flex items-center justify-center">
          <p>image</p>
        </div>
        <div className="bg-black/30 h-[30vh] rounded-md flex items-center justify-center">
          <p>image</p>
        </div>
      </div>
    </div>
  );
};

export default Mansionette;
