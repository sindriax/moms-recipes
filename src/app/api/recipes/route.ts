import { NextResponse } from "next/server";
import Recipes from "../../../data/recipes";

export async function GET() {
  try {
    return NextResponse.json(Recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return NextResponse.json(
      { error: "Failed to fetch recipes" },
      { status: 500 }
    );
  }
}
