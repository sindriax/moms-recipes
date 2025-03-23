"use client";
import Image from "next/image";
import Chef from "../../public/chefita.png";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <motion.section
      className="group relative flex flex-col-reverse md:flex-row items-center bg-gray-100 py-6 sm:py-16 px-4 sm:px-8 shadow-lg mt-10 mx-4 sm:mx-20 border border-orange-300 rounded-lg transition-transform duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        cursor: "pointer",
        scale: 1.05,
        shadow: "2px 2px 10px rgba(0,0,0,0.10)",
      }}
      transition={[{ ease: "easeOut" }]}
    >
      <div className="md:w-1/2 text-center md:text-left md:ml-20">
        <h2 className="relative inline-block text-2xl font-bold text-gray-800 mb-4 md:text-left">
          Conoce a la chef Arantxa
          <span className="absolute left-0 -bottom-1 h-1 bg-orange-200 inline-block underline-animate"></span>
        </h2>
        <p className="ml-0 text-lg text-gray-600 text-center md:text-left">
          Arantxa, también conocida como{" "}
          <b style={{ color: "orange" }}>Arancita</b>, es el alma de cada
          comida. Desde su querida Mataporquera, su cocina ha conquistado
          paladares de todo el mundo. No solo cocina con maestría, cocina con
          corazón.
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
        <Image
          src={Chef}
          alt="Chef Arantxa"
          width={400}
          height={400}
          className="w-auto h-auto max-h-[400px] sm:max-h-[500px]"
        />
      </div>
    </motion.section>
  );
}
