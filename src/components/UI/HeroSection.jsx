import { FaTwitter } from "react-icons/fa";
import { IoIosArrowRoundDown, IoLogoInstagram } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
import { HiMenu, HiX } from "react-icons/hi"; // Added for hamburger menu
import SectionBlock from "./SectionBlock";

import { slides } from "../../Utils/Data/heroData";
import { useState, useEffect, useRef } from "react";

export const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderPosition, setSliderPosition] = useState({ min: 0, max: 24.5 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const sectionRefs = useRef([]);
  const totalSections = slides.length + 1;

  // Calculate min & max percentage for slider progress bar
  const calculateSlider = (index) => {
    const step = 100 / totalSections;
    return {
      min: Math.max(0, step * index),
      max: Math.min(100, step * index + step - 0.5),
    };
  };

  // Scroll to section and update active index
  const goToSlide = (index) => {
    setActiveSlide(index);
    setSliderPosition(calculateSlider(index));
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  // Detect scroll to update active index and slider progress
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Close mobile menu when scrolling down
    if (currentScrollY > lastScrollY && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }

    setLastScrollY(currentScrollY);

    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const rect = ref.getBoundingClientRect();
      if (rect.top < window.innerHeight / 2 && rect.bottom > 0) {
        if (index !== activeSlide) {
          setActiveSlide(index);
          setSliderPosition(calculateSlider(index));
        }
      }
    });
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },);

  return (
    <div>
    
        <div
          className="absolute top-0 md:top-[-10%] lg:top-[-20%] xl:top-[-30%] w-full h-screen md:h-auto md:aspect-[1] -z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(150deg, rgba(11,29,38,0.9) 0%, rgba(11,29,38,0) 60%, rgba(11,29,38,0) 100%), 
          linear-gradient(to bottom, rgba(11,29,38,0) 0%, rgba(11,29,38,0) 30%, rgba(11,29,38,0) 50%, rgba(11,29,38,1) 90%), 
            url('/images/hero-image.webp')`,
          }}
          aria-hidden="true"
          role="img"
          loading="lazy"
        />

        <section>
          {/* Header */}
        <div className="container mx-auto py-4 md:py-6 px-4">
          <header className="flex items-center justify-between">
            <h1 className="text-white font-bold uppercase font-chronicle text-2xl md:text-3xl">
              <a href="#" aria-label="Home">
                mntn
              </a>
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex gap-6 lg:gap-10 text-lg lg:text-xl font-bold font-gilroy text-white">
                <li>
                  <a href="#">Equipment</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </nav>

            {/* Desktop Account */}
            <div className="hidden md:flex items-center gap-1 text-lg lg:text-xl font-bold font-gilroy text-white">
              <RiAccountCircleLine className="text-xl lg:text-2xl" />
              <a href="#" className="text-white">
                Account
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          </header>

          {/* Mobile Menu with Glassmorphism */}
          {mobileMenuOpen && (
            <div className="md:hidden fixed top-16 left-0 right-0 bg-[#0b1d266c] bg-opacity-40 backdrop-blur-md backdrop-filter z-50 p-6 shadow-lg transition-all border-t border-white border-opacity-10">
              <nav className="mb-6">
                <ul className="flex flex-col gap-6 text-lg font-bold font-gilroy text-white">
                  <li>
                    <a href="#" onClick={() => setMobileMenuOpen(false)}>
                      Equipment
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => setMobileMenuOpen(false)}>
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => setMobileMenuOpen(false)}>
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-1 text-lg font-bold font-gilroy text-white mb-6">
                <RiAccountCircleLine className="text-xl" />
                <a
                  href="#"
                  className="text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Account
                </a>
              </div>

              {/* Mobile Social Links */}
              <div className="flex items-center gap-6 text-white">
                <p className="font-gilroy">Follow us:</p>
                <IoLogoInstagram className="text-2xl" />
                <FaTwitter className="text-2xl" />
              </div>
            </div>
          )}
        </div>

        {/* Main Hero Section */}
        <main className="container mx-auto py-4 flex justify-between relative px-4">
          {/* Fixed Social Links - Only show on larger screens */}
          <div className="hidden md:flex fixed left-6 lg:left-10 xl:left-20 top-1/3 flex-col items-start gap-6 lg:gap-8 text-white text-xl lg:text-2xl font-gilroy z-40">
            <h3 className="transform rotate-90 whitespace-nowrap my-8 -mx-8">
              Follow us
            </h3>
            <IoLogoInstagram />
            <FaTwitter />
          </div>

          {/* Hero Text Content */}
          <div
            ref={(el) => (sectionRefs.current[0] = el)}
            className="relative h-full text-start px-2 my-16 sm:my-20 md:my-24 lg:my-32 w-full grid place-items-center"
          >
            <div>
              <div className="flex gap-x-2 md:gap-x-4 items-center justify-start mb-2 md:mb-4">
                <div className="w-[30px] md:w-[50px] h-0.5 bg-accent"></div>
                <p className="text-accent uppercase tracking-widest text-xs md:text-sm font-bold">
                  A Hiking Guide
                </p>
              </div>
              <h2 className="text-white font-chronicle text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-start">
                Be Prepared For The <br className="hidden sm:block" /> Mountains
                And Beyond!
              </h2>
              <div className="mt-4 md:mt-8 text-white flex items-start gap-1">
                <p className="text-base md:text-lg font-gilroy font-bold tracking-wide">
                  scroll down
                </p>
                <span className="block text-xl md:text-2xl animate-bounce">
                  <IoIosArrowRoundDown
                    size="24px"
                    className="md:w-[30px] md:h-[30px]"
                  />
                </span>
              </div>
            </div>
          </div>

          {/* Fixed Slide Navigation - Only show on larger screens */}
          <div className="hidden md:flex fixed right-6 lg:right-10 xl:right-20 top-1/3 items-end font-bold text-base lg:text-lg text-white capitalize h-[240px] lg:h-[300px] z-40">
            <div className="flex flex-col h-full justify-around">
              {[...Array(totalSections)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all relative capitalize font-gilroy cursor-pointer ${
                    activeSlide === index ? "text-accent" : ""
                  }`}
                >
                  {index === 0 ? "Start" : `0${index}`}
                </button>
              ))}
            </div>

            <div className="relative h-full w-4 lg:w-6 ml-2">
              <div className="absolute w-0.5 lg:w-1 h-full bg-white opacity-30 right-0 top-0"></div>
              <div
                className="absolute w-0.5 lg:w-1 bg-white right-0 top-0 transition-all duration-500"
                style={{
                  top: `${sliderPosition.min}%`,
                  height: `${sliderPosition.max - sliderPosition.min}%`,
                }}
              ></div>
            </div>
          </div>
        </main>

        {/* Slide Sections */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            ref={(el) => (sectionRefs.current[index + 1] = el)}
          >
            <SectionBlock {...slide} />
          </div>
        ))}
      </section>
    </div>
  );
};
