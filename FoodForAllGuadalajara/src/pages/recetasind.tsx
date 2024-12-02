import { useEffect, useState } from "react";
import supabase from "../utils/supabase";

type Ingredientes = {
  ingredients: {
    quantity: string;
    ingredient: string;
  }[];
};

type Procedimiento = {
  procedimiento: {
    step: number;
    title: string;
    instructions: string;
  }[];
};

type RecetaQuery = {
  id: number;
  nombre_receta: string | null;
  tiempo_preparacion: string | null;
  nivel_dificultad: string | null;
  ingredientes: Ingredientes;
  procedimiento: Procedimiento;
  subtitulo: string | null;
  foto: string | null;
};

// type RecetaRow = Database["public"]["Tables"]["Recetas2"]["Row"];

type RecetaProps = {
  id: string;
};

const Receta = ({ id }: RecetaProps) => {
  const [receta, setReceta] = useState<RecetaQuery | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchReceta = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("Recetas2")
        .select(
          "id, nombre_receta, tiempo_preparacion, nivel_dificultad, ingredientes, procedimiento, subtitulo, foto"
        )
        .eq("id", id)
        .single();

      if (error) throw error;

      const parsedData: RecetaQuery = {
        ...data,
        ingredientes: data.ingredientes as unknown as Ingredientes,
        procedimiento: data.procedimiento as unknown as Procedimiento,
      };

      setReceta(parsedData);
    } catch (error) {
      console.error("Error fetching receta:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReceta();
  }, [id]);

  if (loading) return <p>Cargando receta...</p>;
  if (!receta) return <p>No se encontró la receta</p>;

  return (
    <div className="w-full h-full flex justify-center items-start py-2 px-4">
      <div className="bg-black text-white w-[800px]">
        {/* Header */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-4">
                <h2 className="text-lg font-light">{receta.subtitulo}</h2>
                <h1 className="text-3xl font-extrabold">
                  {receta.nombre_receta}
                </h1>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-xl overflow-hidden h-[300px]">
                {" "}
                {/* Added container */}
                <img
                  src={receta.foto ?? ""}
                  alt={receta.nombre_receta ?? ""}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Details */}
        <div className="bg-white text-gray-900 px-4 py-6 grid grid-cols-4 items-center text-center">
          <div>
            <span className="text-lg md:text-2xl  font-bold">
              {receta.tiempo_preparacion}
            </span>
          </div>
          <div>
            <span className="text-2xl font-bold">
              {receta.ingredientes?.ingredients.length}
            </span>
            <p className="text-sm">Ingredientes</p>
          </div>
          <div>
            <span className="text-2xl font-bold">
              {receta.procedimiento?.procedimiento.length}
            </span>
            <p className="text-sm">Pasos</p>
          </div>
          <div>
            <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              {receta.nivel_dificultad}
            </span>
            <p className="text-sm">Nivel</p>
          </div>
        </div>
        {/* Ingredientes */}
        <div className="bg-white text-gray-900 px-4 py-6">
          <h2 className="text-2xl font-bold mb-4">Ingredientes</h2>
          <ul className="space-y-2">
            {receta.ingredientes?.ingredients.map((ingrediente, index) => (
              <li key={index} className="flex justify-between border-b py-2">
                <span>{ingrediente.ingredient}</span>
                <span>{ingrediente.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Procedimiento */}
        <div className="bg-white text-gray-900 px-4 py-6">
          <h2 className="text-2xl font-bold mb-4">Procedimiento</h2>
          <ul className="space-y-2">
            {receta.procedimiento?.procedimiento.map((paso) => (
              <li
                key={paso.step}
                className="flex flex-col border-b py-2 space-y-1"
              >
                <span className="font-semibold">
                  Paso {paso.step}: {paso.title}
                </span>
                <span>{paso.instructions}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Receta;
