"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Item {
  id: number;
  image: string;
  name: string;
  price: number;
  onClick: (id: number) => void;
}

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const [isSoldOut, setIsSoldOut] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setIsSoldOut(true);
  };

  return (
    <div
      onClick={handleClick}
      className="relative max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200 m-4 cursor-pointer"
    >
      <div className="relative w-full h-48">
        <Image
          src={item.image}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t"
        />
        {isSoldOut && (
          <div className="absolute inset-0 bg-orange-500 bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold text-xl">Agotado :(</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {item.name}
        </h2>
        <p className="text-gray-600">
          <strong>Precio:</strong> {item.price}€
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
