"use client"

import Link from "next/link"
import { Transition } from "../Transition"
import { dataProperties } from "./Properties.data"
import { LiaBedSolid, LiaStarSolid } from "react-icons/lia"
import Image from "next/image"
import { format } from "path"
import { formatPrice } from "@/utils/formatPrice"
import { useState } from "react"

export function Properties() {

    // useState para mostrar solo 8 bicicletas, indicado para el dataFilteredBikes
    const [counterBikes, setCounterBikes] = useState(8);
    const dataFilteredBikes = dataProperties.slice(0, counterBikes);

    // Función para aumentar el nómero de bicicletas que se están mostrando
    const loadMoreBikes = () => {
        setCounterBikes(counterBikes + 4)
    }

    return (
        <Transition className="px-4 my-8 md:py-32 md:px-40">
            <div className="grid grid-cols-2 gap-4 md: grid-cols-4">
                {/* Los datos del componente se obtienen del objeto del archivo properties.data.ts */}
                {dataFilteredBikes.map(({id, model, price, image, star, description}) => (
                    <Link key={id} href={`/properties/${id}`} className="shadow-light hover:shadow-xl rounded-2xl transition-all duration-300 cursor-pointer">
                        <div key={id} className="relative -z-[1]">
                            <div className="relative">
                                <div className="absolute flex items-center px-2 py-1 rounded-lg bg-slate-50 top-2 right-2 text-secondary ">
                                    <LiaStarSolid />
                                    <span className="ml-1 font-semibold">{star}</span>
                                </div> 
                                <Image src={`/assets/properties/${image}`} alt="Bike" width={150} height={300} 
                                    className="object-cover w-full max-h-full h-[270px] rounded-t-2xl"/>
                                <div className="px-3 py-5">
                                    <p className="text-secondary">{model}</p>
                                    <p className="font-semibold">{formatPrice(price)}</p>
                                    <div className="gap-4 mt-2 lg:flex">
                                        {/* <div className="flex items-center justify-center px-2 py-1 rounded-lg bg-slate-300/30">
                                            <LiaBedSolid />
                                            <span className="ml-2"></span>
                                        </div>  */}
                                    </div >
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="text-center my-7">
                {counterBikes < dataProperties.length && (
                    <button 
                        className="px-6 py-6 text-white transition-all duration-150 cursor-pointer bg-secondary rounded-xl hover:bg-black"
                        onClick={loadMoreBikes}
                    >
                        Ver más
                    </button>
                )}
                
            </div>
        </Transition>
    )
}
 