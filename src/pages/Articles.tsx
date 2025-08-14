import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';

function Articles() {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const articles = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/v1746561986/freepik__the-style-is-candid-image-photography-with-natural__22476_pjjisl.png',
      title: 'Cómo elegir el mejor servicio de externalización para tu empresa',
      description: 'Guía completa para seleccionar el servicio de externalización que mejor se adapte a las necesidades de tu negocio.',
      content: [
        {
          title: '1. Evalúa las Necesidades de tu Empresa',
          text: 'Antes de comenzar la búsqueda de un proveedor de servicios, es fundamental realizar un análisis detallado de las necesidades específicas de tu empresa. Identifica qué áreas podrían beneficiarse más de la externalización y establece objetivos claros para cada una.'
        },
        {
          title: '2. Considera la Experiencia y Especialización',
          text: 'Busca proveedores que tengan experiencia comprobada en tu industria y que se especialicen en los servicios específicos que necesitas. La experiencia en tu sector puede marcar la diferencia en la calidad del servicio.'
        },
        {
          title: '3. Evalúa la Tecnología y Herramientas',
          text: 'Los proveedores de servicios deben contar con tecnología actualizada y herramientas modernas que garanticen la eficiencia y calidad del servicio. Verifica qué sistemas utilizan y cómo estos pueden integrarse con tus procesos actuales.'
        },
        {
          title: '4. Analiza la Estructura de Costos',
          text: 'Comprende completamente la estructura de costos del servicio. Además del precio base, considera costos adicionales, términos de pago y si el servicio ofrece un buen retorno de inversión para tu empresa.'
        },
        {
          title: '5. Verifica las Referencias y Reputación',
          text: 'Investiga la reputación del proveedor en el mercado. Busca referencias de otros clientes, lee testimonios y, si es posible, contacta a empresas que ya utilicen sus servicios.'
        },
        {
          title: '6. Evalúa la Comunicación y Servicio al Cliente',
          text: 'La comunicación efectiva es crucial en cualquier relación de externalización. Asegúrate de que el proveedor tenga canales de comunicación claros y un buen servicio de atención al cliente.'
        },
        {
          title: '7. Considera la Escalabilidad',
          text: 'Elige un proveedor que pueda crecer contigo. El servicio debe ser capaz de adaptarse a medida que tu empresa crece y tus necesidades cambian.'
        },
        {
          title: '8. Revisa las Políticas de Seguridad',
          text: 'La seguridad de la información es crucial. Verifica qué medidas de seguridad implementa el proveedor para proteger los datos de tu empresa.'
        }
      ]
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/c_fill,h_400,w_600/v1746561971/freepik__the-style-is-candid-image-photography-with-natural__22475_ddiugd.png',
      title: 'Beneficios de la transformación digital en las empresas modernas',
      description: 'Descubre cómo la transformación digital puede impulsar el crecimiento y la eficiencia de tu empresa.',
      content: [
        {
          title: '1. Mejora de la Eficiencia Operativa',
          text: 'La digitalización de procesos permite automatizar tareas repetitivas, reducir errores y optimizar el tiempo del personal. Esto se traduce en una mayor productividad y eficiencia en todas las áreas de la empresa.'
        },
        {
          title: '2. Mejor Experiencia del Cliente',
          text: 'Las herramientas digitales permiten ofrecer un servicio más personalizado y accesible. Los clientes pueden interactuar con la empresa a través de múltiples canales, obtener respuestas rápidas y disfrutar de una experiencia más satisfactoria.'
        },
        {
          title: '3. Toma de Decisiones Basada en Datos',
          text: 'La transformación digital facilita la recopilación y análisis de datos, permitiendo tomar decisiones más informadas y estratégicas. Los datos proporcionan insights valiosos sobre el comportamiento de los clientes, tendencias del mercado y oportunidades de mejora.'
        },
        {
          title: '4. Mayor Competitividad',
          text: 'Las empresas digitalizadas están mejor posicionadas para competir en el mercado actual. Pueden adaptarse más rápidamente a los cambios, innovar en sus productos y servicios, y responder mejor a las necesidades de los clientes.'
        },
        {
          title: '5. Reducción de Costos Operativos',
          text: 'La automatización y optimización de procesos mediante herramientas digitales puede resultar en importantes ahorros en costos operativos, mejorando la rentabilidad de la empresa.'
        },
        {
          title: '6. Mejora en la Colaboración',
          text: 'Las herramientas digitales facilitan la colaboración entre equipos, incluso en entornos remotos. Esto mejora la comunicación interna y externa, aumentando la productividad y la satisfacción de los empleados.'
        },
        {
          title: '7. Escalabilidad y Flexibilidad',
          text: 'La infraestructura digital permite a las empresas escalar sus operaciones de manera más eficiente y adaptarse rápidamente a las cambiantes condiciones del mercado.'
        },
        {
          title: '8. Innovación Continua',
          text: 'La transformación digital fomenta una cultura de innovación continua, permitiendo a las empresas mantenerse al día con las últimas tendencias y tecnologías.'
        }
      ]
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/c_fill,h_400,w_600/v1746563234/Gemini_Generated_Image_tvn6yltvn6yltvn6_d3p8by.jpg',
      title: 'Estrategias para optimizar la gestión empresarial',
      description: 'Aprende las mejores prácticas para mejorar la eficiencia y productividad en la gestión de tu empresa.',
      content: [
        {
          title: '1. Implementación de Sistemas Integrados',
          text: 'Utiliza herramientas y software que integren diferentes áreas de la empresa (finanzas, recursos humanos, operaciones, etc.) para tener una visión completa y centralizada de todos los procesos.'
        },
        {
          title: '2. Desarrollo del Capital Humano',
          text: 'Invierte en la formación y desarrollo de tu equipo. Un personal bien capacitado y motivado es clave para la eficiencia operativa y el crecimiento de la empresa.'
        },
        {
          title: '3. Optimización de Procesos',
          text: 'Identifica y elimina cuellos de botella, automatiza tareas repetitivas y establece procedimientos claros para cada área de la empresa.'
        },
        {
          title: '4. Gestión Financiera Efectiva',
          text: 'Implementa un sistema robusto de control financiero, incluyendo presupuestos, proyecciones y análisis regular de indicadores clave de rendimiento (KPIs).'
        },
        {
          title: '5. Enfoque en el Cliente',
          text: 'Desarrolla estrategias centradas en el cliente, mejorando constantemente la calidad del servicio y la experiencia del usuario.'
        },
        {
          title: '6. Planificación Estratégica',
          text: 'Establece objetivos claros a corto y largo plazo, y desarrolla planes de acción detallados para alcanzarlos.'
        },
        {
          title: '7. Medición y Análisis',
          text: 'Implementa sistemas de medición y seguimiento de resultados para evaluar el desempeño y realizar ajustes cuando sea necesario.'
        },
        {
          title: '8. Mejora Continua',
          text: 'Fomenta una cultura de innovación y mejora continua, adaptándote constantemente a las nuevas tendencias y necesidades del mercado.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al blog
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-12">Artículos</h1>

        <div className="grid gap-12">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
                  {expandedArticle === article.id ? (
                    <div>
                      <p className="text-gray-600 mb-6">{article.description}</p>
                      <div className="space-y-6">
                        {article.content.map((section, index) => (
                          <div key={index}>
                            <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                            <p className="text-gray-600">{section.text}</p>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => setExpandedArticle(null)}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 mt-6"
                      >
                        Mostrar menos
                        <ChevronRight className="w-4 h-4 ml-1 transform rotate-90" />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p className="text-gray-600 mb-6">{article.description}</p>
                      <button
                        onClick={() => setExpandedArticle(article.id)}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
                      >
                        Leer más
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articles;