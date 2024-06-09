import { useEffect, useState } from "react";
import data from "../../data/data.json";
import Card from "@/components/Card";

export default function BestSeller() {
    const filteredData= data.filter(item => item.category.includes('bestseller'));
    const [itemToBest, setItemToBest] = useState(4);
    useEffect(()=>{
        const handleResize=()=>{
            if(window.innerWidth>=768){
                setItemToBest(4)
            }
            else{
                setItemToBest(2)
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
                    <h1 className="text-3xl md:text-4xl border-b-2 border-black my-20 ">BEST SELLER</h1>

                </div>
                <div className="grid grid-cols-12 md:mx-10 gap-2 rounded-lg">
                    {
                        filteredData.slice(0,itemToBest).map((item, index) => (
                            <Card productId={item.productId} name={item.name} imgUrl={item.imgUrl} price={item.price} star={item.star}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}