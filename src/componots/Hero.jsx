import { GoArrowRight } from "react-icons/go";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";
function Hero() {

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" flex  items-center  my-10  "
        id="home"
      >
        <div className=" px-2 md:px-0">
          <h2 className=" my-2 font-bold text-xl">Plan your trip now</h2>
          <h3 className="  my-2  text-6xl font-bold">
            Save <span className="  text-omar">big</span> with our car rental
          </h3>
          <p className=" my-2 text-lg text-gray-700">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="my-10 space-x-2  flex flex-wrap md:space-x-4">
            <a
              className="  text-lg inline-felx items-center  shadow-md hover:shadow-strong transition-all font-bold bg-omar px-6 md:px-9 py-5 gap-1 rounded-sm text-white"
              href="#form"
            >
              Book Ride{" "}
              <span className=" inline-flex items-center mt-1">
                <AiOutlineCheckCircle />
              </span>
            </a>
            <a
              href="#cartab"
              className=" text-lg shadow-md inline-flex font-bold bg-black rounded-sm text-white  md:px-9 py-5  px-6 items-center gap-2  hover:bg-white hover:text-black hover:outline hover:outline-black transition-all "
            >
              Learn More{" "}
              <span className=" inline-flex mt-1 ">
                <GoArrowRight size={20} />
              </span>
            </a>
          </div>
        </div>
        <div className=" hidden md:block">
          <img src="https://i.ibb.co/n8Y6RWf/car.webp" alt="car photo" />
        </div>
      </motion.div>
    );
}

export default Hero
