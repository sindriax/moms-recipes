import "@/app/globals.css";
import Banner from "@/components/Banner";
import FeaturedRecipes from "@/components/FeaturedRecipes";
// import CategoriesList from "@/components/CategoriesList";
import LatestRecipes from "@/components/LatestRecipes";

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      <FeaturedRecipes />
      {/* <CategoriesList /> */}
      <LatestRecipes />
    </div>
  );
}
