import { Header, LatestArticle } from "../../components";
import { pic2, pic3, pic4, pic5 } from "../../Images";
import { useState } from "react";


const Home = () => {

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
        <div className="w-full h-auto text-white ">
            <Header />
            <LatestArticle items={items} />
        </div>
    )
}

export default Home;