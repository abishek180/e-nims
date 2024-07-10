import React from 'react';
import { useSwiper } from 'swiper/react';
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns flex gap-2">
      <button onClick={() => swiper.slidePrev()} className='w-[50px] h-[50px] rounded-full flex justify-center items-center border-[1.5px] border-[#F0F0F0] bg-[rgba(255_255_255_0.20)] backdrop-filter backdrop-blur-sm'><MdChevronLeft className='text-white text-2xl'/></button>
      <button onClick={() => swiper.slideNext()} className='w-[50px] h-[50px] rounded-full flex justify-center items-center border-[1.5px] border-[#F0F0F0] bg-[rgba(255_255_255_0.20)] backdrop-filter backdrop-blur-sm'><MdChevronRight className='text-white text-2xl'/></button>
    </div>
  );
};