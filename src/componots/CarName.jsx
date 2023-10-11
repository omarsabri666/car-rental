import { UseData } from "../context/ContextP";

function CarName({car}) {
  
    const {setSelectedCar,selectedCar } = UseData()
    return (
      <li
        onClick={() => setSelectedCar(car.id)}
        className={` py-4 px-2  text-center md:text-left  text-xl font-semibold cursor-pointer transition-all hover:text-white   hover:bg-omar
        ${
          selectedCar === car.id
            ? "bg-omar text-white"
            : "bg-gray-200 text-black"
        }
        
        `}
      >
        {car.name}
      </li>
    );
}

export default CarName
