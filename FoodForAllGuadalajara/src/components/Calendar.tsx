import React, { useState, useMemo } from "react";
import { CalendarIcon, MapPinIcon, ClockIcon } from "lucide-react";

interface Event {
  id: number;
  title: string;
  start: Date;
  place: string;
  image: string;
}

interface CalendarProps {
  events: Event[];
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredEvent, setHoveredEvent] = useState<Event | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const daysInMonth = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days = [];

    const firstDayOfWeek = firstDay.getDay();
    for (let i = 0; i < firstDayOfWeek; i++) {
      const prevDate = new Date(year, month, -i);
      days.unshift({ date: prevDate, isPadding: true });
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({ date: new Date(year, month, i), isPadding: false });
    }

    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({ date: new Date(year, month + 1, i), isPadding: true });
    }

    return days;
  }, [currentDate]);

  const getEventsForDate = (date: Date) => {
    return events.filter(
      (event) =>
        event.start.getDate() === date.getDate() &&
        event.start.getMonth() === date.getMonth() &&
        event.start.getFullYear() === date.getFullYear()
    );
  };

  const handleEventHover = (event: Event, e: React.MouseEvent) => {
    setHoveredEvent(event);
    setTooltipPosition({ x: e.clientX + 10, y: e.clientY + 10 });
  };

  const handleEventMouseMove = (e: React.MouseEvent) => {
    if (hoveredEvent) {
      setTooltipPosition({ x: e.clientX + 10, y: e.clientY + 10 });
    }
  };

  const weekDays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  return (
    <div className="w-full max-w-[1400px] mx-auto bg-red-50 rounded-lg shadow-lg p-6 md:p-10">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
            )
          }
          className="p-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
        >
          {"<"}
        </button>
        <h2 className="text-3xl font-bold text-gray-800 capitalize">
          {new Intl.DateTimeFormat("es", {
            month: "long",
            year: "numeric",
          }).format(currentDate)}
        </h2>
        <button
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
            )
          }
          className="p-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
        >
          {">"}
        </button>
      </div>
      <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden text-sm">
        {weekDays.map((day) => (
          <div
            key={day}
            className="bg-red-100 py-3 px-4 text-center font-medium text-red-700 border-b-2 border-red-300"
          >
            {day}
          </div>
        ))}
        {daysInMonth.map(({ date, isPadding }, index) => {
          const dayEvents = getEventsForDate(date);
          const isToday = new Date().toDateString() === date.toDateString();

          return (
            <div
              key={index}
              className={`relative min-h-[6rem] md:min-h-[8rem] p-2 md:p-4 border ${
                isPadding
                  ? "bg-gray-100 text-gray-400 border-gray-300"
                  : "bg-white text-gray-800 border-red-300"
              } ${
                isToday
                  ? "bg-red-500 text-white border-4 border-red-700 shadow-lg"
                  : ""
              } rounded-lg`}
            >
              <span
                className={`text-sm md:text-base ${
                  isToday
                    ? "font-extrabold text-lg text-white"
                    : "text-gray-800"
                }`}
              >
                {date.getDate()}
              </span>
              <div className="mt-2 md:mt-4 flex justify-center gap-2">
                {dayEvents.map((event) => (
                  <div
                    key={event.id}
                    className="w-10 h-10 md:w-12 md:h-12 bg-red-400 rounded-full cursor-pointer hover:scale-110 transition-transform grid place-items-center"
                    onMouseEnter={(e) => handleEventHover(event, e)}
                    onMouseMove={handleEventMouseMove}
                    onMouseLeave={() => setHoveredEvent(null)}
                    title={event.title}
                  ></div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {hoveredEvent && (
        <div
          className="fixed bg-white rounded-lg shadow-xl border p-3 z-50 w-64"
          style={{
            top: `${tooltipPosition.y}px`,
            left: `${tooltipPosition.x}px`,
          }}
        >
          <h3 className="font-semibold text-sm text-gray-900 border-b pb-2 mb-2">
            {hoveredEvent.title}
          </h3>
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2 text-gray-600">
              <CalendarIcon className="w-3 h-3" />
              <span>
                {new Intl.DateTimeFormat("es", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                }).format(hoveredEvent.start)}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <ClockIcon className="w-3 h-3" />
              <span>
                {new Intl.DateTimeFormat("es", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                }).format(hoveredEvent.start)}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPinIcon className="w-3 h-3" />
              <span>{hoveredEvent.place}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
