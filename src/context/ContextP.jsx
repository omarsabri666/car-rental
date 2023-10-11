import { createContext, useContext, useReducer, useState } from "react";
import { toast } from "react-toastify";



const  contextProvider  = createContext()
function ContextP({children}) {
  const [selectedCar, setSelectedCar] = useState("5rMNVIxCs6ppS41DVVKY"); 
  const [selectedCarForm, setSelectedCarForm] = useState("");
  const [openModal,setOpenModal] = useState(false) 
  const [show,setShow] = useState(false) 
  
  


  
    

         
    return (
      <contextProvider.Provider
        value={{
          selectedCar,
          setSelectedCar,
          selectedCarForm,
          setSelectedCarForm,
          openModal,
          setOpenModal,
          show,
          setShow,
        }}
      >
        {children}
      </contextProvider.Provider>
    );
}

export default ContextP
export function UseData (){
    const context = useContext(contextProvider)
    if(context === undefined ) throw new Error("the context is wrong ")
    return context
 
}

