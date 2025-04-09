
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Propietario, AutoSpa Express",
    content: "Desde que implementamos AquaRide, hemos aumentado nuestra eficiencia en un 40%. La gestión de clientes y el seguimiento de servicios es ahora mucho más sencillo.",
    rating: 5
  },
  {
    name: "María González",
    role: "Gerente, Clean Cars",
    content: "Los reportes financieros y de calidad nos han permitido identificar áreas de mejora que no habíamos notado antes. Totalmente recomendado para cualquier lavadero.",
    rating: 5
  },
  {
    name: "Javier López",
    role: "Dueño, Premium Wash",
    content: "La facilidad para registrar nuevos servicios y mantener un historial por vehículo ha mejorado significativamente nuestra relación con los clientes recurrentes.",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 font-montserrat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo que nuestros clientes dicen
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Descubre cómo AquaRide ha transformado la gestión de lavaderos de autos en toda la región
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-300" />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-6 flex-grow">
                "{testimonial.content}"
              </p>
              
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
