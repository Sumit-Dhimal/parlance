
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  LuArrowRight,
  LuBookOpen,
  LuGraduationCap,
  LuUsers,
  LuLightbulb,
  LuTrophy,
  LuHeart,
  LuGlobe,
  LuMoveUpRight,
} from "react-icons/lu";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const programs = [
  {
    number: "01",
    title: "Pre-K Section",
    classes: "Playgroup – UKG",
    description: "Building a joyful foundation through curiosity, play and discovery.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700",
  },
  {
    number: "02",
    title: "Junior School",
    classes: "Class I – V",
    description: "Developing essential skills, confidence and a love for learning.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700",
  },
  {
    number: "03",
    title: "Middle School",
    classes: "Class VI – VIII",
    description: "Encouraging independent thinking and exploring new possibilities.",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=700",
  },
  {
    number: "04",
    title: "High School",
    classes: "Class IX – X",
    description: "Preparing students with knowledge, discipline and determination.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=700",
  },
];

const features = [
  {
    icon: LuGraduationCap,
    title: "Academic Excellence",
    description:
      "A strong academic foundation that encourages students to achieve their full potential.",
  },
  {
    icon: LuUsers,
    title: "Dedicated Faculty",
    description:
      "Experienced and supportive educators who guide students throughout their journey.",
  },
  {
    icon: LuLightbulb,
    title: "Creative Learning",
    description:
      "Encouraging curiosity, critical thinking and practical learning experiences.",
  },
  {
    icon: LuHeart,
    title: "Character Building",
    description:
      "Developing responsible, disciplined and confident individuals with strong values.",
  },
];

const Home = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-800">

      {/* HERO SECTION */}
      <section className="relative flex min-h-[720px] items-center bg-slate-900 md:min-h-[800px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=2000')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/65 to-slate-900/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-20 md:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium tracking-wide text-white backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Welcome to Pathways International Academy
            </span>

            <h1 className="text-5xl leading-[1.12] font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Nurturing
              <span className="block text-blue-300">
                Tomorrow's
              </span>
              Leaders.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
              Where knowledge meets character, curiosity inspires discovery,
              and every student gets the opportunity to build a brighter future.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-lg bg-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
              >
                Explore Admissions
                <LuArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-3 rounded-lg border border-white/50 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-slate-900"
              >
                Discover PIA
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-24 md:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase">
              About Our School
            </span>

            <h2 className="mt-5 text-4xl leading-tight font-bold tracking-tight text-slate-900 md:text-5xl">
              Education that inspires
              <span className="text-blue-600"> excellence.</span>
            </h2>

            <p className="mt-7 leading-8 text-slate-600">
              At Pathways International Academy, we believe education goes
              beyond textbooks and classrooms. Our mission is to nurture
              disciplined, ethical and confident learners through quality
              education and holistic development.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              We create an environment where students can discover their
              abilities, develop meaningful values and prepare themselves
              for the opportunities of tomorrow.
            </p>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-3 font-semibold text-blue-600"
            >
              Learn more about us
              <LuArrowRight className="transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000"
              alt="Students learning together"
              className="h-[420px] w-full rounded-2xl object-cover shadow-xl md:h-[520px]"
            />

            <div className="absolute -bottom-8 -left-4 rounded-xl bg-blue-600 p-7 text-white shadow-xl md:-left-8">
              <LuBookOpen size={32} />
              <p className="mt-4 text-2xl font-bold">Learn & Grow</p>
              <p className="mt-1 text-sm text-blue-100">
                Every day is an opportunity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ACADEMIC PROGRAMS */}
      <section className="bg-slate-50 px-6 py-24 md:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-2xl text-center"
          >
            <span className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase">
              Academic Programs
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              A pathway for every
              <span className="text-blue-600"> learner.</span>
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              From the first steps of learning to higher secondary education,
              we support students at every stage of their journey.
            </p>
          </motion.div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((program, index) => (
              <motion.div
                key={program.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: index * 0.1 }}
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <span className="absolute top-5 left-5 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                    {program.classes}
                  </span>
                </div>

                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-blue-600">
                      {program.number}
                    </span>
                    <LuMoveUpRight className="text-xl text-slate-400 transition-colors group-hover:text-blue-600" />
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-slate-900">
                    {program.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {program.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 py-24 md:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase">
                The PIA Difference
              </span>

              <h2 className="mt-5 text-4xl leading-tight font-bold text-slate-900 md:text-5xl">
                More than education.
                <span className="block text-blue-600">
                  A foundation for life.
                </span>
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-slate-600">
                We focus on developing the knowledge, skills and values
                students need to become confident individuals and
                responsible members of society.
              </p>
            </motion.div>

            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000"
              alt="Students in a classroom"
              className="mt-10 h-72 w-full rounded-2xl object-cover"
            />
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="rounded-xl border border-slate-100 p-7 transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUOTE / BANNER */}
      <section className="relative bg-blue-700 px-6 py-24 text-center text-white md:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.13),_transparent_45%)]" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto max-w-3xl"
        >
          <LuTrophy className="mx-auto mb-7 text-blue-200" size={45} />

          <h2 className="text-4xl leading-tight font-bold md:text-5xl">
            Every great journey begins with a first step.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-blue-100">
            Give your child the opportunity to learn, explore and grow in
            an environment that believes in their potential.
          </p>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-lg bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:bg-blue-50"
          >
            Get in Touch
            <LuArrowRight />
          </Link>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-2xl bg-slate-50 px-8 py-12 md:flex-row md:px-16 md:py-16"
        >
          <div>
            <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">
              Start Your Journey
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Your future starts here.
            </h2>

            <p className="mt-4 text-slate-600">
              Connect with us and discover the opportunities at PIA.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700"
          >
            Contact Us
            <LuArrowRight />
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
