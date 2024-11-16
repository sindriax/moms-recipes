import React from "react";
import Link from "next/link";
import Image from "next/image";

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
  if (!recipe || !recipe.id) {
    return null;
  }

  return (
    <Link href={`/recipes/${recipe.id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200 m-4 cursor-pointer">
        <div className="relative w-full h-48">
          <Image
            src={recipe.image}
            alt={recipe.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {recipe.name}
          </h2>
          <p className="text-gray-600">
            <strong>Tiempo:</strong> {recipe.time}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecipesCard;
