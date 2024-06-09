import her from "@/public/her.jpg"
import him from  "@/public/him.jpg"
export default function For() {
    return(
        <>
        <div className="my-10 bg-for">
            <div className=" grid grid-cols-12 justify-center items-center mx-5 md:mx-20 py-10">
                <div className="relative col-span-12 md:col-span-6  h-96   flex justify-center items-center m-5">
                    <img className="absolute h-full w-full hover:scale-105 transition-transform duration-500 hover:blur-sm" 
                    src={him.src} alt="" />
                    <div className="absolute">
                        <p className="text-center font-bold text-4xl text-white">FOR HIM</p>
                    </div>
                </div>
                <div className="relative col-span-12 md:col-span-6 h-96  bg-yellow-50 flex justify-center items-center m-5">
                    <img className="absolute h-full w-full hover:scale-105 transition-transform duration-500 hover:blur-sm"
                     src={her.src} alt="" />
                    <div className="absolute">
                        <p className="text-center font-bold text-4xl text-white">FOR HER</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}