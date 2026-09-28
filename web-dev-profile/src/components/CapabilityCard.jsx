import { motion } from "framer-motion";
import { FaCode, FaServer, FaCreditCard, FaDatabase } from "react-icons/fa";

const data = [
  {
    title: "Full-Stack Web Applications",
    description:
      "End-to-end web applications with modern UI, secure backend logic, and deployment.",
    icon: <FaCode />,
  },
  {
    title: "Payment Integrations",
    description:
      "Secure payment systems using Paystack or Flutterwave with webhook verification.",
    icon: <FaCreditCard />,
  },
  {
    title: "Backend APIs",
    description:
      "RESTful APIs with authentication, validation, and database integration.",
    icon: <FaServer />,
  },
  {
    title: "Database Design",
    description:
      "MongoDB schema design, relationships, and data persistence.",
    icon: <FaDatabase />,
  },
];

 function CapabilityCard() {
  return data.map((item, index) => (

    <motion.div
      key={index}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 160 }}
      className="relative p-6 rounded-2xl bg-black/30
        border border-purple-400/20 backdrop-blur-xl text-left
        shadow-lg hover:shadow-purple-600/30 transition"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-purple-500
          flex items-center justify-center text-white shadow-lg">
          {item.icon}
        </div>

        <div>
          <h3 className="font-medium text-sm md:text-base">
            {item.title}
          </h3>

          <p className="text-xs text-gray-400 mt-1 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  ));
}

export default CapabilityCard;