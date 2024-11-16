import React from "react";
import Link from "next/link";

interface Recipe {
  id: number;
  image: string;
  name: string;
  time: string;
  onClick: (id: number) => void;
}

interface RecipesCardProps {
  recipe: Recipe;
}

const RecipesCard: React.FC<RecipesCardProps> = ({ recipe }) => {
  // Add a check to prevent rendering if `recipe` is not defined
  if (!recipe || !recipe.id) {
    return null;
  }

  return (
    <Link href={`/recipes/${recipe.id}`}>
      <div style={{ cursor: "pointer" }}>
        <img
          src={recipe.image}
          alt={recipe.name}
          style={{ width: "100%", height: "auto" }}
        />
        <h2>{recipe.name}</h2>
        <p>
          <strong>Tiempo:</strong> {recipe.time}
        </p>
      </div>
    </Link>
  );
};

export default RecipesCard;
