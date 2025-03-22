"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Advertisement() {
  return (
    <section className="py-6 my-6 bg-gradient-to-r  w-[60%] mx-auto rounded-lg border border-orange-200 shadow-2xl overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/hipoaullido.webp"
            alt="Hipoaullido Huracanado"
            width={300}
            height={180}
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            style={{ filter: "sepia(1) hue-rotate(-30deg) saturate(1)" }}
          />
        </motion.div>
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-300">
            Hipoaullido Huracanado
          </h2>
          <p className="text-lg font-semibold text-gray-700 mb-4">
            Patrocinador Oficial de La Cocinita de Arancita
          </p>
          <p className="text-base text-gray-600 mb-6">
            Disfruta tanto de los platos de Arancita que te harán gritar como el
            HIPOAULLIDOOOO HURACANADOOOOO 🌪️. ¡Una experiencia culinaria llena
            de emoción y sabor incomparable!
          </p>
          {/* <button className="bg-[#fb923c] hover:bg-[#f97316] text-white font-bold py-2 px-4 rounded-full">
            Descubre más
          </button> */}
        </motion.div>
      </div>
    </section>
  );
}
