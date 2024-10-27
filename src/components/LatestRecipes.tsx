// components/LatestRecipes.tsx

import { StaticImageData } from "next/image";
import RecipeCard from "./RecipeCard";
import carbonara from "../../public/carbonara.jpg";
import bowl from "../../public/bowl.jpg";
import cake from "../../public/cake.jpg";

interface Recipe {
  image: string | StaticImageData;
  title: string;
  updatedAt: string;
}

function LatestRecipes() {
  const recipes: Recipe[] = [
    {
      image: carbonara,
      title: "Spaghetti Carbonara",
      updatedAt: "October 25, 2024",
    },
    { image: bowl, title: "Vegan Buddha Bowl", updatedAt: "October 20, 2024" },
    {
      image: cake,
      title: "Chocolate Lava Cake",
      updatedAt: "October 18, 2024",
    },
  ];

  return (
    <section className="p-8 ml-20 mr-20 mt-40">
      <div className="w-full flex flex-col items-center justify-center mb-40 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Recetas simples y deliciosas
        </h1>
        <p className="text-gray-600 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          aperiam quia architecto hic aut ex vero ut mollitia cupiditate veniam
          saepe ullam modi, illum nulla recusandae dignissimos consequatur
          exercitationem nam?
        </p>
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Últimas Recetas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            image={recipe.image}
            title={recipe.title}
            updatedAt={recipe.updatedAt}
          />
        ))}
      </div>
    </section>
  );
}

export default LatestRecipes;
 