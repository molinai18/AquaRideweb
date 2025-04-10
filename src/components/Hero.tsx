
import { Button } from "@/components/ui/button";
import { ChevronRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-white via-blue-50 to-green-50 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="text-aqua-blue">Control inteligente</span> para tu lavadero
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Optimiza la gestión de tu lavadero de autos con nuestra plataforma completa. Registra servicios, clientes, vehículos y más.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-aqua-blue hover:bg-aqua-blue/90 text-white font-medium px-6"
              >
                <Download className="mr-2 h-5 w-5" />
                Descargar App
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-aqua-green text-aqua-green hover:bg-aqua-green/10 font-medium px-6"
              >
                Ver Demostración
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 md:w-80 md:h-80 bg-gradient-to-br from-aqua-blue to-aqua-green rounded-full absolute blur-2xl opacity-20 animate-pulse" />
              <div className="relative animate-float">
                <img
                  src="/lovable-uploads/f78167a2-c4dc-4648-88f6-be0a85222089.png"
                  alt="AquaRide Logo"
                  className="w-64 md:w-96 z-10 relative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
