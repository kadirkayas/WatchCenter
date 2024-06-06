"use client";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import data from "../../data/data.json";
import { ReactNode, useState } from "react";
import Promotion from "@/components/Promotion";
import News from "./News";
import For from "./For";
import BestSeller from "./BestSeller";
import JoinMail from "./JoinMail";

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
    const [filteredData, setFilteredData] = useState(data.filter(item => item.category.map(item => item === 'men')));
    
    return(
        <>
        <div className="bg-stone-50">
            <Navbar/>
            <Carousel/>
            <Promotion/>
            <News/>
            <For/>
            <BestSeller/>   
            <JoinMail/>
        </div>
        </>
    )
}

