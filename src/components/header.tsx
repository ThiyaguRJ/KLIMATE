import { useTheme } from "@/context/theme-provider";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { CitySearch } from "./city-search";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 gap-4 flex-nowrap">
        {/* Logo */}
        <Link to={"/"} className="flex-shrink-0">
          <img
            src={theme === "dark" ? "/logocl.png" : "/logo2cl.png"}
            alt="Climate"
            className="h-12 sm:h-14"
          />
        </Link>

        {/* Search & Theme in row */}
        <div className="flex items-center gap-4 flex-1 justify-end min-w-0">
          {/* CitySearch should shrink responsively */}
          <div className="min-w-0 flex-1 max-w-[200px] sm:max-w-[220px] md:max-w-[255px] lg:max-w-[250px]">
            <CitySearch />
          </div>

          {/* Theme toggle */}
          <div
            className={`flex-shrink-0 flex items-center cursor-pointer transition-transform duration-500 ${
              theme === "dark" ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? (
              <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
