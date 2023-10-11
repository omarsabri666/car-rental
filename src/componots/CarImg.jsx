import { useQuery } from "@tanstack/react-query";
import { UseData } from "../context/ContextP";
import { getDetails } from "../api";
import { Oval } from "react-loader-spinner";

function CarImg() {
    const {selectedCar} = UseData()
    const {data,isLoading,isError} = useQuery({ queryKey:["carImg",selectedCar] ,
    queryFn: ()=> getDetails(selectedCar)

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
        );  if(isError) return <div className=" flex justify-start ">
            <h2 className=" text-red-600 text-3xl">could not load data</h2>
        </div>
    return (
      <img
        src={data?.img}
        alt="Car Image"
      />
    );
}

export default CarImg
