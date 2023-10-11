import { AnimatePresence, motion } from "framer-motion";
import TeamMembers from "../componots/TeamMembers";

function OurTeam() {
 const team = [
   {
     name: "ryan gosling",
     role: "Salesman",
     img: "https://cdn.britannica.com/93/215393-050-E428CADE/Canadian-actor-musician-Ryan-Gosling-2016.jpg",
   },
   {
     name: "michael scott",
     role: "manager",
     img: "https://people.com/thmb/BJqN8mOl0sT69KD6JlgmVO6MjqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/the-office-steve-864d7814dbcc4807944c7ea609c4972a.jpg",
   },
   {
     name: "lana del rey",
     role: "Hr",
     img: "https://imageio.forbes.com/specials-images/imageserve/642d941b1d97b3757b392965/0x0.jpg?format=jpg&width=1200",
   },

 ];
 
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="  my-10 grid  grid-cols-1  gap-4  md:grid-cols-3"
      >
        <h1 className=" text-6xl font-bold text-center col-span-3 my-5">
          Our Team
        </h1>
        <AnimatePresence>

        {team.map((t, i) => (
          <TeamMembers key={i} team={t} />
          ))}
          </AnimatePresence>
      </motion.div>
    );
}

export default OurTeam
