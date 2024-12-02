
import { PinContainer } from "../components/ui/3d-pin";
import config from "../config/pin.json";

const { mainHero, items } = config;

export interface AnimatedPinProps {
  title: string;
  description: string;
  link: string;
  img: string;
}

export function AnimatedPin({ title, description, link, img }: AnimatedPinProps) {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center">
      <PinContainer title={link} href={link}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] h-[16rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">{description}</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}

export function AnimatedPinsList() {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">{mainHero.title}</h1>
        <p className="mt-2">{mainHero.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-7xl w-full">
        {items.map((item, index) => (
          <div key={index} className="flex justify-center">
            <AnimatedPin
              title={item.title}
              description={item.description}
              link={"#"}
              img={item.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedPinsList;

