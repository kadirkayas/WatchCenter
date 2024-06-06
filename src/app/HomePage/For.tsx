export default function For() {
    return(
        <>
        <div className="bg-amber-200 h-128 my-10">
            <div className=" grid grid-cols-12 justify-center items-center mx-20 pt-10">
                <div className="relative col-span-6  h-96   flex justify-center items-center m-5">
                    <img className="absolute h-full w-full hover:scale-105 transition-transform duration-500 hover:blur-sm" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8dB5IiOPLqRNFrEecyuM4bI0PeuOQ3MpGg&s" alt="" />
                    <div className="absolute">
                        <p className="text-center font-bold text-4xl">FOR HIM</p>
                    </div>
                </div>
                <div className="relative col-span-6 h-96  bg-yellow-50 flex justify-center items-center m-5">
                    <img className="absolute h-full w-full hover:scale-105 transition-transform duration-500 hover:blur-sm"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8dB5IiOPLqRNFrEecyuM4bI0PeuOQ3MpGg&s" alt="" />
                    <div className="absolute">
                        <p className="text-center font-bold text-4xl">FOR HER</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}