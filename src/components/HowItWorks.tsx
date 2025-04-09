
import { Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Registra Clientes y Vehículos",
    description: "Crea una base de datos completa con todos los datos de tus clientes y sus vehículos, incluyendo historial de servicios.",
    highlights: [
      "Búsqueda por placa",
      "Datos de contacto",
      "Detalles del vehículo",
      "Notas adicionales"
    ]
  },
  {
    number: "02",
    title: "Gestiona Servicios",
    description: "Registra nuevos servicios, asigna responsables y mantén un seguimiento detallado de cada operación.",
    highlights: [
      "Tipos de lavado",
      "Observaciones",
      "Asignación de personal",
      "Seguimiento de pagos"
    ]
  },
  {
    number: "03",
    title: "Analiza Resultados",
    description: "Visualiza reportes financieros y de calidad para tomar decisiones basadas en datos reales de tu negocio.",
    highlights: [
      "Ingresos diarios/mensuales",
      "Satisfacción del cliente",
      "Rendimiento de empleados",
      "Servicios más solicitados"
    ]
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-gray-50 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cómo funciona AquaRide
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Un proceso simple y efectivo para mejorar la gestión de tu negocio
          </p>
        </div>

        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="absolute -top-5 left-8 bg-aqua-blue text-white text-xl font-bold py-2 px-4 rounded-md">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {step.description}
              </p>
              <ul className="space-y-2">
                {step.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-aqua-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
