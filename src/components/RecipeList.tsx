import React from "react";

interface Recipe {
  id: number;
  name: string;
}

interface RecipesListProps {
  recipes: Recipe[];
}

const RecipesList: React.FC<RecipesListProps> = ({ recipes }) => {
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>{recipe.name}</li>
      ))}
    </ul>
  );
};

export default RecipesList;
