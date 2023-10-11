import { useState } from "react";

import { BsTelephoneFill } from "react-icons/bs";
import { RiMailAddFill } from "react-icons/ri";
import { toast } from "react-toastify";

function Footer() {
  const [email, setEmail] = useState("");
    const handleSubmit = () => {
      if(email.length > 7 )   toast.success("Good Job");
      setEmail("")
      // Perform actions with the email value (e.g., send it to a server, display a success message)
    
    };
    return (
      <div className=" grid md:grid-cols-5 px-2   grid-cols-1  mt-48">
        <ul className=" flex flex-col md:col-span-2 col-span-1 gap-2">
          <li>
            <h1 className=" text-2xl">
              CAR <span className="font-bold">Rental</span>
            </h1>
          </li>
          <li>
            <h1>
              We offers a big range of vehicles for <br /> all your driving
              needs. We have the <br /> perfect car to meet your needs.
            </h1>
          </li>
          <li>
            <a
              className=" font-bold hover:text-omar transition-all text-lg inline-flex items-center gap-1 "
              href="tel:+201554776534"
            >
              {" "}
              <span>
                <BsTelephoneFill />
              </span>
              (01554776534)
            </a>
          </li>
          <li>
            <a
              className=" font-bold hover:text-omar transition-all text-lg inline-flex items-center gap-1 "
              href="mailto:omarsabri6199@gmail.com"
            >
              <span>
                <RiMailAddFill />
              </span>{" "}
              omarsabri6199@gmail.com
            </a>
          </li>
          <li>
            <h4 className=" cursor-pointer  text-lg font-bold  hover:text-omar transition-all">
              Design by XpeedStudio
            </h4>
          </li>
        </ul>

        <ul className=" flex flex-col gap-2">
          <li>
            <h1 className=" font-bold">Company</h1>
          </li>
          <li>
            <a className=" font-bold hover:text-omar transition-all" href="#">
              New York
            </a>
          </li>
          <li>
            <a className=" font-bold hover:text-omar transition-all" href="#">
              Careers
            </a>
          </li>
          <li>
            <a className=" font-bold hover:text-omar transition-all" href="#">
              Mobile
            </a>
          </li>
          <li>
            <a className=" font-bold hover:text-omar transition-all" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className=" font-bold hover:text-omar transition-all" href="#">
              How we work
            </a>
          </li>
        </ul>

        <ul className=" flex flex-col">
          <li>
            <h1 className=" font-bold">Working Hours</h1>
          </li>
          <li>
            <p>
              <span>mon - fri:</span> 9:00 AM - 9:00PM
            </p>
          </li>
          <li>
            <p>
              <span>sat :</span> 9:00 AM - 5:00PM
            </p>
          </li>
          <li>
            <p>
              <span>sun :</span> Closed
            </p>
          </li>
        </ul>

        <ul className=" flex flex-col gap-2">
          <li>
            <h1 className=" font-bold text-3xl ">SUBSCRIPTION</h1>
          </li>
          <li>
            <p className=" text-lg text-gray-600">
              Subscribe your Email address for latest news & updates.
            </p>
          </li>
          <li>
            <input
              placeholder="Enter Email Address"
              className=" py-2 my-3 px-6 w-full placeholder:text-center bg-[#ececec]"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className=" text-white font-bold text-lg  bg-omar w-full py-3"
            >
              Submit
            </button>
          </li>
          <li></li>
        </ul>
      </div>
    );
}

export default Footer
