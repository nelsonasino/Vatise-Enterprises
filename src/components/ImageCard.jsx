import React from "react";

const cardVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const ImageCard = ({ source, type, bedrooms, squareArea, other, size }) => {
  return (
    <div
      variants={cardVariant}
      className="relative cursor-pointer w-full h-full row-span-1 md:col-span-1 col-span-2
      rounded-md overflow-hidden "
    >
      <div
        className="absolute h-full w-full p-10 opacity-0 hover:opacity-90  transform transition-all duration-500
         bg-black/70 z-30 inset-0 flex flex-col justify-center items-center text-center text-wheat"
      >
        <p className="text-2xl">{type}</p>
        <p className="mt-2">bedrooms : {bedrooms} </p>
        <p className="mt-2">kitchen</p>
        <p className="mt-2">lounge</p>
        <p className="mt-2">{other}</p>
        <p className="mt-2">Size : {size}</p>
        <p className="mt-2">Sqm : {squareArea}</p>
        
      </div>

      <img
        loading="lazy"
        className="w-full h-full object-cover transform transition-all hover:scale-110 duration-500"
        src={source}
        alt="image"
      />
    </div>
  );
};

export default ImageCard;
