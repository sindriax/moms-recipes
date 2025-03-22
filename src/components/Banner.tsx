"use client";
import Image from "next/image";
import Chef from "../../public/chefita.png";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <motion.section
      className="flex flex-col-reverse md:flex-row items-center bg-gray-100 p-8 shadow-lg h-400 mt-20 mr-20 ml-20 border border-orange-300 rounded-lg transition-transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, backgroundColor: "#FFF7ED" }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 ml-20">
          Conoce a la Chef Arantxa
        </h2>
        <p className="ml-20 text-lg text-gray-600">
          Arantxa es una famosa chef de Mataporquera, ahora reconocida como chef
          con estrella Michelin en Cataluña. Su talento en la cocina abarca
          desde deliciosos canelones hasta asados perfectos. Sabe preparar de
          todo, siempre con una dedicación y pasión que elevan cada plato a una
          experiencia inolvidable.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
        <Image src={Chef} alt="Chef Arantxa" height={600} />
      </div>
    </motion.section>
  );
}
