"use client";
import React, { useState } from "react";
import Items from "../../data/shop";
import ShopItemDetail from "@/components/shop/ItemDetail";
import ShopItemCard from "@/components/shop/ItemCard";
import Adevertisement from "@/components/shop/Advertisement";

const ShopPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedItem(id);
  };

  const selectedItemData =
    selectedItem !== null
      ? Items.find((item) => item.id === selectedItem)
      : null;

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="px-4 sm:px-8 py-8">
        {selectedItemData ? (
          <ShopItemDetail item={selectedItemData} />
        ) : (
          <div className="text-center">
            <h1 className="relative inline-block text-2xl sm:text-4xl font-bold text-gray-800 break-words mb-8">
              La Tiendecita Oficialita 🛒
              <span className="absolute left-0 -bottom-1 h-1 bg-orange-200 inline-block underline-animate"></span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
              {Items.map((item) => (
                <ShopItemCard
                  key={item.id}
                  item={{ ...item, onClick: handleCardClick }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <Adevertisement />
    </div>
  );
};

export default ShopPage;
