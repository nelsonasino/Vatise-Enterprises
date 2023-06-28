import React from "react";
import { motion } from "framer-motion";

const team = [
  { name: "Eng. Danson Mutiso", designation: "Director", experience: "4 yrs" },
  { name: "Victor Njoroge", designation: "Accountant", experience: "5 yrs" },
  { name: "Paul Kiarie", designation: "Engineer", experience: "4 yrs" },
  { name: "Daniel Kilonzo", designation: "Administrator", experience: "2 yrs" },
  { name: "Wilson Muindi", designation: "Marketing Director", experience: "2 yrs" },
];

const Team = () => {
  return (
    <div>
      <motion.div
        className="px-5 flex flex-col items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1 className="font-bold md:text-4xl text-3xl mb-4">Our Team</h1>
        <p>Our team of highly skilled key personnel.</p>
      </motion.div>

      <div
        className="flex md:flex-row flex-col justify-center items-center py-10 md:gap-4 gap-6"
      >
        {team.map((member) => {
          return (
            <motion.div
              className="md:w-[20%] w-[70%] md:h-[30vh] h-[50vh] bg-slate-500/20 rounded-2xl flex flex-col items-center justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 1 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h1 className="text-md mb-1">{member.name}</h1>
              <p className="text-gray-400 mb-1">{member.designation}</p>
              <p className="text-sm">Experience: {member.experience}</p>
            </motion.div>
          );
        })}
      </div>

      {/* 
      <BsChevronCompactLeft
        size={30}
        className="absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full
         p-2 group-hover:bg-white/20 text-white cursor-pointer"
      />

      
      <BsChevronCompactRight
        size={30}
        className="absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full 
        p-2 group-hover:bg-white/20 text-white cursor-pointer"
      /> 
      */}
    </div>
  );
};

export default Team;
