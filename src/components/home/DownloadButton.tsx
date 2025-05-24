"use client"
import { motion } from "framer-motion";
const DownloadButton = () => {

    return (


        <motion.a
            href="/Alamin_Full_Stack.pdf" // Change this to your actual resume file path
            download

            className="relative py-2 px-4 border border-[#31ffcc] bg-[#31ffcc] text-black overflow-hidden
            before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#31ffcc]
            before:transition-[width] before:duration-700 before:ease-in-out
            hover:before:w-0 hover:text-[#31ffcc] hover:bg-transparent"
        >
            <span className="relative z-10 transition-colors duration-500">Download Resume</span>

        </motion.a>

    );
};

export default DownloadButton;
