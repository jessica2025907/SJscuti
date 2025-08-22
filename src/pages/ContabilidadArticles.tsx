import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';

interface ContabilidadArticlesProps {
  onOpenContractModal?: () => void;
}

function ContabilidadArticles({ onOpenContractModal }: ContabilidadArticlesProps = {}) {
  const [expandedArticle, setExpandedArticle] = useState<number | null>(null);

  const articles = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/c_fill,h_400,w_600/v1746483618/freepik__the-style-is-candid-image-photography-with-natural__63821_p9onx4.jpg',
      title: '¿Por qué externalizar el servicio de registro de compra y venta?',
      description: 'El registro de compras y ventas es un proceso esencial en la gestión administrativa y contable de cualquier empresa.',
      content: [
        {
          title: '1. Control y Organización',
          text: 'Un registro detallado y organizado de todas las transacciones comerciales es fundamental para mantener un control efectivo de las finanzas de la empresa. Los expertos en el área utilizan sistemas especializados y metodologías probadas para garantizar un registro preciso y ordenado.'
        },
        {
          title: '2. Cumplimiento Tributario',
          text: 'El registro correcto de compras y ventas es esencial para el cumplimiento de las obligaciones tributarias. Los profesionales especializados aseguran que todos los documentos se registren de acuerdo con las normativas vigentes, evitando problemas con las autoridades fiscales.'
        },
        {
          title: '3. Ahorro de Tiempo y Recursos',
          text: 'La gestión interna del registro de compras y ventas requiere dedicación significativa de tiempo y recursos. Al externalizar este servicio, el personal interno puede enfocarse en actividades más estratégicas para el negocio.'
        },
        {
          title: '4. Precisión y Confiabilidad',
          text: 'Los proveedores especializados utilizan sistemas y procesos probados que minimizan errores en el registro de transacciones, asegurando la precisión y confiabilidad de la información financiera.'
        },
        {
          title: '5. Análisis y Reportes',
          text: 'Los expertos no solo registran las transacciones, sino que también proporcionan análisis y reportes detallados que ayudan a la toma de decisiones empresariales.'
        },
        {
          title: '6. Gestión de Documentación',
          text: 'La externalización incluye la organización y archivo de toda la documentación relacionada con compras y ventas, asegurando su disponibilidad cuando sea necesario.'
        },
        {
          title: '7. Actualización Constante',
          text: 'Los profesionales se mantienen actualizados sobre cambios en la normativa y requisitos legales, adaptando los procesos según sea necesario.'
        },
        {
          title: '8. Soporte Especializado',
          text: 'Acceso a asesoría experta para resolver dudas y manejar situaciones especiales relacionadas con el registro de transacciones comerciales.'
        }
      ]
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/c_fill,h_400,w_600/v1746551827/Gemini_Generated_Image_y1se3ly1se3ly1se_tvta9h.jpg',
      title: 'Balance General: La importancia de mantener un control financiero efectivo',
      description: 'El balance general es una herramienta fundamental para entender la situación financiera de tu empresa.',
      content: [
        {
          title: '1. Visión Clara de la Situación Financiera',
          text: 'El balance general proporciona una imagen precisa de la posición financiera de la empresa, incluyendo activos, pasivos y patrimonio. Esta visión global es esencial para la toma de decisiones estratégicas.'
        },
        {
          title: '2. Toma de Decisiones Informada',
          text: 'Con un balance general actualizado, los directivos pueden tomar decisiones basadas en información precisa sobre la salud financiera de la empresa.'
        },
        {
          title: '3. Control de Recursos',
          text: 'Permite monitorear efectivamente los recursos de la empresa, incluyendo activos fijos, inventarios y cuentas por cobrar.'
        },
        {
          title: '4. Cumplimiento Normativo',
          text: 'El balance general es un requisito legal y fiscal importante que debe mantenerse actualizado para cumplir con las regulaciones.'
        },
        {
          title: '5. Análisis de Tendencias',
          text: 'Facilita el análisis de tendencias financieras a lo largo del tiempo, permitiendo identificar áreas de mejora y oportunidades.'
        },
        {
          title: '6. Evaluación de Riesgos',
          text: 'Ayuda a identificar y evaluar riesgos financieros potenciales, permitiendo tomar medidas preventivas.'
        },
        {
          title: '7. Relaciones con Stakeholders',
          text: 'Un balance general bien presentado es crucial para mantener relaciones con bancos, inversores y otros stakeholders.'
        },
        {
          title: '8. Planificación Estratégica',
          text: 'Sirve como base para la planificación financiera y estratégica a largo plazo de la empresa.'
        }
      ]
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/c_fill,h_400,w_600/v1746631174/freepik__the-style-is-candid-image-photography-with-natural__76573_ssqbzs.png',
      title: '¿Por qué externalizar el servicio de informes financieros?',
      description: 'Los informes financieros son herramientas cruciales para la toma de decisiones estratégicas dentro de cualquier empresa.',
      content: [
        {
          title: '1. Experiencia Profesional',
          text: 'Los expertos en informes financieros tienen el conocimiento y la experiencia necesarios para producir reportes precisos y significativos.'
        },
        {
          title: '2. Ahorro de Tiempo y Recursos',
          text: 'La preparación de informes financieros requiere tiempo y conocimiento especializado. La externalización libera recursos internos para otras actividades.'
        },
        {
          title: '3. Precisión y Confiabilidad',
          text: 'Los profesionales utilizan metodologías probadas y herramientas especializadas para garantizar la exactitud de los informes.'
        },
        {
          title: '4. Cumplimiento de Estándares',
          text: 'Los expertos aseguran que los informes cumplan con todos los estándares contables y requisitos regulatorios aplicables.'
        },
        {
          title: '5. Análisis Detallado',
          text: 'Los informes incluyen análisis profundos y recomendaciones basadas en la experiencia profesional.'
        },
        {
          title: '6. Perspectiva Objetiva',
          text: 'Un proveedor externo puede ofrecer una visión imparcial y objetiva de la situación financiera de la empresa.'
        },
        {
          title: '7. Acceso a Tecnología Avanzada',
          text: 'Los proveedores utilizan software y herramientas especializadas que podrían ser costosas de adquirir internamente.'
        },
        {
          title: '8. Soporte Continuo',
          text: 'Acceso a asesoramiento experto y soporte continuo para la interpretación y uso de los informes financieros.'
        }
      ]
    },
    {
      id: 4,
      image: 'https://res.cloudinary.com/dllnci5vy/image/upload/c_fill,h_400,w_600/v1746630023/Gemini_Generated_Image_thjyztthjyztthjy_g2wsni.jpg',
      title: '¿Por qué externalizar el servicio de impuestos mensuales y anuales?',
      description: 'La gestión de impuestos es una tarea crítica que requiere conocimiento especializado y actualización constante.',
      content: [
        {
          title: '1. Cumplimiento Normativo',
          text: 'Los expertos en impuestos se mantienen actualizados sobre los cambios en la legislación fiscal y aseguran el cumplimiento de todas las obligaciones tributarias.'
        },
        {
          title: '2. Optimización Fiscal',
          text: 'Los profesionales pueden identificar oportunidades de ahorro fiscal y aplicar estrategias legales para optimizar la carga tributaria.'
        },
        {
          title: '3. Prevención de Errores',
          text: 'La experiencia y conocimiento especializado ayudan a evitar errores costosos en las declaraciones de impuestos.'
        },
        {
          title: '4. Ahorro de Tiempo',
          text: 'La preparación y presentación de declaraciones de impuestos requiere tiempo significativo que puede dedicarse a otras actividades del negocio.'
        },
        {
          title: '5. Gestión de Auditorías',
          text: 'Los expertos pueden manejar efectivamente cualquier auditoría o revisión por parte de las autoridades fiscales.'
        },
        {
          title: '6. Planificación Tributaria',
          text: 'Desarrollo de estrategias para optimizar la posición fiscal de la empresa a corto y largo plazo.'
        },
        {
          title: '7. Documentación Ordenada',
          text: 'Mantenimiento de registros y documentación tributaria organizada y accesible cuando sea necesario.'
        },
        {
          title: '8. Asesoría Continua',
          text: 'Acceso a consultoría especializada para resolver dudas y tomar decisiones informadas en materia fiscal.'
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

        <h1 className="text-3xl font-bold mb-12">Contabilidad</h1>

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
                        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                          <p className="text-gray-700 text-lg mb-4">¿Necesitas ayuda con la Contabilidad?</p>
                          <button
                            onClick={onOpenContractModal}
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                          >
                            Cotizar Ahora
                          </button>
                        </div>
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

export default ContabilidadArticles;