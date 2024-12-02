import React, { useEffect, useState } from "react";
import Calendar from "../components/Calendar";
import EventsCarousel from "../components/EventsCarousel";
import Divider from '../components/Divider';
import supabase from "../utils/supabase";
import Footer from "@/components/Footer";

interface Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
  place: string;
  image: string;
}

const App: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("Eventos")
        .select("id, title, date, time, place, image");

      if (error) throw error;

      const formattedEvents = data.map((event) => {
        const normalizedTime = event.time.split("-")[0]; 
        const start = new Date(`${event.date}T${normalizedTime}`);
        const end = new Date(`${event.date}T${normalizedTime}`);

        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
          console.warn("Evento con fecha inválida:", event);
          return null;
        }

        let place = "";
        if (typeof event.place === "string") {
          place = event.place;
        } else if (typeof event.place === "number" || typeof event.place === "boolean") {
          place = event.place.toString();
        } else if (typeof event.place === "object" && event.place !== null) {
          place = JSON.stringify(event.place);
        } else {
          place = "Sin lugar";
        }

        return {
          id: event.id,
          title: event.title || "Evento sin título",
          start,
          end,
          place,
          image: event.image || "/images/evento.jpg",
        };
      });

      setEvents(formattedEvents.filter((event) => event !== null) as Event[]);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="bg-gray-100 text-base font-sans">
  <div>
    <Divider />
  </div>
  <div className="max-w-[1200px] mx-auto px-8 py-4 lg:text-center">
    <h1 className="text-5xl tracking-tight font-extrabold text-gray-900">
      Eventos del Banco de Alimentos
    </h1>
    <p className="mt-4 text-xl leading-8 text-gray-700 font-semibold">
      Explora los eventos disponibles
    </p>
    <p className="mt-4 text-xl text-gray-500">
      Descubre actividades organizadas por el Banco de Alimentos de Guadalajara y cómo puedes participar.
    </p>
  </div>

  <div className="max-w-[1400px] mx-auto px-8 py-8">
    {loading ? (
      <p className="text-center text-gray-600">Cargando calendario...</p>
    ) : (
      <div className="bg-white rounded-lg shadow-lg md:h-full p-8">
        <Calendar events={events} />
      </div>
    )}
  </div>

  <div className="max-w-[1400px] mx-auto px-8 py-8">
    {loading ? (
      <p className="text-center text-gray-600">Cargando carrusel...</p>
    ) : (
      <div className="bg-white rounded-lg shadow-lg p-8">
        <EventsCarousel events={events} />
      </div>
    )}
  </div>
  <Footer/>
</div>

  );
};

export default App;
