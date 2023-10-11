import { useQuery } from "@tanstack/react-query";

import { getName } from "../api";
import CarName from "./CarName"
import CarDetails from "./CarDetails";
import CarImg from "./CarImg";
import { Oval } from "react-loader-spinner";

function CarsTab() {
  const {data,isLoading , isError} = useQuery({
queryKey : ["cars"],
queryFn : getName
  })
  if(isError) return <div className=" flex justify-center items-center">
    <h2 className=" text-red-600"> Could not Load Data check your connection</h2>
  </div>;

  if (isLoading)
    return (
      <div id="cartab" className=" flex justify-center items-center">
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
      <div className="">
        <h1 className=" text-xl my-3 font-bold text-center">Vehicle Models</h1>
        <h3 className=" text-center my-3 text-5xl  font-bold">
          Our rental fleet
        </h3>
        <p className=" text-center my-3 text-md text-gray-700">
          Choose from a variety of our amazing vehicles to rent for your next <br />
          adventure or business trip
        </p>
        <div className=" my-20  gap-2 grid sm:grid-cols-2 grid-cols-1 md:grid-cols-5">
          <div className="  justify-center col-span-3 md:col-span-1">
            <ul className=" flex flex-col px-2 md:px-0  gap-4">
              {data?.map((car, i) => (
                <CarName car={car} key={i} />
              ))}
            </ul>
          </div>
          <div className=" col-span-3  justify-self-center self-center ">
           <CarImg/>
          </div>
          <div className=" col-span-3 md:col-span-1 justify-self-center self-center">

       <CarDetails/>
          </div>
        </div>
      </div>
    );
}

export default CarsTab
