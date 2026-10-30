
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { LuMenu, LuX } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/pia_logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // this will ensure that page will reload from top
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  // handles scroll background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
  ];

  const linkStyles = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-300 hover:text-blue-600 ${
      isActive
        ? "text-blue-600 font-semibold"
        : isScrolled
          ? "text-gray-700"
          : "text-white"
    }`;

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: isScrolled
          ? "#ffffff"
          : "rgba(255,255,255,0)",
        boxShadow: isScrolled
          ? "0 4px 20px rgba(0,0,0,0.08)"
          : "0 0px 0px rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 z-50 w-full"
    >
      <motion.nav
        animate={{
          paddingTop: isScrolled ? "8px" : "16px",
          paddingBottom: isScrolled ? "8px" : "16px",
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8"
      >
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            src={logo}
            alt="PIA logo"
            className="w-auto h-20 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={linkStyles}
            >
              {({ isActive }) => (
                <span className="relative py-2">
                  {link.name}

                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
                    initial={false}
                    animate={{
                      width: isActive ? "100%" : "0%",
                    }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.25 }}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-800 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={isOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              className="block"
            >
              {isOpen ? <LuX /> : <LuMenu />}
            </motion.span>
          </AnimatePresence>
        </button>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden bg-white md:hidden"
          >
            <div className="flex flex-col gap-5 border-t border-gray-100 px-6 py-5">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={itemVariants}
                  transition={{ duration: 0.25 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={linkStyles}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
