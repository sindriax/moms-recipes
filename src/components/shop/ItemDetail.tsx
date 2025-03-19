import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ItemsDetailsProps {
  item: Item;
}

const ItemsDetails: React.FC<ItemsDetailsProps> = ({ item }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg relative">
      <Link href="/shop">
        <div className="absolute top-4 left-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition duration-200">
          ← Volver a la Tienda
        </div>
      </Link>
      <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-10">
        {item.name}
      </h1>
      <div className="relative w-full h-64 mb-6">
        <Image
          src={item.image}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p className="text-lg text-gray-700 mb-4">{item.description}</p>
      <p className="text-2xl font-bold text-gray-800 mb-4">
        Precio: ${item.price}
      </p>
    </div>
  );
};

export default ItemsDetails;
