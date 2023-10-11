import { useState } from "react";

import FqaItems from "./FqaItems";
const data = [
  {
    title: "      1. What is special about comparing rental car deals?",
    main: `Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies. `,
    id: 1,
  },
  {
    title: "     2. How do I find the car rental deals?",
    main: `You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions. `,
    id: 2,
  },
  {
    title: "      3. How do I find such low rental car prices?",
    main: `Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices. `,
    id: 3,
  },
];
function FQA() {
    const [active,setActive] = useState(1)
    return (
      <div className=" my-20">
        <div className="text-center">
          <h1 className=" font-bold text-2xl">FAQ</h1>
          <h2 className=" font-bold my-2 text-5xl">
            Frequently Asked Questions
          </h2>
          <p className=" text-gray-600 my-2 text-lg">
            Frequently Asked Questions About the Car Rental Booking Process on{" "}
            <br />
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>
        <div className="   flex flex-col my-6 ">
            {data.map(data=> <FqaItems active = {active} setActive={setActive} data={data} key={data.id} /> )}
          
        </div>
      </div>
    );
}

export default FQA
