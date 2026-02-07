import { useRef } from "react";
import {
  Star,
  Users,
  PartyPopper,
  Trophy,
  Mic,
  CheckCircle2,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import type { Swiper as SwiperType } from "swiper/types";

const achievements = [
  {
    icon: <Star className="h-8 w-8 text-red-400" />,
    number: "10,000+",
    label: "Concert Attendees",
    description:
      "Successfully hosted a concert with over 10,000 attendees (Anuv Jain Hyderabad)",
  },
  {
    icon: <PartyPopper className="h-8 w-8 text-red-500" />,
    number: "100+ Events",
    label: "Curated Events",
    description: "Expertly curated engaging events to create unforgettable experiences all over India",
  },
  {
    icon: <Users className="h-8 w-8 text-red-600" />,
    number: "95%",
    label: "Artist Network",
    description:
      "Direct access to 95% of artists in India through exclusive partnerships",
  },
  {
    icon: <Trophy className="h-8 w-8 text-red-300" />,
    number: "100%",
    label: "Success Rate",
    description:
      "Strong reputation for delivering high-energy, immersive events",
  },
 /* {
    icon: <Mic className="h-8 w-8 text-red-400" />,
    number: "Sonu Nigam",
    label: "EPGI Live Show",
    description:
      "Collaborated with Sonu Nigam for a grand-scale concert at EPGI, delivering a premium musical experience",
  },*/
{
  icon: <Mic className="h-8 w-8 text-red-400" />,
number: "Live Concert",
label: "Music Experience",
description:
  "Delivered a high energy live concert with premium production and an unforgettable crowd atmosphere",
}

];

const carouselImages = [
  "anuvjain1.webp",
  "anuvjain2.webp",
  "anuvjain3.webp",
  "anuvjain4.webp",
  
];

const keyHighlights = [
  /*"From the magic of Anuv Jain live in Hyderabad to the timeless voice of Sonu Nigam captivating Bangalore — TitanK Entertainment has always been inspired to bring unforgettable experiences to audiences.",
  "Our journey has been shaped by iconic concerts and grand celebrations across India, motivating us to create events that leave a mark.",
  "With a legacy of being part of India’s most memorable entertainment moments — from Anuv Jain’s soulful night in Hyderabad to Sonu Nigam’s electrifying Bangalore concert — we continue to set the stage for extraordinary experiences.",
  "We’ve witnessed, supported, and been part of India’s biggest live experiences — whether it’s Anuv Jain in Hyderabad or Sonu Nigam in Bangalore — and we bring that same energy to every event we craft.", */
  "From the magic of Anuv Jain live in Hyderabad to unforgettable live performances across Bangalore, TitanK Entertainment has always been inspired to bring remarkable experiences to audiences.", 

"Our journey has been shaped by iconic concerts and grand celebrations across India, motivating us to create events that leave a lasting mark.",

"With a legacy of being part of India’s most memorable entertainment moments, from Anuv Jain’s soulful night in Hyderabad to large scale live concerts in Bangalore, we continue to set the stage for extraordinary experiences.",

"We’ve witnessed, supported, and been part of India’s biggest live experiences, whether it’s Anuv Jain in Hyderabad or major live events in Bangalore, and we bring that same energy to every event we craft."
];

const Achievements = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-br from-gray-900 via-black/95 to-gray-900"
    >
      {/* Local styles for swiper visual polish */}
      <style>{`
        .achv-swiper .swiper-slide .slide-img {
          transform: scale(0.92);
          opacity: 0.75;
          filter: saturate(0.9);
          transition: transform .45s ease, opacity .45s ease, filter .45s ease;
        }
        .achv-swiper .swiper-slide-prev .slide-img,
        .achv-swiper .swiper-slide-next .slide-img {
          transform: scale(0.97);
          opacity: 0.9;
        }
        .achv-swiper .swiper-slide-active .slide-img {
          transform: scale(1);
          opacity: 1;
          filter: saturate(1);
        }
        .achv-swiper .swiper-pagination-bullet {
          background: #7f1d1d;
          opacity: .7;
        }
        .achv-swiper .swiper-pagination-bullet-active {
          background: #ef4444;
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>

      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">
              Achievements
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Highlights from our major events and industry reach
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto mt-6"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center bg-gray-800/40 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 group"
            >
              <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {achievement.number}
              </div>
              <div className="text-lg font-semibold text-red-400 mb-3">
                {achievement.label}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="text-center md:text-left mb-20">
          <h3 className="text-3xl font-bold text-white mb-6">Key Highlights</h3>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/20 border border-gray-700/40 rounded-xl p-6 md:p-8 max-w-4xl mx-auto shadow-lg"
          >
            {keyHighlights.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.12 }}
                className="flex items-start gap-3 mb-4"
              >
                <CheckCircle2 className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Image Carousel — autoplay + mobile friendly + no arrows */}
        <div className="relative max-w-6xl mx-auto achv-swiper">
          {/* Gradient edge fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-24 bg-gradient-to-r from-transparent to-transparent z-10" />
 


          <Swiper
            modules={[Autoplay, Pagination]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            spaceBetween={20}
            loop
            centeredSlides={false}
            speed={700}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!pb-10"
          >
            {carouselImages.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="rounded-xl overflow-hidden shadow-lg shadow-red-900/20 h-64 border-[1px] border-red-600">
                  <img
                    src={`${import.meta.env.BASE_URL}${img}`}
                    alt={`Slide ${idx + 1}`}
                    className="slide-img object-cover w-full h-64"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
