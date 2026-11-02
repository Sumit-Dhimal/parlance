
import { Link } from "react-router";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiArrowUpRight,
} from "react-icons/fi";

import Logo from "../assets/pia_logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-300">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-8">

        {/* School Info */}
        <div>
          <Link to="/" className="mb-4 inline-flex items-center gap-3">
            <img
              src={Logo}
              alt="PIA School Logo"
              className="h-16 w-16 object-contain p-1"
            />
            <div>
              <h2 className="text-xl font-bold text-white">
                Parlance
              </h2>
              <p className="text-sm text-gray-400">
                Learn. Grow. Succeed.
              </p>
            </div>
          </Link>

          <p className="mt-3 text-sm leading-7 text-gray-400">
            Empowering students with knowledge, skills, and values
            to build a brighter future.
          </p>

          {/* Social Links */}
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-full bg-slate-800 p-3 transition hover:bg-blue-600 hover:text-white"
            >
              <FiFacebook size={18} />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-slate-800 p-3 transition hover:bg-pink-600 hover:text-white"
            >
              <FiInstagram size={18} />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="rounded-full bg-slate-800 p-3 transition hover:bg-red-600 hover:text-white"
            >
              <FiYoutube size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="inline-flex items-center gap-2 text-sm transition hover:text-white"
                >
                  <FiArrowUpRight size={15} />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Contact Us
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <FiMapPin
                size={19}
                className="mt-1 shrink-0 text-blue-400"
              />
              <span>
                Your School Address,
                <br />
                Nepal
              </span>
            </li>

            <li className="flex items-center gap-3">
              <FiPhone size={18} className="shrink-0 text-blue-400" />
              <a
                href="tel:+9779800000000"
                className="transition hover:text-white"
              >
                +977-9800000000
              </a>
            </li>

            <li className="flex items-start gap-3">
              <FiMail
                size={18}
                className="mt-1 shrink-0 text-blue-400"
              />
              <a
                href="mailto:info@piaschool.edu.np"
                className="break-all transition hover:text-white"
              >
                info@piaschool.edu.np
              </a>
            </li>
          </ul>
        </div>

        {/* School Information */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">
            Explore
          </h3>

          <p className="text-sm leading-7 text-gray-400">
            Discover our academic programs, school activities,
            and learning environment.
          </p>

          <Link
            to="/about"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Learn More
            <FiArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-sm text-gray-400 sm:flex-row sm:px-8 sm:text-left">
          <p>
            © {currentYear} PIA School. All rights reserved.
          </p>

          <p>
            Made with care for our students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
