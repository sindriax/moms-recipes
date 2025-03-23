import React from "react";
import Recipes from "../data/recipes";
import RecipesCard from "./RecipeCard";
import Link from "next/link";

const FeaturedRecipes = () => {
  const featuredIds = [9, 3, 7, 4];
  const featuredRecipes = Recipes.filter((recipe) =>
    featuredIds.includes(recipe.id)
  );

  return (
    <>
      <section className="max-w-screen-xl mx-auto px-4 sm:px-8 md:px-20 mt-12 pt-40 pb-20">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-300 mb-8 text-center relative animate-fade-in">
          Descubre Nuestros Favoritos
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
        <div className="mt-8 flex justify-center">
          <Link href="/recipes">
            <button className="bg-orange-300 hover:bg-[#f97316] text-white font-bold py-2 px-6 rounded-full shadow-md">
              ¡Descubre Más Recetas!
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default FeaturedRecipes;
