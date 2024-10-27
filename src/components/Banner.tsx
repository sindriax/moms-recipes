import Image from "next/image";
import Chef from "../../public/chef.png";

export default function Banner() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center bg-gray-100 p-8 shadow-lg h-400 mt-20">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Conoce a la Chef Arantxa
        </h2>
        <p className="text-lg text-gray-600">
          Arantxa es una famosa chef de Mataporquera, ahora reconocida como chef
          con estrella Michelin en Cataluña. Su talento en la cocina abarca
          desde deliciosos canelones hasta asados perfectos. Sabe preparar de
          todo, siempre con una dedicación y pasión que elevan cada plato a una
          experiencia inolvidable.
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
        <Image
          src={Chef}
          alt="Chef Arantxa"
          height={800}
          className="rounded-full"
        />
      </div>
    </section>
  );
}
