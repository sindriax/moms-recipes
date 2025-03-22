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
    <div>
      <div className="p-8">
        {selectedItemData ? (
          <ShopItemDetail item={selectedItemData} />
        ) : (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Tiendecita Oficial
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
