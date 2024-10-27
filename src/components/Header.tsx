// components/Header.js

import Image from "next/image";
import Logo from "../../public/Cocinita1.png";

function Header() {
  return (
    <header className="w-full h-[10vh] flex items-center">
      <div className="ml-8 mt-4">
        <Image src={Logo} alt="Cocinita"  height={90} />
      </div>

      <nav className="flex-1 flex justify-center">
        <ul className="flex space-x-8">
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-500">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-500">
              Recetas
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-500">
              Sobre la Chef
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-800 hover:text-blue-500">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
