import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

interface IArticle {
    items: any;
}

const LatestArticle = (props: IArticle) => {
    const { items } = props;



    const swiperSettings = {
        loop: true,
        speed: 500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            dynamicBullets: true,
            clickable: true,
        },
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 2,
            slideShadows: false,
        },
        modules: [EffectCoverflow, Autoplay, Pagination],
    };

    return (
        <div className="absolute top-0 w-full z-0 ">
            <Swiper {...swiperSettings}>
                {items.map((item: any, index: number) => (
                    <SwiperSlide key={index}>
                        <div className={`relative w-full h-[75vh] text-white text-center`}>
                            <div className="w-full h-full bg-black/45 absolute top-0 z-0"></div>
                            <img className="w-full h-full object-cover z-20 " src={item.img} alt={item.title} />
                            <h3 className="absolute w-1/2 bottom-10 right-5 text-4xl text-right ">{item.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}


export default LatestArticle;