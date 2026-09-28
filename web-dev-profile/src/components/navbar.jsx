// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-scroll";
// import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
// import { useState } from "react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   const links = ["home", "about", "lab"];

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -80, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#1A0B2E]/30"
//       >
//         <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
//           <div className="text-xl font-semibold text-gray-300">ΞGIODcodes</div>

//           {/* Desktop Links */}
//           <ul className="hidden md:flex gap-8 text-sm text-gray-300">
//             {links.map((item) => (
//               <li
//                 key={item}
//                 className="cursor-pointer hover:text-purple-400"
//               >
//                 <Link to={item} smooth duration={500} offset={-80}>
//                   {item.toUpperCase()}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setOpen(true)}
//             className="md:hidden text-2xl"
//           >
//             <HiOutlineMenuAlt3 />
//           </button>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ y: "-100%" }}
//             animate={{ y: 0 }}
//             exit={{ y: "-100%" }}
//             transition={{ duration: 0.4 }}
//             className="fixed inset-0 bg-[#1A0B2E] z-[999] flex flex-col"
//           >
//             <div className="flex justify-between items-center px-6 py-4">
//               <span className="text-xl font-semibold">Ξ</span>
//               <button onClick={() => setOpen(false)} className="text-2xl">
//                 <HiX />
//               </button>
//             </div>

//             <div className="flex flex-col items-center justify-center flex-1 gap-8 text-xl">
//               {links.map((item) => (
//                 <motion.div
//                   key={item}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 }}
//                 >
//                   <Link
//                     to={item}
//                     smooth
//                     duration={500}
//                     offset={-80}
//                     onClick={() => setOpen(false)}
//                     className="cursor-pointer hover:text-purple-400"
//                   >
//                     {item.toUpperCase()}
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }




import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "lab", label: "LAB" },
  { id: "contact", label: "CONTACT US" },
];


  


  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-md  bg-transparent/25"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-xl font-semibold text-gray-300">ΞGIODcodes</div>

          {/* Desktop Links */}
         <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300">
        {links.map(({ id, label }) => {
        const isContact = id === "contact";

       return (
         <li key={id}>
           <Link
          to={id}
          smooth
          duration={500}
          offset={-80}
          className={`cursor-pointer transition-all duration-300
             ${
              isContact
                ? "px-5 py-2 rounded-full border"
                : "hover:text-purple-400"
                    }
                  `}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl"
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/90 z-[999] flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-4">
              <span className="text-xl font-semibold">Ξ</span>
              <button onClick={() => setOpen(false)} className="text-2xl">
                <HiX />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-8 text-xl">
              {links.map(({ id, label }) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    to={id}
                    smooth
                    duration={500}
                    offset={-80}
                    onClick={() => setOpen(false)}
                    className={`cursor-pointer transition-colors
                      ${id === "contact" ? "text-purple-400 font-semibold" : "hover:text-purple-400"}
                    `}
                  >
                    {label.toUpperCase()}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
