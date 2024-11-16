import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 w-2/3 mt-10 rounded-lg shadow-md">
      <div className="flex-shrink-0 w-32 md:w-48">
        <Image
          src="/path/to/left-image.jpg"
          alt="Left side image"
          width={192}
          height={256}
          className="rounded-lg"
        />
      </div>
      <div className="flex-grow text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4">Sobre la Chef</h2>
        <p className="text-gray-700">
          Arancita es una mujer maravillosa y muy trabajadora, nacida en el
          encantador pueblo de Mataporquera. Aunque a veces ella misma no se lo
          crea, es una cocinera excepcional, capaz de preparar platos que dejan
          a todos maravillados. Su talento en la cocina es innegable, y quienes
          tienen la suerte de probar sus recetas siempre quedan con ganas de
          más. Nacida el 19 de marzo de 1963, Arancita ha pasado su vida
          demostrando que el esfuerzo y la pasión por lo que se hace son los
          ingredientes secretos para destacar en todo lo que emprende.
          Actualmente, Arancita trabaja en el ICS, donde ha ganado una
          popularidad notable gracias a su carisma, dedicación y espíritu
          colaborativo. No hay quien no la conozca ni admire su capacidad de
          hacer sentir a todos bienvenidos y valorados.
        </p>
      </div>
      <div className="flex-shrink-0 w-32 md:w-48">
        <Image
          src="/path/to/right-image.jpg"
          alt="Right side image"
          width={192}
          height={256}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default AboutMe;
