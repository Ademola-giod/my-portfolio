import { motion } from "framer-motion";
import CapabilityCard from "./capabilityCard";



export default function Capability() {
  return (
    <section
      id="lab"
      className="relative px-6 py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold mb-12"
        >
          what i build ?
        </motion.h2>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-20">
          
          <CapabilityCard />

          {/* made changes */}
          {/* <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard /> */}
        </div>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm text-gray-400 max-w-xl mx-auto mb-12"
        >
          I'm currently looking to join a{" "}
          <span className="text-purple-400">cross-functional</span> team
          that values improving people's lives through accessible design.
        </motion.p>

        {/* Orbit */}
        
      </div>
    </section>
  );
}
