"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HiArrowCircleRight } from "react-icons/hi";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";


export default function SwiperSection() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (!progressCircle.current || !progressContent.current) return;

    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {/* slider 1 */}
        <SwiperSlide className="relative">
          <Image
            src="/swiperslide/HomeBanner68.webp"
            alt="Slider Image 1"
            width={800}
            height={400}
            className="object-cover w-full h-96"
          />

          <div className="absolute inset-0 flex items-end justify-start px-4">
            <div
              className="flex flex-col items-center text-center gap-3 sm:gap-4 
                  bg-black/40 backdrop-blur-sm 
                  px-4 sm:px-6 py-3 sm:py-4 rounded-lg"
            >
              {/* <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold">
                Find Your Next Read
              </h2> */}

              <Link
                href="/all-book"
                className="inline-flex items-center gap-2 
                 px-4 sm:px-5 py-2 
                 rounded-md 
                 bg-linear-to-r from-blue-500 to-purple-600 
                 text-white text-sm sm:text-base font-medium
                 hover:from-purple-600 hover:to-blue-500
                 transition-all duration-300"
              >
                View All Books
                <HiArrowCircleRight />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* slider 2 */}
        <SwiperSlide>
          <Image
            src="/swiperslide/HomeBanner80.webp"
            alt="Slider Image 1"
            width={800}
            height={400}
            className="object-cover w-full h-96"
          />

          <div className="absolute inset-0 flex items-end justify-start px-4">
            <div
              className="flex flex-col items-center text-center gap-3 sm:gap-4 
                  bg-black/40 backdrop-blur-sm 
                  px-4 sm:px-6 py-3 sm:py-4 rounded-lg"
            >
              {/* <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold">
                Find Your Next Read
              </h2> */}

              <Link
                href="/all-book"
                className="inline-flex items-center gap-2 
                 px-4 sm:px-5 py-2 
                 rounded-md 
                 bg-linear-to-r from-blue-500 to-purple-600 
                 text-white text-sm sm:text-base font-medium
                 hover:from-purple-600 hover:to-blue-500
                 transition-all duration-300"
              >
                View All Books
                <HiArrowCircleRight />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* slider 3 */}
        <SwiperSlide>
          <Image
            src="/swiperslide/HomeBanner102.webp"
            alt="Slider Image 1"
            width={800}
            height={400}
            className="object-cover w-full h-96"
          />

          <div className="absolute inset-0 flex items-end justify-start px-4">
            <div
              className="flex flex-col items-center text-center gap-3 sm:gap-4 
                  bg-black/40 backdrop-blur-sm 
                  px-4 sm:px-6 py-3 sm:py-4 rounded-lg"
            >
              {/* <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold">
                Find Your Next Read
              </h2> */}

              <Link
                href="/all-book"
                className="inline-flex items-center gap-2 
                 px-4 sm:px-5 py-2 
                 rounded-md 
                 bg-linear-to-r from-blue-500 to-purple-600 
                 text-white text-sm sm:text-base font-medium
                 hover:from-purple-600 hover:to-blue-500
                 transition-all duration-300"
              >
                View All Books
                <HiArrowCircleRight />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* slider 4 */}
        <SwiperSlide>
          <Image
            src="/swiperslide/HomeBanner103.webp"
            alt="Slider Image 1"
            width={800}
            height={400}
            className="object-cover w-full h-96"
          />

          <div className="absolute inset-0 flex items-end justify-start px-4">
            <div
              className="flex flex-col items-center text-center gap-3 sm:gap-4 
                  bg-black/40 backdrop-blur-sm 
                  px-4 sm:px-6 py-3 sm:py-4 rounded-lg"
            >
              {/* <h2 className="text-white text-sm sm:text-lg md:text-xl font-bold">
                Find Your Next Read
              </h2> */}

              <Link
                href="/all-book"
                className="inline-flex items-center gap-2 
                 px-4 sm:px-5 py-2 
                 rounded-md 
                 bg-linear-to-r from-blue-500 to-purple-600 
                 text-white text-sm sm:text-base font-medium
                 hover:from-purple-600 hover:to-blue-500
                 transition-all duration-300"
              >
                View All Books
                <HiArrowCircleRight />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* slider 5 */}
        <SwiperSlide>
          <Image
            src="/swiperslide/HomeBanner111.webp"
            alt="Slider Image 1"
            width={800}
            height={400}
            className="object-cover w-full h-96"
          />

          <div className="absolute inset-0 flex items-end justify-start px-4">
            <div
              className="flex flex-col items-center text-center gap-3 sm:gap-4 
                  bg-black/40 backdrop-blur-sm 
                  px-4 sm:px-6 py-3 sm:py-4 rounded-lg"
            >
              {/* <h2 className="text-white text-lg sm:text-2xl md:text-4xl font-bold">
                Find Your Next Read
              </h2> */}

              <Link
                href="/all-book"
                className="inline-flex items-center gap-2 
                 px-4 sm:px-5 py-2 
                 rounded-md 
                 bg-linear-to-r from-blue-500 to-purple-600 
                 text-white text-sm sm:text-base font-medium
                 hover:from-purple-600 hover:to-blue-500
                 transition-all duration-300"
              >
                View All Books
                <HiArrowCircleRight />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* slider 6 */}
        <SwiperSlide>
          <Image
            src="/swiperslide/HomeBanner112.webp"
            alt="Slider Image 1"
            width={800}
            height={400}
            className="object-cover w-full h-96"
          />

          <div className="absolute inset-0 flex items-end justify-start px-4">
            <div
              className="flex flex-col items-center text-center gap-3 sm:gap-4 
                  bg-black/40 backdrop-blur-sm 
                  px-4 sm:px-6 py-3 sm:py-4 rounded-lg"
            >

              <Link
                href="/all-book"
                className="inline-flex items-center gap-2 
                 px-4 sm:px-5 py-2 
                 rounded-md 
                 bg-linear-to-r from-blue-500 to-purple-600 
                 text-white text-sm sm:text-base font-medium
                 hover:from-purple-600 hover:to-blue-500
                 transition-all duration-300"
              >
                View All Books
                <HiArrowCircleRight />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
