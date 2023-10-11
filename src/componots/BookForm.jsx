import { useForm } from "react-hook-form";
import { AiOutlineCar } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getName } from "../api";
import { UseData } from "../context/ContextP";
import ModalForm from "./ModalForm";
import { AnimatePresence } from "framer-motion";

function BookForm() {
  const [formData , setFormData] = useState("")
  const {setOpenModal,openModal,show,setShow} = UseData()
  const {data : carData} = useQuery({
    queryFn : getName,
    queryKey : ["carForm"]
  })
  
  
  


    const {register,handleSubmit,reset} = useForm()
    function onSubmit(data){
      setFormData(data)
      setOpenModal(true)
      
    }
    useEffect(()=>{
      reset()
    },[show])
   
   
    return (
      <>
        <div id="form" className="  my-32  bg-white shadow-2xl ">
       { show && <div className=" flex py-3 justify-between  px-3 bg-green-200">
          <h2 className=" text-xl">Check your email to confirm the order</h2>
          <button onClick={()=> setShow(false)} className=" text-red-600">&#10005;</button>
        </div>}
          <h1 className="  px-10 py-5 font-bold text-2xl text-center md:text-left">
            Book a car
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="  max-w-6xl mx-auto justify-around  gap-2   flex flex-wrap"
          >
            <div>
              <label
                className="  md:gap-1  font-semibold text-xl flex items-center gap-2"
                htmlFor="car"
              >
                <span>
                  <AiOutlineCar />
                </span>{" "}
                Select Your Car Type
              </label>
              <select
                required
                className="   h-12  w-80 border border-gray-500 "
                name="car"
                id="car"
                {...register("car")}
              >
                <option value="">Please select a car</option>

                {carData?.map((car, i) => (
                  <option value={car.id} key={i}>
                    {car.name}
                  </option>
                ))}
              </select>
            </div>
            <div className=" flex flex-col">
              <label
                className=" flex  md:gap-1
gap-2 text-xl  items-center"
                htmlFor="pickuplocation"
              >
                <span>
                  <FaLocationDot />
                </span>{" "}
                Pick-up
              </label>
              <select
                className="   h-12  w-80 border border-gray-500 "
                name="pickuplocation"
                required
                id="pickuplocation"
                {...register("pickuplocation")}
              >
                <option value="">Please select a city</option>
                <option value="NewYork">New York</option>
                <option value="Berlin">Berlin</option>
                <option value="Paris">Paris</option>
                <option value="Cairo">Cairo</option>
                <option value="Barcelona ">Barcelona </option>
              </select>
            </div>
            <div className=" flex flex-col">
              <label
                className=" flex  text-xl  md:gap-1
gap-2 items-center"
                htmlFor="dropoflocation"
              >
                <span>
                  <FaLocationDot />
                </span>{" "}
                Drop-of
              </label>
              <select
                required
                className="   h-12  w-80 border border-gray-500 "
                name="dropoflocation"
                id="dropoflocation"
                {...register("dropoflocation")}
              >
                <option value="">Please select a city</option>
                <option value="NewYork">New York</option>
                <option value="Berlin">Berlin</option>
                <option value="Paris">Paris</option>
                <option value="Cairo">Cairo</option>
                <option value="Barcelona ">Barcelona </option>
              </select>
            </div>
            <div className=" flex flex-col">
              <label
                className=" flex  text-xl  md:gap-1
gap-2 items-center"
                htmlFor="pickupdate"
              >
                <span>
                  <BsCalendarDate />
                </span>{" "}
                pick-up
              </label>
              <input
                required
                className=" border   border-gray-500 w-80 h-12"
                type="date"
                name="pickupdate"
                id="pickupdate"
                {...register("pickupdate")}
              />
            </div>
            <div className=" flex flex-col">
              <label
                className=" flex  text-xl  md:gap-1
gap-2 items-center"
                htmlFor="dropofdate"
              >
                <span>
                  <BsCalendarDate />
                </span>{" "}
                Drop-of
              </label>
              <input
                required
                className=" border border-gray-500 w-80 h-12"
                type="date"
                name="dropofdate"
                id="dropofdate"
                {...register("dropofdate")}
              />
            </div>
            <div className="   w-80 h-12  mb-28   text-white">
              <button className=" bg-omar w-full h-full mt-[29px]">
                Search
              </button>
            </div>
          </form>
          <AnimatePresence>
            
          </AnimatePresence>
          {openModal && <ModalForm formData={formData} />}
        </div>
      </>
    );
}

export default BookForm
