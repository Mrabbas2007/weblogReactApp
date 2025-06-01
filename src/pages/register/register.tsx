import { pic7 } from "../../Images"

const Register = () => {

    return (
        <div className={'w-full h-screen flex justify-center items-center '}>
            <div className="w-3/5 h-4/6 bg-black/50 flex justify-between items-center shadow-lg shadow-[#0f0f0f] overflow-hidden rounded-3xl ">
                <div className="w-1/2 h-full overflow-hidden ">
                </div>
                <div className="w-1/2 h-full overflow-hidden ">
                    <img src={pic7} className="w-full h-auto object-cover " alt="" />
                </div>
            </div>
        </div>
    )
}


export default Register