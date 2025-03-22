//create a footer matching the rest of the site
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-300 text-white p-4 text-center w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-sm">Creado para la mejor madre del 🌏</p>
          <p className="text-sm">© Marzo 19, 2025</p>
          <p className="text-sm">Con mucho ❤️ - tus hijitas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
