import Header from "@/components/Header";
import '@/app/globals.css';
import Banner from "@/components/Banner";
import CategoriesList from "@/components/CategoriesList";

export default function Home() {

  return (
    <div className="w-full">
      <Header />
      <Banner />
      <CategoriesList />
    </div>
  );
}
  