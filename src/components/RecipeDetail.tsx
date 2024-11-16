import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg relative">
      <Link href="/recipes">
        <div className="absolute top-4 left-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-200">
          ← Volver a Recetas
        </div>
      </Link>
      <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-10">
        {recipe.name}
      </h1>
      <div className="relative w-full h-64 mb-6">
        <Image
          src={recipe.image}
          alt={recipe.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p className="text-lg text-gray-700 mb-4">{recipe.description}</p>
      <p className="text-gray-600 mb-6">
        <strong className="font-semibold">Tiempo:</strong> {recipe.time}
      </p>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Ingredientes:
      </h3>
      <ul className="list-disc pl-6 mb-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} className="text-gray-700 text-lg mb-1">
            {ingredient}
          </li>
        ))}
      </ul>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Paso a Paso:
      </h3>
      <ol className="list-decimal pl-6 space-y-3">
        {recipe.steps.map((step, index) => (
          <li key={index} className="text-gray-700 text-lg">
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default RecipesDetails;
