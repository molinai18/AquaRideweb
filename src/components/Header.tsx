
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 font-montserrat transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <img
              src="/lovable-uploads/f78167a2-c4dc-4648-88f6-be0a85222089.png"
              alt="AquaRide Logo"
              className="h-12 w-auto"
            />
            <span className="text-aqua-blue font-bold text-xl hidden sm:inline-block">
              AquaRide
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#caracteristicas" className="text-gray-700 hover:text-aqua-blue font-medium">
              Características
            </a>
            <a href="#como-funciona" className="text-gray-700 hover:text-aqua-blue font-medium">
              Cómo Funciona
            </a>
            <a href="#beneficios" className="text-gray-700 hover:text-aqua-blue font-medium">
              Beneficios
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-aqua-blue font-medium">
              Contacto
            </a>
          </nav>

          <div className="hidden md:block">
            <Button variant="default" className="bg-aqua-blue hover:bg-aqua-blue/90">
              Solicitar Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-aqua-blue"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white p-4 mt-2 rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#caracteristicas" 
                className="text-gray-700 hover:text-aqua-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Características
              </a>
              <a 
                href="#como-funciona" 
                className="text-gray-700 hover:text-aqua-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Cómo Funciona
              </a>
              <a 
                href="#beneficios" 
                className="text-gray-700 hover:text-aqua-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Beneficios
              </a>
              <a 
                href="#contacto" 
                className="text-gray-700 hover:text-aqua-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <Button 
                variant="default" 
                className="bg-aqua-blue hover:bg-aqua-blue/90"
                onClick={() => setIsMenuOpen(false)}
              >
                Solicitar Demo
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
