// components/RecipeCard.tsx

import Image, { StaticImageData } from 'next/image';

interface RecipeCardProps {
  image: string | StaticImageData;
  title: string;
  updatedAt: string;
}

function RecipeCard({ image, title, updatedAt }: RecipeCardProps) {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-lg">
      <div className="w-full h-60 overflow-hidden rounded-lg mb-4 transition-transform duration-300 hover:scale-110">
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-500 text-sm">Updated on {updatedAt}</p>
    </div>
  );
}

export default RecipeCard;