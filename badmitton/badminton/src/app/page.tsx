"use client";

import React from "react";
import Image from "next/image";
import heroImage from "@/img/pic1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full">
        <Image
          src={heroImage}
          alt="Badminton hero banner"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl font-bold text-white">
            WE ARE OPEN TO{" "}
            <span className="text-pink-500">ALL AGES</span> AND{" "}
            <span className="text-pink-500">ABILITIES</span>
          </h1>
          <p className="text-lg text-pink-300 mt-4">
            Stay active and healthy. Keep fit.
          </p>
        </div>
      </section>

      {/* Achievements */}
      <Achievements />
    </>
  );
}

function Achievements() {
  return (
    <section className="bg-pink-100 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
        
        {/* Image Slider */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop={true}
            className="h-80"
          >
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/800x600/?badminton,1"
                alt="Badminton"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/800x600/?badminton,2"
                alt="Badminton"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://source.unsplash.com/800x600/?badminton,3"
                alt="Badminton"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Buttons */}
        <div className="space-y-6">
          <button className="w-full flex flex-col items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg border border-pink-200 hover:border-pink-400 transition">
            <span className="text-xl font-bold text-gray-800">MANY TROPHIES</span>
            <span className="text-sm text-gray-500">World Championship</span>
          </button>

          <button className="w-full flex flex-col items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg border border-pink-200 hover:border-pink-400 transition">
            <span className="text-xl font-bold text-gray-800">CERTIFIED</span>
            <span className="text-sm text-gray-500">World Association</span>
          </button>
        </div>
      </div>
    </section>
  );
}
