"use client";
import { useState } from "react";
import data from "@/data/data.json";
export default function Product({params}:{params:{name:string}}) {
  const [filteredData, setFilteredData] = useState(data.filter(item => item.productId === params.name));
    
  return(
    <>
      <div>
        {filteredData.map((item, index) => (
          <div>{item.name}{item.price}</div>
        ))}
      </div>
    </>
  )
}