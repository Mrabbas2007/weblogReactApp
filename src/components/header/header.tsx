import { useState } from "react";
import { pic1 } from "../../Images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [search, setSearch] = useState(false)
    return (
        <div className={`sticky top-0 z-20 w-full h-24 shadow-lg shadow-black/50 flex justify-evenly items-center `}>
            <div className="w-1/5 ">
                <img className="w-auto h-20 " src={pic1} alt="LogoWebsite" />
            </div>
            <div className="w-2/5">
                <ul className=" w-full flex justify-center items-center whitespace-nowrap gap-5 ">
                    <li className={`text-lg cursor-pointer`}> مقالات </li>
                    <li className={`text-lg cursor-pointer`}> اخبار </li>
                    <li className={`text-lg cursor-pointer`}> دسته بندی ها </li>
                    <li className={`text-lg cursor-pointer`}> درباره ما </li>
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