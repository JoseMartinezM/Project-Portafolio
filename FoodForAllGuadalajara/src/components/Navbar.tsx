import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import config from "../config/index.json";
import AuthBtn from "./AuthBtn";

const Navbar = () => {
  const { navigation, company } = config;
  const { name: companyName, logo } = company;

  // Estado para abrir/cerrar el menú
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };


  return (
    <div className="mb-5 relative z-20">
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-between sm:h-10 lg:justify-start"
          aria-label="Global"
        >
          {/* Logo */}
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <a href="/">
                <span className="sr-only">{companyName}</span>
                <img alt="logo" className="h-10 w-auto sm:h-10" src={logo} />
              </a>
              {/* Botón para abrir/cerrar el menú móvil */}
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  onClick={toggleMenu}
                  className="bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
                >
                  <span className="sr-only">
                    {menuOpen ? "Close main menu" : "Open main menu"}
                  </span>
                  {menuOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Links para escritorio */}
          <div className="hidden md:flex md:ml-10 md:pr-4 md:space-x-8 items-center">
            {navigation.map((item) => (
              <Link href={`/${item.href}`} key={item.name}>
                <a className="font-medium text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              </Link>
            ))}
            {/* Enlace de Login */}
            <div className="absolute right-10 top-0 translate-y-[30%]">
              <AuthBtn />
            </div>
          </div>
        </nav>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-full z-50 pointer-events-auto">
          {/* Botón para cerrar */}
          <div className="absolute top-0 right-0 p-4">
            <button
              onClick={toggleMenu}
              className="bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* Links del menú móvil */}
          <div className="relative p-6 bg-opacity-70 backdrop-blur-md bg-white rounded-md shadow-md max-w-sm mx-auto mt-20">
            {navigation.map((item) => (
              <Link onClick={toggleMenu} href={`/${item.href}`} key={item.name}>
                <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                  {item.name}
                </a>
              </Link>
            ))}
            {/* Enlace de Login */}
            <AuthBtn />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
