import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface CardProps {
    productId: string;
    name: string;
    imgUrl: string;
    price: string;
    star: number;
}

const Card = ({ productId,name, imgUrl, price, star }: CardProps) => {
  
    
    return (
        <>
            <div className={`col-span-6 md:col-span-3 lg:col-span-3  border border-white cursor-pointer hover:shadow-2xl transition-shadow duration-1000 ease-out bg-white hover:scale-110 `}>
                <Link href={`/product/${encodeURIComponent(productId)}`} >
                    <img src={imgUrl} alt={name} className="border-b w-full h-64 object-cover rounded-t-lg"/>
                </Link>
                
                <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-bold text-lg text-gray-800 uppercase">{name}</h2>
                        <p className="font-medium text-lg text-gray-700">{price}</p>
                    </div>

                <div className=" flex justify-between mt-3 ">
                    <div className="flex">
                        {Array.from({ length: star }, (_, i) => (
                            <span key={i} className="text-yellow-400">
                                ★
                            </span>
                        ))}
                        {Array.from({ length: 5 - star }, (_, i) => (
                            <span key={i} className="text-gray-300">
                                ★
                            </span>
                        ))}
                    </div>

                    <div className="border border-gray-300 rounded-full p-2 hover:bg-gray-200 transition-colors duration-200">
                            <button
                                onClick={(e) => { e.stopPropagation(); console.log("Heart button clicked"); }}
                                className="text-gray-400 focus:text-red-500"
                            >
                                ❤️
                            </button>
                    </div>
                </div>
                    
                <div>
                    <button className="bg-blue-500 p-3 rounded-md text-white w-full mt-3 hover:bg-blue-600 cursor-grabbing transition-colors duration-200" onClick={(e) => { e.stopPropagation(); console.log("Addcard button clicked"); }}>Add to cart</button>
                </div>
                </div>
            </div>
        </>
    );
};

export default Card;
