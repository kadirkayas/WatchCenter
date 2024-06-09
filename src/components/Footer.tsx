import { IconFacebook, IconInsta } from "@/public/icon";

export default function Footer(){
    return(
        <>
            <div className="bg-for text-white">
                <div className="md:grid grid-cols-12 py-10 mx-20 text-center">
                    <div className="col-span-4">
                        <p className="text-4xl mt-2 font-light">Contact</p>
                        <p className="text-3xl mt-2 font-light">平日 09:00-18:00</p>
                        <p className="text-3xl mt-2 font-light">contact@watchcenter.com</p>
                    </div>
                    <div className="col-span-4 mt-5 md:mt-0">
                        <p className="text-4xl mt-2 font-light">About Companys</p>
                        <p className="text-3xl mt-2 font-light">About Us</p>
                        <p className="text-3xl mt-2 font-light">Contact</p>
                    </div>
                    <div className="col-span-4 mt-5 md:mt-0 ">
                        <p className="text-4xl font-light">Follow Us</p>
                        <div className="flex flex-row justify-center mt-2">
                            <p className="m-2"><button><IconFacebook/></button></p>
                            <p className="m-2"><button><IconInsta/></button></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}