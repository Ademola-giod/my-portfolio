// import React from 'react'
// import { motion } from "framer-motion";
// import MeImg from "../assets/me.png";

// const About = () => {
//   return (
//     <section 
//     id=""
//       className= "pt-28 md:pt-36 pb-20 px-6 text-center text-textColour "
//     >

//         < div className="mt-6 md:mt-8 text-lg md:text-2xl font-medium">
//             I'm a <span className="text-purple-400">Software Engineer</span>.
//           </div>

//           <p className="text-xs md:text-sm text-gray-400 mt-2">
//             Currently, I’m a Software Engineer at{" "}
//             <span className="text-blue-400">Facebook</span>.
//           </p>

//           <p className="mt-5 md:mt-6 text-xs md:text-sm text-gray-400 leading-relaxed">
//             A self-taught UI/UX designer with 3+ years experience creating
//             delightful digital products that balance user needs and business
//             goals.
//           </p>

//           {/* IMAGE - LEFT */}
//                   <motion.div
//                     animate={{ y: [0, -10, 0] }}
//                     transition={{ repeat: Infinity, duration: 4 }}
//                     className="relative w-32 h-32 md:w-48 md:h-48 flex-shrink-0"
//                   >
//                     <div className="absolute inset-0 bg-midnight blur-2xl opacity-40 rounded-full" />
//                     <img
//                       src={MeImg}
//                       alt="Avatar"
//                       className="relative w-full h-full rounded-full object-cover"
//                     />
//                   </motion.div>
//     </section>
//   )
// }

// export default About


import { motion } from "framer-motion";
import MeImg from "../assets/me.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-4 pt-24 pb-28 text-textColour overflow-hidden"
    >
      {/* 🔮 BACKGROUND BLOB */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-purple-600/20 rounded-full blur-[160px]" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* 🖼 IMAGE — FIRST ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:order-2"
        >
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64">
            <div className="absolute inset-0 bg-purple-500/30 blur-3xl rounded-full" />
            <img
              src={MeImg}
              alt="Idowu Ademola"
              className="relative w-full h-full rounded-2xl object-cover border border-white/10"
            />
          </div>
        </motion.div>

        {/* 📝 TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Let’s get to know me closer
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
            I’m a full-stack web developer building scalable,
            high-performance applications for businesses and startups.
            I handle everything — UI, backend logic, databases,
            integrations, and deployment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
