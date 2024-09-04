// import { HERO_CONTENT } from "../constants";
// import profilePic from "../assets/projects/tosin.png";
// import { motion } from "framer-motion";

// const Hero = () => {
//    return (
//       <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//          <div className="flex flex-wrap lg:px-8 px-4">
//             {" "}
//             {/* Add padding here */}
//             <div className="w-full lg:w-1/2">
//                <div className="flex flex-col items-center lg:items-start">
//                   <motion.h1
//                      initial={{ x: -100, opacity: 0 }}
//                      animate={{ x: 0, opacity: 1 }}
//                      transition={{ duration: 0.5, delay: 0.2 }}
//                      className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
//                   >
//                      Tosin Ehindero
//                   </motion.h1>
//                   <motion.span
//                      initial={{ x: -100, opacity: 0 }}
//                      animate={{ x: 0, opacity: 1 }}
//                      transition={{ duration: 0.5, delay: 0.5 }}
//                      className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
//                   >
//                      Full-stack Engineer
//                   </motion.span>
//                   <motion.p
//                      initial={{ x: -100, opacity: 0 }}
//                      animate={{ x: 0, opacity: 1 }}
//                      transition={{ duration: 0.5, delay: 1 }}
//                      className="my-2 max-w-xl py-6 font-light tracking-tighter"
//                   >
//                      {HERO_CONTENT}
//                   </motion.p>
//                </div>
//             </div>
//             <div className="w-full lg:w-1/2 lg:p-8">
//                <div className="flex justify-center">
//                   <motion.img
//                      initial={{ x: 100, opacity: 0 }}
//                      animate={{ x: 0, opacity: 1 }}
//                      transition={{duration:1, delay:1}}
//                      src={profilePic}
//                      alt=""
//                      className="max-w-full h-auto"
//                   />
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default Hero;


import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/projects/tosin.png";
import { motion } from "framer-motion";

const Hero = () => {
   return (
      <div className="border-b border-neutral-900 pb-4 lg:mb-35">
         <div className="flex flex-wrap lg:px-8 px-4">
            <div className="w-full lg:w-1/2">
               <div className="flex flex-col items-center lg:items-start">
                  <motion.h1
                     initial={{ x: -100, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                     className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                  >
                     Tosin Ehindero
                  </motion.h1>
                  <motion.span
                     initial={{ x: -100, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ duration: 0.5, delay: 0.5 }}
                     className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
                  >
                     Full-stack Engineer
                  </motion.span>
                  <motion.p
                     initial={{ x: -100, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ duration: 0.5, delay: 1 }}
                     className="my-2 max-w-xl py-6 font-light tracking-tighter"
                  >
                     {HERO_CONTENT}
                  </motion.p>
               </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
               <div className="flex justify-center">
                  <motion.div
                     initial={{ x: 100, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ duration: 1, delay: 1 }}
                     className="relative w-[500px] h-[500px]" // Set the container size to 500x500
                  >
                     <img
                        src={profilePic}
                        alt="Profile Picture"
                        className="w-full h-full object-cover rounded-lg"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 rounded-lg"></div> 
                     {/* Overlay with gradient */}
                  </motion.div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
