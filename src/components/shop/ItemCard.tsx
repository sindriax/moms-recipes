import React from "react";
import Link from "next/link";
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
  if (!item || !item.id) {
    return null;
  }

  return (
    <Link href={`/items/${item.id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200 m-4 cursor-pointer">
        <div className="relative w-full h-48">
          <Image
            src={item.image}
            alt={item.name}
            layout="fill"
            objectFit="cover"
            className="rounded-t"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {item.name}
          </h2>
          <p className="text-gray-600">
            <strong>Price:</strong> {item.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
