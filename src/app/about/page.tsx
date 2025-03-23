"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const AboutMe = () => {
  const carouselImages = [
    "/carousel1.jpeg",
    "/carousel2.jpeg",
    "/carousel3.jpeg",
    "/carousel4.jpeg",
    "/carousel5.jpeg",
    "/carousel6.jpeg",
    "/carousel7.jpeg",
    "/carousel8.jpeg",
    "/carousel9.jpeg",
    "/carousel10.jpeg",
    "/carousel11.jpeg",
    "/carousel12.jpeg",
    "/carousel13.jpeg",
    "/carousel14.jpeg",
    "/carousel15.jpeg",
    "/carousel16.jpeg",
  ];
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 5, spacing: 10 },
  });

  useEffect(() => {
    if (!instanceRef.current) return;
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-6 bg-white p-8 w-[80%] mt-10 rounded-lg shadow-md mx-auto">
        <div>
          <h2 className="relative inline-block text-2xl sm:text-3xl font-bold text-gray-800 break-words mb-2">
            Sobre la Chef 👩🏼‍🍳
            <span className="absolute left-0 -bottom-1 h-1 bg-orange-200 inline-block underline-animate"></span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex-shrink-0 w-48 md:w-64">
            <Image
              src="/mami4.jpeg"
              alt="Left side image"
              width={384}
              height={512}
              className="rounded-lg h-auto max-h-[340px] object-cover"
            />
          </div>
          <div className="flex-grow text-center md:text-left px-4 md:px-8">
            <p className="text-gray-700 leading-relaxed w-[100%]">
              Arantxa /aˈɾanθaθ/, también conocida como{" "}
              <b style={{ color: "orange" }}>Arancita</b> ha dedicado su vida a
              demostrar que el esfuerzo, la constancia y la pasión son los
              ingredientes secretos para destacar en todo lo que hace.<br></br>{" "}
              <br></br>
              Aunque a veces ella misma no se lo crea, es una cocinera
              excepcional, capaz de preparar platos que dejan sin palabras a
              quien los prueba. Y lo decimos con pruebas: su cocina ha sido
              aplaudida por personas de todo el mundo —desde amigos “guiris” de
              sus hijas, provenientes de América, Alemania, Grecia, Francia o
              incluso Vietnam, hasta compañeros de piso, compañeros de oficina,
              vecinos, o cualquier afortunado que haya pasado por su mesa.
              Siempre se quedan con ganas de más.<br></br>
              <br></br> Pero si hay algo que{" "}
              <b style={{ color: "orange" }}>Arancita</b> hace aún mejor que
              cocinar, es ser madre. Su dedicación, su entrega y sus sacrificios
              —aunque a veces parezca que sus hijas no lo notan— no pasan
              desapercibidos. ¡Sí que lo notan, mami! Y te lo agradecen con todo
              su corazón. Gracias por ser hogar, por dar tanto sin pedir nada a
              cambio, por llenar nuestras vidas de sabor, amor y calidez.
              <br></br>
              <span className="block text-right mt-4 font-semibold">
                ¡Te queremos muchi, mamuchi! 🧡
              </span>
            </p>
          </div>
          <div className="flex-shrink-0 w-48 md:w-64">
            <Image
              src="/mami1.jpeg"
              alt="Right side image"
              width={384}
              height={512}
              className="rounded-lg h-auto max-h-[340px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl px-4 sm:px-6 mx-auto my-10 sm:my-20">
        <div ref={sliderRef} className="keen-slider">
          {carouselImages.map((img, index) => (
            <div key={index} className="keen-slider__slide flex justify-center">
              <Image
                src={img}
                alt={`Carousel image ${index + 1}`}
                width={200}
                height={200}
                className="rounded-lg object-cover w-full max-w-[200px] aspect-square"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
