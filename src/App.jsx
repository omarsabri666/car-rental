import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import "./index.css";


import ContextP from "./context/ContextP.jsx";
import { Suspense, lazy } from "react";
import AppLayout from "./componots/AppLayout";

import Loader from "./Pages/Loader";

const Home = lazy(() => import("./Pages/Home.jsx"));
const Testimonials = lazy(() => import("./Pages/Testimonials.jsx"));
const OurTeam = lazy(() => import("./Pages/OurTeam.jsx"));
const Contact = lazy(() => import("./Pages/Contact.jsx"));
const Cars = lazy(() => import("./Pages/Cars.jsx"));
const About = lazy(() => import("./Pages/About"));


function App() {
 
 
  


  return (
    <BrowserRouter>
      <ContextP>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
        />
        <Suspense fallback={

           <Loader />
        
           }>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route index path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="Testimonials" element={<Testimonials />} />
              <Route path="Testimonials" element={<Testimonials />} />
              <Route path="ourTeam" element={<OurTeam />} />
              <Route path="contact" element={<Contact />} />
              <Route path="vehicleModels" element={<Cars />} />
            </Route>
          </Routes>
        </Suspense>
      </ContextP>
    </BrowserRouter>
  );
}

export default App;
