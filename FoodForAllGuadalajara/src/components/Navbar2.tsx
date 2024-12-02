import config from "../config/index.json";
import { Link } from "wouter";

const Navbar2 = () => {
  const { navigation } = config;

  return (
    <div className="mb-5">
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav
          className="relative flex items-center justify-center sm:h-10"
          aria-label="Global"
        >
          {/* Navbar Items */}
          <div className="bg-black bg-opacity-30 rounded-full px-6 py-2 flex items-center space-x-8 shadow-md">
            {navigation.map((item) => (
              <Link href={`/${item.href}`} key={item.name}>
                <a className="font-medium text-white hover:text-gray-300 transition">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar2;
