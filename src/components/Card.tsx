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
            <div className="col-span-12 md:col-span-6 lg:col-span-4 border border-white rounded-md cursor-pointer bg-orange-50 " >
                <Link href={`/product/${encodeURIComponent(productId)}`}>
                    <img src={imgUrl} alt={name} className="border w-full"/>
                </Link>
                
                <div className="p-4">
                <div className="flex justify-between">
                    <h2 className="font-bold uppercase">{name}</h2>
                    <p className="font-medium">{price}</p>
                </div>

                <div className=" flex justify-between mt-3 ">
                    <div className="relative">
                        {Array.from({ length: star }, (_, i) => (
                            <span key={i} className="bg-gray-100 text-yellow-400">
                                ★
                            </span>
                        ))}
                        {Array.from({ length: 5-star }, (_, i) => (
                            <span key={i} className="bg-gray-100 text-gray-400">
                                ★
                            </span>
                        ))}
                    </div>

                    <div className="border border-gray-300 rounded-full p-2">
                        <button 
                        onClick={(e) => { e.stopPropagation(); console.log("Heart button clicked"); }}
                        className="text-gray-400  focus:text-red-500"
                        >❤️</button>
                    </div>
                </div>
                    
                <div>
                    <button className="bg-blue-500 p-3 rounded-md text-white w-full mt-3 hover:bg-blue-600 cursor-grabbing" onClick={(e) => { e.stopPropagation(); console.log("Addcard button clicked"); }}>Add to cart</button>
                </div>
                </div>
            </div>
        </>
    );
};

export default Card;
