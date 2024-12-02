import React, { useState, useEffect } from "react";
import supabase from "../utils/supabase";
import { useLocation } from "wouter";
import { Database } from "database.types";

type Despensa = Database["public"]["Tables"]["despensas"]["Row"];
type Beneficiarios = Database["public"]["Tables"]["beneficiarios"]["Row"];

export default function FormularioApadrinamiento() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    categoria: "",
    personaApadrinar: "",
    tipoDespensa: "",
  });

  const [_, setLocation] = useLocation();

  const [despensas, setDespensas] = useState<Despensa[]>([]);
  const [beneficiarios, setBeneficiarios] = useState<Beneficiarios[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fetchDespensas = async () => {
    try {
      const { data, error } = await supabase.from("despensas").select();
      if (error) throw error;
      setDespensas(data);
    } catch (error) {
      console.error("Error fetching despensas:", error);
    }
  };

  const fetchBeneficiarios = async () => {
    try {
      const { data, error } = await supabase.from("beneficiarios").select();
      if (error) throw error;
      setBeneficiarios(data);
    } catch (error) {
      console.error("Error fetching beneficiarios:", error);
    }
  };

  useEffect(() => {
    fetchDespensas();
    fetchBeneficiarios();
  }, []);

  const insertarApadrinamiento = async () => {
    try {
      const { data, error } = await supabase
        .from("apadrinar")
        .insert({
          nombre: formData.nombre,
          persona_a_apadrinar: parseInt(formData.personaApadrinar), 
          telefono: formData.telefono,
          tipo_despensa: parseInt(formData.tipoDespensa),
        })
        .select();

      if (error) throw error;
      console.log("Datos guardados exitosamente:", data);
    } catch (error) {
      console.error("Error al guardar los datos:", error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    insertarApadrinamiento();
  };

  const handleNavigation = () => {
    setLocation("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="nombre"
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="apellido"
          >
            Apellido
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="apellido"
            type="text"
            placeholder="Apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="correo"
          >
            Correo
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="correo"
            type="email"
            placeholder="Correo electrónico"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="telefono"
          >
            Teléfono
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="telefono"
            type="tel"
            placeholder="Teléfono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="personaApadrinar"
          >
            Persona a apadrinar
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="personaApadrinar"
            name="personaApadrinar"
            value={formData.personaApadrinar}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una persona</option>
            {beneficiarios.map((beneficiario) => (
              <option key={beneficiario.id} value={beneficiario.id}>
                {beneficiario.nombre_completo}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="tipoDespensa"
          >
            Tipo de despensa
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tipoDespensa"
            name="tipoDespensa"
            value={formData.tipoDespensa}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un tipo de despensa</option>
            {despensas.map((despensa) => (
              <option key={despensa.id} value={despensa.id}>
                {despensa.despensa}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleNavigation}
          >
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
}
