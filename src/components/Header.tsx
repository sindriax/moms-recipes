import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/final.png";
import LogoName from "../../public/cocina.png";

function Header() {
  return (
    <header className="w-full h-[14vh] flex items-center">
      <div className="ml-20 mt-4 group flex items-center">
        <Image
          src={Logo}
          alt="Cocinita"
          height={90}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <Image src={LogoName} alt="Cocinita" height={50} className="ml-2" />
      </div>

      <nav className="flex-1 flex justify-center">
        <ul className="flex space-x-8 text-gray-700 font-semibold tracking-wide text-lg">
          {[
            { href: "/", text: "Inicio" },
            { href: "/recipes", text: "Recetas" },
            { href: "/about", text: "Sobre la Chef" },
            { href: "/shop", text: "Tienda" },
            { href: "/contact", text: "Contacto" },
          ].map((link) => (
            <li key={link.href} className="relative">
              <Link
                href={link.href}
                className="group transition-colors duration-300 hover:text-orange-400"
              >
                {link.text}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-300 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
