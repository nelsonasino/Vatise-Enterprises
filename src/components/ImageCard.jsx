import React from "react";

const cardVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const ImageCard = ({ source, type, bathrooms, squareArea }) => {
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
        <p className="mt-2">livingroom</p>
        <p className="mt-2">dining room</p>
        <p className="mt-2">bathrooms : {bathrooms} </p>
        <p className="mt-2">kitchen</p>
        <p className="mt-2">study</p>
        <p className="mt-2">SqrArea : {squareArea}</p>
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
