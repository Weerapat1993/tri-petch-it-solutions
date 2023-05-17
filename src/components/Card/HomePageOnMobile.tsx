'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/pagination";
import './styles.scss'
import Content01 from '../Content/Content01';
import Content02 from '../Content/Content02';
import Content03 from '../Content/Content03';
import Content04 from '../Content/Content04';
import Content05 from '../Content/Content05';
import Content06 from '../Content/Content06';
import { Fragment } from 'react';

const CardSimple = () => {
  return (
    <div>
      <h1 className="font-header">ATHLETS</h1>
      <div className="h-480">
        <img src="/assets/images/footballer.png" className="footballer-mobile" />
      </div>
      <div className="h-480 w-full bg-secondary pt-50">
        <div className="p-8">
          <Swiper
            // install Swiper modules
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <Content01 isMobile />
            </SwiperSlide>
            <SwiperSlide>
              <Content02 />
            </SwiperSlide>
            <SwiperSlide>
              <Content03 />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <h1 className="font-header">PLAYERS</h1>
      <div className="h-240 relative">
        <img src="/assets/images/bastketballer.png" className="basketballer-mobile" />
      </div>
      <div className="h-480 w-full bg-secondary pt-50">
        <div className="p-8">
          <Swiper
            // install Swiper modules
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <Content04 isMobile />
            </SwiperSlide>
            <SwiperSlide>
              <Content05 />
            </SwiperSlide>
            <SwiperSlide>
              <Content06 />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}


export default CardSimple;



