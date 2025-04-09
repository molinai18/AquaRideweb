
import { 
  BarChart3, 
  Car, 
  PlusCircle, 
  History, 
  DollarSign, 
  Star, 
  ListTodo, 
  Settings
} from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-10 w-10 text-aqua-blue" />,
    title: "Dashboard Principal",
    description: "Visualiza ingresos diarios/mensuales, servicios realizados y lista de carros atendidos hoy.",
  },
  {
    icon: <Car className="h-10 w-10 text-aqua-blue" />,
    title: "Clientes y Vehículos",
    description: "Gestiona clientes con datos detallados e historial de servicios por vehículo.",
  },
  {
    icon: <PlusCircle className="h-10 w-10 text-aqua-blue" />,
    title: "Nuevo Servicio",
    description: "Registra nuevos servicios con detalles de lavado, observaciones y método de pago.",
  },
  {
    icon: <History className="h-10 w-10 text-aqua-blue" />,
    title: "Historial de Servicios",
    description: "Accede al historial completo de todos los servicios realizados.",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-aqua-blue" />,
    title: "Reportes Financieros",
    description: "Genera reportes detallados sobre tus ingresos y operaciones financieras.",
  },
  {
    icon: <Star className="h-10 w-10 text-aqua-blue" />,
    title: "Reportes de Calidad",
    description: "Analiza la satisfacción de tus clientes y la calidad de tus servicios.",
  },
  {
    icon: <ListTodo className="h-10 w-10 text-aqua-blue" />,
    title: "Gestión de Precios",
    description: "Administra y actualiza los precios de tus servicios fácilmente.",
  },
  {
    icon: <Settings className="h-10 w-10 text-aqua-blue" />,
    title: "Configuración",
    description: "Personaliza la aplicación según las necesidades de tu negocio.",
  },
];

const Features = () => {
  return (
    <section id="caracteristicas" className="py-16 md:py-24 bg-white font-montserrat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Todas las herramientas que necesitas
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            AquaRide te ofrece una suite completa de funcionalidades para optimizar la gestión de tu lavadero de autos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4 bg-aqua-light inline-flex p-3 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
