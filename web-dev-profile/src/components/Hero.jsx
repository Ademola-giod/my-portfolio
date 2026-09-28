import { motion } from "framer-motion";




export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen px-4 flex items-center justify-center text-textColour overflow-hidden"
    >
      {/*  BACKGROUND BLOBS */}
      <div className="absolute -top-32 -left-32 w-80 h-80 md:w-96 md:h-96 bg-purple-600/30 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 md:w-96 md:h-96 bg-pink-600/20 rounded-full blur-[160px]" />

      {/*  GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          relative z-10
          w-full max-w-xl md:max-w-3xl
          text-center
          rounded-3xl
          bg-white/5
          backdrop-blur-xl
           border-white/10
          px-6 py-10 md:px-10 md:py-14
        "
      >
        <h2 className="text-xs md:text-sm text-gray-400 mb-3">
          Hi, I’m <span className="text-white">Idowu Ademola</span> 👋
        </h2>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug md:leading-tight">
          Turning ideas into{" "}
          <span className="text-purple-400">
            profitable, real-world
          </span>{" "}
          web applications
        </h1>

        <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-400">
          Full-stack solutions — frontend, backend, and deployment.
        </p>

        {/* CTA */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <button className="px-6 py-3 rounded-full bg-purple-500 hover:bg-purple-600 transition">
            View Projects
          </button>
          <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
            Hire Me
          </button>
        </div>
      </motion.div>
    </section>
  );
}
