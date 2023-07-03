import React from "react";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const VideoCard = ({ source, type, bathrooms, squareArea}) => {
  const overlayStyles = `absolute h-full w-full p-10 opacity-0 hover:opacity-90 
     transition duration-300 bg-black/70 z-30 flex flex-col justify-center items-center text-wheat`;

  return (
    <motion.div variants={cardVariant} className="relative cursor-pointer w-full h-full md:row-span-2 row-span-1 col-span-2 rounded-md object-cover overflow-hidden ">
      <div className={overlayStyles}>
        <p className="text-2xl">{type}</p>
        <p className="mt-2">livingroom</p>
        <p className="mt-2">dining room</p>
        <p className="mt-2">bathrooms : {bathrooms} </p>
        <p className="mt-2">kitchen</p>
        <p className="mt-2">study</p>
        <p className="mt-2">SqrArea : {squareArea}</p>
      </div>

      <video
        autoPlay={true}
        loop={true}
        src={source}
        alt="video"
      />

    </motion.div>
  );
};

export default VideoCard;
