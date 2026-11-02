
import { useState } from "react";
import { motion } from "framer-motion";
import {
  LuMapPin,
  LuPhone,
  LuMail,
  LuClock,
  LuArrowRight,
  LuSend,
  LuMessageCircle,
  LuFacebook,
  LuInstagram,
} from "react-icons/lu";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const contactInfo = [
  {
    icon: LuMapPin,
    title: "Our Location",
    description: "Your School Address, City, Nepal",
  },
  {
    icon: LuPhone,
    title: "Phone Number",
    description: "+977 98XXXXXXXX",
  },
  {
    icon: LuMail,
    title: "Email Address",
    description: "info@piaschool.edu.np",
  },
  {
    icon: LuClock,
    title: "Office Hours",
    description: "Sunday – Friday, 10:00 AM – 5:00 PM",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend demonstration only.
    // Connect this to your backend API to send messages.
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="bg-white overflow-hidden">

      {/* Hero Section */}
      <section className="bg-[#EFECE3] pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-[#4A70A9] font-semibold uppercase tracking-[0.2em] text-sm">
              Get in Touch
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mt-5 leading-tight">
              We'd Love to
              <span className="text-[#4A70A9]"> Hear From You.</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mt-7 leading-relaxed max-w-2xl">
              Have questions about admissions, academic programs, or
              school activities? We're here to help. Reach out to us
              and let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information + Form */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              <span className="text-[#4A70A9] font-semibold uppercase tracking-[0.2em] text-sm">
                Contact Information
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-5">
                Let's Connect.
              </h2>

              <p className="text-gray-500 mt-5 leading-relaxed">
                We're always happy to assist parents, students, and
                visitors. Choose your preferred way to contact us.
              </p>

              <div className="mt-10 space-y-8">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-5 items-start">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-[#E9F0FA] flex items-center justify-center text-[#4A70A9]">
                        <Icon size={23} />
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="font-bold text-gray-900">
                  Follow Us
                </h3>

                <div className="flex gap-3 mt-5">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="w-11 h-11 rounded-full bg-[#E9F0FA] text-[#4A70A9] flex items-center justify-center hover:bg-[#4A70A9] hover:text-white transition-all"
                  >
                    <LuFacebook size={21} />
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-full bg-[#E9F0FA] text-[#4A70A9] flex items-center justify-center hover:bg-[#4A70A9] hover:text-white transition-all"
                  >
                    <LuInstagram size={21} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3 bg-white border border-gray-100 shadow-xl shadow-gray-200/50 rounded-3xl p-7 sm:p-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#E9F0FA] flex items-center justify-center text-[#4A70A9]">
                  <LuMessageCircle size={24} />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Fill out the form below and we'll get back to you.
                  </p>
                </div>
              </div>

              {submitted && (
                <div
                  role="status"
                  className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700 text-sm"
                >
                  Thank you! Your message has been submitted successfully.
                  (Demo only — no message has been sent to the school.)
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#4A70A9] focus:ring-2 focus:ring-[#4A70A9]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#4A70A9] focus:ring-2 focus:ring-[#4A70A9]/10 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+977 98XXXXXXXX"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#4A70A9] focus:ring-2 focus:ring-[#4A70A9]/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#4A70A9] focus:ring-2 focus:ring-[#4A70A9]/10 transition-all bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="Admissions">Admissions</option>
                      <option value="Academics">Academics</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows="5"
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#4A70A9] focus:ring-2 focus:ring-[#4A70A9]/10 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#4A70A9] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#365985] transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-blue-900/10"
                >
                  Send Message
                  <LuSend size={18} />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-9"
          >
            <span className="text-[#4A70A9] font-semibold uppercase tracking-[0.2em] text-sm">
              Find Us
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
              Visit Our School
            </h2>

            <p className="text-gray-500 mt-4">
              We'd be delighted to welcome you to our campus.
            </p>
          </motion.div>

          <div className="rounded-3xl overflow-hidden border border-gray-200 h-[350px] md:h-[450px] bg-[#EFECE3] flex items-center justify-center">
            <div className="text-center px-6">
              <LuMapPin size={42} className="text-[#4A70A9] mx-auto" />
              <h3 className="text-xl font-bold text-gray-900 mt-4">
                School Location
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                Add your school's Google Maps embed here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto bg-[#4A70A9] rounded-3xl px-8 py-14 md:py-16 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Have More Questions?
          </h2>

          <p className="text-blue-100 mt-4 max-w-xl mx-auto leading-relaxed">
            Our team is ready to help you with any information you need.
            We look forward to hearing from you.
          </p>

          <a
            href="tel:+9779800000000"
            className="inline-flex items-center gap-3 bg-white text-[#4A70A9] px-8 py-4 rounded-full font-bold mt-8 hover:bg-[#EFECE3] transition-all"
          >
            <LuPhone size={19} />
            Call Our Office
          </a>
        </div>
      </section>

    </main>
  );
};

export default Contact;
