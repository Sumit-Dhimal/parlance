
import { Link } from "react-router";
import { motion } from "framer-motion";
import { LuArrowLeft, LuHouse, LuSearchX } from "react-icons/lu";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full text-center">

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mb-8"
        >
          <h1 className="text-[140px] sm:text-[200px] font-extrabold 
            leading-none tracking-tighter text-[#DCE8F5]">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="bg-white shadow-xl rounded-2xl p-6"
            >
              <LuSearchX className="text-[#4A70A9] w-14 h-14 sm:w-20 sm:h-20" />
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="inline-block text-sm font-semibold tracking-widest 
            uppercase text-[#4A70A9] mb-4">
            Page Not Found
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5">
            Oops! You've lost your way.
          </h2>

          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-9">
            The page you're looking for might have been removed,
            had its name changed, or is temporarily unavailable.
            Let's get you back on track.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2
                bg-[#4A70A9] hover:bg-[#365985] text-white
                px-7 py-3.5 rounded-full font-semibold
                transition-all duration-300 hover:-translate-y-1
                shadow-lg shadow-blue-900/10"
            >
              <LuHouse size={19} />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2
                border border-gray-300 text-gray-700
                hover:bg-gray-100 px-7 py-3.5 rounded-full
                font-semibold transition-all duration-300"
            >
              <LuArrowLeft size={19} />
              Go Back
            </button>
          </div>
        </motion.div>

        {/* Footer text */}
        <p className="mt-16 text-sm text-gray-400">
          © {new Date().getFullYear()} PIA School. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default NotFound;
