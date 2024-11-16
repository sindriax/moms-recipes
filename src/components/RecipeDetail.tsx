import React from "react";

interface Recipe {
  id: number;
  image: string;
  name: string;
  description: string;
  time: string;
  ingredients: string[];
  steps: string[];
}

interface RecipesDetailsProps {
  recipe: Recipe;
}

const RecipesDetails: React.FC<RecipesDetailsProps> = ({ recipe }) => {
  return (
    <div>
      <h1>{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        style={{ width: "100%", height: "auto" }}
      />
      <p>{recipe.description}</p>
      <p>
        <strong>Tiempo:</strong> {recipe.time}
      </p>
      <h3>Ingredientes:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Paso a Paso:</h3>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipesDetails;
