"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative mt-10 md:mt-8 bg-none md:bg-[url('/banner1.png')] md:bg-cover md:bg-[position:top] min-h-[200px] sm:min-h-[400px] md:min-h-[700px] flex flex-col items-center justify-center px-4">
      <div className="relative z-20 flex flex-col items-center justify-center text-center">
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
          Bienvenidos a este rinconcito dedicado a nuestra chef favorita,
          Arantxa, o como la llamaban de pequeña en Mataporquera,{" "}
          <Link href="/about">
            <b style={{ color: "orange" }}>Arancita</b>
          </Link>
          . Un espacio creado con cariño para celebrar a la persona que llena
          cada plato de alegría y cada comida de momentos especiales. No solo
          cocina con maestría, cocina con corazón.
        </motion.p>
      </div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:hidden mt-4"
      >
        <Image
          src="/mobile-divider.png"
          alt="Divider"
          width={600}
          height={50}
        />
      </motion.div>
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white"></div>
    </section>
  );
}
