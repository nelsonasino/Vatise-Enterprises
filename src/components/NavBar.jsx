import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const NavBar = ({ isTopOfPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreen = useMediaQuery("(min-width: 768px)");
  const navBarBackground = isTopOfPage
    ? ""
    : "bg-black/90 transition duration-500";

  return (
    <nav
      className={`${navBarBackground} fixed w-full flex items-center justify-between md:py-6 py-3 md:px-14 
       px-7 text-white z-40 font-poppins`}
    >
      <Link to="/" className="text-2xl uppercase font-bold">
        Vatise
      </Link>

      {/**DESKTOP NAVIGATION */}
      {isAboveSmallScreen ? (
        <div className=" no-underline flex items-center justify-center gap-14">
          <Link to="/" className="hover:text-orange-500">
            {" "}
            Home
          </Link>
          <Link to="/about" className="hover:text-orange-500">
            {" "}
            About
          </Link>
          <Link to="/services" className="hover:text-orange-500">
            {" "}
            Services
          </Link>
          <Link to="/projects" className="hover:text-orange-500">
            {" "}
            Projects
          </Link>
          <Link
            to="/contactus"
            className="bg-orange-500 hover:bg-orange-500/90 font-medium py-2 px-4 rounded-sm"
          >
            {" "}
            Get in Touch
          </Link>
        </div>
      ) : (
        <motion.button
          alt="menu"
          className="rounded-full text-white p-3 hover:text-white/70 transition duration-100"
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuToggled(!isMenuToggled)}
        >
          <FaBars size={24} />
        </motion.button>
      )}

      {/* MOILE MENU POUP */}
      {!isAboveSmallScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 h-full bg-black/90 w-[90%]">
          <div className="flex justify-end p-10">
            {/**Close btn */}
            <motion.button
              alt="menu"
              className="rounded-full text-white p-3 hover:text-white/70 transition duration-100"
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <FaTimes size={24} />
            </motion.button>
          </div> 
          <motion.div
            className="flex flex-col items-center justify-center gap-10 text-xl text-gray-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Link to="/" className="hover:text-orange-500 ml-5">
              {" "}
              Home
            </Link>
            <Link to="/about" className="hover:text-orange-500 ml-7">
              {" "}
              About
            </Link>
            <Link to="/services" className="hover:text-orange-500 ml-7">
              {" "}
              Services
            </Link>
            <Link to="/projects" className="hover:text-orange-500 ml-7">
              {" "}
              Projects
            </Link>
            <Link
              to="/contactus"
              className="bg-orange-500 hover:bg-orange-500/80 font-medium py-2 px-4 rounded-sm ml-7"
            >
              {" "}
              Get in Touch
            </Link>
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
