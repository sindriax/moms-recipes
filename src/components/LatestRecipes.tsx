import React from "react";
import RecipeCard from "./RecipeCard";
import Recipes from "../data/recipes"; // Adjust the path if necessary

function LatestRecipes() {
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
        {Recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={{
              id: recipe.id,
              image: recipe.image,
              name: recipe.name,
              time: recipe.time,
              onClick: () => {}, // Replace with appropriate handler if needed
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default LatestRecipes;
