"use client";

import React, { useEffect, useRef, useState } from "react";
import RecipeCard from "./RecipeCard";
import Recipes from "../data/recipes";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <section className="px-4 sm:px-8 md:px-20 mt-10 sm:mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full flex flex-col items-center justify-center mb-20 sm:mb-40 text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-300 mb-4">
          Recetas simples y deliciosas
        </h1>
        <p className="text-gray-600 text-base sm:text-lg px-2 sm:px-0">
          Disfruta de recetas sencillas, llenas de sabor y perfectas para
          cualquier ocasión. Explora combinaciones únicas y sorprende a todos
          con platillos inolvidables.
        </p>
      </motion.div>
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center sm:text-left">
        Últimas Recetas
      </h2>
      <div className="relative max-w-screen-xl mx-auto px-2 sm:px-4">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="hidden sm:flex absolute top-1/2 -left-2 sm:-left-4 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow hover:bg-gray-100 z-10 border border-orange-300"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="hidden sm:flex absolute top-1/2 -right-2 sm:-right-4 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow hover:bg-gray-100 z-10 border border-orange-300"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
        <div
          ref={(node) => {
            sliderRef(node);
          }}
          className="keen-slider px-8 sm:px-12"
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
      </div>
    </section>
  );
}

export default LatestRecipes;
