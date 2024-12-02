import Divider from "../components/Divider";
import { Search } from 'lucide-react';
import { useState } from "react";
import About from "@/components/About";
import CarruselRecetas from "../components/carruselRecetas";


// interface Receta {
//   id: number;
//   nombre_receta: string;
//   tiempo_preparacion: string;
//   nivel_dificultad: string;
//   ingredientes: {
//     ingredients: { quantity: string; ingredient: string }[];
//   };
//   procedimiento: {
//     procedimiento: { step: number; title: string; instructions: string }[];
//   };
//   subtitulo: string;
//   foto: string;
// }

const Recetas: React.FC = () => {
  const [search, setSearch] = useState<string>('');


  return (
    <div className={`flex flex-col w-full h-full justify-start items-center bg-background overflow-y-auto mx-auto px-4 sm:px-6 lg:px-8 gap-y-2 pb-6`}>
      <Divider />
      <div className="lg:text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Recetas
        </h1>
      </div>
      {/* Search */}
      <div className="relative w-[90%]">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="pl-10 pr-4 bg-slate-100 hover:outline hover:outline-slate-300 outline-1 placeholder:text-slate-400 w-full h-14 rounded-xl"
          placeholder="Buscar recetas"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
      </div>
      {/* Categories */}
      <div className="flex flex-shrink-0 w-full h-fit px-4 justify-center items-center py-5 overflow-auto gap-10">
        <button className="flex flex-col justify-center items-center h-fit w-fit rounded-full hover:scale-105 transition-all duration-150 ease-in-out ">
          <img
            src="images/desayuno.jpg"
            className="h-16 md:h-20 aspect-square rounded-full object-cover"
            alt="Desayuno"
          />
          <span className="truncate px-1 w-full h-fit tracking-tight font-semibold text-[1rem]">
            Desayuno
          </span>
        </button>
        <button className="flex flex-col justify-center items-center h-fit w-fit rounded-full hover:scale-105 transition-all duration-150 ease-in-out ">
          <img
            src="images/comida.webp"
            className="h-16 md:h-20 aspect-square rounded-full object-cover"
            alt="Comida"
          />
          <span className="truncate px-1 w-full h-fit tracking-tight font-semibold text-[1rem]">
            Comida
          </span>
        </button>
        <button className="flex flex-col justify-center items-center h-fit w-fit rounded-full hover:scale-105 transition-all duration-150 ease-in-out ">
          <img
            src="images/quesa.jpg"
            className="h-16 md:h-20 aspect-square rounded-full object-cover"
            alt="Cena"
          />
          <span className="truncate px-1 w-full h-fit tracking-tight font-semibold text-[1rem]">
            Cena
          </span>
        </button>
        <button className="flex flex-col justify-center items-center h-fit w-fit rounded-full hover:scale-105 transition-all duration-150 ease-in-out ">
          <img
            src="images/snack.jpg"
            className="h-16 md:h-20 aspect-square rounded-full object-cover"
            alt="Snacks"
          />
          <span className="truncate px-1 w-full h-fit tracking-tight font-semibold text-[1rem]">
            Snacks
          </span>
        </button>
      </div>
      <div className="container mx-auto">
        <CarruselRecetas />
      </div>
      <About />
    </div>
  );
};

export default Recetas;
