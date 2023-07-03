import React from "react";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const ImageCard = ({ source, type, bathrooms, squareArea }) => {
  return (
    <div
      variants={cardVariant}
      className="relative cursor-pointer w-full h-full row-span-1 md:col-span-1 col-span-2
      rounded-md overflow-hidden"
    >
      <motion.div
        className="absolute h-full w-full p-10 opacity-0 hover:opacity-90 transition duration-300
         bg-black/70 z-30 flex flex-col justify-center items-center text-center text-wheat"
      >
        <p className="text-2xl">{type}</p>
        <p className="mt-2">livingroom</p>
        <p className="mt-2">dining room</p>
        <p className="mt-2">bathrooms : {bathrooms} </p>
        <p className="mt-2">kitchen</p>
        <p className="mt-2">study</p>
        <p className="mt-2">SqrArea : {squareArea}</p>
      </motion.div>

      <img
        className=""
        src={source}
        alt="image"
      />
    </div>
  );
};

export default ImageCard;
