import { pic6, pic7 } from "../../Images"
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useState } from "react";
import { SignIn, SignUp } from "../../components";

const Register = () => {

    const [status, setStatus] = useState(false)
    const [slider, setSlider] = useState([
        {
            'img': pic6,
            'title': ' کلیسا در شیراز '
        },
        {
            'img': pic7,
            'title': ' بادگیر '
        }
    ]);

    const swiperSettings = {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        effect: "fade",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 0,
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
        modules: [EffectFade, Navigation, Autoplay, Pagination],
    };


    return (
        <div className={'w-full h-screen flex justify-center items-center '}>
            <div className="w-3/5 h-4/6 bg-[#1c1c1d] flex justify-between items-center shadow-lg shadow-[#0f0f0f] overflow-hidden rounded-3xl ">
                <div className="relative w-1/2 h-full overflow-hidden ">
                    <div className={`w-full h-full absolute top-0 ${status ? 'left-0 opacity-100' : 'left-[-100%] opacity-0'} duration-300 `}>
                        <SignIn />
                    </div>
                    <div className={`w-full h-full absolute top-0 ${status ? 'left-[-100%] opacity-0' : 'left-0 opacity-100'} duration-300 `}>
                        <SignUp />
                    </div>

                    <span onClick={() => setStatus(!status)} className="w-full absolute left-0 bottom-11 text-center text-white cursor-pointer ">{status ? ' حساب کابری دارید؟ | ورود ' : ' حساب کابری ندارید؟ | ثبت نام  '}</span>
                </div>
                <div className="w-1/2 h-full overflow-hidden ">
                    <Swiper {...swiperSettings}>
                        {slider.map((item: any, index: number) => {
                            return (
                                <SwiperSlide key={index}>
                                    <img src={item.img} className="w-full h-auto object-cover " alt={item.title} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}


export default Register