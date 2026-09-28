import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

const skills = [
  FaReact,
  FaNodeJs,
  FaFigma,
  FaJs,
  FaHtml5,
  FaCss3Alt,
];

export default function SkillsOrbit() {
  return (
    <div className="relative flex items-center justify-center w-full h-[520px] overflow-visible">

      {/* OUTER GLOW */}
      <div className="absolute w-[420px] h-[420px] rounded-ful" />

      {/* ORBIT RING */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[420px] h-[420px] rounded-full border border-purple-500/30"
      />

      {/* CENTER LOGO */}
      <div className="relative z-10 w-32 h-32 rounded-full  flex items-center justify-center text-5xl font-semibold 
          bg-gradient-to-br from-purple-500 to-midnight-700 text-white shadow-lg shadow-white-600/30
        ">
        G
      </div>

      {/* ICONS */}
      {skills.map((Icon, index) => {
        const angle = (index / skills.length) * 360;

        return (
          <div
            key={index}
            className="absolute w-[420px] h-[420px] flex items-center justify-center"
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6"
            >
              <div className="w-14 h-14 rounded-full  border border-purple-500/40 flex items-center justify-center shadow-lg">
                <Icon className="text-2xl text-white" />
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
