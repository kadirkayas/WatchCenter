import List from "@/components/List";
import Navbar from "@/components/Navbar";
import womanPhoto from "@/public/her.jpg"
export default function WomanPage(){
    return(
        <>
            <Navbar/>
            <div >  
                <img className="w-90% md:w-4/5 h-128 object-cover object-top mx-5 md:m-auto" 
                src={womanPhoto.src} alt="" />
            </div>
            <div className="flex justify-center flex-col w-90% md:w-4/5 mx-5 md:m-auto ">
                <div className="flex justify-center mt-10">
                    <p className="text-center text-4xl font-light">Lorem</p>
                </div>
                <div >
                    <p className="text-center text-xl my-4 font-light">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                      make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
                      typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>
            <List cins="women"/>
        </>
    )
}