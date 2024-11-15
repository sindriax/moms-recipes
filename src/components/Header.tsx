import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Cocinita1.png";

function Header() {
  return (
    <header className="w-full h-[10vh] flex items-center">
      <div className="ml-8 mt-4">
        <Image src={Logo} alt="Cocinita" height={90} />
      </div>

      <nav className="flex-1 flex justify-center">
        <ul className="flex space-x-8">
          <li>
            <Link href="/" className="text-gray-800 hover:text-blue-500">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/recipes" className="text-gray-800 hover:text-blue-500">
              Recetas
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-800 hover:text-blue-500">
              Sobre la Chef
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-800 hover:text-blue-500">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
