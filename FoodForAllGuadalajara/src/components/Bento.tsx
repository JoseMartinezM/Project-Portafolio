import { cn } from "../lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function Bento() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          image={item.image}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "01",
    description: "Identificamos y solicitamos donativos a las empresas.",
    header: <Skeleton />,
    className: "md:col-span-2",
    image:
      "/images/donativos.jpeg"
  },
  {
    title: "02",
    description: "Trasladamos el donativo a nuestras instalaciones.",
    header: <Skeleton />,
    className: "md:col-span-1",
    image:
      "/images/truck.jpg"
  },
  {
    title: "03",
    description: "Iniciamos con la separación, clasificación y resguardo de los alimentos.",
    header: <Skeleton />,
    className: "md:col-span-1",
    image:
      "/images/donativos3.jpeg"
  },
  {
    title: "04",
    description:
      "Distribuimos y entregamos el alimento en despensas a las familias más vulnerables.",
    header: <Skeleton />,
    className: "md:col-span-2",
    image:
      "/images/donativos4.avif"
  },
];

export default Bento;