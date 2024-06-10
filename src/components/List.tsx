"use client";
import data from "@/data/data.json"
import Card from "@/components/Card";
import { log } from "console";
import { useState } from "react";


export default function List(cins:any){
    
    const allData=data.filter(item => item.category.includes(cins.cins))
    const[filteredData,setFilteredData]=useState(allData)
    return(
        <>
            <div className="grid grid-cols-12 w-90% m-auto h-screen mt-10">
                <div className=" md:col-span-3 text-center w-128 mt-10">
                    <div className="w-full">
                        <p className="text-3xl font-normal w-full">Filter Items </p>
                    </div>
                    <div className="mt-4">
                        <div className="text-2xl font-light mt-2 flex flex-col justify-center">
                            <button onClick={()=>setFilteredData(allData)}>All</button>
                            <div className="border border-black w-28"></div>
                        </div>
                        <div className="text-2xl font-light mt-2">
                            <button onClick={()=>setFilteredData(allData.filter(item => item.category.includes('new')))}>News</button>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-9 mt-10">
                    <div className="grid grid-cols-12 md:grid-cols-9 gap-4">
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