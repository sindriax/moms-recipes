"use client";

import React from "react";
import { useParams } from "next/navigation";
import Items from "../../../data/shop";
import ItemDetails from "@/components/shop/ItemDetail";

const ItemDetailsPage: React.FC = () => {
  const { id } = useParams();
  const itemId = parseInt(id as string, 10);
  const item = Items.find((item) => Number(item.id) === itemId);

  if (!item) {
    return <div>Item no encontrado</div>;
  }

  return <ItemDetails item={item} />;
};

export default ItemDetailsPage;
