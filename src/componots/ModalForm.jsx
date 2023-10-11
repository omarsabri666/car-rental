import { useEffect, useRef } from "react";
import { UseData } from "../context/ContextP";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import { getDetails } from "../api";
import { Oval } from "react-loader-spinner";
import { motion } from "framer-motion";

function ModalForm({ formData }) {
    const {data ,isLoading} = useQuery({
        queryFn : ()=>  getDetails(formData.car) ,
        queryKey : ["carForms",formData]
    })

  const { setOpenModal ,setShow} = UseData();
  console.log(formData)
  const modalRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (!modalRef.current.contains(e.target)) {
        // setOpenModal(false);
    
      }
    }
    

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  function handleClose(e = null) {
    if (e) {
      e.stopPropagation();
    }
    setOpenModal(false);
    
    
  }
  function handleClick(){
    setOpenModal(false)
    setShow(true)

  }
  if(isLoading) return (
    <div className=" flex justify-center items-center">
      <Oval
        height={80}
        width={80}
        color="#ff4d30"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ff4d30"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );


  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex overflow-y-auto flex-wrap overflow-x-hidden   h-screen  backdrop-blur-sm   items-center justify-center z-50 bg-gray-900 bg-opacity-50     "
    >
      <div className="  ">
        <div
          className=" flex   flex-col   sm:w-[70vw]  
           bg-white "
        >
          <div ref={modalRef} className="   sm:w-[70vw]      ">
            <div className=" sm:mt-0  sm:w-[70vw] bg-omar  items-center flex justify-between py-3 ">
              <h2 className="text-2xl px-2 w-full      font-bold">
                COMPLETE RESERVATION
              </h2>
              <button onClick={handleClose} className=" px-2 text-white">
                &#10005;
              </button>
            </div>
          </div>
          <div className=" bg-orange-100 py-8">
            <h1 className=" text-omar px-2 flex gap-2 items-center text-2xl">
              {" "}
              <span>
                <AiOutlineInfoCircle />
              </span>
              Upon completing this reservation enquiry, you will receive:
            </h1>
            <p className=" px-2  mt-3 text-gray-600 text-lg">
              Your rental voucher to produce on arrival at the rental desk and a
              toll-free customer support number.
            </p>
          </div>
          <div className=" px-2 grid grid-cols-1 md:grid-cols-3">
            <div className=" flex  gap-6 flex-col   ">
              <h2 className=" text-2xl font-bold text-omar">Location & Date</h2>
              <div className=" flex items-center  ">
                <i className=" inline-flex pr-2">
                  {" "}
                  <BsCalendarDate size={20} />
                </i>

                <div className=" flex flex-col">
                  <h1 className=" text-black  font-bold felx items-center">
                    {" "}
                    Pick-Up Date
                  </h1>
                  <h2>{formData.pickupdate}</h2>
                </div>
              </div>
              <div className=" flex items-center  ">
                <i className=" inline-flex pr-2">
                  {" "}
                  <BsCalendarDate size={20} />
                </i>

                <div className=" flex flex-col">
                  <h1 className=" text-black  font-bold felx items-center">
                    {" "}
                    Drop-of Date
                  </h1>
                  <h2>{formData.dropofdate}</h2>
                </div>
              </div>
              <div className=" flex items-center  ">
                <i className=" inline-flex pr-2">
                  {" "}
                  <FaLocationDot size={20} />
                </i>

                <div className=" flex flex-col">
                  <h1 className=" text-black  font-bold felx items-center">
                    {" "}
                    pick-up Location
                  </h1>
                  <h2>{formData.pickuplocation}</h2>
                </div>
              </div>
              <div className=" flex items-center  ">
                <i className=" inline-flex pr-2">
                  {" "}
                  <FaLocationDot size={20} />
                </i>

                <div className=" flex flex-col">
                  <h1 className=" text-black  font-bold felx items-center">
                    {" "}
                    Drop-of Location
                  </h1>
                  <h2>{formData.dropoflocation}</h2>
                </div>
              </div>
            </div>
            <div className="  flex col-span-2   flex-col">
              <h1 className=" text-2xl self-start">
                car - <span className=" text-omar"> {data?.name}</span>
              </h1>
              <img
                className="  w-[80%]"
                src={data?.img}
                alt={`${data?.name}img`}
              />
            </div>
          </div>
          <button
            onClick={handleClick}
            className="   mt-6 text-white py-4 font-bold text-lg uppercase bg-omar"
          >
            reserve now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ModalForm
