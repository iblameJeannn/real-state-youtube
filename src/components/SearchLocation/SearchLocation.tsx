import { useState } from 'react'
import { GrFormDown, GrLocation, GrFormUp } from 'react-icons/gr'

export function SearchLocation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-3 py-2 justify-between cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
        >
            <GrLocation />

            <div>
                <p>Localización</p>
                <p className='text-xs'>Selecciona tu ubicación</p>
            </div>
            {isOpen ? (
                <GrFormUp />
            ): (
                <GrFormDown />
            )}

            {isOpen && (
                <div className='absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0'>
                    <p>Puebla</p>
                    <p>CDMX</p>
                    <p>Mazatlán</p>
                </div>
            )}
        </div>
    )
}
 