// components/CategoryCard.tsx

import Image, { StaticImageData } from "next/image";

interface CategoryCardProps {
  icon: string | StaticImageData; // Allow both string URLs and imported StaticImageData
  label: string;
  color: string;
}

function CategoryCard({ icon, label, color }: CategoryCardProps) {
  return (
    <div
      className="flex flex-col items-center justify-center p-6 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-lg"
      style={{ backgroundColor: color }}
    >
      <Image
        src={icon}
        alt={label}
        width={70}
        height={70}
        className="transition-transform duration-200"
      />
      <p className="mt-2 text-gray-800 font-semibold">{label}</p>
    </div>
  );
}

export default CategoryCard;
