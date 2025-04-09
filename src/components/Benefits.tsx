
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  TrendingUp, 
  Users, 
  Shield 
} from "lucide-react";

const benefits = [
  {
    icon: <Clock className="h-8 w-8 text-aqua-green" />,
    title: "Ahorro de Tiempo",
    description: "Automatiza procesos manuales y reduce el tiempo dedicado a tareas administrativas.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-aqua-green" />,
    title: "Mayor Rentabilidad",
    description: "Optimiza recursos, controla gastos y aumenta la eficiencia operativa.",
  },
  {
    icon: <Users className="h-8 w-8 text-aqua-green" />,
    title: "Fidelización de Clientes",
    description: "Mejora la experiencia del cliente con un servicio más personalizado y eficiente.",
  },
  {
    icon: <Shield className="h-8 w-8 text-aqua-green" />,
    title: "Control Total",
    description: "Mantén el control de todos los aspectos de tu negocio desde una sola plataforma.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-white font-montserrat">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Beneficios que <span className="text-aqua-blue">transformarán</span> tu negocio
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                AquaRide no solo te ayuda a gestionar tu lavadero de autos, sino que transforma completamente la manera en que operas tu negocio, mejorando la eficiencia y la rentabilidad.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-4 p-2 bg-aqua-green/10 rounded-lg">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                className="bg-aqua-green hover:bg-aqua-green/90 text-white font-medium px-6"
              >
                Descubre Más Beneficios
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-aqua-blue to-aqua-green opacity-20 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Car wash service" 
                className="w-full h-auto object-cover z-10 relative transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
