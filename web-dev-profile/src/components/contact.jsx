// import { motion } from "framer-motion";

// const Contact = () => {
//   return (
//     <section className="relative overflow-hidden py-32 px-6">
      
//       {/* BACKDROP GLOW */}
//       <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px]  bg-gradient-to-br from-purple-500/40 via-black/20 to-purple-700/30 rounded-full blur-[180px]" />

//       {/* CONTENT */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative max-w-xl mx-auto text-center space-y-6"
//       >
//         {/* TITLE */}
//         <h2 className="text-xl md:text-2xl text-white font-medium">
//           Contact
//         </h2>

//         {/* DESCRIPTION */}
//         <p className="text-sm md:text-base text-gray-400 leading-relaxed">
//           I’m currently looking to join a cross-functional team that values
//           improving people’s lives through accessible design, or have a
//           project in mind? Let’s connect.
//         </p>

//         {/* EMAIL */}
//         <a
//           href="mailto:idowuademola65@gmail.com"
//           className="block text-sm md:text-base text-gray-300 hover:text-white transition"
//         >
//           idowuademola65@gmail.com
//         </a>

//         {/* SOCIAL ICONS */}
//         <div className="flex justify-center gap-6 pt-4 text-gray-400">
//           <a href="#" className="hover:text-white transition">◎</a>
//           <a href="#" className="hover:text-white transition">◯</a>
//           <a href="#" className="hover:text-white transition">⬡</a>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Contact;



import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32 px-6 text-textColour"
    >
      {/* BACKDROP GLOW */}
      <div className="absolute bottom-[-220px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-purple-500/40 via-black/20 to-purple-700/30 rounded-full blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-xl mx-auto text-center"
      >
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Let’s work together
        </h2>

        {/* DESCRIPTION */}
        <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8">
          Have a project in mind or need a full-stack developer to bring
          your idea to life? Send me a message and let’s talk.
        </p>

        {/* FORM */}
        <form className="space-y-4">
          <input
            type="text"   
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-400 transition"
          />

          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-400 transition"
          />

          <textarea
            rows="4"
            placeholder="Tell me about your project"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-purple-400 transition resize-none"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition font-medium"
          >
            Send Message
          </button>
        </form>

        {/* DIRECT CONTACT */}
        <p className="mt-6 text-sm text-gray-400">
          Or email me directly at{" "}
          <a
            href="mailto:idowuademola65@gmail.com"
            className="text-purple-400 hover:underline"
          >
            idowuademola65@gmail.com
          </a>
        </p>
      </motion.div>
    </section>
  );
}
 