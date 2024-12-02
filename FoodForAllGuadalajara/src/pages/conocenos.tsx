"use client";
import Bento from "../components/Bento";
import config from "../config/index.json";
import Divider from "../components/Divider";
import AnimatedPin from "../components/Pin";
import Timeline from "../components/Timeline";
import { AnimatedTooltip } from "../components/ui/tooltip";

const people = [
  {
    id: 1,
    name: "Walmart",
    designation: "",
    image: "/images/walmart.jpg",
  },
  {
    id: 2,
    name: "Dibujando un mañana",
    designation: "",
    image: "/images/dibujando.png",
  },
  {
    id: 3,
    name: "La Moderna",
    designation: "",
    image: "/images/lamoderna.jpg",
  },
  {
    id: 4,
    name: "BAFAR",
    designation: "",
    image: "/images/bafar.jpeg",
  },
  {
    id: 5,
    name: "CAREY",
    designation: "",
    image: "/images/carey.png",
  },
  {
    id: 6,
    name: "Merkabastos",
    designation: "",
    image: "/images/merkabastos.png",
  },
  {
    id: 7,
    name: "Sanfadila",
    designation: "",
    image: "/images/sanfadila.png",
  },
  {
    id: 8,
    name: "Soriana",
    designation: "",
    image: "/images/soriana2.jpeg",
  },
  {
    id: 9,
    name: "Salcedo",
    designation: "",
    image: "/images/salcedo.jpg",
  },
  {
    id: 10,
    name: "Corina",
    designation: "",
    image: "/images/corina.jpg",
  },
  {
    id: 11,
    name: "Cinépolis",
    designation: "",
    image: "/images/cinepolis.jpg",
  },
  {
    id: 12,
    name: "La Gorda",
    designation: "",
    image: "/images/gorda.jpg",
  },
  {
    id: 13,
    name: "GEPP",
    designation: "",
    image: "/images/GEPP.jpg",
  },
  {
    id: 14,
    name: "Bimbo",
    designation: "",
    image: "/images/bimbo.jpg",
  },
  {
    id: 15,
    name: "El Panqué",
    designation: "",
    image: "/images/p.webp",
  },
  {
    id: 16,
    name: "Verde Valle",
    designation: "",
    image: "/images/vv.jpeg",
  },
  {
    id: 17,
    name: "ORVA",
    designation: "",
    image: "/images/ova.jpg",
  },
  {
    id: 18,
    name: "FTS",
    designation: "",
    image: "/images/fts.jpg",
  },
  {
    id: 19,
    name: "Oh la la",
    designation: "",
    image: "/images/ohlala.jpg",
  },
  {
    id: 20,
    name: "Buenrostro Hnos.",
    designation: "",
    image: "/images/buenrostro.jpg",
  },
  {
    id: 21,
    name: "GS1",
    designation: "",
    image: "/images/gs1.jpg",
  },
  {
    id: 22,
    name: "Los Tabachines",
    designation: "",
    image: "/images/tabachines.jpg",
  },
  {
    id: 23,
    name: "Toto Fast",
    designation: "",
    image: "/images/toto.jpg",
  },
  {
    id: 24,
    name: "IMASA",
    designation: "",
    image: "/images/imasa.jpg",
  },
  {
    id: 25,
    name: "PEPSICO",
    designation: "",
    image: "/images/pepsico.jpg",
  },
  {
    id: 26,
    name: "CBZ",
    designation: "",
    image: "/images/CBZ.jpg",
  },
  {
    id: 27,
    name: "Pulpas tic",
    designation: "",
    image: "/images/pulpas.jpg",
  },
  {
    id: 28,
    name: "areas",
    designation: "",
    image: "/images/areas.jpg",
  },
  {
    id: 29,
    name: "Pastelerías OK",
    designation: "",
    image: "/images/ok.jpg",
  },
  {
    id: 30,
    name: "Gran Pastor",
    designation: "",
    image: "/images/pastor.jpg",
  },
  {
    id: 31,
    name: "SmartMexico",
    designation: "",
    image: "/images/smart.jpg",
  },
  {
    id: 32,
    name: "la Comer",
    designation: "",
    image: "/images/lacomer.jpg",
  },
  {
    id: 33,
    name: "HEINZ",
    designation: "",
    image: "/images/heinz.jpg",
  },
  {
    id: 34,
    name: "Oxxo",
    designation: "",
    image: "/images/oxxo.jpg",
  },
];

const timelineData = [
  {
    title: "Quiénes somos",
    content: (
      <p>
        Banco de Alimentos Guadalajara es una organización sin fines de lucro
        con la misión de generar acceso a una alimentación digna para personas
        en situación vulnerable en nuestra comunidad. Nuestro objetivo es
        contribuir a la reducción de la inseguridad alimentaria que afecta a más
        de un millón doscientas mil personas en el Estado de Jalisco.
      </p>
    ),
  },
  {
    title: "Identidad institucional",
    content: (
      <p>
        Misión: Generar acceso a una alimentación digna para personas en
        situación vulnerable en nuestra comunidad. Visión: Abatir la pobreza
        alimentaria en Jalisco.
      </p>
    ),
  },
  {
    title: "Datos Informativos",
    content: (
      <p>
        Tenemos una plantilla de 85 colaboradores y el apoyo de 80 voluntarios
        diarios. En una gran bodega almacenamos y distribuimos los alimentos que
        se acopian diariamente. Cada mes beneficiamos a más de 30,000 familias,
        entre las cuales se componen de la siguiente manera: Cada año rescatamos
        17,000 toneladas de comida Nos apoyan 555 patrocinadores que se dividen
        en 4 ejes: Mercado de abastos, Pymes, Tiendas de Autoservicio y Campos
        Agrícolas. llegamos a 361 comunidades de la ZMG y del Estado de Jalisco.
        repartimos 600,000 despensas cada año.
      </p>
    ),
  },
];

const Conocenos = () => {
  const { product } = config;
  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 ? "text-primary" : "text-border"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <Divider />
      </div>
      <Timeline data={timelineData} />
      <h2 className="text-center text-black font-bold text-[8vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw] leading-none tracking-tighter">
        <span className="block">Qué hacemos y</span>
        <span className="block">cómo lo hacemos</span>
        <br></br>
      </h2>
      <Bento />
      <br></br>
      <br></br>
      <h2 className="text-center text-black font-bold text-[8vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw] leading-none tracking-tighter">
        <span className="block">Tipos de</span>
        <span className="block">Donaciones</span>
      </h2>
      <div className="flex flex-row gap-6 overflow-x-auto px-4 py-6 w-full">
        <AnimatedPin />
      </div>
      <h2 className="text-center text-black font-bold text-[8vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw] leading-none tracking-tighter">
        <span className="block">Nuestro Apoyo</span>
        <span className="block">Aliados</span>
        <br></br>
      </h2>
      <div className="flex flex-row items-center justify-center mb-10 w-full">
        <AnimatedTooltip items={people} />
      </div>
    </section>
  );
};

export default Conocenos;
