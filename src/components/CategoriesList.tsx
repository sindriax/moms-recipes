"use client";

import brekkie from "../../public/brekkie.png";
import vegan from "../../public/vegan.png";
import meat from "../../public/meat.png";
import dessert from "../../public/dessert.png";
import sushi from "../../public/sushi.png";
import choco from "../../public/choco.png";

import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

interface Category {
  icon: StaticImageData;
  label: string;
  color: string;
}

function CategoriesList() {
  const categories: Category[] = [
    { icon: brekkie, label: "Desayunos", color: "#F9FAFB" },
    { icon: vegan, label: "Saludables", color: "#F0FDF4" },
    { icon: meat, label: "Carne", color: "#FEF3C7" },
    { icon: dessert, label: "Postres", color: "#FFF7ED" },
    { icon: sushi, label: "Comidas", color: "#E0F2FE" },
    { icon: choco, label: "Chocolate", color: "#F3E8FF" },
  ];

  return (
    <section className="px-4 sm:px-8 mt-10">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h2 className="text-3xl font-bold text-gray-900 ml-0 sm:ml-20">
          Categorías
        </h2>
        <button className="bg-blue-100 text-black font-bold px-4 py-2 rounded-full shadow sm:mr-20">
          Ver todas las categorías
        </button>
      </div>

      <div className="flex justify-center mt-10">
        <motion.div
          className="flex flex-wrap justify-center gap-4 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={cardVariants}>
              <CategoryCard
                label={category.label}
                color={category.color}
                icon={category.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CategoriesList;
