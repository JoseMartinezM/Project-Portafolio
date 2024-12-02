"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function DonationHero() {
  const [current, setCurrent] = useState(1);

  const [backgroundImage, setBackgroundImage] = useState(
    "/public/images/banco2.png"
  );

  const changeBackground = (imageNumber: number) => {
    setBackgroundImage(`/public/images/banco${imageNumber}.png`);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6">
        {/* Hero Content */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] xl:text-[6.5vw] font-bold leading-none tracking-tighter text-white">
              <span className="block">BANCO</span>
              <span className="block">DE</span>
              <span className="block">ALIMENTOS</span>
            </h2>

            <p className="max-w-xl text-xl sm:text-2xl text-white">
              Una organización sin fines de lucro, constituida en el año 1991 y
              que tiene como misión "Generar acceso a una alimentación digna
              para personas en situación vulnerable en nuestra comunidad."
            </p>
            <div className="mt-6 flex items-center gap-4"></div>
          </div>

          {/* Profile Card - Adjusted positioning */}
          <div className="relative flex items-center justify-end pt-24">
            {/* Navigation buttons - Moved outside the card */}
            <div className="absolute right-2 top-0 flex gap-0">
              {[1, 2, 3].map((num) => {
                return (
                  <button
                    key={num}
                    onClick={() => {
                      changeBackground(num);
                      setCurrent(num);
                    }}
                    className={`flex h-10 w-12 items-center mx-1 justify-center rounded-full border-2 border-white ${
                      current == num
                        ? "bg-white text-black"
                        : "bg-white/10 text-white"
                    }  text-sm font-bold  transition-colors hover:bg-white hover:text-black`}
                  >
                    {num.toString().padStart(2, "0")}
                  </button>
                );
              })}
            </div>

            <Card className="w-full max-w-md bg-black/60 text-white backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Nuestra Misión</h3>
                  <p className="text-lg text-gray-300">
                    Nuestro objetivo es contribuir a la reducción de la
                    inseguridad alimentaria a través de, la entrega de despensas
                    a familias en situación vulnerable en el Estado de Jalisco.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
