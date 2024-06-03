"use client";
import { useState } from "react";
import { IconBurger, IconShop, IconX } from "../public/icon";


export default function Navbar(){ 
    const[isOpen, setIsOpen] = useState(false)
    return( 
        <>
        <div className="h-20"> 
            <div className="h-20 mx-4 md:mx-20 flex items-center justify-between"> 
                <div className="w-20 text-2xl"> 
                    <p>LOGO</p>
                </div>
                <div className="hidden md:block" >
                    <div className="flex">
                        <a href="" className="mx-10 p-5 text-amber-900">HOME</a> 
                        <a href="" className="mx-10 p-5 text-amber-900">MEN</a> 
                        <a href="" className="mx-10 p-5 text-amber-900">WOMEN</a>
                        <a href="" className="mx-10 p-5 text-amber-900">ABOUT</a> 
                        <div className="mx-5 flex justify-center items-center">
                            <button className="">
                                <IconShop/>
                            </button>
                         </div>
                    </div>
                </div>
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <IconX/> : <IconBurger/>}
                </button>
            </div>
        </div> 
        </> 
) }