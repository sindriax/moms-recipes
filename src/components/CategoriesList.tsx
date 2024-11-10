import brekkie from "../../public/brekkie.png";
import vegan from "../../public/vegan.png";
import meat from "../../public/meat.png";
import dessert from "../../public/dessert.png";
import sushi from "../../public/sushi.png";
import choco from "../../public/choco.png";

import { StaticImageData } from "next/image";
import CategoryCard from "./CategoryCard";

interface Category {
  icon: StaticImageData;
  label: string;
  color: string;
}

function CategoriesList() {
  const categories: Category[] = [
    { icon: brekkie, label: "Breakfast", color: "#F9FAFB" },
    { icon: vegan, label: "Vegan", color: "#F0FDF4" },
    { icon: meat, label: "Meat", color: "#FEF3C7" },
    { icon: dessert, label: "Dessert", color: "#FFF7ED" },
    { icon: sushi, label: "Lunch", color: "#E0F2FE" },
    { icon: choco, label: "Chocolate", color: "#F3E8FF" },
  ];

  return (
    <section className="p-8 mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 ml-20">Categories</h2>
        <button className="bg-blue-100 text-black font-bold px-4 py-2 rounded-full shadow mr-20">
          View All Categories
        </button>
      </div>

      <div className="flex justify-center w-100 h-40">
        <div className="flex flex-wrap space-x-4 w-100">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              label={category.label}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesList;
