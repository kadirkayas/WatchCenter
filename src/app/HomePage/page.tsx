"use client";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import data from "../../data/data.json";
import { ReactNode, useEffect, useState } from "react";
import Promotion from "@/components/Promotion";

interface CategoryBox {
    children: ReactNode;
  }
  
  const CategoryBox = ({ children, onClick }: { children: ReactNode; onClick: () => void; }) => (
    <div 
      className="font-bold text-amber-900 bg-white py-3 px-5 border-2 border-gray-100 rounded-lg"
      onClick={onClick}>
      {children}
    </div>
  );

export default function HomePage(){
    const [filteredData, setFilteredData] = useState(data.filter(item => item.category === 'men'));
    
    return(
        <>
        <div className="bg-stone-50">
            <Navbar/>
            <Carousel/>
            <Promotion/>





            <div className="flex justify-center">
                <div className="flex flex-col gap-1 mr-5">
                    <CategoryBox onClick={()=>setFilteredData(data.filter(item => item.category === 'men'))}>Best Seller</CategoryBox>
                    <CategoryBox onClick={()=>setFilteredData(data.filter(item => item.category === 'men'))}>Men</CategoryBox>
                    <CategoryBox onClick={()=>setFilteredData(data.filter(item => item.category === 'women'))}>Women</CategoryBox>
                </div>
                <div className="grid grid-cols-12 gap-4 w-3/5">
                {
                    filteredData.map((item, index) => (
                        <Card productId={item.productId} name={item.name} imgUrl={item.imgUrl} price={item.price} star={item.star} />
                    ))
                }
                </div>
            </div>
                
            
        </div>
        </>
    )
}

function fetchData() {
    throw new Error("Function not implemented.");
}
