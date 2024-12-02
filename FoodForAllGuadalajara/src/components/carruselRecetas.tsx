"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import supabase from "../utils/supabase";
import { type Database } from "../../database.types";

type Receta = Database["public"]["Tables"]["Recetas2"]["Row"];

const CarruselRecetas: React.FC = () => {
  const [recetas, setRecetas] = useState<Receta[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchRecetas = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("Recetas2").select();

      if (error) throw error;

      setRecetas(data);
    } catch (error) {
      console.error("Error fetching recetas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecetas();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Cargando recetas...</p>;
  }

  if (recetas.length === 0) {
    return (
      <p className="text-center text-gray-500">No se encontraron recetas.</p>
    );
  }

  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Recetas</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {recetas.map((receta) => (
            <CarouselItem
              key={receta.id}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <a
                href={`/recetas/${receta.id}`} className="py-2 overflow-visible"
              >
                <Card className="hover:shadow-lg transition-all hover:ring-4 ring-slate-200 mx-2 duration-200">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={receta.foto ?? ""}
                        alt={receta.nombre_receta ?? ""}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
                        {receta.nombre_receta}
                      </h3>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <p>Nivel: {receta.nivel_dificultad}</p>
                        <p>Tiempo: {receta.tiempo_preparacion}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default CarruselRecetas;
