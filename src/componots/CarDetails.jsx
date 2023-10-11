import { useQuery } from "@tanstack/react-query";
import { UseData } from "../context/ContextP";
import { getDetails } from "../api";
import { Oval } from "react-loader-spinner";


function CarDetails() {
    const {selectedCar} = UseData()
    const {data,isError,isLoading} = useQuery({
        queryFn : ()=> getDetails(selectedCar),
        queryKey :["carDetails",selectedCar]
    })
      if (isLoading)
        return (
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
        if(isError) return <div className=" flex justify-start ">
            <h2 className=" text-red-600 text-3xl">could not load data</h2>
        </div>
    return (
      <div className="flex flex-col">
        <div className="text-2xl px-1 font-bold py-3 flex bg-omar text-white justify-around">
          <h1>${data?.price}</h1>
          <h2>/ rent per day</h2>
        </div>

        <div className="flex flex-col border border-black">
          <div className="flex text-md border-b border-black font-semibold items-center h-10 justify-around">
            <h2 className=" ">model</h2>

            <h2>{data?.model}</h2>
          </div>
          <div className="flex text-md border-b border-black font-semibold items-center h-10 justify-around">
            <h2>Mark</h2>

            <h2>{data?.mark}</h2>
          </div>
          <div className="flex text-md border-b border-black font-semibold items-center h-10 justify-around">
            <h2>Year</h2>

            <h2>{data?.year}</h2>
          </div>
          <div className="flex text-md border-b border-black font-semibold items-center h-10 justify-around">
            <h2>Doors</h2>

            <h2>{data?.Doors}</h2>
          </div>
          <div className="flex text-md border-b border-black font-semibold items-center h-10 justify-around">
            <h2>AC</h2>

            <h2>{data?.Ac ? "yes" : "no"}</h2>
          </div>
          <div className="flex text-md border-b border-black font-semibold items-center h-10 justify-around">
            <h2>Transmission</h2>

            <h2>{data?.Transmission}</h2>
          </div>
          <div className="flex text-md border-b border-black font-semibold items-center h-10 justify-around">
            <h2>Fuel</h2>

            <h2>{data?.fuel}</h2>
          </div>
        </div>
       
        <a
          href="#form "
          className="  text-center transition-all  hover:bg-[#d65844] my-2 py-3 inline-block shadow-xl font-bold  text-white uppercase bg-omar"
        >
          Reserve Now
        </a>
       
      </div>
    );
}

export default CarDetails
