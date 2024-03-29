import React from "react";
import { motion } from "framer-motion";
import ImageCard from "../components/ImageCard";
import VideoCard from "../components/VideoCard";
import { IoIosBed } from "react-icons/io";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Villa = () => {
  return (
    <div className="bg-slate-800 md:p-16 p-7 text-white font-poppins flex flex-col items-center justify-center">
      <h1 className="mt-16 md:font-extrabold font-bold md:text-4xl text-3xl md:mb-12 mb-0">
        Villa
      </h1>
      <div className="text-center font-semibold my-10 px-8 py-2 rounded-md flex items-center justify-center bg-orange-400 text-slate-800">
        <p className="flex items-center justify-center gap-3">
          <IoIosBed />2 bedroom
        </p>
      </div>

      <motion.div
        className="w-full mb-8 grid md:max-h-[70vh] md:grid-cols-3 grid-cols-2 md:grid-rows-2 grid-rows-3 gap-2"
        initial="hidden"
        whileInView="visible"
        variants={container}
      >
        <ImageCard
          source={"/images/3 bedroom hidden roof.png"}
          type={"House"}
          bathrooms={2}
          squareArea={"100m"}
        />

        <VideoCard source={"/images/1bedroom.mp4"} />

        <ImageCard
          source={"/images/bungalow 3 bedroom - Picture1.png"}
          type={"House"}
          bathrooms={1}
          squareArea={"100m"}
        />
      </motion.div>

      <div className="text-center font-semibold my-10 px-8 py-2 rounded-md flex items-center justify-center bg-orange-400 text-slate-800">
        <p className="flex items-center justify-center gap-3">
          <IoIosBed />3 bedroom
        </p>
      </div>
      <motion.div
        className="w-full mb-8 grid md:max-h-[70vh] md:grid-cols-3 grid-cols-2 md:grid-rows-2 grid-rows-3 gap-2"
        initial="hidden"
        whileInView="visible"
        variants={container}
      >
        <VideoCard source={"/images/LUMION RENDER GROUP - Facebook.mp4"} />

        <ImageCard
          source={"/images/TELFORD 3 BEDROOM - Picture1.png"}
          type={"House"}
          bathrooms={1}
          squareArea={"100m"}
        />

        <ImageCard
          source={"/images/TELFORD 3 BEDROOM - Picture1.png"}
          type={"House"}
          bathrooms={1}
          squareArea={"100m"}
        />
      </motion.div>

      <div className="text-center font-semibold my-10 px-8 py-2 rounded-md flex items-center justify-center bg-orange-400 text-slate-800">
        <p className="flex items-center justify-center gap-3">
          <IoIosBed />4 bedroom
        </p>
      </div>

      <motion.div
        className="w-full mb-8 grid md:max-h-[70vh] md:grid-cols-3 grid-cols-2 md:grid-rows-2 grid-rows-3 gap-2"
        initial="hidden"
        whileInView="visible"
        variants={container}
      >
        <ImageCard
          source={"/images/3 bedroom hidden roof.png"}
          type={"House"}
          bathrooms={2}
          squareArea={"100m"}
        />

        <VideoCard source={"/images/LUMION RENDER GROUP - Facebook.mp4"} />

        <ImageCard
          source={"/images/bungalow 3 bedroom - Picture1.png"}
          type={"House"}
          bathrooms={1}
          squareArea={"100m"}
        />
      </motion.div>
    </div>
  );
};

export default Villa;
