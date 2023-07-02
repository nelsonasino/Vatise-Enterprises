import React from "react";

const Mansionette = () => {
  return (
    <div className="bg-slate-800 md:p-16 p-7 text-white font-poppins flex flex-col items-center justify-center">
      <h1 className="mt-16 md:font-extrabold font-bold md:text-4xl text-3xl md:mb-16 mb-0">
        Mansionette
      </h1>
      <div className="text-center py-10 px-8 rounded-full flex items-center justify-center">
        <p>3 bedroom</p>
      </div>

      <div className="w-full mb-8 grid md:max-h-[100vh] md:grid-cols-3 grid-cols-2 md:grid-rows-3 grid-rows-4 gap-5">
        <img
          className="w-full h-full row-span-1 md:col-span-1 col-span-2 rounded-md"
          src="/images/3 bedroom hidden roof.png"
          alt="/"
        />

        <video
          className="w-full h-full md:row-span-2  row-span-1 col-span-2 rounded-md object-cover"
          autoPlay={true}
          loop={true}
          src="/images/LUMION RENDER GROUP - Facebook.mp4"
          alt="/"
        />

        <img
          className="w-full h-full row-span-1 md:col-span-1 col-span-2 rounded-md "
          src="/images/bungalow 3 bedroom - Picture1.png"
          alt="/"
        />

        <img
          className="w-full h-full row-span-1 col-span-2 rounded-md"
          src="/images/TELFORD 3 BEDROOM - Picture1.png"
          alt="/"
        />
      </div>

      <div className="text-center py-10 px-8 rounded-full flex items-center justify-center">
        <p>4 bedroom</p>
      </div>
      <div className="w-full mb-8 grid md:max-h-[100vh] md:grid-cols-3 grid-cols-2 md:grid-rows-3 grid-rows-4 gap-5">
        <img
          className="w-full h-full row-span-1 md:col-span-1 col-span-2 rounded-md"
          src="/images/3 bedroom hidden roof.png"
          alt="/"
        />

        <img
          className="w-full h-full row-span-1 md:col-span-1 col-span-2 rounded-md "
          src="/images/bungalow 3 bedroom - Picture1.png"
          alt="/"
        />

        <img
          className="w-full h-full row-span-1 md:col-span-1 col-span-2 rounded-md"
          src="/images/TELFORD 3 BEDROOM - Picture1.png"
          alt="/"
        />
        <video
          className="w-full h-full md:row-span-2  row-span-1 col-span-3 rounded-md object-cover"
          autoPlay={true}
          loop={true}
          src="/images/LUMION RENDER GROUP - Facebook.mp4"
          alt="/"
        />
      </div>

      <div className="text-center py-10 px-8 rounded-full flex items-center justify-center">
        <p>5 bedroom</p>
      </div>

      <div className="w-full mb-8 grid md:max-h-[100vh] md:grid-cols-3 grid-cols-2 md:grid-rows-3 grid-rows-4 gap-5">
        <video
          className="w-full h-full md:row-span-2  row-span-1 col-span-2 rounded-md object-cover"
          autoPlay={true}
          loop={true}
          src="/images/LUMION RENDER GROUP - Facebook.mp4"
          alt="/"
        />

        <img
          className="w-full h-full row-span-1 md:col-span-1 col-span-2 rounded-md"
          src="/images/3 bedroom hidden roof.png"
          alt="/"
        />

        <img
          className="w-full h-full row-span-1 md:col-span-1 col-span-2 rounded-md "
          src="/images/bungalow 3 bedroom - Picture1.png"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Mansionette;
