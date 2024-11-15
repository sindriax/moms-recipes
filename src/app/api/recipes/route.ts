// src/app/api/recipes/route.ts

import { NextRequest, NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) {
  // Replace with logic to fetch recipes from a database or data source
  const recipes = [
    { id: 1, title: "Paella", description: "A traditional Spanish dish." },
    { id: 2, title: "Tortilla Española", description: "A Spanish omelette." },
  ];
  return NextResponse.json(recipes);
}
