import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion"; 

const SectionBlock = ({
  id,
  number,
  title,
  heading,
  text,
  image,
  reverse = false,
}) => {
  return (
    <div className="content-container" id={id} key={id}>
      <div
        className={`flex flex-col ${
          reverse ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-center justify-center gap-6 md:gap-10 lg:gap-20 xl:gap-45 w-full 
        ${
          number === "01"
            ? "mt-20 md:mt-32 lg:mt-50 xl:mt-150"
            : "mt-16 md:mt-24 lg:mt-50"
        }
        ${number === "03" ? "mb-16 md:mb-24 lg:mb-50" : ""}`}
      >
        {/* Image block with animation */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[85%] lg:w-[75%] xl:w-[80%] md:order-first lg:order-none mt-6 md:mt-0 mb-6 md:mb-8 lg:mb-0"
        >
          <img
            src={image || "/placeholder.svg"}
            alt={`Section ${number}`}
            className="w-full"
            loading="lazy"
          />
        </motion.div>

        {/* Text block with animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex flex-col items-start justify-center w-full px-4 sm:px-6 md:px-8 lg:px-10 
            after:absolute after:content-[attr(data-num)] after:text-[6rem] sm:after:text-[8rem] md:after:text-[10rem] lg:after:text-[12rem] xl:after:text-[15rem] 
            after:font-bold after:font-gilroy after:text-white after:top-0 after:opacity-10 after:-z-10 after:-translate-y-1/2
            after:-left-10 md:after:-left-18 lg:after:-left-20 xl:after:-left-30"
          data-num={number}
        >
          <div className="flex gap-x-2 sm:gap-x-3 md:gap-x-4 items-center mb-3 md:mb-4">
            <div className="w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] h-0.5 bg-accent"></div>
            <p className="text-accent uppercase tracking-widest text-sm sm:text-base md:text-lg font-bold">
              {title}
            </p>
          </div>
          <h2 className="text-white font-chronicle text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-start">
            {heading}
          </h2>
          <p className="mt-4 md:mt-6 lg:mt-8 text-white text-base sm:text-lg font-gilroy font-bold tracking-wide text-start">
            {text}
          </p>
          <p className="mt-3 md:mt-4 text-base sm:text-lg font-gilroy text-accent font-bold flex items-center gap-2">
            read more <FaArrowRightLong />
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionBlock;
