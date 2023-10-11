import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [toggle,setToggle] = useState(false) 
  function handleClose(){
    setToggle(false)
  }
    useEffect(() => {
      if (toggle) {
        document.body.style.overflowY = "hidden"; // Disable vertical scroll
      } else {
        document.body.style.overflowY = "auto"; // Enable vertical scroll
      }
    }, [toggle]);
    return (
      <nav className=" flex relative   items-center justify-between ">
        <img
          className="  px-2 md:px-0 w-32 "
          src=" https://car-rental-ten.vercel.app/static/media/logo.0ad964cb93ab30cc809d.png"
          alt="logo"
        />
        <ul className=" md:flex gap-6 hidden ">
          <li>
            <NavLink
              className={({ isActive }) => {
                return (
                  " py-2 px-3  rounded-md  font-medium   " +
                  (isActive
                    ? "  text-white bg-omar hover:bg-red-600 hover:text-white transition-all  rounded-lg"
                    : " hover:text-omar")
                );
              }}
              to="home"
            >
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return (
                  " py-2 px-3  rounded-md  font-medium   " +
                  (isActive
                    ? "  text-white bg-omar hover:bg-red-600 hover:text-white transition-all  rounded-lg"
                    : " hover:text-omar")
                );
              }}
              to="about"
            >
              {" "}
              About{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return (
                  " py-2 px-3  rounded-md  font-medium   " +
                  (isActive
                    ? "  text-white bg-omar hover:bg-red-600 hover:text-white transition-all  rounded-lg"
                    : " hover:text-omar")
                );
              }}
              to="vehicleModels"
            >
              {" "}
              Vehicle Models{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return (
                  " py-2 px-3  rounded-md  font-medium   " +
                  (isActive
                    ? "  text-white bg-omar hover:bg-red-600 hover:text-white transition-all  rounded-lg"
                    : " hover:text-omar")
                );
              }}
              to="Testimonials"
            >
              {" "}
              Testimonials{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return (
                  " py-2 px-3  rounded-md  font-medium   " +
                  (isActive
                    ? "  text-white bg-omar hover:bg-red-600 hover:text-white transition-all  rounded-lg"
                    : " hover:text-omar")
                );
              }}
              to="ourTeam"
            >
              {" "}
              our team{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return (
                  " py-2 px-3  rounded-md  font-medium   " +
                  (isActive
                    ? "  text-white bg-omar hover:bg-red-600 hover:text-white transition-all  rounded-lg"
                    : " hover:text-omar")
                );
              }}
              to="Contact"
            >
              {" "}
              Contact{" "}
            </NavLink>
          </li>
        </ul>
        <div className=" md:flex gap-4 hidden ">
          <button className=" font-bold hover:text-omar transition-all">
            Sign In
          </button>
          <button className=" bg-omar py-3 px-7 rounded-sm shadow-lg text-white ">
            Register
          </button>
        </div>
        <button onClick={() => setToggle(true)} className=" md:hidden px-3">
          {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
        </button>
        <AnimatePresence>
          {toggle && (
            <motion.div
              key="navBarPhone" // Add the key prop
              initial={{ x: "100%" }}
              animate={{ x: toggle ? "0%" : "100%" }}
              transition={{ duration: 0.5 }}
              exit={{ x: "100%" }}
              className=" absolute    text-center flex flex-col -top-5 right-0  bg-[#2d2d2d] h-[55435435300vh]  overscroll-y-none    w-screen "
            >
              <button
                onClick={handleClose}
                className=" text-white  text-lg self-end px-4 my-7"
              >
                &#10005;
              </button>
              <ul className=" md:hidden gap-6 justify-center  flex flex-col ">
                <li className="      h-11">
                  <NavLink
                    onClick={handleClose}
                    className={({ isActive }) => {
                      return (
                        " py-4 px-3  rounded-md  w-screen block font-medium   " +
                        (isActive
                          ? "  text-white bg-omar hover:bg-red-600 hover:text-white transition-all  rounded-lg"
                          : " hover:text-omar text-white")
                      );
                    }}
                    to="home"
                  >
                    {" "}
                    Home{" "}
                  </NavLink>
                </li>
                <li className="   h-11">
                  <NavLink
                    onClick={handleClose}
                    className={({ isActive }) => {
                      return (
                        " py-4 px-3  rounded-md  w-screen block font-medium   " +
                        (isActive
                          ? "  text-white bg-omar hover:bg-red-600 hover:text-white transition-all  rounded-lg"
                          : " hover:text-omar text-white")
                      );
                    }}
                    to="about"
                  >
                    {" "}
                    About{" "}
                  </NavLink>
                </li>
                <li className="   h-11">
                  <NavLink
                    onClick={handleClose}
                    className={({ isActive }) => {
                      return (
                        " py-4 px-3  rounded-md  w-screen block font-medium   " +
                        (isActive
                          ? "  text-white bg-omar hover:bg-red-600 hover:text-white transition-all  rounded-lg"
                          : " hover:text-omar text-white")
                      );
                    }}
                    to="vehicleModels"
                  >
                    {" "}
                    Vehicle Models{" "}
                  </NavLink>
                </li>
                <li className="   h-11">
                  <NavLink
                    onClick={handleClose}
                    className={({ isActive }) => {
                      return (
                        " py-4 px-3  rounded-md  w-screen block font-medium   " +
                        (isActive
                          ? "  text-white bg-omar hover:bg-red-600 hover:text-white transition-all  rounded-lg"
                          : " hover:text-omar text-white")
                      );
                    }}
                    to="Testimonials"
                  >
                    {" "}
                    Testimonials{" "}
                  </NavLink>
                </li>
                <li className="   h-11">
                  <NavLink
                    onClick={handleClose}
                    className={({ isActive }) => {
                      return (
                        " py-4 px-3  rounded-md  w-screen block font-medium   " +
                        (isActive
                          ? "  text-white bg-omar hover:bg-red-600 hover:text-white transition-all  rounded-lg"
                          : " hover:text-omar text-white")
                      );
                    }}
                    to="ourTeam"
                  >
                    {" "}
                    our team{" "}
                  </NavLink>
                </li>
                <li className="   h-11">
                  <NavLink
                    onClick={handleClose}
                    className={({ isActive }) => {
                      return (
                        " py-4 px-3  rounded-md  w-screen block font-medium   " +
                        (isActive
                          ? "  text-white bg-omar hover:bg-red-600 hover:text-white transition-all  rounded-lg"
                          : " hover:text-omar text-white")
                      );
                    }}
                    to="Contact"
                  >
                    {" "}
                    Contact{" "}
                  </NavLink>
                </li>
              </ul>
              <div className=" md:hidden text-center mx-auto  gap-4 flex flex-col w-fit my-10 ">
                <button className=" text-white  bg-omar py-3 px-7 font-bold hover:text-omar transition-all">
                  Sign In
                </button>
                <button className=" bg-omar py-3 px-7 rounded-sm shadow-lg text-white ">
                  Register
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    );
}

export default NavBar
