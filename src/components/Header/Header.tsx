"use client"
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { BsTelephoneFill } from "react-icons/bs";
import { Navbar } from "../Navbar";
import { useState } from "react";

export function Header() {

    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    return (
        <div className="container mx-auto my-5">
            <div className="flex items-center justify-between px-5 wd:px-0">
                <Link href="/">
                <h1 className="font-medium">Colnago Store</h1>
                </Link>
                
                <CiMenuFries className="block text-2xl md:hidden" onClick={() => setOpenMobileMenu(!openMobileMenu)} />

                <Navbar openMobileMenu={openMobileMenu}/>

                <div className="flex items-center gap-2 md:gap-5">
                    <Link href="tel: 2222222222" className="flex items-center gap-4 cursor-pointer">
                        <BsTelephoneFill />
                        <span className="hidden md:block">+52 248 244 1234</span>
                    </Link>      
                    <Link href="/login" className="px-3 py-2 text-white rounded-lg bg-secondary hover:bg-black">Login</Link>         
                </div>

            </div>

        </div>
    )
}
