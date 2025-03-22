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
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-8 w-[80%] mt-10 rounded-lg shadow-md">
        <div className="flex-shrink-0 w-48 md:w-64">
          <Image
            src="/mami4.jpeg"
            alt="Left side image"
            width={384}
            height={512}
            className="rounded-lg"
          />
        </div>
        <div className="flex-grow text-center md:text-left px-4 md:px-8">
          <h2 className="text-2xl font-bold mb-4">Sobre la Chef</h2>
          <p className="text-gray-700 leading-relaxed w-[100%]">
            Arantxa /aˈɾanθaθ/ también conocida como{" "}
            <b style={{ color: "orange" }}>Arancita</b> es una mujer maravillosa
            y muy trabajadora, nacida en el encantador pueblo de Mataporquera.
            Aunque a veces ella misma no se lo crea, es una cocinera
            excepcional, capaz de preparar platos que dejan a todos
            maravillados. Su talento en la cocina es innegable, y quienes tienen
            la suerte de probar sus recetas siempre quedan con ganas de más.
            Nacida el 19 de marzo de 1963,{" "}
            <b style={{ color: "orange" }}>Arancita</b> ha pasado su vida
            demostrando que el esfuerzo y la pasión por lo que se hace son los
            ingredientes secretos para destacar en todo lo que emprende. No hay
            quien no la conozca ni admire su capacidad de hacer sentir a todos
            bienvenidos y valorados. ¡Te queremos mami! 🧡
          </p>
        </div>
        <div className="flex-shrink-0 w-48 md:w-64">
          <Image
            src="/mami1.jpeg"
            alt="Right side image"
            width={384}
            height={512}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="w-[80%] mx-auto my-20">
        <div ref={sliderRef} className="keen-slider">
          {carouselImages.map((img, index) => (
            <div key={index} className="keen-slider__slide">
              <Image
                src={img}
                alt={`Carousel image ${index + 1}`}
                width={200}
                height={200}
                className="rounded-lg object-cover w-[200px] h-[200px]"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
