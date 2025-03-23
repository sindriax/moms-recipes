import React from "react";
import Recipes from "../data/recipes";
import RecipesCard from "./RecipeCard";

const FeaturedRecipes = () => {
  const featuredIds = [1, 2, 5, 6];
  const featuredRecipes = Recipes.filter((recipe) =>
    featuredIds.includes(recipe.id)
  );

  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-20 mt-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Platos Estrella
      </h2>
      <div className="flex flex-wrap justify-center sm:justify-start">
        {featuredRecipes.map((recipe) => (
          <RecipesCard
            key={recipe.id}
            recipe={{
              ...recipe,
              onClick: () => {},
            }}
            className="w-60"
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedRecipes;
