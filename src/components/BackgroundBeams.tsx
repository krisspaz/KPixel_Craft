import { motion } from "framer-motion";

export const BackgroundBeams = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            {/* Floating Beams/Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, -50, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]"
            />

            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -100, 0],
                    y: [0, 100, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px]"
            />

            {/* Shooting Star Effect */}
            <motion.div
                initial={{ top: "-10%", left: "50%", opacity: 0 }}
                animate={{ top: "120%", left: "30%", opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                className="absolute w-[2px] h-[100px] bg-gradient-to-b from-transparent via-white to-transparent rotate-45 transform origin-top"
            />
            <motion.div
                initial={{ top: "-10%", left: "80%", opacity: 0 }}
                animate={{ top: "120%", left: "60%", opacity: [0, 1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 3 }}
                className="absolute w-[2px] h-[150px] bg-gradient-to-b from-transparent via-accent to-transparent rotate-45 transform origin-top"
            />

        </div>
    );
};
