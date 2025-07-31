import { FloatedSearch } from "../FloatedSearch";

export function Banner() {
    return (
        <div className="container relative mx-auto">
            {/* La ruta del banner está especificada dentro del archivo tailwind.config-ts */}
            <div className="pt-20 md:pt-0 min-h-[80vh] bg-banner bg-no-repeat bg-cover bg-center rounded-3xl relative flex flex-col items-center md:justify-center">
                <div className="max-w-3xl text-center text-white">
                    <h2 className="text-5xl font-semibold">Colnago, la bicicleta del campeón</h2>
                    <p className="mt-2 text-xl md:mt-8">Somos los ases del Ciclismo. Nuestro único objetivo es la excelencia. Aspiramos a ser los mejores en todo lo que hacemos.</p>
                </div>
                <FloatedSearch />
            </div>
        </div>
    )
}
