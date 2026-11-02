
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuCamera,
  LuArrowUpRight,
  LuX,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";

const galleryImages = [
  {
    id: 1,
    title: "Annual Sports Day",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=900",
  },
  {
    id: 2,
    title: "Learning Together",
    category: "Academics",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900",
  },
  {
    id: 3,
    title: "Creative Activities",
    category: "Activities",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900",
  },
  {
    id: 4,
    title: "School Campus",
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900",
  },
  {
    id: 5,
    title: "Classroom Moments",
    category: "Academics",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900",
  },
  {
    id: 6,
    title: "Student Activities",
    category: "Activities",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900",
  },
  {
    id: 7,
    title: "School Celebration",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=900",
  },
  {
    id: 8,
    title: "A Place to Learn",
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=900",
  },
  {
    id: 9,
    title: "Creative Learning",
    category: "Academics",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900",
  },
  {
    id: 10,
    title: "Fun and Friendship",
    category: "Activities",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=900",
  },
  {
    id: 11,
    title: "School Environment",
    category: "Campus",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=900",
  },
  {
    id: 12,
    title: "Memorable Moments",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=900",
  },
];

const categories = [
  "All",
  "Academics",
  "Events",
  "Activities",
  "Campus",
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  const showNext = () => {
    const currentIndex = filteredImages.findIndex(
      (item) => item.id === selectedImage.id
    );

    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const showPrevious = () => {
    const currentIndex = filteredImages.findIndex(
      (item) => item.id === selectedImage.id
    );

    const previousIndex =
      (currentIndex - 1 + filteredImages.length) %
      filteredImages.length;

    setSelectedImage(filteredImages[previousIndex]);
  };

  return (
    <main className="bg-white overflow-hidden">

      {/* Hero Section */}
      <section className="bg-[#EFECE3] pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 text-[#4A70A9] font-semibold uppercase tracking-[0.2em] text-sm">
              <LuCamera size={18} />
              Our Memories
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mt-5 leading-tight">
              Moments That
              <span className="text-[#4A70A9]"> Inspire.</span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl mt-7 leading-relaxed max-w-2xl">
              Every picture tells a story. Explore the moments,
              achievements, celebrations, and everyday experiences
              that make life at PIA School special.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div>
              <span className="text-[#4A70A9] font-semibold uppercase tracking-[0.2em] text-sm">
                Explore Our Gallery
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                Captured Moments
              </h2>
            </div>

            <p className="text-gray-500 text-sm">
              {filteredImages.length} photographs
            </p>
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#4A70A9] text-white shadow-lg shadow-blue-900/10"
                    : "bg-[#F3F5F8] text-gray-600 hover:bg-[#E9F0FA] hover:text-[#4A70A9]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(item)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#EFECE3] aspect-[4/3]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-blue-200 text-xs uppercase tracking-widest font-semibold">
                      {item.category}
                    </span>

                    <div className="flex items-center justify-between mt-2">
                      <h3 className="text-white text-lg font-bold">
                        {item.title}
                      </h3>

                      <div className="w-10 h-10 rounded-full bg-white text-[#4A70A9] flex items-center justify-center shrink-0">
                        <LuArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
              className="absolute top-6 right-6 text-white hover:text-blue-300 transition-colors"
            >
              <LuX size={32} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-3 md:left-8 text-white hover:text-blue-300 transition-colors"
            >
              <LuChevronLeft size={38} />
            </button>

            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[75vh] w-full object-contain rounded-xl"
              />

              <div className="text-center mt-5">
                <p className="text-blue-300 text-xs uppercase tracking-widest">
                  {selectedImage.category}
                </p>
                <h3 className="text-white text-xl font-semibold mt-2">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-3 md:right-8 text-white hover:text-blue-300 transition-colors"
            >
              <LuChevronRight size={38} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto bg-[#4A70A9] rounded-3xl px-8 py-16 md:py-20 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold">
            Every Moment Matters.
          </h2>

          <p className="text-blue-100 mt-5 max-w-xl mx-auto leading-relaxed">
            Be a part of our journey and create unforgettable
            memories with the PIA School community.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#4A70A9] px-8 py-4 rounded-full font-bold mt-9 hover:bg-[#EFECE3] transition-all duration-300 hover:-translate-y-1"
          >
            Get in Touch
            <LuArrowUpRight size={20} />
          </a>
        </div>
      </section>

    </main>
  );
};

export default Gallery;
