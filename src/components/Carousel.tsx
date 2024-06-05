"use client";
import { IconX } from "@/public/icon";
import { useState } from "react";

const images = [
    "https://wallpapercave.com/wp/wp10238271.jpg", 
    "https://wallpapercave.com/wp/wp10238269.jpg",
    "https://wallpapercave.com/dwp1x/wp10238267.jpg"
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
                <div className="w-full md:w-4/5 relative h-96 md:h-128 bg-black flex overflow-hidden">
                    <div className="w-full h-full absolute">
                        <img
                            src={images[activeIndex]}
                            className={`w-full h-full object-cover absolute transition-transform duration-700 ${direction === "next" ? "animate-slide-in" : "animate-slide-out"}`}
                        />
                    </div>
                    <div className="flex items-center">
                        <div className="flex justify-between items-center absolute w-full px-4">
                            <button
                                onClick={handlePrev}
                                className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition duration-300"
                            >
                                <IconX />
                            </button>
                            <button
                                onClick={handleNext}
                                className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition duration-300"
                            >
                                <IconX />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
