
const ArticlesPage = () => {

    return (
        <div className={'mt-5 w-full h-screen flex flex-col justify-start items-center text-white '}>
            <div className="w-[90%] h-16 flex justify-between items-center border-b-2 border-white pb-2  ">
                <h1 className="text-2xl"> مقالات منتشر شده </h1>
                <select className="w-1/5 h-8 rounded-lg text-black outline-none " name="" id="">
                    <option defaultChecked value="">جدید ترین</option>
                    <option value="">قدیمی ترین</option>
                    <option value="">بیشترین بازدید</option>
                </select>
            </div>
        </div>
    )
}


export default ArticlesPage