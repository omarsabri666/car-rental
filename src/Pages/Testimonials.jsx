import { motion } from "framer-motion";
import {BiSolidQuoteAltRight} from "react-icons/bi"
function Testimonials() {
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className=" bg-gray-100 py-4   my-28"
        id="test"
      >
        <div className="   text-center">
          <h1 className=" text-3xl text-gray-800">Reviewed by People</h1>
          <h2 className="  text-6xl">Client&rsquo;s Testimonials</h2>
          <p className=" my-3 text-gray-700 ">
            Discover the positive impact we&rsquo;ve made on the our clients by
            reading through their testimonials. <br /> Our clients have
            experienced our service and results, and they&rsquo;re eager to
            share <br /> their positive experiences with you.
          </p>
        </div>
        <div className="   grid md:grid-cols-2 grid-cols-1 gap-6 my-16">
          <div className=" mx-4  h-72 flex flex-col justify-center items-center bg-white shadow-xl">
            <blockquote className="  text-xl font-semibold gap-5  flex flex-col py-7 px-10">
              &ldquo;We rented a car from this website and had an amazing
              experience! The booking was easy and the rental rates were very
              affordable.&rdquo;
              <div className="  flex items-center  justify-between  ">
                <div className=" flex gap-3 items-center">
                  <img
                    className=" shadow-2xl  w-14 h-14 rounded-full"
                    src="https://sortitoutsidospaces.b-cdn.net/megapacks/cutoutfaces/originals/10.09/7458500.png"
                    alt="messi img"
                  />

                  <cite className=" ">Leo Messi</cite>
                </div>

                <div className="  px-9">
                  <BiSolidQuoteAltRight size={50} color="#ff4d30" />
                </div>
              </div>
            </blockquote>
          </div>
          <div className=" mx-4   h-72 flex flex-col justify-center items-center  bg-white shadow-xl">
            <blockquote className="  text-xl font-semibold gap-5  flex flex-col py-7 px-10">
              &ldquo;The car was in great condition and made our trip even
              better. Highly recommend for this car rental website!&rdquo;
              <div className="  flex items-center  justify-between  ">
                <div className=" flex gap-3 items-center">
                  <img
                    className=" shadow-2xl  w-14 h-14 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJlWhFOEIvcFvfUUS5BcAjv8P3tkzXMdChzA&usqp=CAU"
                    alt="conor img"
                  />

                  <cite className=" ">conor mcgregor </cite>
                </div>

                <div className="  px-9">
                  <BiSolidQuoteAltRight size={50} color="#ff4d30" />
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </motion.div>
    );
}

export default Testimonials
