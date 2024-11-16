"use client";
import React, { useState } from "react";
import Recipes from "../../data/recipes"; // Adjust the path if necessary
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
    <div className="p-8">
      {selectedRecipeData ? (
        <RecipesDetails recipe={selectedRecipeData} />
      ) : (
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Recetas</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
