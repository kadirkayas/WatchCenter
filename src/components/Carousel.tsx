"use client";
import { IconArrowLeft, IconArrowRight, IconX } from "@/public/icon";
import { useState } from "react";
import caro1 from "../public/caro1.png"
import caro2 from "../public/caro2.png"
import caro3 from "../public/caro3.jpg"
const images = [
    caro1.src,caro2.src,caro3.src 
];

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState("prev");

    function handleNext() {
        setDirection("next");
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    function handlePrev() {
        setDirection("prev");
        setActiveIndex((prevIndex) => (prevIndex - 1) % images.length);
    }

    return (
        <> 
            <div className="flex justify-center">
                <div className="w-full mx-10 relative h-96 md:h-128 bg-black flex overflow-hidden">
                    <div className="w-full h-full absolute">
                        <img
                            src={images[activeIndex]}
                            className={` brightness-90 w-full h-full object-cover absolute transition-transform duration-700 ${direction === "next" ? "animate-slide-in" : "animate-slide-out"}`}
                        />
                    </div>
                    <div className="flex flex-col items-center absolute h-128 w-full text-center align-center justify-center text-white">
                            <h1 className="text-5xl">NEW SUMMER COLLECTION</h1>
                            <h3 className="text-3xl mt-7">Lorem Ipsum</h3>
                            <button className="text-3xl mt-7 border-2 px-5 py-4 rounded-md ">BUY NOW</button>
                    </div>
                    <div className="flex items-center">
                        <div className="flex justify-between items-center absolute w-full px-4">
                            <button
                                onClick={handlePrev}
                                className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition duration-300"
                            >
                                <IconArrowLeft/>
                            </button>
                            <button
                                onClick={handleNext}
                                className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition duration-300"
                            >
                                <IconArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
