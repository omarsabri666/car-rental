import { Outlet, useLocation } from "react-router";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";
import { AnimatePresence } from "framer-motion";

function AppLayout() {
      const location = useLocation();
    return (
        <div className=" ">
        <Header/>
        <AnimatePresence>

        <main className="  overflow-x-hidden">



            <Outlet key={location.pathname}/>

        </main>
        </AnimatePresence>

        <Footer/>
        </div>
    )
}

export default AppLayout
