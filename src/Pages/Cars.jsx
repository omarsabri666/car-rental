import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getName } from "../api";
import CarsImgs from "../componots/CarsImgs";
import { motion } from "framer-motion";
import { Oval } from "react-loader-spinner";

function Cars() {
 const queryClient = useQueryClient()
 const data = queryClient.getQueryData(["cars"]);
 const {data:carData,isLoading,isError} = useQuery({
  queryFn: getName,
  queryKey:["caragain"]
 })
 if (!data)  return (
   <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     className=" grid grid-cols-1 gap-6 my-24   md:grid-cols-3"
   >
     {carData?.map((car, i) => (
       <CarsImgs key={i} car={car} />
     ))}
   </motion.div>
 );
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
    if (isError)
      return (
        <div className=" flex justify-center items-center">
          <h2 className=" text-red-600">
            {" "}
            Could not Load Data check your connection
          </h2>
        </div>
      );

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" grid grid-cols-1 gap-6 my-24   md:grid-cols-3"
      >
        {data?.map((car, i) => (
          <CarsImgs key={i} car={car} />
        ))}
      </motion.div>
    );
}

export default Cars
