import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { Menu, Transition } from "@headlessui/react";

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
          <Menu as="div" className="relative">
            {({ open }) => (
              <Fragment>
                {/**Menu Button */}
                <Menu.Button className="hover:text-orange-500 inline-flex items-center justify-center">
                  Concepts
                  <BiChevronDown size={24} className="ml-[1px]" />
                </Menu.Button>

                {/**Menu Items */}
                <Transition
                  show={open}
                  enter="transform transition duration-200 ease-in"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transform transition duration-200 ease-out"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    className="w-48 rounded-md right-0 mt-2 divide-y shadow-lg bg-white origin-top-right focus:outline-none absolute"
                    static
                  >
                    <div className="p-2 flex flex-col items-start justify-center gap-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/bungalow"
                            aria-hidden="true"
                            className={` w-full rounded-md py-2 ${
                              active
                                ? "bg-gray-100/70 text-slate-500 "
                                : "text-red-400"
                            } flex items-center justify-center`}
                          >
                            {" "}
                            Bungalow
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/mansionette"
                            aria-hidden="true"
                            className={` w-full rounded-md py-2 ${
                              active
                                ? "bg-gray-100/70 text-slate-500 "
                                : "text-red-400"
                            } flex items-center justify-center`}
                          >
                            {" "}
                            Mansionette
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Fragment>
            )}
          </Menu>

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
          {!isAboveSmallScreen && isMenuToggled ? (
            <FaTimes size={24} />
          ) : (
            <FaBars size={24} />
          )}
        </motion.button>
      )}

      {/* MOILE MENU POUP */}
      {!isAboveSmallScreen && isMenuToggled && (
        <div className="fixed right-0 bottom-0 h-full bg-black/90 w-[80%]">
          <div className="flex justify-end px-7 py-2">
            {/**Close btn */}
            <motion.button
              alt="menu"
              className="rounded-full text-white p-3 hover:text-white/70 transition duration-100"
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              {!isAboveSmallScreen && isMenuToggled ? (
                <FaTimes size={24} />
              ) : (
                <FaBars size={24} />
              )}
            </motion.button>
          </div>
          <motion.div
            className="flex flex-col items-center justify-center gap-10 text-xl text-gray-300 py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
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
            <Menu as="div" className="relative">
              {({ open }) => (
                <Fragment>
                  {/**Menu Button */}
                  <Menu.Button className="hover:text-orange-500 inline-flex items-center justify-center">
                    Concepts
                    <BiChevronDown size={24} className="ml-[1px]" />
                  </Menu.Button>

                  {/**Menu Items */}
                  <Transition
                    show={open}
                    enter="transform transition duration-100 ease-in"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transform transition duration-75 ease-out"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Menu.Items
                      className="w-40 rounded-md shadow-lg bg-white origin-top-right focus:outline-none absolute"
                      static
                    >
                      <div className="p-2 flex flex-col text-sm items-start justify-center gap-1">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/bungalow"
                              aria-hidden="true"
                              className={` w-full rounded-md py-2 ${
                                active
                                  ? "bg-gray-100/70 text-slate-500 "
                                  : "text-red-400"
                              } flex items-center justify-center`}
                            >
                              {" "}
                              Bungalow
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/mansionette"
                              aria-hidden="true"
                              className={` w-full rounded-md py-2 ${
                                active
                                  ? "bg-gray-100/70 text-slate-500 "
                                  : "text-red-400"
                              } flex items-center justify-center`}
                            >
                              {" "}
                              Mansionette
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Fragment>
              )}
            </Menu>
            <Link
              to="/contactus"
              className="bg-orange-500 hover:bg-orange-500/80 font-medium py-2 px-4 rounded-sm mt-20"
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
