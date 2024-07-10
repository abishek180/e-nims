"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import project1 from "/public/images/mockup.png";
import project2 from "/public/images/pack1.png";
import project3 from "/public/images/pack2.png";
import project4 from "/public/images/signage.png";
import project5 from "/public/images/stationary.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import '/app/styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { SwiperNavButtons } from "./SwiperNavButtons";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        // centeredSlides={true}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },

          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },

          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          1280: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          1536: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="absolute w-full h-screen right-0 left-0 top-0 bg-black/50 z-40">
          <div className="max-w-screen-xl mx-auto flex justify-left items-center h-full">
            <div className="flex flex-col items-center justify-center">
              <p className="text-white text-5xl md:text-7xl lg:text-9xl font-medium">School Uniform</p>
              <div className="flex flex-col md:flex-row justify-between items-center w-full">
              <p className="text-white">Side to view more</p>
              <p className="text-white w-full lg:w-[500px]">
                Designed to support students active lifestyles with ease and
                advanced moisture-wicking and quick-dry technology to keep them
                cool and dry.
              </p>
              <SwiperNavButtons />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute lg:right-0 lg:translate-x-[0%] top-[0px] z-20 translate-x-[50%] right-1/2">
          
        </div> */}
        <SwiperSlide className=" !bg-black">
          <div className="!w-full !h-screen !overflow-hidden !relative group">
            <Image src={project1} className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" !bg-black">
          <div className="!w-full !h-screen !overflow-hidden !relative group">
            <Image src={project2} className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" !bg-black">
          <div className="!w-full !h-screen !overflow-hidden !relative group">
            <Image src={project3} className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" !bg-black">
          <div className="!w-full !h-screen !overflow-hidden !relative group">
            <Image src={project4} className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide className=" !bg-black">
          <div className="!w-full !h-screen !overflow-hidden !relative group">
            <Image src={project5} className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
