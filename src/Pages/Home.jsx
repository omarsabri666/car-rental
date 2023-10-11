import  Slide  from "../componots/Slide";
import BookForm from "../componots/BookForm";
import CarsTab from "../componots/CarsTab";
import Hero from "../componots/Hero";
import Rental from "../componots/Rental";
import Hero2 from "../componots/Hero2";
import WhyUs from "../componots/WhyUs";
import Testimonials from "./Testimonials";
import Book from "../componots/Book";
import FQA from "./FQA";

function Home() {
    return (
        <div>
          <Hero/>
          <BookForm/>
          <Rental/>
          <CarsTab/>
        <Slide/>
        <Hero2/>
        <WhyUs/>
        <Testimonials/>
        <Book/>
        <FQA/>
        </div>
    )
}

export default Home
