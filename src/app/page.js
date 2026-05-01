"use client";
import Image from "next/image";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
// import { useRef } from "react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Home() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div >
      <main >
        
        
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
          <SwiperSlide>
            <Image
              src="/swiperslide/HomeBanner68.webp"
              alt="Slider Image 1"
              width={800}
              height={400}
              className="object-cover w-full h-96"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/swiperslide/HomeBanner80.webp"
              alt="Slider Image 1"
              width={800}
              height={400}
              className="object-cover w-full h-96"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/swiperslide/HomeBanner102.webp"
              alt="Slider Image 1"
              width={800}
              height={400}
              className="object-cover w-full h-96"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/swiperslide/HomeBanner103.webp"
              alt="Slider Image 1"
              width={800}
              height={400}
              className="object-cover w-full h-96"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/swiperslide/HomeBanner111.webp"
              alt="Slider Image 1"
              width={800}
              height={400}
              className="object-cover w-full h-96"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/swiperslide/HomeBanner112.webp"
              alt="Slider Image 1"
              width={800}
              height={400}
              className="object-cover w-full h-96"
            />
          </SwiperSlide>
          
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
      </Swiper>
    
      </main> 
    </div>
  );
}
