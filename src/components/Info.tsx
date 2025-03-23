"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ChefImage from "/public/arancita.png";
import Link from "next/link";

const Info = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-20 mt-30 pt-40">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-300 mb-4">
            La magia de cocinar con corazón
          </h3>
          <p className="text-gray-600 text-base sm:text-lg px-2 sm:px-0">
            En La Cocinita de{" "}
            <Link href="/about">
              <b style={{ color: "orange" }}>Arancita</b>
            </Link>{" "}
            descubrirás recetas auténticas, sencillas y llenas de amor. Cada
            plato tiene su propia historia y sabor único, pensado para que
            disfrutes cocinando y sorprendas a todos los que quieres. Porque
            cocinar es compartir, y nadie lo sabe mejor que Arantxa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <Image src={ChefImage} alt="Chef Arantxa" width={500} height={500} />
        </motion.div>
      </div>
    </section>
  );
};

export default Info;
