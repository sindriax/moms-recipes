"use client";

import React from "react";
import { useParams } from "next/navigation";
import Recipes from "../../../data/recipes";
import RecipesDetails from "@/components/RecipeDetail";

const RecipeDetailsPage: React.FC = () => {
  const { id } = useParams();
  const recipeId = parseInt(id as string, 10);
  const recipe = Recipes.find((recipe) => recipe.id === recipeId);

  if (!recipe) {
    return <div>Receta no encontrada</div>;
  }

  return <RecipesDetails recipe={recipe} />;
};

export default RecipeDetailsPage;
