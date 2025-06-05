import { useEffect, useState } from "react";
import { pic1 } from "../../Images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Header = () => {

    const [search, setSearch] = useState(false)
    const [bars, setBars] = useState(false)
    const [isScroll, setIsScroll] = useState(false);

    const [cat, setCat] = useState(["مقالات", "اخبار", "دسته بندی ها", "درباره ما"]);

    useEffect(() => {
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
        <div className={`${isScroll ? 'shadow-xl backdrop-blur-md rounded-b-xl ' : ''} shadow-black/25 text-white duration-200 sticky top-0 z-20 w-full h-20 flex justify-evenly items-center `}>
            <div className="w-1/5 hidden max-md:flex justify-center items-center text-2xl  ">
                <div onClick={() => setBars(false)}
                    className={`absolute ${bars ? ' right-0' : 'right-[-100%]'} top-0 w-full h-screen bg-[#141414]/50 duration-300`}></div>
                <div className={`absolute ${bars ? ' right-0' : 'right-[-60%]'} top-0 w-3/5 h-screen bg-[#141414] duration-500`}>
                    <ul>
                        <li className="w-full p-2 border-b-2 border-indigo-500 my-3" > تکنوبلاگ </li>
                        {cat.map((item: string, index: number) => {
                            return (
                                <li key={index} className={`relative p-2 group w-max text-lg cursor-pointer`}>
                                    <span>{item}</span>
                                    <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-indigo-500 group-hover:w-full"></span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <FontAwesomeIcon onClick={() => setBars(true)} icon={faBars} />
            </div>
            <div className="w-1/5 max-md:w-2/4 flex justify-center items-center ">
                <img className="w-auto h-20 " src={pic1} alt="LogoWebsite" />
            </div>
            <div className="w-2/5 max-md:hidden">
                <ul className=" w-full flex justify-center items-center whitespace-nowrap gap-5 ">
                    {cat.map((item: string, index: number) => {
                        return (
                            <li key={index} className={`relative group w-max text-lg cursor-pointer`}>
                                <span>{item}</span>
                                <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="w-1/5 max-md:w-1/4 flex justify-start items-center ltr text-lg ">
                <Link to={'/register'} >
                    <span className="ml-2 hover:bg-blue-800 hover:text-white bg-white text-blue-800 rounded-r-none rounded-3xl duration-200 w-12 h-11 flex justify-center items-center cursor-pointer ">
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                </Link>
                <span onClick={() => setSearch(true)}
                    className="ml-1 hover:bg-blue-800 hover:text-white bg-white text-blue-800 rounded-l-none rounded-3xl duration-200 w-12 h-11 flex justify-center items-center cursor-pointer ">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
                <div className={`${search ? 'h-screen opacity-100' : 'h-0 opacity-0'} absolute top-0 left-0 w-full bg-black/50 duration-500 flex flex-col justify-center items-center `}>
                    <div>
                        <span className="m-1 text-xl hover:text-red-500 duration-150 cursor-pointer" onClick={() => setSearch(false)}>
                            <FontAwesomeIcon icon={faClose} />
                        </span>
                        <form className="relative w-96 max-md:w-[90%] ">
                            <button className={`bg-white text-blue-800 rounded-3xl duration-300 absolute top-0 left-0 z-20 w-10 h-10  flex justify-center items-center cursor-pointer `}>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                            <input
                                className={`w-full opacity-100 rounded-3xl text-sm h-10 p-2 bg-transparent border-2 outline-none duration-300 rtl`}
                                type="text"
                                placeholder=" برای جستجو اینتر را بزنید .. " />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header;