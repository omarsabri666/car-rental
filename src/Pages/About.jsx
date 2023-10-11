import { motion } from "framer-motion";
import Book from "../componots/Book";
import Rental from "../componots/Rental";

function About() {
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className=" flex flex-col md:flex-row justify-center md:justify-start items-center  gap-10 my-48">
          <img loading="lazy"
            className=" w-1/2"
            src="https://car-rental-ten.vercel.app/static/media/about-main.ed0137841dc67d61ec95.jpg"
            alt="2 people talking"
          />
          <div className=" w-1/2 flex flex-col gap-4">
            <h1 className=" text-xl font-bold">About Company</h1>
            <h2 className=" text-4xl font-bold">
              You start the engine and your adventure begins
            </h2>
            <p className=" text-gray-700   w-10/12">
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
            <div className="  grid md:grid-cols-3  grid-cols-1  items-center my-10    ">
              <div className=" flex w-1/3 flex-col gap-4">
                <img
                  width={70}
                  className=" "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAAAiCAYAAAAAl7SxAAAABHNCSVQICAgIfAhkiAAABClJREFUaEPtmT1vHFUUht9zN3FC4cSRUAjYsxgJKQghWMpU2L8A04UKhwKCBOOlC1U2FVAgZmeJFAqEqYAK+xew7tzhNNDBeoZAIiLk2BR4o52D7h15dr6/g3YjT7XaOffrue8959wzBN/DunYZRN/6/1O/afgcGXcH8ie/1zyHGfwdsVEv+TaZduvoHX+gvQ1BX8XbokOmdcOz1bUNEL0eaxv881PqWtdy2OU2oRCEdRC9NdEQGIcYPbxIN//czb3KDEMPAgMEXbNAtDDRENTk+Hvq2pfrh9Ceb4EbP8V2PFnHwZ2iM7pEvTvbdYAYK0FvXgPh46mBwLxNpn2pZghaH0SvTQ0E1xG/Sab9XVUQSgn8zrmzOD17D4RT0wUBu2DrIvVwWAWEC6GtrYDph8SOJtEneLEVH5FpfVIdwpp2C6B3pxTCPnj4PPXu/lUWhKsEvTkA4dmphOCGzC+pa18tDYHff+YFNE78ktrBJB8H10GOwPQy9ayfy4AgvvrUeZw++WJq470T27Q++Nc7hhJc7DM6pC/u/ebZSYc788TTsaancJ8+++O+Z6trL0Hwk2UWodqQsOhz69cy7QNpc5kOHoc2xxCkiB6Hnay6BuK1JlftpFR7xg0yrY7PJyRnrKUGyNmIeesYwjEEFV4rKIF5yye4ORC9klOArlndx4GxC7CqfrkhM+EyGJ5kYQhyIMEd4GCDjL09f3/cnpuDc6YNoA3C2UwgdUBgPABgQAzXj8p/wTlpq3Cok5oNF4LA/A2Z9mrW4lwYs7JMl14vrAqB+TbEw5W4xUc2W29KENdj554bgoMPqWcZWQACu6Br8fVKLxxUiA4KwMFSWI1p8+O2tgqmryM2uSAwb5Jpr0TotheW4Ai3CCNGm2Tc2Yk5HjuJUiyrBHkExP5i9DjOt+A0jtQ3gNjfjNjoCwZIrAXWkguC7/Kk/Jlbi5S1h8UgGO6DDt7wD8wSFIsf42VYUgnEV8iw1z1ByePHs9cBkv7I/wxAzhUyfu8HbJ0z8sY89lmZEEJ+gNsXFsEzshg7lyC9HdD+cgBE0jW9jBIYD8i0AmNz1vcKGr3qVymH1aAgSKeR9IjRRrCDjHOuQlN4p7QVOOR9kPGGEk4/uEvKk4fUFZqY4EFQBRkVMdWc+9S1l8dquLAIZ2bs4GWfhZxdnhQ7wYcUGSevbWRXExpS10pd56OAsEWmvZR3IVXsWE+pkPs7JmfZr7rwmMUg6M29zERInrH/DUKMt4+hWq8S4kJMBGvQJ1TZ6ay2qdHHcwLZm1JMCW42KK+88feE0FfprEXU8Z7TkjKVUwxbWVllIQjK18o8wRFG5ILCThfin06RLK4OCGpOcWmxyiqd1XASFzdmYQjjUDPfwqjhOsDGcCOLdl0LTupH5TA4uaTCbCj8Zo1dGkJWx9P0/j+h1MgRS33xgwAAAABJRU5ErkJggg=="
                  alt="logo"
                />
                <div className=" flex gap-4 w-1/3  items-center  ">
                  <h2 className=" text-7xl  font-bold  ">20</h2>
                  <h2 className=" text-2xl">
                    cars <br /> types
                  </h2>
                </div>
              </div>
              <div className=" flex flex-col  gap-4">
                <img
                  width={70}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAAnCAYAAAC42pApAAAABHNCSVQICAgIfAhkiAAAAxtJREFUaEPtWr1u01AU/r4UISZINxB1mp2BdmCmfQLoE1AkNiQnPAHJGzjpxkJYmPsGpCsM9A1I44DYMEUCqRI+6F7bqeM4tR0nxlXi1efce7/zf869lEbtM4AdlOdzwItdWt8Hyz4SxTROQT5c9kaZ1uffXVpfTzPxzEFMxSPNrT3N69L6b4Kgu++dX5wigKudNPjgE9Pog3w8hxBzs7AznDhL7gVTLLAGn1rzgramJV5PCFZwBqAHSB3ks8l/cgKwD8jeVVZVes0HB5RGTaIA2bX3dOyQyoeIYNrsDlti1lpTQgsRrsGn8NNFkmTy+bXmVTJaRbNfpMlF1yq9z6/BL0kC5de8qJyt8nykChT8BETV4tWp8ljXADIAWAexPVN2ruuV2AV9PBqdlCbaF4T5chvK89UFL2iXBnxRPj9u3tbgQ86W3NJK3yNnNDg5XsBjNWYqNBgHPKA+y7dLr/llBqU48GIavakuMfUhpA/+OqDlOGGWuc0+9b5zEEbBT3SBQYpNvS53QNyByDt27cPrCN7RAOju0xr57pYOvTSrVcjtH56Hnm+GtV96zY/nAoIzdocz48RVohDTOAb5BCqfW3YvoM0PXk10Km4KbbAKlz2twYQvbPZibllgpQFxO+yOmkm8cf+laRxC+DZq+vnBZzDF5Azi54/QAFPM2kCXwjlG2NK8W4fc/ALAYWe4uTjN++ClYbwH8GCGZl6wY3/KCl6a93cgG+oiBRC05tH6mIdQVlMF5YCWfayXDCbUWYucy0W9ICQN4yPAR7EHDASUchw+nhIFvpoL9RTzKXi+rwJfacHHDkAXJQQXr3g0tMoLPmHCm0sOysz1FNm/mCmb2SeNt1cK/NS02NdebGoLW01cvLluml9p8LnMPMp83TS/Br8oCaTQfLr++bLCW2iRo/O8WzlO0wtklolf5c1Odaq0dDeeJi5cueipNzPy8t42bvBWLP0f2Hzz7bduUsCENz/sqxw85ab+tVjWKU9wnTZjQOI9wIjm+UTQBRNoLamWvGtnmulfxRdqdQ8KfwpSsPxit1PNk3r38w+VvAcPqcT/5gAAAABJRU5ErkJggg=="
                  alt="logo"
                />
                <div className=" flex gap-4 items-center ">
                  <h2 className=" text-7xl  font-bold  ">85</h2>
                  <h2 className=" text-2xl">
                    Rental <br /> Outlets
                  </h2>
                </div>
              </div>
              <div className=" flex w-1/3 flex-col gap-4">
                <img
                  width={70}
                  className=" "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAnCAYAAACWn7G7AAAABHNCSVQICAgIfAhkiAAAAq5JREFUWEftmMF100AQhv9ZPzgRcG68RxScCjAVJFSAUgGuQJErCFSAbArAqQBTAU4FxB04FgduKDGn8LLDW0k2kixb0krEcmCPklf+9t+ZnX+WAIDtZ22wOAXoCEBTPavJ8AAegX51yfk+oQC08aVmkEmtPNDNS2LLGILodU2UXI3B/Jn4ZP9HzVWdL8BTsFx7VUPALYdlPgNosnm1uQWiN1GOrVd2DMDbvLJoguhFhrI8ANcgDIhbAHXuURhIdNGQFxsPg1vRhsD7e6Qs8xYlGMlX5HwbbToM2N47AgtlsBZj+ZzNAct2s4nbR7FjpdDiGj/H5Hhrj8dKYNk2OmBSgV/G93og7pLjDlYtsjQs24YJpk9gXEFIUydcfAgphiA8AfExOe4wDbg8rLU/AeE5coTKurBYLBqYUG96UDlsuP0fwbik/rRVKEZTfsyLhaerq6WsSiaVDGwZIxAdQqJLH6ZOBbBvQTiF6gD6rjn/n/l3C8NGWh6VuUFC0fVuVibnWYh/ovBj1aWoEX6fh9Rzj9WD4rDJLoL5jPpuzFzkAVuZ8ZYxWPKsvSnpwVrGRcymlUysJHQk0YJXzGPqu209WLVVckd1v4fh1xxITj1qtBQWZAJkh6DnEDNzHmKFw8Bf4V216mGiaSeYD3t33a9HvemuNmx4W/NVa4t1JtHNgbom0ozZiPNhXEJct6PHFttPW5APR35Vyxp55kcSuHDMxiYwn1PfVRd3sbEoFpmwOeb/m7DB+RLvfFM60PUCZ8yvTNmsba7i/X9YxrvSQirHlRx/Q1kKzUYZ4NRiUw7Wv8KPF4VEWdQFTj3yMouCteeAxEnS9fwpe4YJicBsKN8pZp1q/KwqKA+UiQ98soCT7Mc46vpY9kLvaJjBpNmwChBdtZcKjnJ92FFsnlrIbzuLZKamhYz8AAAAAElFTkSuQmCC"
                  alt="logo"
                />
                <div className=" flex gap-4  items-center ">
                  <h2 className=" text-7xl  font-bold  ">20</h2>
                  <h2 className=" text-2xl">
                    Repair <br /> Shop
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <Rental />
        </div>
        <Book />
      </motion.div>
    );
}

export default About
