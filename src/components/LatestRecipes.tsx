"use client";

import React, { useEffect, useRef, useState } from "react";
import RecipeCard from "./RecipeCard";
import Recipes from "../data/recipes";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";

function LatestRecipes() {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 3 },
      },
      "(max-width: 768px)": {
        slides: { perView: 2 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1 },
      },
    },
  });

  const [inView, setInView] = useState(false);
  const sliderContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (sliderContainerRef.current) {
      observer.observe(sliderContainerRef.current);
    }
    return () => {
      if (sliderContainerRef.current) {
        observer.unobserve(sliderContainerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!instanceRef.current || !inView) return;
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef, inView]);

  return (
    <section className="p-8 ml-20 mr-20 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full flex flex-col items-center justify-center mb-40 text-center"
      >
        <h1 className="text-5xl font-bold text-orange-300 mb-4">
          Recetas simples y deliciosas
        </h1>
        <p className="text-gray-600 text-lg">
          Disfruta de recetas sencillas, llenas de sabor y perfectas para
          cualquier ocasión. Explora combinaciones únicas y sorprende a todos
          con platillos inolvidables.
        </p>
      </motion.div>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Últimas Recetas</h2>
      <div
        ref={(node) => {
          sliderRef(node);
        }}
        className="keen-slider"
      >
        {Recipes.map((recipe) => (
          <div key={recipe.id} className="keen-slider__slide">
            <RecipeCard
              recipe={{
                id: recipe.id,
                image: recipe.image,
                name: recipe.name,
                time: recipe.time,
                onClick: () => {},
              }}
            />
          </div>
        ))}
      </div>
      {/* <div className="flex justify-center mt-4">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="mr-2 p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Prev
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="p-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Next
        </button>
      </div> */}
    </section>
  );
}

export default LatestRecipes;
