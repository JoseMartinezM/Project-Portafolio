import React, { useRef, useState } from "react";
import { CalendarIcon, MapPinIcon, ClockIcon } from "lucide-react";

interface Event {
  id: number;
  title: string;
  start: Date;
  place: string;
  image: string;
}

interface EventsCarouselProps {
  events: Event[];
}

const EventsCarousel: React.FC<EventsCarouselProps> = ({ events }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // La velocidad del deslizamiento
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full bg-red-50 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-red-700 text-center">
        Eventos Destacados
      </h2>
      <div
        ref={carouselRef}
        className="flex overflow-x-scroll gap-6 scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {events.map((event) => (
          <div
            key={event.id}
            className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md overflow-hidden text-center border border-red-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-2 truncate">
                {event.title}
              </h3>
              <div className="text-sm text-gray-600 flex items-center mb-1">
                <CalendarIcon className="w-4 h-4 mr-2 text-red-500" />
                <span>
                  {new Intl.DateTimeFormat("es", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  }).format(event.start)}
                </span>
              </div>
              <div className="text-sm text-gray-600 flex items-center mb-1">
                <ClockIcon className="w-4 h-4 mr-2 text-red-500" />
                <span>
                  {new Intl.DateTimeFormat("es", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  }).format(event.start)}
                </span>
              </div>
              <div className="text-sm text-gray-600 flex items-center">
                <MapPinIcon className="w-4 h-4 mr-2 text-red-500" />
                <span>{event.place}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsCarousel;
