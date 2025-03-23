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
  className?: string;
}

const RecipesCard: React.FC<RecipesCardProps> = ({ recipe, className }) => {
  if (!recipe || !recipe.id) {
    return null;
  }

  return (
    <Link href={`/recipes/${recipe.id}`}>
      <div
        className={`box-border rounded-lg shadow hover:shadow 
                   transform hover:-translate-y-2 
                   transition-all duration-300 ease-in-out 
                   bg-white m-4 cursor-pointer group ${className || "w-80"}`}
      >
        <div className="relative w-full aspect-square">
          <Image
            src={recipe.image}
            alt={recipe.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-2">
          <h2 className="text-base font-semibold text-gray-800 mb-1">
            {recipe.name}
          </h2>
          <p className="text-gray-600 text-sm">
            <strong>Tiempo:</strong> {recipe.time}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecipesCard;
