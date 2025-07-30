import { useEffect, useState } from "react"
import { dataHeader } from "../Header/Header.data"
import { NavbarProps } from "./Navbar.types"
import { AnimatePresence } from "framer-motion";
import Link from "next/link";


export function Navbar(props: NavbarProps) {

    const { openMobileMenu } = props;
    const [isScrolling, setIsScrolling] = useState(false)
    () => {
        if (window.scrollY >= window.innerHeight - 600) {
            setIsScrolling(true)
        } else {
            setIsScrolling(false)
        }
    }

    return (
        <AnimatePresence>
            <div className={`${openMobileMenu ? "absolute z-[1] left-0 top-20 bg-white r-0 w-full px-4 py-4": "hidden"} gap-5 md:flex`}>
                {dataHeader.map(({id, name, link}) => (
                    <Link key={id} href={link} className="block hover:text-secondary hover:border-b-[1px]">{name}</Link>
                ))}
            </div>
        </AnimatePresence>
    )
}
