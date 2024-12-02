import config from "../config/features.json";
import Divider from "../components/Divider";
import AnimatedTestimonials from "../components/ui/animated-testimonials";
import FormularioApadrinamiento from "../components/FormularioApadrinamiento";
import ExpandableCardDemo from "../components/Outside";

const testimonials = [
  {
    quote: "Hay personas de todas las edades que necesitan tu ayuda.",
    name: "1. Selecciona a alguien que quieras apadrinar",
    designation: "",
    src: "/images/e8.jpeg",
  },
  {
    quote: "Tenemos una variedad de despensas que puedes donar.",
    name: "2. Selecciona el tipo de despensa a donar",
    designation: "",
    src: "/images/z4.jpg",
  },
  {
    quote: "Ve a la sección de localización y da click al botón 'Banco más cercano'",
    name: "3. Identifica el banco de alimentos más cercano a ti",
    designation: "",
    src: "/images/e5.jpg",
  },
  {
    quote: "Ve al banco de alimentos más cercano y paga la despensa seleccionada.",
    name: "4. Paga tu despensa",
    designation: "",
    src: "/images/e6.jpg",
  },
];

const Apadrinar = () => {
  const { subtitle, description } = config;

  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden relative pt-20`}>
      {/* Agregué `pt-20` para dar espacio a la navbar */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <Divider />
        <div className="lg:text-center">
          {/* Título fijo: "Apadrinar" */}
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Apadrinar
          </h1>
          <p className="mt-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>
        <AnimatedTestimonials testimonials={testimonials} />
        <h1 className="text-6xl font-bold">Conoce los Tipos de Despensa</h1>
        <ExpandableCardDemo />
        <br />
        <br />
        <h1 className="text-6xl font-bold">Llena el formulario</h1>
        <FormularioApadrinamiento />
      </div>
    </div>
  );
};

export default Apadrinar;
