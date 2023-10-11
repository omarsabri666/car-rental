import { doc, getDoc, getDocs } from "firebase/firestore";
import { carsCollectionRef, db } from "./config/fireBase";

export async function getName(){
  try{
    const data = await getDocs(carsCollectionRef)
    const filterdData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      return filterdData


  } catch(err){
    throw new Error("could not get data")
  }
}
export async function getDetails(id){
const docRef =  doc(db,"cars",id)
const docSnap  = await getDoc(docRef)
if (docSnap.exists()) {
 return docSnap.data();
} else {
  // docSnap.data() will be undefined in this case
throw new Error("could not select car")

} }