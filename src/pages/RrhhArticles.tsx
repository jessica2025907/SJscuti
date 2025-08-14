import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';

function RrhhArticles() {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const articles = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/c_fill,h_400,w_600/v1746482762/1746479545453.png_image_xgiskx.png',
      title: '¿Por qué externalizar la contratación de personal?',
      description: 'La contratación de personal es un proceso crucial para cualquier empresa, pero también puede ser complejo y consumir muchos recursos si no se maneja adecuadamente.',
      content: [
        {
          title: '1. Acceso a Profesionales Especializados',
          text: 'Los proveedores de servicios de contratación cuentan con equipos especializados en reclutamiento y selección, con amplia experiencia en diferentes industrias y perfiles. Esto garantiza un proceso más eficiente y profesional, aumentando las probabilidades de encontrar al candidato ideal para cada posición.'
        },
        {
          title: '2. Optimización de Tiempos y Recursos',
          text: 'La contratación de personal implica múltiples etapas que consumen tiempo y recursos: publicación de ofertas, filtrado de CV, entrevistas, verificación de referencias, etc. Al externalizar este servicio, liberas a tu equipo interno de estas tareas, permitiéndoles enfocarse en actividades más estratégicas.'
        },
        {
          title: '3. Cumplimiento Legal y Normativo',
          text: 'La contratación de personal está sujeta a diversas regulaciones laborales que deben cumplirse rigurosamente. Los expertos en contratación están actualizados en la normativa vigente y aseguran que todo el proceso cumpla con los requisitos legales, minimizando riesgos de incumplimiento.'
        },
        {
          title: '4. Reducción de Costos Operativos',
          text: 'Aunque externalizar tiene un costo, a largo plazo puede resultar más económico que mantener un departamento interno de contratación. Se eliminan gastos como plataformas de reclutamiento, herramientas de evaluación, capacitación de personal de RRHH, entre otros.'
        },
        {
          title: '5. Acceso a Herramientas Especializadas',
          text: 'Los proveedores de servicios de contratación utilizan herramientas y tecnologías especializadas para el reclutamiento y evaluación de candidatos. Esto incluye bases de datos de talentos, pruebas psicométricas, evaluaciones técnicas y otras herramientas que mejoran la calidad del proceso.'
        },
        {
          title: '6. Mayor Alcance en la Búsqueda',
          text: 'Los servicios especializados tienen acceso a una red más amplia de candidatos, incluyendo profesionales pasivos que no están buscando activamente trabajo. Esto aumenta significativamente el pool de talentos disponibles para tu empresa.'
        },
        {
          title: '7. Proceso Estructurado y Profesional',
          text: 'La externalización garantiza un proceso de contratación estructurado y profesional, con metodologías probadas y mejores prácticas de la industria. Esto mejora la experiencia del candidato y fortalece la imagen de tu empresa en el mercado laboral.'
        },
        {
          title: '8. Garantía de Calidad',
          text: 'Muchos proveedores ofrecen garantías sobre sus servicios, asegurando la calidad de los candidatos seleccionados y proporcionando respaldo en caso de que la contratación no resulte exitosa durante un período determinado.'
        }
      ]
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/c_fill,h_400,w_600/v1746482744/1746479711080.png_image_mzepoa.png',
      title: '¿Por qué externalizar el servicio de reclutamiento y selección de personal?',
      description: 'El proceso de reclutamiento y selección es fundamental para asegurar que una empresa cuente con los mejores talentos.',
      content: [
        {
          title: '1. Experiencia y Especialización',
          text: 'Los proveedores de servicios de reclutamiento cuentan con equipos especializados y experimentados en la identificación y evaluación de talentos. Su conocimiento del mercado laboral y las mejores prácticas de reclutamiento aseguran un proceso más efectivo y profesional.'
        },
        {
          title: '2. Acceso a una Red Amplia de Candidatos',
          text: 'Los servicios especializados tienen acceso a bases de datos extensas y redes profesionales que permiten llegar a un mayor número de candidatos potenciales, incluyendo aquellos que no están buscando activamente trabajo.'
        },
        {
          title: '3. Metodología Probada y Estructurada',
          text: 'Los expertos en reclutamiento utilizan metodologías probadas y estructuradas para la evaluación de candidatos, incluyendo entrevistas por competencias, pruebas psicométricas y evaluaciones técnicas que aseguran una selección más objetiva y precisa.'
        },
        {
          title: '4. Optimización de Tiempos y Recursos',
          text: 'El proceso de reclutamiento puede ser largo y consumir muchos recursos internos. La externalización permite liberar a tu equipo de estas tareas, permitiéndoles enfocarse en actividades más estratégicas para el negocio.'
        },
        {
          title: '5. Herramientas Especializadas',
          text: 'Los proveedores de servicios utilizan herramientas y tecnologías especializadas para el reclutamiento y evaluación de candidatos, lo que mejora la eficiencia y precisión del proceso de selección.'
        },
        {
          title: '6. Objetividad en la Selección',
          text: 'Al contar con un equipo externo, se asegura una evaluación más objetiva de los candidatos, libre de sesgos internos o preferencias personales que podrían afectar la decisión de contratación.'
        },
        {
          title: '7. Garantía de Calidad',
          text: 'Muchos proveedores ofrecen garantías sobre sus servicios, asegurando la calidad de los candidatos seleccionados y proporcionando respaldo en caso de que la contratación no resulte exitosa.'
        },
        {
          title: '8. Fortalecimiento de la Marca Empleadora',
          text: 'Un proceso de reclutamiento profesional y bien estructurado mejora la imagen de tu empresa en el mercado laboral, atrayendo mejores candidatos y fortaleciendo tu marca como empleador.'
        }
      ]
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/c_fill,h_400,w_600/v1746484124/Gemini_Generated_Image_p3emv8p3emv8p3em_bnh8if.jpg',
      title: '¿Por qué externalizar el servicio de remuneraciones?',
      description: 'La gestión de remuneraciones es un proceso crítico que requiere precisión, conocimiento especializado y actualización constante.',
      content: [
        {
          title: '1. Cumplimiento Normativo y Legal',
          text: 'La gestión de remuneraciones está sujeta a constantes cambios en la legislación laboral y tributaria. Los expertos externos se mantienen actualizados y aseguran el cumplimiento de todas las normativas vigentes.'
        },
        {
          title: '2. Precisión y Confiabilidad',
          text: 'Los proveedores especializados utilizan sistemas y procesos probados que minimizan errores en el cálculo de sueldos, beneficios y deducciones, asegurando pagos precisos y puntuales.'
        },
        {
          title: '3. Ahorro de Tiempo y Recursos',
          text: 'La gestión interna de remuneraciones requiere dedicación significativa de tiempo y recursos. La externalización libera a tu equipo para enfocarse en actividades más estratégicas.'
        },
        {
          title: '4. Confidencialidad de la Información',
          text: 'Los proveedores profesionales mantienen altos estándares de seguridad y confidencialidad en el manejo de información sensible sobre remuneraciones y datos personales.'
        },
        {
          title: '5. Acceso a Tecnología Especializada',
          text: 'Los servicios externos utilizan software y herramientas especializadas para la gestión de nómina, proporcionando mayor eficiencia y precisión en los procesos.'
        },
        {
          title: '6. Soporte Experto Continuo',
          text: 'Cuentas con asesoría especializada para resolver dudas, manejar casos especiales y adaptarte a cambios en la legislación laboral.'
        },
        {
          title: '7. Reportes y Análisis Detallados',
          text: 'Recibes informes detallados y análisis de costos laborales que facilitan la toma de decisiones estratégicas sobre compensaciones y beneficios.'
        },
        {
          title: '8. Reducción de Riesgos',
          text: 'La externalización minimiza riesgos de errores en pagos, incumplimientos legales y problemas con autoridades fiscales o laborales.'
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

        <h1 className="text-3xl font-bold mb-12">Recursos Humanos</h1>

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

export default RrhhArticles;