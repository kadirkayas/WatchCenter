"use client";
import data from "@/data/data.json"
import Card from "@/components/Card";
import { log } from "console";

export default function List(){
    const filteredData= data.filter(item => item.category.includes('women'));
    console.log(filteredData);
    
    function handleFilter(){
        console.log("test");
        
    }
    return(
        <>
            <div className="grid grid-cols-12 w-90% m-auto h-screen">
                <div className="col-span-3">
                    <div>
                        <p className="text-3xl font-normal">Filter Items</p>
                    </div>
                    <div className="mt-4">
                        <button  className="text-2xl font-lightmt-2">All</button>
                        <button  className="text-2xl font-light mt-2">News</button>
                    </div>
                </div>
                <div className="col-span-9 ">
                    <div className="grid grid-cols-9 gap-4">
                    {
                        filteredData.map((item) => (
                            <Card productId={item.productId} name={item.name} imgUrl={item.imgUrl} price={item.price} star={item.star}/>
                        ))
                    }
                    </div>
                    
                </div>

            </div>
        </>
    )
}