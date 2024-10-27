import Header from "@/components/Header";
import '@/app/globals.css';
import Banner from "@/components/Banner";
import CategoriesList from "@/components/CategoriesList";
import LatestRecipes from "@/components/LatestRecipes";

export default function Home() {

  return (
    <div className="w-full">
      <Header />
      <Banner />
      <CategoriesList />
      <LatestRecipes />
    </div>
  );
}
  