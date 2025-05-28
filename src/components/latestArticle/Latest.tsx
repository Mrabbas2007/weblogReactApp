import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { pic2, pic3, pic4, pic5 } from "../../Images";
import { useState } from "react";

const LatestArticle = () => {

    const [items, setItems] = useState([
        {
            'img': pic2,
            'title': ' سایبرپانک به بهترین بازی سال 2030 تبدیل شد '
        },
        {
            'img': pic3,
            'title': ' توکیو : روشن ترین شهر جهان '
        },
        {
            'img': pic4,
            'title': ' سینمایی قلعه متحرک هاول همچنان در صدر جدول '
        },
        {
            'img': pic5,
            'title': ' آرکین رکورد ها را جا به جا میکند ! '
        }
    ]);


    return (
        <div className="absolute top-0 w-full z-0 ">
            <Swiper
                loop={true}
                speed={500}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    modifier: 2,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow, Autoplay, Pagination]}
            >
                {items.map((item: any, index: number) => (
                    <SwiperSlide key={index}>
                        <div className={`relative w-full h-[75vh] text-white text-center`}>
                            <img className="w-full h-full object-cover " src={item.img} alt={item.title} />
                            <h3 className="absolute w-1/2 bottom-10 right-5 text-4xl text-right ">{item.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}


export default LatestArticle;