
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-aqua-blue to-aqua-green font-montserrat">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-3xl mx-auto">
          Lleva tu lavadero al siguiente nivel con AquaRide
        </h2>
        
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Comienza hoy mismo a optimizar la gestión de tu negocio con nuestra plataforma intuitiva y completa.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="default"
            className="bg-white text-aqua-blue hover:bg-white/90 font-medium px-8"
          >
            Solicitar Demo Gratis
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white/10 font-medium px-8"
          >
            Contáctanos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
