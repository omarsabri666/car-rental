import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function FqaItems({data,active,setActive}) {
    function handleClick(){
        if(data.id === active) {
            return setActive(null)
        }
        setActive(data.id)
        
    }
    
    return (
      <div
      
          onClick={handleClick}
          key={data.id}
          className="shadow-md w-[70%]  mx-auto cursor-pointer   "
        >
          <div
            className={`flex items-center  py-4 w-full  transition-all   justify-between   ${
              active === data.id ? "bg-omar text-white" : ""
            } `}
            >
            <h1 className=" text-lg  px-4 font-bold">{data.title}</h1>
            <i className=" px-4">
              <MdOutlineKeyboardArrowDown size={30} />
            </i>
          </div>
            <AnimatePresence>
          {active === data.id && (
            <motion.p
              key={data.id}
              className=" py-4 text-gray-600 px-4"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
             
              }}
              exit={{ height: 0, opacity: 0 }}
            >
              {data.main}
            </motion.p>
          )}
          </AnimatePresence>
        </div>
    );
}

export default FqaItems
