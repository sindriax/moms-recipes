import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Recipe {
  id: number;
  image: string;
  name: string;
  description: string | string[];
  time: string;
  ingredients: string[];
  steps: string[];
}

interface RecipesDetailsProps {
  recipe: Recipe;
}

const RecipesDetails: React.FC<RecipesDetailsProps> = ({ recipe }) => {
  return (
    <div className="w-[50%] mx-auto p-6 bg-white shadow-md rounded-lg relative border border-orange-100 mb-20 mt-10">
      <div className="flex items-center justify-between mb-4 mt-4">
        <h1 className="relative inline-block text-4xl font-bold text-gray-800">
          {recipe.name}
          <span className="absolute left-0 -bottom-1 h-1 bg-orange-200 inline-block underline-animate"></span>
        </h1>
        <Link href="/recipes">
          <div className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-orange-300 transition duration-200">
            ← Volver a Recetas
          </div>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="relative w-64 h-64 mb-6 md:mb-0">
          <Image
            src={recipe.image}
            alt={recipe.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-6 flex flex-col justify-center">
          <p className="text-gray-600 mb-6">
            <strong className="font-semibold">Tiempo:</strong> {recipe.time}
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Ingredientes:
          </h3>
          <ul
            className={`list-disc pl-6 mb-6 ${
              recipe.ingredients.length > 5 ? "grid grid-cols-2 gap-x-4" : ""
            }`}
          >
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700 text-lg mb-1">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-lg text-gray-700 mb-4">{recipe.description}</p>
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
