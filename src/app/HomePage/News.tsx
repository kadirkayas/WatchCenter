import { useEffect, useState } from "react";
import data from "../../data/data.json";
import Card from "@/components/Card";

export default function News() {
    const filteredData= data.filter(item => item.category.includes('new'));
    const [itemToNew, setItemToNew] = useState(4);
    useEffect(()=>{
        const handleResize=()=>{
            if(window.innerWidth>=768){
                setItemToNew(4)
            }
            else{
                setItemToNew(2)
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);}
    },[])
    return (
        <>
            <div className="mt-10">
                <div  className="flex justify-center">
                    <h1 className="text-3xl md:text-4xl border-b-2 border-black my-20">NEW PRODUCT</h1>

                </div>
                <div className="grid grid-cols-12 md:mx-10 gap-2 rounded-lg">
                    {
                        filteredData.slice(0,itemToNew).map((item) => (
                            <Card productId={item.productId} name={item.name} imgUrl={item.imgUrl} price={item.price} star={item.star}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}