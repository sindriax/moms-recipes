"use client";
import React, { useState } from "react";
import Recipes from "../../data/recipes";
import RecipesDetails from "@/components/RecipeDetail";
import RecipesCard from "@/components/RecipeCard";

const RecipesPage: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedRecipe(id);
  };

  const selectedRecipeData =
    selectedRecipe !== null
      ? Recipes.find((recipe) => recipe.id === selectedRecipe)
      : null;

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-8">
      {selectedRecipeData ? (
        <RecipesDetails recipe={selectedRecipeData} />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="relative inline-block text-2xl sm:text-4xl font-bold text-gray-800 break-words">
            Recetas 🥘
            <span className="absolute left-0 -bottom-1 h-1 bg-orange-200 inline-block underline-animate"></span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {Recipes.map((recipe) => (
              <RecipesCard
                key={recipe.id}
                recipe={{ ...recipe, onClick: handleCardClick }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipesPage;
