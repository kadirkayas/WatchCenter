"use client";
import { IconX } from "@/public/icon";
import { useState } from "react";
const images = [
    "https://via.placeholder.com/800x400.png?text=First+Image",
    "https://via.placeholder.com/800x400.png?text=Second+Image",
    "https://via.placeholder.com/800x400.png?text=Third+Image"
  ];

export default function Carousel(){
    const [activeIndex, setActiveIndex] = useState(1);

    function handleNext(){
        setActiveIndex((activeIndex + 1) % images.length);
    }
    function handlePrev(){
        setActiveIndex((activeIndex - 1 + images.length) % images.length);
    }
    return(
        <> 
        <div className="flex justify-center">
            <div className="w-full md:w-3/4 relative bg-black flex ">
                <div className="w-full h-full absolute">
                    <img src={images[activeIndex]} className="w-full h-full object-cover absolute" />
                </div>
                <div className="h-96 flex items-center">
                    <div className="flex justify-between items-center absolute  w-full px-4">
                        <button onClick={handlePrev} className="bg-white p-2 rounded-full shadow" >
                           <IconX />
                        </button>
                        <button onClick={handleNext}  className="bg-white p-2 rounded-full shadow">
                           <IconX />
                        </button>
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}