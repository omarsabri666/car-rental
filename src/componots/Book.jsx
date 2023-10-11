import { BsFillTelephoneFill } from "react-icons/bs";

function Book() {
    return (
      <div className=" flex px-2 flex-wrap bg-[#2d2d2d] h-60 items-center  shadow-xl rounded-md justify-around">
        <h1 className=" text-4xl font-bold text-white">
          Book a car by getting in touch with us
        </h1>
        <h2 className=" flex items-center gap-3  text-omar text-4xl font-bold"><BsFillTelephoneFill/>(123) 456-7869</h2>
      </div>
    );
}

export default Book
