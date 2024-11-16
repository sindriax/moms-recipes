"use client"; // Add this directive at the top

import React from "react";
import { useParams } from "next/navigation";
import Recipes from "../../../data/recipes"; // Adjust the path if necessary
import RecipesDetails from "@/components/RecipeDetail";

const RecipeDetailsPage: React.FC = () => {
  const { id } = useParams(); // Extract the id from the route parameters
  const recipeId = parseInt(id as string, 10);
  const recipe = Recipes.find((recipe) => recipe.id === recipeId);

  if (!recipe) {
    return <div>Receta no encontrada</div>; // Handle non-existent recipe case
  }

  return <RecipesDetails recipe={recipe} />;
};

export default RecipeDetailsPage;
