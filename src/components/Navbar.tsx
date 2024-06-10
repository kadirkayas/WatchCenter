"use client";
import { useState } from "react";
import { IconBurger, IconShop, IconX } from "../public/icon";
import logo from "@/public/logo.png"
import Link from "next/link";


export default function Navbar(){ 
    const[isOpen, setIsOpen] = useState(false)
    return( 
        <>
        <div className="h-28"> 
            <div className="h-20 mx-4 md:mx-24 flex items-center justify-between"> 
                <div className="w-26 text-2xl"> 
                    <img src={logo.src} alt="" />
                </div>
                <div className="hidden md:block " >
                    <div className="flex lg:text-xl">
                        <a href="" className="lg:mx-10 p-5 text-amber-900">HOME</a> 
                        <Link href="/men" className="lg:mx-10 p-5 text-amber-900">MEN</Link>
                        <Link href="/women" className="lg:mx-10 p-5 text-amber-900">WOMEN</Link>
                        <a href="" className="lg:mx-10 p-5 text-amber-900">ABOUT</a> 
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