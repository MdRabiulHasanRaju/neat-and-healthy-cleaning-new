import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FiStar } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonials } from '../../data/testimonials.js';

// Customer review carousel with ratings. Auto-plays with pause on interaction.
export default function TestimonialSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      loop
      className="!pb-12"
    >
      {testimonials.map((t, i) => (
        <SwiperSlide key={i} className="h-auto">
          <figure className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-slate-900/5 dark:bg-slate-900/70 dark:ring-white/10">
            <div className="flex gap-1 text-accent" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, s) => (
                <FiStar key={s} fill="currentColor" size={18} />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink-soft dark:text-slate-200">
              “{t.text}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4 dark:border-white/10">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-gradient text-sm font-bold text-white">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-ink dark:text-white">{t.name}</p>
                <p className="text-xs text-gray dark:text-slate-400">{t.role}</p>
              </div>
              <span className="ml-auto rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-700 dark:text-primary-200">
                {t.service}
              </span>
            </figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
