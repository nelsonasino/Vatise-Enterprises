import React from "react";

const Bungalow = () => {
  return (
    <div className="bg-slate-800 md:p-16 p-7 text-white font-poppins flex flex-col items-center justify-center">
      <h1 className="mt-16 md:font-extrabold font-bold md:text-4xl text-3xl md:mb-12 mb-0">
        Bungalow
      </h1>
      <div className="text-center py-10 px-8 rounded-full flex items-center justify-center">
        <p>1 bedroom</p>
      </div>

      <div className="w-full mb-8 grid md:grid-cols-3 grid-cols-2 md:grid-rows-3 grid-rows-4 gap-5">
        <div className="bg-black/30 overflow-hidden row-span-1 md:col-span-1 col-span-2 w-full h-[30vh] rounded-md flex items-center justify-center">
          <img
            className="w-full h-full"
            src="/images/3 bedroom hidden roof.png"
            alt="/"
          />
        </div>
        <div className="bg-black/30 md:row-span-2 overflow-hidden row-span-1 col-span-2 w-full rounded-md flex items-center justify-center">
          <video className="w-full h-full" autoPlay={true} src="/images/LUMION RENDER GROUP - Facebook.mp4" alt="/"/>
        </div>
        <div className="bg-black/30 overflow-hidden md:row-span-2 row-span-1 md:col-span-1 col-span-2 w-full rounded-md flex items-center justify-center">
        <img
            className="w-full h-full"
            src="/images/bungalow 3 bedroom - Picture1.png"
            alt="/"
          />
        </div>
        <div className="bg-black/30 overflow-hidden h-[30vh] row-span-1 col-span-2 w-full rounded-md flex items-center justify-center">
        <img
            className="w-full h-full"
            src="/images/TELFORD 3 BEDROOM - Picture1.png"
            alt="/"
          />
        </div>
      </div>

      <div className="text-center py-10 px-8 rounded-full flex items-center justify-center">
        <p>2 bedroom</p>
      </div>
      <div className="w-full mb-8 grid md:grid-cols-3 grid-cols-2 md:grid-rows-3 grid-rows-4 md:gap-9 gap-5">
        <div className="bg-black/30 overflow-hidden row-span-1 md:col-span-1 col-span-2 w-full h-[30vh] rounded-md flex items-center justify-center">
          <img
            className="w-full h-full"
            src="/images/3 bedroom hidden roof.png"
            alt="/"
          />
        </div>
        <div className="bg-black/30 md:row-span-2 overflow-hidden row-span-1 col-span-2 w-full rounded-md flex items-center justify-center">
          <video autoPlay={true} src="/images/LUMION RENDER GROUP - Facebook.mp4" alt="/"/>
        </div>
        <div className="bg-black/30 overflow-hidden md:row-span-2 row-span-1 md:col-span-1 col-span-2 w-full rounded-md flex items-center justify-center">
        <img
            className="w-full h-full"
            src="/images/bungalow 3 bedroom - Picture1.png"
            alt="/"
          />
        </div>
        <div className="bg-black/30 overflow-hidden h-[30vh] row-span-1 col-span-2 w-full rounded-md flex items-center justify-center">
        <img
            className="w-full h-full"
            src="/images/TELFORD 3 BEDROOM - Picture1.png"
            alt="/"
          />
        </div>
      </div>

      <div className="text-center py-10 px-8 rounded-full flex items-center justify-center">
        <p>3 bedroom</p>
      </div>

      <div className="w-full mb-8 grid md:grid-cols-3 grid-cols-2 md:grid-rows-3 grid-rows-4 md:gap-9 gap-5">
        <div className="bg-black/30 overflow-hidden row-span-1 md:col-span-1 col-span-2 w-full h-[30vh] rounded-md flex items-center justify-center">
          <img
            className="w-full h-full"
            src="/images/3 bedroom hidden roof.png"
            alt="/"
          />
        </div>
        <div className="bg-black/30 md:row-span-2 overflow-hidden row-span-1 col-span-2 w-full rounded-md flex items-center justify-center">
          <video autoPlay={true} src="/images/LUMION RENDER GROUP - Facebook.mp4" alt="/"/>
        </div>
        <div className="bg-black/30 overflow-hidden md:row-span-2 row-span-1 md:col-span-1 col-span-2 w-full rounded-md flex items-center justify-center">
        <img
            className="w-full h-full"
            src="/images/bungalow 3 bedroom - Picture1.png"
            alt="/"
          />
        </div>
        <div className="bg-black/30 overflow-hidden h-[30vh] row-span-1 col-span-2 w-full rounded-md flex items-center justify-center">
        <img
            className="w-full h-full"
            src="/images/TELFORD 3 BEDROOM - Picture1.png"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Bungalow;
