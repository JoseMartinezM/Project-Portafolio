import { Facebook, Github, Mail, Twitter } from "lucide-react";
import config from "../config/index.json";

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { socialMedia, sections } = about;

  return (
    <div
      id="about"
      className="mx-auto h-[900px] container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <a href="/">
            <span className="sr-only">{companyName}</span>
            <img alt="logo" className="h-10 w-auto sm:h-10" src={logo} />
          </a>
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {sections.map((section, index) => (
            <a
              key={`${section.name}-${index}`}
              href={section.href}
              className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white"
            >
              {section.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-x-8 mt-6 h-8">
          <a
            aria-label="facebook"
            href={socialMedia.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <Facebook />
          </a>
          <a
            aria-label="mail"
            href={socialMedia.mail}
            target="_blank"
            rel="noreferrer"
          >
            <Mail />
          </a>
          <a
            aria-label="twitter"
            href={socialMedia.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <Twitter />
          </a>
        </div>
        <div className="flex items-center mt-6">
          <a
            href="https://github.com/JoseMartinezM/FoodForAllGDL"
            className="flex justify-center items-center gap-2"
          >
            Hecho por:
            <span className="text-red-400">Team 41</span>
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
};
export default About;
