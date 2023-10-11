import { motion } from "framer-motion";
import { AiOutlineCar } from "react-icons/ai";
import {RiStarSLine} from "react-icons/ri"
import { Link } from "react-router-dom";
function CarsImgs({car}) {

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" flex flex-col gap-3 shadow-xl"
      >
        <img
          className=" w-full sm:w-[70%] md:w-full sm:mx-auto h-56"
          src={car.img2}
          alt={`${car.name}img`}
        />
        <div className=" flex justify-around">
          <div className=" flex-col flex  gap-2">
            <h1 className=" text-2xl font-bold">{car.name1}</h1>
            <div className=" flex items-center ">
              <RiStarSLine size={20} />
              <RiStarSLine size={20} />
              <RiStarSLine size={20} />
              <RiStarSLine size={20} />
              <RiStarSLine size={20} />
            </div>
          </div>
          <div className=" flex-col flex gap-1 ">
            <h1 className=" text-2xl font-bold">${car.price}</h1>
            <div className=" flex items-center">
              <h2 className=" text-lg">Per Day</h2>
            </div>
          </div>
        </div>
        <div className=" flex justify-around">
          <div className=" flex-col flex  gap-2">
            <h1 className=" text-lg  flex items-center font-semibold text-gray-600 gap-2">
              {" "}
              <span>
                <AiOutlineCar />
              </span>{" "}
              {car.model}
            </h1>
          </div>

          <h1 className=" text-lg text-gray-600 flex items-center gap-2 font-semibold">
            {car.Doors} <AiOutlineCar />
          </h1>
        </div>
        <div className=" flex  mb-8 justify-around">
          <div className=" flex-col  flex  gap-2">
            <h1 className=" text-lg  flex items-center font-semibold text-gray-600 gap-2">
              {" "}
              <span>
                <AiOutlineCar />
              </span>{" "}
              {car.Transmission}
            </h1>
          </div>

          <h1 className=" text-lg text-gray-600 flex items-center gap-2 font-semibold">
            {car.fuel} <AiOutlineCar />
          </h1>
        </div>
        <div className=" w-80 justify-center mx-auto h-[1px] bg-gray-500  mb-5"></div>
        <Link
          className=" bg-omar  transition-all hover:shadow-strong w-3/4 mx-auto text-center py-4 text-white font-bold text-lg mb-4"
          to="/home"
        >
          Book Ride
        </Link>
      </motion.div>
    );
}

export default CarsImgs
