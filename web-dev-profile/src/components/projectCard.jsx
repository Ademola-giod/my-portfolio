// import { motion } from "framer-motion";


// const isMobile = window.innerWidth < 768;


// const ProjectCard = (
//   { 
//     title, 
//     description, 
//     image, 
//     reverse

//   }) => {

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: isMobile ? 30 : 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.7, ease: "easeOut" }}
//       className={`relative flex flex-col gap-10 
//         md:flex-row md:items-center md:gap-12
//         ${reverse ? "md:flex-row-reverse" : ""}
//       `}
//     >
//       {/* IMAGE */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         whileHover={{ scale: 1.03 }}
//         className="w-full md:w-1/2 relative"
//       >
//         {/* Glow */}
//         <motion.div
//           animate={{ opacity: [0.3, 0.6, 0.3] }}
//           transition={{ duration: 4, repeat: Infinity }}
//           className="absolute inset-0  blur-3xl rounded-xl"
//         />

//         <motion.img
//           animate={{ y: [0, -6, 0] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//           src={image}
//           alt={title}
//           className="relative w-full rounded-xl shadow-xl"
//         />
//       </motion.div>

//       {/* TEXT */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.1 }}
//         className="w-full md:w-1/2 space-y-4 text-center md:text-left"
//       >
//         <p className="text-sm text-purple-400">Featured Project</p>

//         <h3 className="text-2xl md:text-3xl font-semibold text-white">
//           {title}
//         </h3>

//         <div className="bg-white/5 backdrop-blur-md p-5 md:p-6 rounded-xl text-gray-300 text-sm md:text-base">
//           {description}
//         </div>

//         {/* Decorative icons */}
//         <div className="flex justify-center md:justify-start gap-3 text-white/60 text-lg">
//           ✦ ✦
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ProjectCard;



// import { motion } from "framer-motion";


// const isMobile = window.innerWidth < 768;


// const ProjectCard = (
//   { 
//     title, 
//     description, 
//     image, 
//     reverse,
//     status,
//     live,
//     github

//   }) => {

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: isMobile ? 30 : 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.7, ease: "easeOut" }}
//       className={`relative flex flex-col gap-10 
//         md:flex-row md:items-center md:gap-12
//         ${reverse ? "md:flex-row-reverse" : ""}
//       `}
//     >
//       {/* IMAGE */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         whileHover={{ scale: 1.03 }}
//         className="w-full md:w-1/2 relative"
//       >
//         {/* Glow */}
//         <motion.div
//           animate={{ opacity: [0.3, 0.6, 0.3] }}
//           transition={{ duration: 4, repeat: Infinity }}
//           className="absolute inset-0  blur-3xl rounded-xl"
//         />

//         <motion.img
//           animate={{ y: [0, -6, 0] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//           src={image}
//           alt={title}
//           className="relative w-full rounded-xl shadow-xl"
//         />
//       </motion.div>

//       {/* TEXT */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.1 }}
//         className="w-full md:w-1/2 space-y-4 text-center md:text-left"
//       >
//         <p className="text-sm text-purple-400">Featured Project</p>

//         <h3 className="text-2xl md:text-3xl font-semibold text-white">
//           {title}
//         </h3>

//         <div className="bg-white/5 backdrop-blur-md p-5 md:p-6 rounded-xl text-gray-300 text-sm md:text-base">
//           {description}
//         </div>

//         {/* Decorative icons */}
//         <div className="flex justify-center md:justify-start gap-3 text-white/60 text-lg">
//           ✦ ✦
//         </div>
//            {/* LINKS — NEW */}
//         <div className="flex gap-4 justify-center md:justify-start">
//           {live && (
//             <a
//               href={live}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-5 py-2 rounded-full text-sm
//                 bg-purple-500/10 text-purple-300
//                 hover:bg-purple-500/20 transition"
//             >
//               Live Demo
//             </a>
//           )}

//           {github && (
//             <a
//               href={github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-5 py-2 rounded-full text-sm
//                 bg-white/10 text-white
//                 hover:bg-white/20 transition"
//             >
//               GitHub
//             </a>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default ProjectCard;




import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const isMobile =
  typeof window !== "undefined" && window.innerWidth < 768;

const ProjectCard = ({
  title,
  description,
  image,
  reverse,
  live,
  github,
  tech = [],
}) => {
  return (
    <motion.div
      onClick={() => live && window.open(live, "_blank")}
      initial={{ opacity: 0, y: isMobile ? 30 : 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative flex flex-col gap-10 cursor-pointer
        md:flex-row md:items-center md:gap-12
        ${reverse ? "md:flex-row-reverse" : ""}
      `}
    >
      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
        className="w-full md:w-1/2 relative"
      >
        <motion.img
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          src={image}
          alt={title}
          className="relative w-full rounded-xl shadow-xl"
        />
      </motion.div>

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="w-full md:w-1/2 space-y-4 text-center md:text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-sm text-purple-400">Featured Project</p>

        <h3 className="text-2xl md:text-3xl font-semibold text-white">
          {title}
        </h3>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full
                bg-white/10 text-white/80"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="bg-white/5 backdrop-blur-md p-5 md:p-6 rounded-xl text-gray-300 text-sm md:text-base">
          {description}
        </div>

        {/* ANIMATED DECORATIVE ICONS */}
        <motion.div
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="flex justify-center md:justify-start gap-3 text-white/60 text-lg"
        >
          <svg width="14" height="14" fill="currentColor">
            <polygon points="7,0 9,5 14,7 9,9 7,14 5,9 0,7 5,5" />
          </svg>
          <svg width="14" height="14" fill="currentColor">
            <polygon points="7,0 9,5 14,7 9,9 7,14 5,9 0,7 5,5" />
          </svg>
        </motion.div>

        {/* LINKS */}
        <div className="flex gap-4 justify-center md:justify-start pt-2">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm
                bg-purple-500/10 text-purple-300
                hover:bg-purple-500/20 transition"
            >
              <FiExternalLink />
              Live Demo
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm
                bg-white/10 text-white
                hover:bg-white/20 transition"
            >
              <FiGithub />
              GitHub
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
