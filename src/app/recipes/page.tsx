import React from "react";
import Image from 'next/image';
import Recipes from "../../data/recipes"

const RecipesPage: React.FC = () => {
  return (
    <div>
      <h1>Recetas</h1>
      <div>
        {Recipes.map((recipe) => (
          <div key={recipe.id}>
            <Image src={recipe.image} alt={recipe.name} width={500} height={300} />
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
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
