import { useState, useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  DirectionsRenderer,
} from "@react-google-maps/api";
import foodBanksData from "../config/localizacion.json"; // Importa el archivo JSON con los datos
import Divider from "../components/Divider";
import Footer from "@/components/Footer";

interface Position {
  lat: number;
  lng: number;
}

interface FoodBank {
  id: number;
  name: string;
  position: Position;
  hours: string;
  address: string;
}

const defaultCenter: Position = { lat: 20.6736, lng: -103.344 };

const mapOptions = {
  styles: [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "poi.business",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
  ],
  disableDefaultUI: true,
};

export default function Localization(): JSX.Element {
  const [location, setLocation] = useState<Position>(defaultCenter);
  const [userLocation, setUserLocation] = useState<Position | null>(null);
  const [showFoodBanks, setShowFoodBanks] = useState(false);
  const [selectedBank, setSelectedBank] = useState<FoodBank | null>(null);
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);
  const [closestBank, setClosestBank] = useState<FoodBank | null>(null);
  const [hovered, setHovered] = useState(false);

  const getUserLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          const { latitude, longitude } = coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setLocation({ lat: latitude, lng: longitude });
        },
        () => alert("Error al obtener ubicación"),
        { enableHighAccuracy: true }
      );
    } else {
      alert("La geolocalización no es compatible con este navegador.");
    }
  }, []);

  const findNearestFoodBank = async () => {
    try {
      if (!userLocation) {
        throw new Error("User location is not available");
      }

      const closest = foodBanksData.reduce<FoodBank | null>(
        (nearest, current) => {
          const distance = haversineDistance(userLocation!, current.position);

          if (
            !nearest ||
            distance < haversineDistance(userLocation!, nearest.position)
          ) {
            return current;
          }
          return nearest;
        },
        null
      );

      if (!closest) {
        throw new Error("No food banks available");
      }

      const getDirections = (): Promise<google.maps.DirectionsResult> => {
        return new Promise((resolve, reject) => {
          const directionsService = new google.maps.DirectionsService();

          directionsService.route(
            {
              origin: userLocation,
              destination: closest.position,
              travelMode: google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
              if (status === google.maps.DirectionsStatus.OK && result) {
                resolve(result);
              } else {
                reject(new Error(`Directions request failed: ${status}`));
              }
            }
          );
        });
      };

      const directions = await getDirections();
      setDirectionsResponse(directions);
      setClosestBank(closest);
    } catch (error) {
      console.error("Error finding nearest food bank:", error);
      setDirectionsResponse(null);
      setClosestBank(null);
    }
  };

  const haversineDistance = (coords1: Position, coords2: Position): number => {
    const R = 6371; // Radius of Earth in km
    const dLat = ((coords2.lat - coords1.lat) * Math.PI) / 180;
    const dLng = ((coords2.lng - coords1.lng) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((coords1.lat * Math.PI) / 180) *
        Math.cos((coords2.lat * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  };

  const apiKey = "AIzaSyCNXCDcqbh0XEz382cIqS8m90Q5OujH-aU";
  const foodBankIcon = {
    url: "https://maps.google.com/mapfiles/ms/icons/orange-dot.png",
  };

  return (
    <div className="text-center bg-gray-100 min-h-screen text-base font-sans">
  <div>
    <Divider />
  </div>
  <div className="max-w-[1200px] mx-auto px-8 py-4 lg:text-center">
    <h1 className="text-5xl tracking-tight font-extrabold text-gray-900">
      Localizador de Bancos de Alimentos
    </h1>
    <p className="mt-4 text-xl leading-8 text-gray-700 font-semibold">
      Encuentra fácilmente bancos de alimentos cercanos, consulta sus horarios y direcciones.
    </p>
    <p className="mt-4 text-xl text-gray-500">
      Obtén indicaciones precisas para llegar y apoya a quienes más lo necesitan.
    </p>
  </div>

  <div className="flex justify-center gap-6 px-4 mb-8 max-w-3xl mx-auto">
    <button
      onClick={getUserLocation}
      className="w-80 bg-blue-500 text-white rounded-lg py-4 uppercase font-semibold shadow-md transition-transform transform hover:scale-105 hover:bg-blue-600"
    >
      Usar mi Ubicación
    </button>
    <button
      onClick={() => setShowFoodBanks(!showFoodBanks)}
      className="w-80 bg-green-500 text-white rounded-lg py-4 uppercase font-semibold shadow-md transition-transform transform hover:scale-105 hover:bg-green-600"
    >
      Ver Bancos de Alimentos
    </button>
    <button
      onClick={findNearestFoodBank}
      className="w-80 bg-orange-500 text-white rounded-lg py-4 uppercase font-semibold shadow-md transition-transform transform hover:scale-105 hover:bg-orange-600"
    >
      Banco Más Cercano
    </button>
  </div>

  {closestBank && (
    <p>
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${closestBank.position.lat},${closestBank.position.lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-5 px-6 py-3 text-lg font-medium text-blue-600 bg-blue-50 border-2 border-blue-600 rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-600 hover:text-white shadow-lg"
      >
        Abrir en Google Maps
      </a>
    </p>
  )}

  <div
    className={`w-10/12 h-[70vh] mx-auto my-8 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 shadow-lg overflow-hidden transition-transform transform ${
      hovered ? "scale-105" : ""
    }`}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
  >
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerClassName="w-full h-full rounded-lg"
        center={location}
        zoom={14}
        options={mapOptions}
      >
        {userLocation && <Marker position={userLocation} />}
        {showFoodBanks &&
          (foodBanksData as FoodBank[]).map((bank) => (
            <Marker
              key={bank.id}
              position={bank.position}
              icon={foodBankIcon}
              onClick={() => setSelectedBank(bank)}
            />
          ))}
        {selectedBank && (
          <InfoWindow
            position={selectedBank.position}
            onCloseClick={() => setSelectedBank(null)}
          >
            <div className="p-2">
              <h4 className="font-bold text-lg">{selectedBank.name}</h4>
              <p className="text-sm">{selectedBank.hours}</p>
              <p className="text-sm">{selectedBank.address}</p>
            </div>
          </InfoWindow>
        )}
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </LoadScript>
  </div>
  <Footer/>
</div>

  );
}
