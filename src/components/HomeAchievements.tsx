import { Star, Users, Trophy, PartyPopper } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

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
];

const carouselImages = [
  "anuvjain1.webp",
  "anuvjain2.webp",
  "anuvjain3.webp",
  "anuvjain4.webp",

];

const HomeAchievements = () => {
  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">
              Achievements
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 group"
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

        {/* ---- Carousel styles to mirror main Achievements ---- */}
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

        {/* Image Carousel (replaced only this block) */}
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          loop
          speed={700}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="!pb-10 achv-swiper"
        >
          {carouselImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="rounded-xl overflow-hidden shadow-lg shadow-red-900/20 h-64 border-[1px] border-red-600">
                <img
                  src={`${import.meta.env.BASE_URL}${img}`}
                  alt={`Slide ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="slide-img object-cover w-full h-64"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeAchievements;
