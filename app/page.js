"use client";
import Header_one from "@/components/Header_one";
import Header_two from "@/components/Header_two";
import Footer from "@/components/Footer";
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

register();

export default function Home() {

  return (
    <main className="flex flex-row justify-center">
      <div className="w-[75%]">
        <Header_two />
        <div className="bg-white">
          <Swiper 
            className="swiper"
            direction={'horizontal'}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            loop={true}
            >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>
        <Footer />
      </div>
    </main>
  );
}
