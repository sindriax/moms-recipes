"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ThermomixAd() {
  return (
    <section className="py-10 my-6  w-[90%] md:w-[70%] mx-auto rounded-lgshadow-2xl overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/thermomix.png"
            alt="Thermomix"
            width={300}
            height={180}
            className="hover:scale-105 transition-transform duration-300"
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
            Patrocinado por Thermomix ©
          </h2>
          <p className="text-lg font-semibold text-gray-700 mb-4">
            El secreto bien guardado de La Cocinita de Arancita
          </p>
          <p className="text-base text-gray-600 mb-6">
            En La Cocinita de Arancita, cada receta es una obra de arte. Con
            Thermomix a su lado, da rienda suelta a la creatividad y logra
            resultados sorprendentes. Descubre cómo este patrocinador oficial
            añade ese toque mágico que transforma lo cotidiano en
            extraordinario.
          </p>
          <Link href="/shop">
            <button className="bg-orange-300 hover:bg-[#f97316] text-white font-bold py-2 px-6 rounded-full shadow-md">
              ¡Descubre la Tienda!
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
