import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';
import { navItems } from '../App';

function ConstitucionSociedadesArticle() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://res.cloudinary.com/dllnci5vy/image/upload/v1746467151/Logo_oficial_1_amvktw.jpg"
                  alt="SJscuti Logo" 
                  className="w-12 h-12"
                />
                <span className="ml-2 text-xl font-bold">SJscuti</span>
              </Link>
              <div className="hidden md:flex space-x-6">
                {navItems.map((item, index) => (
                  <Link 
                    key={index}
                    to={item.href} 
                    className="flex items-center text-gray-700 hover:text-blue-600 transition duration-300"
                  >
                    {item.icon}
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/#contacto"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Cotizar Ahora
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-20 flex-grow">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al blog
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/dllnci5vy/image/upload/v1746559032/Gemini_Generated_Image_othlwzothlwzothl_xhur40.jpg"
              alt="Constitución de Sociedades"
              className="w-full h-96 object-cover"
            />
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-6">¿Por qué externalizar la constitución de sociedades?</h1>
              
              {expanded ? (
                <div className="text-gray-700 space-y-6">
                  <p className="mb-8">
                    La constitución de una sociedad es uno de los pasos más importantes en la creación de una empresa. Sin embargo, este proceso puede ser complejo y requerir una atención especial a los detalles legales, fiscales y administrativos. Externalizar este servicio puede ofrecerte numerosas ventajas, desde el ahorro de tiempo y recursos hasta la garantía de cumplimiento normativo. A continuación, te explicamos por qué externalizar la constitución de sociedades es una excelente opción para tu empresa.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h2 className="text-xl font-bold mb-3">1. Cumplimiento Legal y Normativo</h2>
                      <p>
                        La constitución de una sociedad implica cumplir con diversas leyes y regulaciones locales que varían según el país y la industria. Externalizar este servicio a expertos garantiza que el proceso de constitución cumpla con todas las normativas legales vigentes. Los proveedores especializados conocen las regulaciones y los requisitos específicos, lo que minimiza el riesgo de cometer errores que podrían resultar en sanciones legales o problemas futuros.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-3">2. Ahorro de Tiempo y Recursos</h2>
                      <p>
                        El proceso de constitución de una sociedad incluye varias etapas: la elaboración de los estatutos sociales, la elección del tipo de sociedad, la obtención de registros fiscales, la formalización ante notarios y mucho más. Estos procedimientos pueden ser largos y tediosos si se realizan internamente. Al externalizar este servicio, tu empresa ahorra tiempo y recursos valiosos que pueden destinarse a áreas más estratégicas del negocio. Además, te aseguras de que el proceso se realice de forma ágil y eficiente.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-3">3. Asesoramiento Personalizado</h2>
                      <p>
                        Al externalizar la constitución de sociedades, recibes asesoramiento especializado y personalizado en función de tus necesidades empresariales. Un experto en la materia te ayudará a elegir el tipo de sociedad más adecuado (S.A., S.R.L., cooperativa, etc.), a definir los estatutos sociales y a realizar todas las formalidades necesarias para que tu sociedad esté legalmente constituida y operativa. Este acompañamiento te permitirá tomar decisiones informadas desde el inicio.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-3">4. Reducción de Riesgos Legales</h2>
                      <p>
                        El incumplimiento de los procedimientos legales y fiscales en la constitución de una sociedad puede generar riesgos que afecten la estabilidad de la empresa. Al contar con un experto que se encargue del proceso, reduces significativamente los riesgos asociados con errores en la documentación o en los trámites. Los profesionales especializados aseguran que todo se realice conforme a las leyes, evitando problemas legales a largo plazo.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-3">5. Gestión de Trámites y Documentación</h2>
                      <p>
                        La constitución de una sociedad implica una gran cantidad de trámites administrativos, como la obtención de registros ante las autoridades fiscales, la redacción de los estatutos sociales y la inscripción en el registro mercantil. Externalizar este servicio significa que los expertos en el tema se encargarán de gestionar toda la documentación necesaria, lo que te libera de la carga administrativa y permite que puedas concentrarte en el crecimiento de tu negocio.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-3">6. Optimización Fiscal y Estructuración Empresarial</h2>
                      <p>
                        Una de las ventajas más importantes de externalizar la constitución de sociedades es la posibilidad de obtener una estructura fiscalmente eficiente. Los expertos en la materia pueden ayudarte a elegir la estructura legal más adecuada para tu empresa, teniendo en cuenta las implicaciones fiscales, el tipo de actividad y los objetivos a largo plazo. Esto puede optimizar la carga tributaria y facilitar la gestión fiscal desde el inicio de la actividad empresarial.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-3">7. Acompañamiento en el Registro y Formalización</h2>
                      <p>
                        El proceso de constitución de una sociedad no termina con la creación de los documentos legales. Es necesario realizar la inscripción en los registros correspondientes (mercantil, fiscal, etc.), lo que puede ser un proceso largo y complicado si no se conoce bien el procedimiento. Externalizar este servicio garantiza que todos los trámites de registro y formalización se realicen correctamente, de manera que la sociedad esté legalmente constituida y lista para operar.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold mb-3">8. Evita Errores Costosos</h2>
                      <p>
                        Un error en la constitución de una sociedad, ya sea por no cumplir con los requisitos legales o por no redactar correctamente los documentos, puede resultar en costos adicionales para corregirlo. Externalizar este servicio a expertos con experiencia en la constitución de sociedades te permite evitar errores que podrían ser costosos, tanto en términos de dinero como de tiempo, además de los posibles problemas legales que podrían surgir.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setExpanded(false)}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 mt-6"
                  >
                    Mostrar menos
                    <ChevronRight className="w-4 h-4 ml-1 transform rotate-90" />
                  </button>
                </div>
              ) : (
                <div>
                  <p className="text-gray-700 mb-4">
                    La constitución de una sociedad es uno de los pasos más importantes en la creación de una empresa...
                  </p>
                  <button
                    onClick={() => setExpanded(true)}
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
      </div>

      <Footer />
    </div>
  );
}

export default ConstitucionSociedadesArticle;