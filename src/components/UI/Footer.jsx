// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="content-container text-white py-12 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <footer className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row justify-between gap-12">
        {/* Blog Links */}
        <motion.div variants={fadeIn} className="order-1 lg:order-none">
          <h3 className="text-accent font-gilroy font-bold mb-4 text-2xl">
            More on The Blog
          </h3>
          <ul className="space-y-2 text-lg font-gilroy font-medium">
            <li>
              <a href="#" className="hover:underline">
                About MNTN
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contributors & Writers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Write For Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </motion.div>

        {/* MNTN Links */}
        <motion.div variants={fadeIn} className="order-2 lg:order-none">
          <h3 className="text-accent font-gilroy font-bold mb-4 text-2xl">
            More on MNTN
          </h3>
          <ul className="space-y-2 text-lg font-gilroy font-medium">
            <li>
              <a href="#" className="hover:underline">
                The Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Left Column (MNTN Brand & Info) */}
        <motion.div
          variants={fadeIn}
          className="order-3 lg:order-first lg:w-2/5 w-full"
        >
          <h1 className="text-white font-bold uppercase font-chronicle text-3xl">
            <a href="#" aria-label="Home">
              mntn
            </a>
          </h1>
          <p className="mt-5 font-bold font-gilroy tracking-wider text-lg leading-relaxed">
            Get out there & discover your next
            <br />
            <span className="leading-10">slope, mountain & destination!</span>
          </p>
          <p className="text-lg text-gray-400 mt-6 font-gilroy font-medium">
            © 2023 MNTN, Inc. Terms & Privacy
          </p>
        </motion.div>
      </footer>
    </motion.div>
  );
};
