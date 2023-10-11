import { motion } from "framer-motion";

function TeamMembers({team}) {

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="  flex flex-col gap-2 col-span-3 md:col-span-1 shadow-xl"
      >
        <img loading="lazy"
          className=" w-full  sm:w-[70%] md:w-full sm:mx-auto h-72"
          src={team.img}
          alt=""
        />
        <h2 className="  text-center text-xl font-semibold">{team.name}</h2>
        <h3 className="  mb-3 text-xl text-gray-700  text-center">
          {team.role}
        </h3>
      </motion.div>
    );
}

export default TeamMembers
