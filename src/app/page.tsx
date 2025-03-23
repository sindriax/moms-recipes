import "@/app/globals.css";
import ThermomixAd from "@/components/Advertisement1";
import Banner from "@/components/Banner";
import FeaturedRecipes from "@/components/FeaturedRecipes";
import Info from "@/components/Info";
import VideoDivider from "@/components/VideoDivider";
// import CategoriesList from "@/components/CategoriesList";
// import LatestRecipes from "@/components/LatestRecipes";

export default function Home() {
  return (
    <div className="w-full">
      <Banner />
      <Info />
      <FeaturedRecipes />
      <VideoDivider />
      <ThermomixAd />
      {/* <CategoriesList /> */}
      {/* <LatestRecipes /> */}
    </div>
  );
}
