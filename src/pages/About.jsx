
import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuBookOpen,
  LuGraduationCap,
  LuHeart,
  LuLightbulb,
  LuTarget,
  LuEye,
  LuUsers,
  LuAward,
  LuGlobe,
  LuSparkles,
} from "react-icons/lu";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0 },
};

const values = [
  {
    icon: LuAward,
    title: "Excellence",
    description:
      "We encourage students to strive for excellence in academics and every aspect of life.",
  },
  {
    icon: LuHeart,
    title: "Integrity",
    description:
      "We promote honesty, respect, kindness, and responsibility in everything we do.",
  },
  {
    icon: LuLightbulb,
    title: "Innovation",
    description:
      "We inspire curiosity, creativity, and innovative thinking through meaningful learning.",
  },
  {
    icon: LuUsers,
    title: "Community",
    description:
      "We believe in building a supportive environment where everyone belongs and grows.",
  },
];

const features = [
  {
    icon: LuBookOpen,
    title: "Quality Education",
    description:
      "A learning environment that encourages academic growth and practical understanding.",
  },
  {
    icon: LuSparkles,
    title: "Holistic Development",
    description:
      "Opportunities to develop confidence, creativity, communication, and leadership.",
  },
  {
    icon: LuGlobe,
    title: "Future Ready",
    description:
      "Preparing students with the knowledge and skills needed for a changing world.",
  },
];

const About = () => {
  return (
    <main className="bg-white overflow-hidden">

      {/* Hero Section */}
      <section className="relative bg-[#EFECE3] pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="text-[#4A70A9] font-semibold tracking-[0.2em] uppercase text-sm">
              Discover Our School
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mt-5 leading-[1.1]">
              Shaping Minds,
              <span className="text-[#4A70A9]"> Building Futures.</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mt-7 leading-relaxed max-w-2xl">
              Education is more than learning from books. It's about
              discovering potential, building character, and preparing
              young minds for a brighter tomorrow.
            </p>

            <div className="mt-9">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[#4A70A9] text-white px-7 py-4 rounded-full font-semibold hover:bg-[#365985] transition-all duration-300 hover:-translate-y-1"
              >
                Get in Touch
                <LuArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute right-0 bottom-0 w-40 h-40 bg-[#8FABD4]/20 rounded-tl-full -z-0" />
      </section>

      {/* Our Story */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 lg:gap-24 items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden bg-[#EFECE3] aspect-[5/4]">
              <img
                src="/images/school-campus.jpg"
                alt="School campus"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-7 -right-3 md:-right-7 bg-[#4A70A9] text-white p-7 md:p-9 rounded-2xl max-w-[200px] shadow-xl">
              <LuGraduationCap size={35} className="mb-3" />
              <p className="font-bold text-xl">Learning Today</p>
              <p className="text-blue-100 text-sm mt-1">
                Leading Tomorrow
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#4A70A9] font-semibold uppercase tracking-[0.2em] text-sm">
              Who We Are
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-5 leading-tight">
              More Than a School, A Place to Grow.
            </h2>

            <p className="text-gray-600 mt-7 leading-relaxed">
              PIA School is committed to creating a learning environment
              where students are encouraged to explore their interests,
              develop their abilities, and discover their potential.
            </p>

            <p className="text-gray-600 mt-5 leading-relaxed">
              We believe every student has unique talents. Through
              education, guidance, and meaningful experiences, we aim
              to help each learner become confident, responsible, and
              capable of contributing positively to society.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[#4A70A9] font-bold mt-8 hover:gap-4 transition-all"
            >
              Learn More About Us <LuArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-[#F7F9FC] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-[#4A70A9] font-semibold uppercase tracking-[0.2em] text-sm">
              Our Purpose
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Mission & Vision
            </h2>
            <p className="text-gray-500 mt-5 leading-relaxed">
              Our purpose guides everything we do, from the classroom
              to the wider community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-9 md:p-12 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#E9F0FA] flex items-center justify-center text-[#4A70A9]">
                <LuTarget size={32} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-7">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-relaxed mt-5">
                To provide quality education in a supportive and
                inclusive environment that nurtures intellectual
                curiosity, builds strong character, and empowers
                students to reach their full potential.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.15 }}
              className="bg-[#4A70A9] p-9 md:p-12 rounded-3xl text-white shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center">
                <LuEye size={32} />
              </div>

              <h3 className="text-2xl font-bold mt-7">
                Our Vision
              </h3>

              <p className="text-blue-100 leading-relaxed mt-5">
                To inspire a generation of knowledgeable, creative,
                compassionate, and responsible individuals who are
                prepared to make a meaningful difference in their
                communities and the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-[#4A70A9] font-semibold uppercase tracking-[0.2em] text-sm">
              What We Believe
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Our Core Values
            </h2>

            <p className="text-gray-500 mt-5">
              The principles that shape our culture and guide our
              students towards becoming better individuals.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group border border-gray-100 p-8 rounded-2xl hover:border-[#8FABD4] hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-[#E9F0FA] rounded-xl flex items-center justify-center text-[#4A70A9] group-hover:bg-[#4A70A9] group-hover:text-white transition-colors duration-300">
                    <Icon size={27} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mt-7">
                    {value.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mt-4">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#EFECE3] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="text-[#4A70A9] font-semibold uppercase tracking-[0.2em] text-sm">
              The PIA Experience
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-5 leading-tight">
              Helping Every Student Become Their Best.
            </h2>

            <p className="text-gray-600 mt-6 leading-relaxed">
              We believe that meaningful education extends beyond
              textbooks. It involves developing knowledge, skills,
              confidence, and the values needed for lifelong success.
            </p>

            <div className="mt-9 space-y-7">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="flex gap-5">
                    <div className="shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#4A70A9]">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mt-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden aspect-[4/5] bg-white"
          >
            <img
              src="/images/students-learning.jpg"
              alt="Students learning together"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-7xl mx-auto bg-[#4A70A9] rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center text-white relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-white/10" />
          <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-white/10" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="uppercase tracking-[0.2em] text-blue-200 text-sm font-semibold">
              Join Our Community
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-5">
              Let's Build a Brighter Future Together.
            </h2>

            <p className="text-blue-100 mt-6 leading-relaxed">
              Have questions about our school? We'd love to hear from
              you and help you learn more about our educational journey.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-white text-[#4A70A9] px-8 py-4 rounded-full font-bold mt-9 hover:bg-[#EFECE3] transition-all duration-300 hover:-translate-y-1"
            >
              Contact Us <LuArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
};

export default About;
