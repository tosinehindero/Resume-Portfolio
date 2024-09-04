// import {RiReactjsLine} from "react-icons/ri"
// import {TbBrandNextjs} from "react-icons/tb"
// import {SiMongodb} from "react-icons/si"
// import { SiCsharp } from "react-icons/si";
// import {FaNodeJs} from "react-icons/fa"
// import { SiExpress } from "react-icons/si";
// import { BiLogoPostgresql } from "react-icons/bi";
// import { SiMicrosoftsqlserver } from "react-icons/si";
// import { SiGithubactions } from "react-icons/si";
// import { FaAws } from "react-icons/fa";

// const Technologies = () => {
//    return (
//       <div className="border-b border-neutral-800 pb-24">
//          <h1 className="my-20 text-center text-4xl">Technologies</h1>
//          <div className="flex flew-wrap items-center justify-center gap-4">
//             <div className="rounded-2xl border-4 border-neutral-800 p-4">
//             <RiReactjsLine className="text-7xl text-cyan-400" />
//             </div>
//             <div className="rounded-2xl border-4 border-neutral-800 p-4">
//             <TbBrandNextjs className="text-7xl" />
//             </div>
//             <div className="rounded-2xl border-4 border-neutral-800 p-4">
//             <SiCsharp className="text-7xl text-violet-700" />
//             </div>
//             <div className="rounded-2xl border-4 border-neutral-800 p-4">
//             <SiMongodb className="text-7xl text-green-500" />
//             </div>
//             <div className="rounded-2xl border-4 border-neutral-800 p-4">
//             <SiExpress className="text-7xl text-cyan-400" />
//             </div>
//             <div className="rounded-2xl border-4 border-neutral-800 p-4">
//             <FaNodeJs className="text-7xl text-green-500" />
//             </div>
//             <div className="rounded-2xl border-4 border-neutral-800 p-4">
//             <BiLogoPostgresql className="text-7xl text-sky-700" />
//             </div>
//             <div className="rounded-2xl border-4 border-neutral-800 p-4">
//             <SiMicrosoftsqlserver className="text-7xl text-red-700" />
//             </div>
//             <div className="rounded-2xl border-4 border-neutral-800 p-4">
//             <SiGithubactions className="text-7xl text-blue-900" />
//             </div>
//             <div className="rounded-2xl border-4 border-neutral-800 p-4">
//             <FaAws className="text-7xl text-orange-500" />
//             </div>
//          </div>
//       </div>
//    );
// };

// export default Technologies;

import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { SiCsharp } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiGithubactions } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const iconVariants = (duration) => ({
   initial: { y: -10 },
   animate: {
      y: [10, -10],
      transition: {
         duration: duration,
         ease: "linear",
         repeat: Infinity,
         repeatType: "reverse",
      },
   },
});

const Technologies = () => {
   return (
      <div className="border-b border-neutral-800 pb-24 lg:px-8 px-4">
         {" "}
         {/* Add padding for the container */}
         <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl"
         >
            Technologies
         </motion.h1>
         <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-8"
         >
            {" "}
            {/* Adjusted gap and added flex-wrap */}
            <motion.div
               variants={iconVariants(2.5)}
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-6"
            >
               {" "}
               {/* Increased padding */}
               <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
               variants={iconVariants(2.5)}
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-6"
            >
               <TbBrandNextjs className="text-7xl" />
            </motion.div>
            <motion.div
               variants={iconVariants(3)}
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-6"
            >
               <SiCsharp className="text-7xl text-violet-700" />
            </motion.div>
            <motion.div
               variants={iconVariants(2)}
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-6"
            >
               <SiMongodb className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
               variants={iconVariants(4)}
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-6"
            >
               <SiExpress className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
               variants={iconVariants(2.5)}
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-6"
            >
               <FaNodeJs className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
               variants={iconVariants(6)}
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-6"
            >
               <BiLogoPostgresql className="text-7xl text-sky-700" />
            </motion.div>
            <motion.div
               variants={iconVariants(2.5)}
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-6"
            >
               <SiMicrosoftsqlserver className="text-7xl text-red-700" />
            </motion.div>
            <motion.div
               variants={iconVariants(4)}
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-6"
            >
               <SiGithubactions className="text-7xl text-blue-900" />
            </motion.div>
            <motion.div
               variants={iconVariants(3)}
               initial="initial"
               animate="animate"
               className="rounded-2xl border-4 border-neutral-800 p-6"
            >
               <FaAws className="text-7xl text-orange-500" />
            </motion.div>
         </motion.div>
      </div>
   );
};

export default Technologies;
