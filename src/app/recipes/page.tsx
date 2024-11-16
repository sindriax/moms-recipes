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
    <div>
      {selectedRecipeData ? (
        <RecipesDetails recipe={selectedRecipeData} />
      ) : (
        <div>
          <h1>Recetas</h1>
          <div>
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
