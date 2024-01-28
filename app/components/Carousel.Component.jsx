"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function CarouselComponet() {
    return (
        <>
            <div className="max-w-[1200px] mx-auto mt-10">
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
                    // navigation={true}
                    // modules={[Autoplay, Pagination, Navigation]}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <img src="/assets/banners/banner1.png" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="/assets/banners/banner2.png" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="/assets/banners/banner3.png" />
                        </div>
                    </SwiperSlide>                   
                </Swiper>
            </div>
        </>
    )
}
