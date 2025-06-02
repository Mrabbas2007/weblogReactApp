

const SignIn = () => {

    return (
        <div className="w-full h-[90%] flex flex-col justify-center items-center text-white ">
            <h1 className="text-3xl my-5"> ورود </h1>
            <form className="w-full h-auto flex flex-col justify-center items-center mt-5 ">
                <div className="my-2 ">
                    <input className="w-72 mt-1 py-1 outline-none bg-transparent border-b-2 " placeholder=" نام کاربری " type="text" />
                </div>
                <div className="my-2 ">
                    <input className="w-72 mt-1 py-1 outline-none bg-transparent border-b-2 " placeholder=" رمز عبور " type="password" />
                </div>

                <button className="w-72 h-10 mt-10 bg-blue-500 hover:text-blue-500 hover:bg-white duration-200 "> ورود </button>
            </form>
        </div>
    )
}


export default SignIn