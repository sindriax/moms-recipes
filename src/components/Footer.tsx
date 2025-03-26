import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-300 text-white p-4 text-center w-full mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">Creado para la mejor madre del 🌏</p>
          <p className="text-sm">© Marzo 19, 2025</p>
          <p className="text-sm">Con mucho ❤️ - tus hijitas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
