"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative bg-[url('/banner1.png')] bg-cover bg-[position:top] min-h-[300px] sm:min-h-[400px] md:min-h-[700px] flex items-center justify-center px-4">
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/cocinitaarancita.png"
            alt="Cocinita Arancita"
            width={800}
            height={100}
            className="mb-4"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-700 max-w-3xl px-4 py-2 rounded"
        >
          Arantxa, también conocida como{" "}
          <b style={{ color: "orange" }}>Arancita</b>, es el alma de cada
          comida. Su cocina ha conquistado paladares de todo el mundo. No solo
          cocina con maestría, cocina con corazón.
        </motion.p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
}
