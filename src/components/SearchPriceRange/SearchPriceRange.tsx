import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";

export function SearchPriceRange() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer'
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <GrTag />
                
                            <div>
                                <p>Rango de precio</p>
                                <p className='text-xs'>Selecciona el rango de precio</p>
                            </div>
                            {isOpen ? (
                                <GrFormUp />
                            ): (
                                <GrFormDown />
                            )}
                
                            {isOpen && (
                                <div className='absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0'>
                                    <p>Cualquier rango</p>
                                    <p>$30,000 - $59,999</p>
                                    <p>$60,000 - $99,999</p>
                                    <p>$100,000 - $200,000</p>
                                </div>
                            )}
            </div>
    )
}
