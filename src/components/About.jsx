import { motion } from "framer-motion";
import aboutImg from "../assets/projects/tosinp2.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
   return (
      <div className="border-b border-neutral-900 pb-4 lg:px-8 px-4">
         <h1 className="my-20 text-center text-4xl">
            About<span className="text-neutral-500">Me</span>
         </h1>
         <div className="flex flex-wrap">
            <motion.div
               whileInView={{ opacity: 1, x: 0 }}
               initial={{ opacity: 0, x: -100 }}
               transition={{ duration: 0.5 }}
               className="w-full lg:w-1/2 lg:p-8"
            >
               <div className="flex items-center justify-center">
                  <div className="relative w-[500px] h-[500px]">
                     <img
                        src={aboutImg}
                        alt="About"
                        className="w-full h-full object-cover rounded-2xl"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 rounded-2xl"></div> 
                     {/* Overlay with gradient */}
                  </div>
               </div>
            </motion.div>
            <motion.div
               whileInView={{ opacity: 1, x: 0 }}
               initial={{ opacity: 0, x: 100 }}
               transition={{ duration: 0.5 }}
               className="w-full lg:w-1/2"
            >
               <div className="flex justify-center lg:justify-start px-4 lg:px-0">
                  <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
               </div>
            </motion.div>
         </div>
      </div>
   );
};

export default About;
