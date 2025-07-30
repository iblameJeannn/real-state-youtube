import { AnimatePresence, motion } from "framer-motion"

export function TransitionPage() {
    return (
        <AnimatePresence mode="wait">
            <div>
                
                <motion.div
                    className="fixed top-0 bottom-0 rigth-full w-screen h-screen z-30 bg-secondary"
                    variants={transitionVariantPage}
                    initial="inital"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut"}}>


                </motion.div>

                <motion.div
                    className="fixed top-0 bottom-0 rigth-full w-screen h-screen z-20 bg-secondary/70 opacity-50"
                    variants={transitionVariantPage}
                    initial="inital"
                    animate="animate"
                    exit="exit"
                    transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut"}}>


                </motion.div>
            </div>
        </AnimatePresence>
    )
}

const transitionVariantPage = {
    initial: {
        x: "100%",
        width: "100%",
    },
    animate: {
        x: "0%",
        width: "0%"
    },
    exit: {
        x: ["0%", "100%"],
        width: ["0%", "100%"]
    }
}