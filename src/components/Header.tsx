"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/final.png";
import LogoName from "../../public/cocina.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full h-[14vh] flex items-center">
      <Link href="/" className="ml-20 mt-4 group flex items-center">
        <Image
          src={Logo}
          alt="Cocinita"
          height={90}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <Image src={LogoName} alt="Cocinita" height={50} className="ml-2" />
      </Link>

      <nav className="flex-1 flex justify-center md:justify-end pr-6">
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold tracking-wide text-lg">
          {[
            { href: "/", text: "Inicio" },
            { href: "/recipes", text: "Recetas" },
            { href: "/about", text: "Sobre la Chef" },
            { href: "/shop", text: "Tienda" },
            // { href: "/contact", text: "Contacto" },
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

        <button
          className="md:hidden ml-auto"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="absolute top-[14vh] left-0 w-full bg-white z-50 shadow-md md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-semibold text-lg">
            {[
              { href: "/", text: "Inicio" },
              { href: "/recipes", text: "Recetas" },
              { href: "/about", text: "Sobre la Chef" },
              { href: "/shop", text: "Tienda" },
              { href: "/contact", text: "Contacto" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
