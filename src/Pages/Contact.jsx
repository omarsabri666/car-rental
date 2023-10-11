import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "../componots/ContactForm";
import { motion } from "framer-motion";
function Contact() {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="  my-16  h-screen object-cover grid grid-cols-1 md:grid-cols-2 bg-hero-pattern  "
    >
      <div className=" flex   px-2 md:px-0   flex-col">
        <h1 className=" font-bold text-5xl">Need additional information?</h1>
        <p className=" text-gray-700 text-lg my-4">
          A multifaceted professional skilled in multiple fields of research,
          development as well as a learning specialist. Over 15 years of
          experience.
        </p>
        <ul className=" flex flex-col gap-4">
          <a
            className=" flex gap-1 items-center text-lg font-bold hover:text-omar transition-all"
            href="tel:+123456789"
          >
            <span className="">
              {" "}
              <BsFillTelephoneFill />{" "}
            </span>{" "}
            (123) <span>456</span> <span>789</span>
          </a>
          <a
            className=" flex gap-2 items-center text-lg font-bold hover:text-omar transition-all"
            href="mailto:+omarsabri6199@gmail.com"
          >
            <span className="">
              {" "}
              <AiOutlineMail size={20} />{" "}
            </span>{" "}
            omarsabri6199@gmail.com
          </a>
          <a
            className=" flex gap-2 items-center text-lg font-bold hover:text-omar transition-all"
            href="#"
          >
            <span className="">
              {" "}
              <FaLocationDot size={20} />{" "}
            </span>{" "}
            Alex , Egypt
          </a>
        </ul>
      </div>
      <div>
        <ContactForm />
      </div>
    </motion.div>
  );
}

export default Contact;
