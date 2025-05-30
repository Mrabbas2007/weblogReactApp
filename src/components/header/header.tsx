import { useEffect, useState } from "react";
import { pic1 } from "../../Images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const [search, setSearch] = useState(false)
    const [isScroll, setIsScroll] = useState(false);


    useEffect(() => {
        console.log("Hi");
        const scrollHandler = () => {
            if (window.scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }

        window.addEventListener('scroll', scrollHandler)

        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }

    }, [])

    return (
        <div className={`${isScroll ? 'shadow-xl backdrop-blur-md rounded-b-xl ' : ''} shadow-black/25 duration-200 sticky top-0 z-20 w-full h-20 flex justify-evenly items-center `}>
            <div className="w-1/5 ">
                <img className="w-auto h-20 " src={pic1} alt="LogoWebsite" />
            </div>
            <div className="w-2/5">
                <ul className=" w-full flex justify-center items-center whitespace-nowrap gap-5 ">
                    <li className={`relative group w-max text-lg cursor-pointer`}>
                        <span>مقالات</span>
                        <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-500 group-hover:w-full"></span>
                    </li>
                    <li className={`relative group w-max text-lg cursor-pointer`}>
                        <span> اخبار </span>
                        <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-500 group-hover:w-full"></span>
                    </li>
                    <li className={`relative group w-max text-lg cursor-pointer`}>
                        <span> دسته بندی ها </span>
                        <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-500 group-hover:w-full"></span>
                    </li>
                    <li className={`relative group w-max text-lg cursor-pointer`}>
                        <span> درباره ما </span>
                        <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-500 group-hover:w-full"></span>
                    </li>
                </ul>
            </div>
            <div className="w-1/5 relative ltr">
                <span onClick={() => { setSearch(!search) }} className="absolute top-0 left-0 z-20 bg-blue-800 w-8 h-8 rounded-md flex justify-center items-center cursor-pointer ">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
                <input className={`${search ? 'w-full opacity-100' : 'w-8 opacity-0'} h-10 p-2 bg-transparent border-b-2 outline-none duration-300 rtl`} type="text" placeholder="جستجو کنید .." />
            </div>
        </div>
    )
}


export default Header;