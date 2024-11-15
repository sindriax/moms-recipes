import '@/app/globals.css';
import Banner from "@/components/Banner";
import CategoriesList from "@/components/CategoriesList";

export default function Home() {

  return (
    <div className="w-full">
      <Banner />
      <CategoriesList />
    </div>
  );
}
  